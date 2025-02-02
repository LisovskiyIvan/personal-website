<template>
  <div
    class="flex justify-center items-center max-h-screen max-w-screen bg-gray-900"
  >
    <canvas ref="gameCanvas"></canvas>
    <div class="absolute top-4 left-4 text-white text-xl">
      Счёт: {{ score }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Application, Assets, Spritesheet, Texture, AnimatedSprite } from "pixi.js";
import { Player } from "@/components/Player";

const gameCanvas = ref(null);
const score = ref(0);
let app: Application | null = null;

class Game {

  app: Application | null = null;
  canvas: HTMLCanvasElement;
  player: Player | null = null;
  keys: { [key: string]: boolean } = {};

  constructor(canvas: HTMLCanvasElement) {
    this.app = null;
    this.canvas = canvas;
    this.player = null;
    this.keys = {};
  }


  setupControls() {
    const handleKey = (e: KeyboardEvent, value: boolean) => {
      this.keys[e.key] = value;
    };

    window.addEventListener('keydown', e => handleKey(e, true));
    window.addEventListener('keyup', e => handleKey(e, false));
  }

  updatePlayer() {
    if (!this.player) return;
    if (this.keys['ArrowUp'] || this.keys['w']) this.player.y -= 1;
    if (this.keys['ArrowDown'] || this.keys['s']) this.player.y += 1;
    if (this.keys['ArrowLeft'] || this.keys['a']) this.player.x -= 1;
    if (this.keys['ArrowRight'] || this.keys['d']) this.player.x += 1;
  }

  async setupPlayer() {
    if (!this.app) return;
    const player = new Player(this.app);
    if (!player) return null;
    return player;
  }


  async init() {
    try {
      this.app = new Application();
      await this.app.init({
        canvas: this.canvas,
        resizeTo: window,
        backgroundColor: 0x1099bb,
      });

      this.player = await this.setupPlayer() ?? null;
      if (!this.player) return;
      this.app.ticker.add(() => this.player?.updatePlayer());
    } catch (error) {
      console.error("Error initializing game:", error);
    }
  }
}

onMounted(async () => {
  const game = new Game(gameCanvas.value as unknown as HTMLCanvasElement);
  app = game.app;
  await game.init();
});

onUnmounted(() => {
  if (app) {
    app.destroy();
  }
});
</script>
