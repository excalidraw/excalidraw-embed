import { AppState, FlooredNumber } from "../types";
import { ExcalidrawElement } from "../element/types";
import { getCommonBounds, getClosestElementBounds } from "../element";

import {
  sceneCoordsToViewportCoords,
  viewportCoordsToSceneCoords,
} from "../utils";

export const normalizeScroll = (pos: number) =>
  Math.floor(pos) as FlooredNumber;

function isOutsideViewPort(
  appState: AppState,
  canvas: HTMLCanvasElement | null,
  cords: Array<number>,
) {
  const [x1, y1, x2, y2] = cords;
  const { x: viewportX1, y: viewportY1 } = sceneCoordsToViewportCoords(
    { sceneX: x1, sceneY: y1 },
    appState,
    canvas,
    window.devicePixelRatio,
  );
  const { x: viewportX2, y: viewportY2 } = sceneCoordsToViewportCoords(
    { sceneX: x2, sceneY: y2 },
    appState,
    canvas,
    window.devicePixelRatio,
  );
  return (
    viewportX2 - viewportX1 > window.innerWidth ||
    viewportY2 - viewportY1 > window.innerHeight
  );
}

export const calculateScrollCenter = (
  elements: readonly ExcalidrawElement[],
  appState: AppState,
  canvas: HTMLCanvasElement | null,
): { scrollX: FlooredNumber; scrollY: FlooredNumber } => {
  if (!elements.length) {
    return {
      scrollX: normalizeScroll(0),
      scrollY: normalizeScroll(0),
    };
  }
  const scale = window.devicePixelRatio;
  let [x1, y1, x2, y2] = getCommonBounds(elements);
  const parentBoundingRect = document
    .querySelector(".excalidraw")
    ?.parentElement?.getBoundingClientRect();
  const parentWidth = parentBoundingRect?.width || window.innerWidth;
  const parentHeight = parentBoundingRect?.height || window.innerHeight;
  const deltaX = parentBoundingRect?.left || 0;
  const deltaY = parentBoundingRect?.top || 0;
  if (isOutsideViewPort(appState, canvas, [x1, y1, x2, y2])) {
    [x1, y1, x2, y2] = getClosestElementBounds(
      elements,
      viewportCoordsToSceneCoords(
        { clientX: appState.scrollX, clientY: appState.scrollY },
        appState,
        canvas,
        scale,
        { deltaX, deltaY },
      ),
    );
  }

  const centerX = (x1 + x2) / 2;
  const centerY = (y1 + y2) / 2;

  return {
    scrollX: normalizeScroll(parentWidth / 2 - centerX),
    scrollY: normalizeScroll(parentHeight / 2 - centerY),
  };
};
