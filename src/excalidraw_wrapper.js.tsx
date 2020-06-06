import React, { useEffect } from "react";

import App from "./components/App";

import "./css/styles.scss";

type Props = {};

const Excalidraw = (props: Props) => {
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

  return <App />;
};
export default Excalidraw;
