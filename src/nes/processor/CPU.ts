/**
 * NES 的 CPU 核心基于 MOS6502 处理器，运行频率约为 1.79 MHz（PAL 制式 NES 为 1.66 MHz）。
 * 它由理光公司制造，并且缺少 MOS6502 的十进制模式。
 * 在 NTSC 制式 NES 中， RP2A03 芯片包含 CPU 和 APU；
 * 在 PAL 制式 NES 中，CPU 和 APU 则集成在 RP2A07 芯片中。
 * 这里我们按标准的 MOS6502 来实现
 */

export class CPU {
  // 寄存器
  PC = 0x8000; // 程序计数器
  SP = 0xfd; // 堆栈指针
  A = 0; // 累加器
  X = 0; // X寄存器
  Y = 0; // Y寄存器
  P = 0x24; // 状态寄存器

  // 内存（64KB）
  memory = new Uint8Array(0x10000);

  static INSTRUCTIONS = {
    INV: { id: 0, name: "inv" }, // Invalid
    ADC: { id: 1, name: "adc" },
    AND: { id: 2, name: "and" },
    ASL: { id: 3, name: "asl" },
    BCC: { id: 4, name: "bcc" },
    BCS: { id: 5, name: "bcs" },
    BEQ: { id: 6, name: "beq" },
    BIT: { id: 7, name: "bit" },
    BMI: { id: 8, name: "bmi" },
    BNE: { id: 9, name: "bne" },
    BPL: { id: 10, name: "bpl" },
    BRK: { id: 11, name: "brk" },
    BVC: { id: 12, name: "bvc" },
    BVS: { id: 13, name: "bvs" },
    CLC: { id: 14, name: "clc" },
    CLD: { id: 15, name: "cld" },
    CLI: { id: 16, name: "cli" },
    CLV: { id: 17, name: "clv" },
    CMP: { id: 18, name: "cmp" },
    CPX: { id: 19, name: "cpx" },
    CPY: { id: 20, name: "cpy" },
    DEC: { id: 21, name: "dec" },
    DEX: { id: 22, name: "dex" },
    DEY: { id: 23, name: "dey" },
    EOR: { id: 24, name: "eor" },
    INC: { id: 25, name: "inc" },
    INX: { id: 26, name: "inx" },
    INY: { id: 27, name: "iny" },
    JMP: { id: 28, name: "jmp" },
    JSR: { id: 29, name: "jsr" },
    LDA: { id: 30, name: "lda" },
    LDX: { id: 31, name: "ldx" },
    LDY: { id: 32, name: "ldy" },
    LSR: { id: 33, name: "lsr" },
    NOP: { id: 34, name: "nop" },
    ORA: { id: 35, name: "ora" },
    PHA: { id: 36, name: "pha" },
    PHP: { id: 37, name: "php" },
    PLA: { id: 38, name: "pla" },
    PLP: { id: 39, name: "plp" },
    ROL: { id: 40, name: "rol" },
    ROR: { id: 41, name: "ror" },
    RTI: { id: 42, name: "rti" },
    RTS: { id: 43, name: "rts" },
    SBC: { id: 44, name: "sbc" },
    SEC: { id: 45, name: "sec" },
    SED: { id: 46, name: "sed" },
    SEI: { id: 47, name: "sei" },
    STA: { id: 48, name: "sta" },
    STX: { id: 49, name: "stx" },
    STY: { id: 50, name: "sty" },
    TAX: { id: 51, name: "tax" },
    TAY: { id: 52, name: "tay" },
    TSX: { id: 53, name: "tsx" },
    TXA: { id: 54, name: "txa" },
    TXS: { id: 55, name: "txs" },
    TYA: { id: 56, name: "tya" },
  };

  constructor() {}

  // 56条指令实现
  execute() {
    const opcode = this.readByte(this.PC);
    this.PC++;

    switch (opcode) {
      case 0xa9: // LDA #imm
        break;
      case 0x8d: // STA abs
        break;
      // ... 其他指令
    }

    return 1;
  }

  readByte(pointer: number) {
    return this.memory[pointer];
  }

  writeByte(pointer: number, value: number) {
    this.memory[pointer] = value;
  }

  readWord(pointer: number) {
    return this.memory[pointer] | (this.memory[pointer + 1] << 8);
  }
}
