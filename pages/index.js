import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { VectorMap } from "@south-paw/react-vector-maps";
import world from "./maps/world.json";
import styled from "styled-components";

const Map = styled.div`
  svg {
    stroke: #fff 2px;

    // All layers are just path elements
    path {
      fill: #a82b2b;
      cursor: pointer;
      outline: none;

      // When a layer is hovered
      &:hover {
        fill: rgba(168, 43, 43, 0.83);
      }

      // When a layer is focused.
      &:focus {
        fill: rgba(168, 43, 43, 0.6);
      }

      // When a layer is 'checked' (via checkedLayers prop).
      &[aria-checked="true"] {
        fill: rgba(56, 43, 168, 1);
      }

      // When a layer is 'selected' (via currentLayers prop).
      &[aria-current="true"] {
        fill: rgba(30, 230, 43, 0.83);
      }

      // You can also highlight a specific layer via it's id
      &[id="nz-can"] {
        fill: rgba(56, 43, 168, 0.6);
      }
    }
  }
`;

const Stroke = styled.svg`
  height: 666px;
  width: 999px;
  position: absolute;
  pointer-events: none;

  path {
    stroke-dasharray: ${({ length }) => +length + "px"};
    stroke-dashoffset: ${({ length }) => +length + "px"};
    animation: dash 1s linear forwards;
    animation-iteration-count: infinite;
  }

  @keyframes dash {
    from {
      stroke-dashoffset: ${({ length }) => +length + "px"};
    }
    to {
      stroke-dashoffset: ${({ length }) => -+length + "px"};
    }
  }
`;

export default function Home() {
  console.count("rerenders Page ");
  const [length, setLength] = useState(0);
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});

  useEffect(() => {
    var path = document.getElementById("strokepath");
    var length = path.getTotalLength();
    console.log(length);
    setLength(length);

    // bcenter of origin
    const originC = document.getElementById("de").getBBox();
    console.log(originC);
    const xCenter = originC.x + originC.width / 2;
    const yCenter = originC.y + originC.height / 2;
    console.log("srilank:" + yCenter, xCenter);
    setOrigin({ x: xCenter, y: yCenter });

    // bcenter of dest
    const destC = document.getElementById("ch").getBBox();
    const dxCenter = destC.x + destC.width * 0.5;
    const dyCenter = destC.y + destC.height * 0.5;
    console.log(dyCenter, dxCenter);
    setDestination({ x: dxCenter, y: dyCenter });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>lwlx threath map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Stroke
          length={length}
          origin={origin}
          width="190"
          height="160"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="strokepath"
            d={`M ${origin.x} ${origin.y} Q 5 25 ${destination.x} ${destination.y}`}
            stroke="black"
            strokeWidth="2"
            fill="transparent"
          />
        </Stroke>
        <Map>
          <VectorMap
            {...world}
            className={styles.map}
            currentLayers={["ch", "lk"]}
          />
        </Map>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://dev.lwlx.xyz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by lwlx.
        </a>
      </footer>
    </div>
  );
}
