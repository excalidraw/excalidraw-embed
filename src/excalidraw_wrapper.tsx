import React, { useEffect } from "react";

import App from "./components/App";

import "../public/fonts.css";
import "../public/app.css";
import "./css/styles.scss";

import { ExcalidrawElement } from "./element/types";

type Props = {
  width?: number;
  height?: number;
  zenModeEnabled?: boolean;
  viewBackgroundColor?: string;
  onChange?: Function;
  onBlur?: Function;
  initialData?: readonly ExcalidrawElement[];
  user: {
    name?: string | null | undefined;
  };
  onUsernameChange?: (username: string) => void;
};

const Excalidraw = (props: Props) => {
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
    />
  );
};
export default Excalidraw;
