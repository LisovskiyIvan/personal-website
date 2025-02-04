<template>
  <div
    class="flex justify-center items-center max-h-screen max-w-scree"
  >
    <canvas ref="gameCanvas"></canvas>
    <div class="absolute top-4 left-4 text-white text-xl font-bold tracking-wide bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm shadow-lg">
      Счёт: {{ score }}
    </div>
    <button 
      class="absolute top-4 right-4 text-white text-xl font-semibold px-6 py-2 bg-red-500/80 hover:bg-red-600/80 rounded-lg transition-colors duration-200 backdrop-blur-sm shadow-lg w-32" 
      @click="killPlayer"
    >
      Убить
    </button>
    <button 
      class="absolute top-20 right-4 text-white text-xl font-semibold px-6 py-2 bg-emerald-500/80 hover:bg-emerald-600/80 rounded-lg transition-colors duration-200 backdrop-blur-sm shadow-lg w-32"
      @click="app?.player?.resetPlayer"
    >
      Заново
    </button>
  </div>



</template>



<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Application } from "pixi.js";
import { Player } from "@/components/Player";

const gameCanvas = ref(null);
const score = ref(0);
let app: Game | null = null;

const killPlayer = () => {
  if (app) {
    app.player?.kill();
  }
}



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
        backgroundAlpha: 1,
        antialias: true,
        premultipliedAlpha: false,
        preserveDrawingBuffer: false,
  
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
  app = game;
  await game.init();

});


onUnmounted(() => {
  if (app) {
    app.app?.destroy();
  }
});
</script>
