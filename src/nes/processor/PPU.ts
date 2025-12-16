/**
 * NES的图形处理由理光 2C02 处理器 [ 137 ] 负责，该处理器被称为图像处理单元（PPU），主频为 5.37 MHz。
 * 它拥有 2 KB 的视频 VRAM 、256 字节的片上“对象属性存储器”（OAM），用于存储最多 64 个精灵的显示信息，以及 28 字节的 RAM，用于存储基于 YIQ [ 140 ] 调色板的信息；
 * 该游戏机最多可以同时显示 54 种可用颜色中的 25 种。
 */
export class PPU {
  vram = new Uint8Array(0x4000); // 显存
  palette = new Uint32Array(64); // 调色板
  frameBuffer = new Uint32Array(256 * 240); // 屏幕缓冲
  // 模式表：背景和精灵的图案数据
  patternTables = [
    new Uint8Array(0x1000), // 模式表0
    new Uint8Array(0x1000), // 模式表1
  ];

  constructor() {}

  tick() {
    // 每帧执行240行扫描线
    for (let scanline = 0; scanline < 240; scanline++) {
      this.renderScanline(scanline);
    }
  }

  renderPixel(x: number, y: number, color: number) {
    this.frameBuffer[y * 256 + x] = color;
  }

  render() {}

  // 渲染一条扫描线
  renderScanline(scanline: number) {
    // 渲染背景
    this.renderBackground(scanline);

    // 渲染精灵（最多8个/线）
    this.renderSprites(scanline);
  }

  renderBackground(scanline: number) {
    // 背景渲染逻辑
  }

  renderSprites(scanline: number) {
    // 精灵渲染逻辑
  }

  // 像素颜色索引 -> RGB
  getColor(index: number) {
    // NES 使用 6位颜色 (64色调色板)
    const colors = [
      0x666666, 0x002a88, 0x1412a7, 0x3b00a4, 0x5c007e, 0x6e0040, 0x6c0600,
      0x561d00,
      // ... 完整的64色
    ];
    return colors[index];
  }

  getFrameBuffer() {
    return this.frameBuffer;
  }
}
