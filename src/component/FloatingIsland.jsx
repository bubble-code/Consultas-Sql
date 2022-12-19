import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { BufferAttribute, Color } from "three";

export const FloatingIsland = () => {
  const gltf = useLoader(GLTFLoader, 'floating_island.glb');

  useEffect(() => {
    if (!gltf) return;
    let mesh = gltf.scene.children[0];
    let uvs = mesh.geometry.attributes.uv.array;
    mesh.geometry.setAttribute('uv2', new BufferAttribute(uvs, 2));
    mesh.material.lightMap = mesh.material.map;
    mesh.material.lightMapIntensity = 400;
    mesh.material.color = new Color(0.04, 0.06, 0.01);

  }, [gltf]);

  return (
    <primitive object={gltf.scene} />
  )
};