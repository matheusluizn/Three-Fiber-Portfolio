import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import Vaporwave from "../three/Vaporwave";

export default function ThreeBackground({ colorMode }) {
  const screen = useRef(null);
  const [renderer, setRenderer] = useState(null);
  const [scene, setScene] = useState(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    const { current: container } = screen;
    Vaporwave(container);
  }, []);

  return (
    <canvas id="home-screen" ref={screen}></canvas>
  );
}