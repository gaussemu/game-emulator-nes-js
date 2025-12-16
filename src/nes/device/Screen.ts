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
    // 渲染像素到Canvas
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const pixel = pixels[y * this.width + x];
        this.ctx.fillStyle = `rgb(${pixel * 255}, ${pixel * 255}, ${pixel * 255})`;
        this.ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);
      }
    }
  }
}