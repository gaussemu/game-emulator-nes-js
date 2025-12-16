import { Cartridge } from "./device/Cartridge";
import { Controller } from "./device/Controller";
import { Screen } from "./device/Screen";
import { APU } from "./processor/APU";
import { CPU } from "./processor/CPU";
import { PPU } from "./processor/PPU";

export class NES {
  cpu: CPU;
  ppu: PPU;
  apu: APU;
  screen: Screen;
  cartridge: Cartridge | null = null;
  controllers: Controller[] = [];
  cycles = 0;

  constructor(container: HTMLElement) {
    const $screen = document.createElement("canvas");
    this.screen = new Screen($screen);
    container.appendChild($screen);
    this.cpu = new CPU();
    this.ppu = new PPU();
    this.apu = new APU();
    this.cartridge = null;
    this.controllers = [new Controller(), new Controller()];
    this.cycles = 0;
  }

  async loadROM(data: Uint8Array) {
    this.cartridge = new Cartridge(data);
    this.cpu.loadROM(data);
  }

  runFrame() {
    // 每帧执行约29780个CPU周期
    const cyclesPerFrame = 29780;

    while (this.cycles < cyclesPerFrame) {
      const cpuCycles = this.cpu.execute();
      this.cycles += cpuCycles;

      // 每3个CPU周期 = 1个PPU周期
      for (let i = 0; i < cpuCycles * 3; i++) {
        this.ppu.tick();
      }

      this.apu.tick(cpuCycles);
    }

    this.cycles -= cyclesPerFrame;
    this.ppu.render();
  }

  start() {
    const frame = () => {
      this.runFrame();
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }
}
