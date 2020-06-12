import React, { useEffect } from "react";

import App from "./components/App";

import "../public/fonts.css";
import "../public/app.css";
import "./css/styles.scss";

import { ExcalidrawProps } from "./types";

const Excalidraw = (props: ExcalidrawProps) => {
  const {
    width,
    height,
    zenModeEnabled,
    viewBackgroundColor,
    onChange,
    onBlur,
    initialData,
    user,
    onUsernameChange,
    onResize,
  } = props;
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
      onChange={onChange}
      onBlur={onBlur}
      initialData={initialData}
      user={user}
      onUsernameChange={onUsernameChange}
      onResize={onResize}
    />
  );
};
export default Excalidraw;
