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

  canvas.style.display = "block";
  canvas.style.maxWidth = "100%";
  canvas.style.height = "auto";
  canvas.style.touchAction = "none";
  canvas.style.backgroundColor = "transparent";
  canvas.style.border = "none";

  return { canvas, ctx };
}
