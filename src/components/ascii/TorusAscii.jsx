import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ParametricGeometry } from "three/examples/jsm/geometries/ParametricGeometry.js";
import { createAsciiPass } from "../../lib/asciiShader.js";
import { createParallax } from "../../lib/useParallax.js";

export default function TorusAscii() {
  const ref = useRef();

  useEffect(() => {
    const container = ref.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 250;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    container.appendChild(renderer.domElement);

    const ascii = createAsciiPass(renderer, scene, camera);
    const parallax = createParallax();

    const func = (u, v, target) => {
      const R = 60, r = 25, twist = 2;
      const uA = u * Math.PI * 2;
      const vA = v * Math.PI * 2 + uA * twist;

      target.set(
        (R + r * Math.cos(vA)) * Math.cos(uA),
        (R + r * Math.cos(vA)) * Math.sin(uA),
        r * Math.sin(vA)
      );
    };

    const geometry = new ParametricGeometry(func, 120, 6);

    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function animate() {
      requestAnimationFrame(animate);

      const m = parallax.update();

      mesh.rotation.y += 0.002;
      mesh.rotation.x += m.y * 0.2;
      mesh.rotation.z += m.x * 0.2;

      mesh.position.x = m.x * 15;
      mesh.position.y = m.y * 15;

      ascii.render();
    }

    animate();

    return () => container.innerHTML = "";
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}