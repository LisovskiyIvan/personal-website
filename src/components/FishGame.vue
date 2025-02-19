<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import bubbleSprite from "@/assets/bubble_1.png";
import shark1 from "@/assets/fish/Shark1.png";
import shark2 from "@/assets/fish/Shark2.png";
import shark3 from "@/assets/fish/Shark3.png";
import shark4 from "@/assets/fish/Shark4.png";
import shark5 from "@/assets/fish/Shark5.png";
import shark6 from "@/assets/fish/Shark6.png";
import shark7 from "@/assets/fish/Shark7.png";
import shark8 from "@/assets/fish/Shark8.png";
import crab1 from "@/assets/crab/crab1.png";
import crab2 from "@/assets/crab/crab2.png";
import crab3 from "@/assets/crab/crab3.png";
import crab4 from "@/assets/crab/crab4.png";


interface GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Bubble extends GameObject {
  speed: number;
  rotation: number;
  scale: number;
}

interface Obstacle extends GameObject {
  speed: number;
  waveOffset: number;
  frame: number;
}

const sharkImages = [shark1, shark2, shark3, shark4, shark5, shark6, shark7, shark8];
const crabImages = [crab1, crab2, crab3, crab4];
const currentSharkFrame = ref(0);
const sharkFrameInterval = 100; // Milliseconds between frame changes
let lastFrameTime = 0;

const updateSharkAnimation = (timestamp: number) => {
  if (timestamp - lastFrameTime > sharkFrameInterval) {
    currentSharkFrame.value = (currentSharkFrame.value + 1) % sharkImages.length;
    lastFrameTime = timestamp;
  }
};

const sharkImage = new Image();
const bubbleImage = new Image();
bubbleImage.src = bubbleSprite;
const crabImage = crabImages.map(src => {
  const img = new Image();
  img.src = src;
  return img;
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
const gameLoop = ref<number>(0);
const score = ref(0);
const isGameOver = ref(false);
const highScore = ref(
  parseInt(localStorage.getItem("fishGameHighScore") || "0")
);

const player = ref<GameObject & { direction: number }>({
  x: 50,
  y: 200,
  width: 100, // Увеличенный размер для акулы
  height: 60, // Увеличенный размер для акулы
  direction: -1,
});

const bubbles = ref<Bubble[]>([]);
const obstacles = ref<Obstacle[]>([]);

const keys = ref({
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
});

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key in keys.value) {
    keys.value[e.key as keyof typeof keys.value] = true;
  }
};

const handleKeyUp = (e: KeyboardEvent) => {
  if (e.key in keys.value) {
    keys.value[e.key as keyof typeof keys.value] = false;
  }
};

const createBubble = () => {
  if (Math.random() < 0.03) {
    bubbles.value.push({
      x: 800,
      y: Math.random() * 400,
      width: 30,
      height: 30,
      speed: 1 + Math.random() * 2,
      rotation: Math.random() * Math.PI * 2,
      scale: 0.8 + Math.random() * 0.4,
    });
  }
};

const createObstacle = () => {
  if (Math.random() < 0.01) {
    obstacles.value.push({
      x: 800,
      y: Math.random() * 300,
      width: 45,
      height: 45,
      speed: 2 + Math.random() * 2,
      waveOffset: Math.random() * Math.PI * 2,
      frame: Math.floor(Math.random() * crabImages.length)
    });
  }
};

const checkCollision = (obj1: GameObject, obj2: GameObject) => {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
};

const update = (timestamp: number) => {
  if (isGameOver.value) return;

  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  updateSharkAnimation(timestamp);
  sharkImage.src = sharkImages[currentSharkFrame.value];

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#0077BE");
  gradient.addColorStop(1, "#003366");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (keys.value.ArrowUp) player.value.y = Math.max(0, player.value.y - 5);
  if (keys.value.ArrowDown) player.value.y = Math.min(370, player.value.y + 5);
  if (keys.value.ArrowLeft) {
    player.value.x = Math.max(0, player.value.x - 5);
    player.value.direction = 1;
  }
  if (keys.value.ArrowRight) {
    player.value.x = Math.min(760, player.value.x + 5);
    player.value.direction = -1;
  }

  ctx.save();
  ctx.translate(
    player.value.x + player.value.width / 2,
    player.value.y + player.value.height / 2
  );
  ctx.scale(player.value.direction, 1);
  ctx.drawImage(
    sharkImage,
    -player.value.width / 2,
    -player.value.height / 2,
    player.value.width,
    player.value.height
  );
  ctx.restore();

  createBubble();
  bubbles.value = bubbles.value.filter((bubble) => {
    bubble.x -= bubble.speed;
    bubble.rotation += 0.02;

    if (checkCollision(player.value, bubble)) {
      score.value += 10;
      ctx.beginPath();
      ctx.arc(
        bubble.x + bubble.width / 2,
        bubble.y + bubble.height / 2,
        bubble.width,
        0,
        Math.PI * 2
      );
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
      return false;
    }

    if (bubble.x + bubble.width < 0) return false;

    ctx.save();
    ctx.translate(bubble.x + bubble.width / 2, bubble.y + bubble.height / 2);
    ctx.rotate(bubble.rotation);
    ctx.scale(bubble.scale, bubble.scale);
    ctx.drawImage(
      bubbleImage,
      -bubble.width / 2,
      -bubble.height / 2,
      bubble.width,
      bubble.height
    );
    ctx.restore();
    return true;
  });

  createObstacle();
  obstacles.value = obstacles.value.filter((obstacle) => {
    obstacle.x -= obstacle.speed;
    obstacle.y += Math.sin(Date.now() / 1000 + obstacle.waveOffset) * 0.5;

    if (checkCollision(player.value, obstacle)) {
      if (score.value > highScore.value) {
        highScore.value = score.value;
        localStorage.setItem("fishGameHighScore", score.value.toString());
      }
      isGameOver.value = true;
    }

    if (obstacle.x + obstacle.width < 0) return false;

    ctx.drawImage(
      crabImage[obstacle.frame],
      obstacle.x,
      obstacle.y,
      obstacle.width,
      obstacle.height
    );
    return true;
  });

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 24px Arial";
  ctx.fillText(`Счёт: ${score.value}`, 10, 30);
  ctx.fillText(`Рекорд: ${highScore.value}`, 10, 60);

  if (isGameOver.value) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 48px Arial";
    const gameOverText = "Игра окончена!";
    const gameOverWidth = ctx.measureText(gameOverText).width;
    ctx.fillText(gameOverText, (canvas.width - gameOverWidth) / 2, 180);

    ctx.font = "24px Arial";
    const finalScoreText = `Итоговый счёт: ${score.value}`;
    const finalScoreWidth = ctx.measureText(finalScoreText).width;
    ctx.fillText(finalScoreText, (canvas.width - finalScoreWidth) / 2, 230);

    const restartText = "Нажмите Пробел для перезапуска";
    const restartWidth = ctx.measureText(restartText).width;
    ctx.fillText(restartText, (canvas.width - restartWidth) / 2, 270);

    if (score.value === highScore.value) {
      ctx.fillStyle = "#FFD700";
      ctx.font = "bold 32px Arial";
      const newHighScoreText = "Новый рекорд!";
      const newHighScoreWidth = ctx.measureText(newHighScoreText).width;
      ctx.fillText(newHighScoreText, (canvas.width - newHighScoreWidth) / 2, 330);
    }
  } else {
    gameLoop.value = requestAnimationFrame(update);
  }
};

const restartGame = () => {
  player.value = {
    x: 50,
    y: 200,
    width: 100, // Увеличенный размер для акулы
    height: 60, // Увеличенный размер для акулы
    direction: -1,
  };
  bubbles.value = [];
  obstacles.value = [];
  score.value = 0;
  isGameOver.value = false;
  gameLoop.value = requestAnimationFrame(update);
};

const handleKeyPress = (e: KeyboardEvent) => {
  if (e.code === "Space" && isGameOver.value) {
    restartGame();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
  window.addEventListener("keypress", handleKeyPress);
  gameLoop.value = requestAnimationFrame(update);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeyDown);
  window.removeEventListener("keyup", handleKeyUp);
  window.removeEventListener("keypress", handleKeyPress);
  cancelAnimationFrame(gameLoop.value);
});
</script>

<template>
  <div
    class="game-container min-h-[100dvh] bg-gradient-to-b from-blue-900 to-blue-950 flex flex-col items-center justify-center"
  >
    <RouterLink 
      to="/" 
      class="px-6 py-3 bg-orange/80 hover:bg-orange text-white text-xl font-medium rounded-full shadow-lg absolute top-4 left-4 transition-colors flex items-center gap-2"
    >
      <span class="i-carbon-arrow-left text-2xl"></span>
      Обратно
    </RouterLink>

      <h2 class="heading text-4xl mb-8 text-orange font-bold">Рыбная игра</h2>
    <div class="relative">
      <canvas
        ref="canvasRef"
        width="800"
        height="400"
        class="rounded-xl border-4 border-orange/20 shadow-2xl"
      ></canvas>
      <div class="absolute top-4 right-4 flex gap-2">
        <button
          @click="restartGame"
          class="px-4 py-2 bg-orange text-white rounded-lg hover:bg-orange/80 transition-colors"
          v-if="isGameOver"
        >
          Перезапуск
        </button>
      </div>
    </div>
    <div class="mt-6 text-white text-center">
      <p class="text-xl mb-2">Используйте стрелки для управления рыбкой</p>
      <p class="text-orange">Собирайте синие пузыри и избегайте водорослей</p>
    </div>
  </div>
</template>

<style scoped>
.game-container {
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(0, 119, 190, 0.3) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(0, 51, 102, 0.3) 0%,
      transparent 50%
    );
}
</style>
