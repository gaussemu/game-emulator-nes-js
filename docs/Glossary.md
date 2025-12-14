# Glossary  词汇表

这些术语常用于关于任天堂娱乐系统（NES）和任天堂家用电脑（FC）的技术讨论中。

## A

### Address decoding  地址解码
Translation of addresses on the console's address buses into chip enables and addresses for the various ROMs and RAMs in the cartridge. In most cartridges, this involves some form of bank switching.
将游戏机地址总线上的地址转换为卡带中各个 ROM 和 RAM 的芯片使能信号和地址。在大多数卡带中，这涉及到某种形式的存储体切换。

### ASIC  专用集成电路
Application specific integrated circuit. Used with mappers involving complicated logic that the IC chip is made specific to this purpose.
专用集成电路。用于涉及复杂逻辑的映射器，这种集成电路芯片是专门为此目的而设计的。

### Attribute  属性
A part of video memory that selects which part of the palette is used for a given sprite or area of the background.
视频内存的一部分，用于选择调色板的哪一部分用于给定的精灵或背景区域。

### Attribute table  属性表
The 64-byte table of background tile attributes at the end of each of the four nametables.
四个名称表末尾各有一个 64 字节的背景图块属性表。

### Audio Processing Unit (APU) 音频处理单元（ APU 
The hardware on the NES/Famicom that generates audio output.
NES/Famicom 上产生音频输出的硬件。

## B

### Background  背景
A grid of tiles (programmed using nametables).
一个由图块组成的网格（使用名称表进行编程）。

### Backdrop  背景
Pixels which do not contain either an opaque background or opaque sprite pixel, which display either the color in entry 0 of palette RAM or the palette index inputted on the PPU's EXT pins (normally 0).
不包含不透明背景或不透明精灵像素的像素，显示调色板 RAM 的第 0 个条目中的颜色，或 PPU 的 EXT 引脚上输入的调色板索引（通常为 0）。

### Bank switching  银行转换
The primary function of a mapper. Because the CPU and PPU don't have enough address space to see the entire ROM at once, the ROM is conceptually divided into "pages" or "banks", where the most significant bits of the ROM address are treated as a page number. The CPU writes a page number to the mapper's port, and the mapper puts this number on the most significant bits of the ROM address to make the selected page visible to the rest of the system. More advanced mappers have "fine-grained bank switching", which makes separate banks available in separate windows of the address space.
映射器的主要功能是：由于 CPU 和 PPU 的地址空间不足以同时访问整个 ROM，因此 ROM 在概念上被划分为“页”或“库”，ROM 地址的最高有效位被视为页号。CPU 将页号写入映射器的端口，映射器将该页号添加到 ROM 地址的最高有效位，从而使选定的页对系统的其他部分可见。更高级的映射器具有“细粒度库切换”功能，这使得不同的库可以在地址空间的不同窗口中访问。

### Battery RAM  电池内存
RAM made nonvolatile by the addition of a battery backup circuit. This is used to let the player save progress in games with more than one chapter. Almost all battery RAM in NES games is PRG RAM; a couple games on very uncommon mappers have battery-backed CHR RAM.
通过添加电池备用电路，RAM 被转换为非易失性 RAM。这使得玩家可以在包含多个章节的游戏中保存进度。NES 游戏中几乎所有的电池 RAM 都是 PRG RAM；少数非常罕见的映射器上的游戏则使用电池备用的 CHR RAM。

## C

### Camera 摄像机
Abstraction for the part of a world that is displayed on the screen. The illusion of a moving camera is created by scrolling the background and moving all the sprites at once.
对屏幕上显示的世界部分进行抽象。通过滚动背景并同时移动所有精灵，营造出摄像机移动的错觉。

### Cassette  磁带

1. Japanese term for "cartridge" that corresponds to the term "Game Pak" used in other markets.
日语中“卡带”一词，相当于其他市场使用的“游戏卡带”。
2. Philips Compact Cassette, the magnetic tape storage medium for the Famicom Data Recorder and for homemade mix tapes of NES game background music.
飞利浦紧凑型磁带 ，是 Famicom 数据记录器和自制 NES 游戏背景音乐混音磁带的磁带存储介质。

### Cell  细胞
a frame of animation
动画帧

### CGRAM (Color Generator RAM) CGRAM（颜色生成器 RAM）
Used by Nintendo to mean Palette RAM.
任天堂用它来指调色板 RAM。

### CHR (character)  CHR（字符）
Another word for pattern tables, after the traditional name character generator for a tiled background plane.
图案表的另一种说法，源自传统的平铺背景平面字符生成器 。

### CHR RAM
An SRAM on the cartridge, usually 8192 bytes, normally mapped at $0000-$1FFF and holding pattern tables.
卡带上的 SRAM 通常为 8192 字节，通常映射到 $0000-$1FFF 和保持模式表。

### CHR ROM
ROM in the cartridge which is connected to the PPU, normally mapped at $0000-$1FFF and holding pattern tables.
卡带中的 ROM 连接到 PPU，通常映射到 $0000-$1FFF 和保持模式表。

### CIC (Checking Integrated Circuit) CIC（集成电路检查）
Nintendo's term for what the public knows better as the lockout chip.
任天堂对公众更熟悉的“锁定芯片”的称呼。

### CIC clone  CIC 克隆
A microcontroller generating the same pseudorandom stream as the authentic CIC. Examples include Tengen's Rabbit and Kevin Horton's CIClone.
一种能够生成与真正的 CIC 相同的伪随机流的微控制器。例如 Tengen 公司的 Rabbit 和 Kevin Horton 的 CIClone。

### CIC stun  CIC 眩晕
Freezing the CIC by using a charge pump to pulse negative voltage on the data pins.
使用电荷泵向数据引脚施加脉冲负电压，从而冻结 CIC。

### CIRAM (Console-Internal RAM) CIRAM（控制台内部 RAM）
A 2 KiB SRAM in the NES, normally mapped at $2000-$3FFF on the PPU bus and used to hold nametables and attribute tables. The cartridge controls where and even if this is mapped. CIRAM may have originally stood for Character-Internal RAM, but this is rarely mapped in the pattern table region.
NES 中有一个 2 KiB 的 SRAM，通常映射到 PPU 总线的 $2000-$3FFF 地址段，用于存储命名表和属性表。卡带控制着它的映射位置，甚至是否映射。CIRAM 最初可能代表字符内部 RAM，但它很少映射到模式表区域。

### CL
Used on PCBs to refer to solder jumpers that are connected by default and must be cut to disconnect them.
用于 PCB 上，指默认情况下连接、必须剪断才能断开的焊接跳线。

### CL 碰撞  CL Collision
The coincidence or overlapping of two "objects" which may be made of background tiles, one or more sprites, or a combination of these. Collision detection is done by the software since the Famicom/NES hardware has no collision detection circuitry.
两个“物体”（可以是背景图块、一个或多个精灵，或它们的组合）的重合或重叠会导致碰撞。由于 FC/NES 硬件没有碰撞检测电路，因此碰撞检测由软件完成。

### Control Deck  控制面板
The console itself, into which the Game Pak is inserted and to which the controllers and outputs are connected.
游戏主机本身，游戏卡带插入其中，控制器和输出设备连接到主机上。
