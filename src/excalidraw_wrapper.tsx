import React, { useEffect } from "react";

import App from "./components/App";

import "../public/fonts.css";
import "../public/app.css";
import "./css/styles.scss";

type Props = {
  width?: number;
  height?: number;
  zenModeEnabled?: boolean;
  viewBackgroundColor?: string;
};

const Excalidraw = (props: Props) => {
  const { width, height, zenModeEnabled, viewBackgroundColor } = props;
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

  return (
    <App
      width={width}
      height={height}
      zenModeEnabled={zenModeEnabled}
      viewBackgroundColor={viewBackgroundColor}
    />
  );
};
export default Excalidraw;
