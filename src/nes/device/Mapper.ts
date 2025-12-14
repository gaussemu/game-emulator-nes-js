interface Rom {
  header: Uint8Array;
  prgRom: Uint8Array;
  chrRom: Uint8Array;
}

class Mapper000 {
  prgRom: Uint8Array;
  chrRom: Uint8Array;

  constructor(rom: Rom) {
    // 最简单的Mapper：16KB或32KB PRG ROM
    this.prgRom = rom.prgRom;
    this.chrRom = rom.chrRom;
  }

  read(address: number) {
    if (address >= 0x8000 && address <= 0xffff) {
      return this.prgRom[address & (this.prgRom.length - 1)];
    }
    return 0;
  }
}

class Mapper001 {
  prgRom: Uint8Array;
  chrRom: Uint8Array;

  constructor(rom: Rom) {
    // MMC1：16KB或32KB PRG ROM，8KB CHR ROM
    this.prgRom = rom.prgRom;
    this.chrRom = rom.chrRom;
  }
}

class Mapper002 {
  prgRom: Uint8Array;
  chrRom: Uint8Array;

  constructor(rom: Rom) {
    // UxROM：16KB或32KB PRG ROM，8KB CHR ROM
    this.prgRom = rom.prgRom;
    this.chrRom = rom.chrRom;
  }
}

class Mapper003 {
  prgRom: Uint8Array;
  chrRom: Uint8Array;

  constructor(rom: Rom) {
    // CNROM：16KB或32KB PRG ROM，8KB CHR ROM
    this.prgRom = rom.prgRom;
    this.chrRom = rom.chrRom;
  }
}

class Mapper004 {
  prgRom: Uint8Array;
  chrRom: Uint8Array;

  constructor(rom: Rom) {
    // MMC3：16KB或32KB PRG ROM，8KB CHR ROM
    this.prgRom = rom.prgRom;
    this.chrRom = rom.chrRom;
  }
}

// 不同卡带的内存映射控制器
export class Mapper {
  static create(rom: Rom) {
    const mapperId = rom.header[6] >> 4;

    switch (mapperId) {
      case 0:
        return new Mapper000(rom); // NROM
      case 1:
        return new Mapper001(rom); // MMC1
      case 2:
        return new Mapper002(rom); // UxROM
      case 3:
        return new Mapper003(rom); // CNROM
      case 4:
        return new Mapper004(rom); // MMC3
      default:
        throw new Error(`不支持的Mapper: ${mapperId}`);
    }
  }
}
