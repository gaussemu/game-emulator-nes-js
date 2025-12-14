class AudioChannel {
  samples = new Float32Array(0);
  
  sample() {
    return 0;
  }
}

class PulseChannel extends AudioChannel {}
class TriangleChannel extends AudioChannel {}
class NoiseChannel extends AudioChannel {}
class DMCChannel extends AudioChannel {}

export class APU {
  // 5个声音通道
  pulse1 = new PulseChannel();
  pulse2 = new PulseChannel();
  triangle = new TriangleChannel();
  noise = new NoiseChannel();
  dmc = new DMCChannel();

  // Web Audio API
  audioContext = new AudioContext();
  sampleRate = 44100;

  constructor() {}

  tick(cpuCycles: number) {
    // 每个CPU周期 = 3个PPU周期
    const ppuCycles = cpuCycles * 3;

    // 每个PPU周期 = 1个音频样本
    const samples = this.generateSamples(ppuCycles);

    // 播放音频
    this.playSamples(samples);
  }

  generateSamples(count: number) {
    const samples = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      samples[i] =
        this.pulse1.sample() * 0.15 +
        this.pulse2.sample() * 0.15 +
        this.triangle.sample() * 0.3 +
        this.noise.sample() * 0.19 +
        this.dmc.sample() * 0.11;
    }
    return samples;
  }

  playSamples(samples: Float32Array) {
    // 创建音频缓冲区
    const audioBuffer = this.audioContext.createBuffer(
      1,
      samples.length,
      this.sampleRate
    );
    const channelData = audioBuffer.getChannelData(0);
    channelData.set(samples);

    // 创建音频源节点
    const sourceNode = this.audioContext.createBufferSource();
    sourceNode.buffer = audioBuffer;
    sourceNode.connect(this.audioContext.destination);

    // 播放音频
    sourceNode.start(0);
  }
}
