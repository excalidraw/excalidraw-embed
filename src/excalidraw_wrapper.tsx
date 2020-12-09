import React, { useEffect } from "react";

import { InitializeApp } from "./components/InitializeApp";
import App from "./components/App";


import { ExcalidrawProps } from "./types";

const Excalidraw = (props: ExcalidrawProps) => {
  const {
    width,
    height,
    onChange,
    onBlur,
    initialData,
    user,
    onUsernameChange,
    options,
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
    <InitializeApp>
      <App
        width={width}
        height={height}
        onChange={onChange}
        onBlur={onBlur}
        initialData={initialData}
        user={user}
        onUsernameChange={onUsernameChange}
        options={options}
      />
    </InitializeApp>
  );
};
export default Excalidraw;
