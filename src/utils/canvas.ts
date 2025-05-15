export function getCanvasContext() {
  const canvas = document.querySelector("[data-canvas-game]");
  if (!canvas) {
    throw new Error("Canvas element not found");
  }
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("Element is not a canvas");
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to get canvas context");
  }

  canvas.style.border = "1px solid black";
  canvas.style.backgroundColor = "lightgray";

  return { canvas, ctx };
}
