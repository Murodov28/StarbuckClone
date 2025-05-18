import "@google/model-viewer";
import { useEffect, useRef, useState } from "react";
export const HeaderBanner3D = () => {
  const viewerRef = useRef();
  useEffect(() => {
    const viewer = viewerRef.current;
    let timeout;
    const resetCamera = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        viewer.cameraOrbit = "10deg 100deg";
      }, 200);
    };
    viewer.addEventListener("camera-change", resetCamera);
    return () => {
      viewer.removeEventListener("camera-change", resetCamera);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <model-viewer
        ref={viewerRef}
        src={`${
          import.meta.env.BASE_URL
        }uploads_files_5723915_STARBUCKS_COFFEE.glb`}
        style={{
          width:
            window.innerWidth <= 700
              ? "300px"
              : window.innerWidth <= 1000
              ? "400px"
              : "500px",
          minHeight:
            window.innerWidth <= 400
              ? "330px"
              : window.innerWidth <= 700
              ? "400px"
              : window.innerWidth <= 1000
              ? "480px"
              : "630px",
          objectFit: "cover",
          height: "100%",
        }}
        alt="A 3D model of a coffee cup"
        camera-controls
        camera-orbit="10deg 100deg"
        disable-pan
        disable-tap
        disable-zoom
      />
    </>
  );
};
