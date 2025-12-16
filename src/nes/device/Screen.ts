export class Screen {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  pixelSize = 2;
  width = 256;
  height = 240;

  constructor(container: HTMLElement) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d")!;
    this.canvas.width = this.width * this.pixelSize;
    this.canvas.height = this.height * this.pixelSize;
    container.appendChild(this.canvas);
  }

  render(pixels: Uint8Array) {
    // 
  }
}