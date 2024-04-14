import React, { useRef, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import AuthContext from './Authentication/AuthProvider';
import { Mesh, Shape, ExtrudeGeometry, MeshPhongMaterial } from "three";

export const PieChart3D = ({ data }) => {
  const { auth } = useContext(AuthContext);
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.1;
  });

  const createPieSlice = (start, end, color) => {
    const shape = new Shape();
    shape.moveTo(0, 0);
    shape.arc(0, 0, 1, start, end, false);
    shape.lineTo(0, 0);

    const extrudeSettings = {
      depth: 0.2,
      bevelEnabled: false,
    };

    const geometry = new ExtrudeGeometry(shape, extrudeSettings);
    const material = new MeshPhongMaterial({ color });

    return <mesh geometry={geometry} material={material} />;
  };

  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  let startAngle = 0;

  return (
    <group ref={groupRef}>
      {data.map((entry, index) => {
        const endAngle = startAngle + (entry.value / total) * Math.PI * 2;
        const slice = createPieSlice(startAngle, endAngle, entry.color);
        startAngle = endAngle;
        return <React.Fragment key={index}>{slice}</React.Fragment>;
      })}
    </group>
  );
};