<script setup lang="ts">
import Fishes from '@/components/Fishes.vue'

const slideRight = {
  initial: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1, x: 0, scale: 1, transition: {
      type: 'spring',
      stiffness: '50',
      delay: 300,
    },
  }
}

const slideLeft = {
  initial: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1, x: 0, scale: 1, transition: {
      type: 'spring',
      stiffness: '50',
      delay: 300,
    },
  }
}
const slideUpBig = {
  initial: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1, y: 0, scale: 1, transition: {
      type: 'spring',
      stiffness: '50',
      delay: 400,
    },
  }
}

const slideDown = {
  initial: {
    opacity: 0,
    y: -50
  },
  visible: {
    opacity: 1, y: 0, scale: 1, transition: {
      type: 'spring',
      stiffness: '50',
      delay: 300,
    },
  }
}
const slideUpSmall = {
  initial: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1, y: 0, scale: 1, transition: {
      type: 'spring',
      stiffness: '50',
      delay: 700,
    },
  }
}
</script>

<template>
  <div class="bg-blue h-[100dvh] flex justify-center">
    <div class="w-[80%] flex flex-col items-center mt-[10%] ">
      <div class=" mb-[5%] " v-motion :initial="slideLeft.initial" :visible="slideLeft.visible">
        <div
          class="emoji text-7xl animate-wiggle-more animate-infinite animate-duration-[7000ms] animate-delay-300 animate-ease-in-out">
          🚀
        </div>
      </div>
      <div v-motion :initial="slideDown.initial" :visible="slideDown.visible"
        class="heading text-[60px] text-center mb-[5%]">
        Привет! Меня зовут Иван и я junior frontend разработчик
      </div>
      <div v-motion :initial="slideUpBig.initial" :visible="slideUpBig.visible" class="text text-2xl mb-[10%] ">
        <a href="#stack"><button
            class="bg-dblue px-4 py-2 rounded-3xl m-4 hover:bg-black hover:text-dblue hover:scale-105 duration-300">Мой
            стек</button></a>
        <RouterLink to="contact"><button
            class="bg-black px-4 py-2 rounded-3xl m-4 text-white hover:text-dblue hover:scale-105 duration-300">Контакты</button>
        </RouterLink>
      </div>

      <RouterLink to="cat" v-motion :initial="slideUpSmall.initial" :visible="slideUpSmall.visible"
        class="flex flex-col items-center  cursor-pointer">
        <div class="text text-3xl relative  cursor-pointer mb-6 hover:scale-110  duration-300">
          Cat's page
        </div>
      </RouterLink>
    </div>
  </div>
  <div class="h-[100dvh] bg-dblue" id="stack">
    <div class="absolute z-40 w-[100%] h-[100%] flex justify-between">
      <div class="heading ml-[10%] text-3xl top-[85%] relative">
        В вебе как рыба в воде
      </div>
      <div class="mr-[15%] my-[5%] flex flex-col items-center">
        <div class="heading text-4xl mb-[25%]">
          Стек технологий
        </div>
        <div
          class="bg-notblack w-[100%] rounded-3xl pb-2 text-white mb-[15%]  hover:shadow-2xl hover:scale-105 duration-200"
          v-motion :initial="slideLeft.initial" :visibleOnce="slideLeft.visible">
          <div class="text-2xl px-5 py-2 heading">Основное</div>
          <div class="text-xl px-8 text">
            <ul>
              <li class="py-1">JavaScript, опыт с TypeScript, NodeJs, HTML, CSS</li>
              <li class="py-1">Vue3, Nuxt3, React</li>
              <li class="py-1">ElysiaJs(backend), SQLite</li>
            </ul>
          </div>
        </div>
        <div
          class="bg-notblack w-[100%] rounded-3xl pb-2 text-white mb-[15%] hover:shadow-2xl hover:scale-105 duration-200"
          v-motion :initial="slideLeft.initial" :visibleOnce="slideLeft.visible">
          <div class="text-2xl px-5 py-2 heading">Прочее</div>
          <div class="text-xl px-8 text">
            <ul>
              <li class="py-1">Tailwind CSS, REST API</li>
              <li class="py-1">Git, Docker</li>
              <li class="py-1">Vite, опыт с Webpack</li>
              <li class="py-1">Базовые знания Python и SQL</li>
              <li class="py-1">Bun и небольшой опыт с wsl (линукс)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Suspense>
      <Fishes />
    </Suspense>
  </div>
  <div class=" h-[100dvh] ">
    <div class="h-[25%] bg-blue flex items-center">
      <div class="ml-[5%] text-5xl heading">
        Кто я
      </div>
    </div>
    <div class="flex flex-col h-[75%] bg-dblue items-center justify-center">


      <div
        class="w-[60%] min-h-[300px] bg-notblack rounded-3xl p-10 flex flex-col items-center justify-center px-[5%] text text-white text-xl"
        v-motion :initial="slideRight.initial" :visible="slideRight.visible">
        <div class="text text-white text-xl">
          Меня зовут Иван, мне 21 год и я начинающий веб разработчик. Имею больше скилов во frontend, но так же
          заинтересован в backend. Учусь на последнем курсе Лесотехнического университета. Больше года самостоятельно
          изучаю сферу и надеюсь реализовать себя в ней. Имею английский уровня b2 и китайский hsk3. Один из моих пет
          проектов можно посмотреть 
        </div>
        <a href="https://github.com/LisovskiyIvan" target="_blank" class=" text-2xl relative bottom-[-10%] hover:scale-105 duration-300 after:bg-orange after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">на моем github</a>
        <RouterLink to="/contact"
          class="relative bottom-[-20%] hover:scale-105 duration-300 after:bg-orange after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          Контакты</RouterLink>
      </div>
      <div class="mb-5" v-motion :initial="slideRight.initial" :visible="slideRight.visible" />
      <div class="mb-5" v-motion :initial="slideRight.initial" :visible="slideRight.visible" />
    </div>
  </div>
  <div class="fixed bottom-[5%] right-[2%] z-100 w-16 hover:scale-110 duration-300 z-50">
    <a href="https://github.com/LisovskiyIvan" target="_blank"><img src="/img/github.png" alt="githublink"></a>
  </div>
</template>
