export class Controller {
  state = 0;
  strobe = false;
  index = 0;
  
  // 标准NES控制器按钮映射
  buttons = {
    A: 0,
    B: 1,
    SELECT: 2,
    START: 3,
    UP: 4,
    DOWN: 5,
    LEFT: 6,
    RIGHT: 7,
  };

  constructor() {}

  // 从 $4016/$4017 读取
  read() {
    if (this.strobe) {
      return this.state & 1;
    }

    const value = (this.state >> this.index) & 1;
    this.index = (this.index + 1) % 8;
    return value;
  }

  // 键盘映射
  mapKeyboard() {
    const keyMap = {
      KeyZ: "A",
      KeyX: "B",
      Enter: "START",
      ShiftRight: "SELECT",
      ArrowUp: "UP",
      ArrowDown: "DOWN",
      ArrowLeft: "LEFT",
      ArrowRight: "RIGHT",
    };

    window.addEventListener("keydown", (e) => {
    });

    window.addEventListener("keyup", (e) => {
    });
  }
}
