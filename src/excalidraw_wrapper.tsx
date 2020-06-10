import React, { useEffect } from "react";

import App from "./components/App";

import "../public/app.css";
import "./css/styles.scss";

type Props = {
  width?: number;
  height?: number;
};

const Excalidraw = (props: Props) => {
  const { width, height } = props;
  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      // @ts-ignore
      if (event.scale !== 1) {
        event.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      // @ts-ignore
      document.removeEventListener("touchMove", handleTouchMove);
    };
  }, []);

  return <App width={width} height={height} />;
};
export default Excalidraw;
