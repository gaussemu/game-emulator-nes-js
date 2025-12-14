// 不同卡带的内存映射控制器
class Mapper {
  static create(rom) {
    const mapperId = rom.header[6] >> 4;
    
    switch(mapperId) {
      case 0: return new Mapper000(rom);  // NROM
      case 1: return new Mapper001(rom);  // MMC1
      case 2: return new Mapper002(rom);  // UxROM
      case 3: return new Mapper003(rom);  // CNROM
      case 4: return new Mapper004(rom);  // MMC3
      default: throw new Error(`不支持的Mapper: ${mapperId}`);
    }
  }
}

class Mapper000 {
  constructor(rom) {
    // 最简单的Mapper：16KB或32KB PRG ROM
    this.prgRom = rom.prgRom;
    this.chrRom = rom.chrRom;
  }
  
  read(address) {
    if (address >= 0x8000 && address <= 0xFFFF) {
      return this.prgRom[address & (this.prgRom.length - 1)];
    }
    return 0;
  }
}