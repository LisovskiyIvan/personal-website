<script setup lang="ts">
import Fishes from '@/components/Fishes.vue'
import { useWindowSize } from '@vueuse/core'
import { ref, watchEffect } from 'vue';

const { width } = useWindowSize()

const isMobile = ref(false)
watchEffect(() => {
  if (width.value < 650) isMobile.value = true
  else isMobile.value = false
})


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
  <div class="bg-blue h-auto min-h-[100vh] sm:h-[100dvh] w-[100%] flex justify-center">
    <div class="w-[80%] flex flex-col items-center mt-[8%] ">
      <div class=" mb-[5%] " v-motion :initial="slideLeft.initial" :visible="slideLeft.visible">
        <div
          class="emoji clamp-[6xl-5dvw-7xl] animate-wiggle-more animate-infinite animate-duration-[7000ms] animate-delay-300 animate-ease-in-out">
          🚀
        </div>
      </div>
      <div v-motion :initial="slideDown.initial" :visible="slideDown.visible"
        class="heading clamp-[34px-5dvw-6xl] text-center mb-[20%] sm:mb-[15%] lg:mb-[6%] 2xl:mb-[6%]">
        Привет! Меня зовут Иван и я junior frontend разработчик
      </div>
      <div v-motion :initial="slideUpBig.initial" :visible="slideUpBig.visible"
        class="text flex text-2xl flex-col sm:flex-row mb-[20%] sm:mb-[15%] lg:mb-[6%] 2xl:mb-[6%] ">
        <a :href="isMobile ? '#stackMobile' : '#stack'"><button
            class="bg-dblue px-4 py-2 rounded-3xl my-8 2xl:my-4 mx-6 hover:bg-black hover:text-dblue hover:scale-105 duration-300">Мой
            стек</button></a>
        <RouterLink to="contact"><button
            class="bg-black px-4 py-2 rounded-3xl my-8 2xl:my-4 mx-6 text-white hover:text-dblue hover:scale-105 duration-300">Контакты</button>
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
  <div class="min-h-[100dvh] bg-dblue" id="stack" v-if="!isMobile">
    <div class="absolute z-40 w-[100%] h-[100%] flex justify-between">
      <div class="heading sm:ml-[3%] lg:ml-[5%] 2xl:ml-[10%] text-3xl top-[85%] relative text-center">
        В вебе как рыба в воде
      </div>
      <div class="lg:mr-[2%] 2xl:mr-[15%] my-[5%] flex flex-col items-center">
        <div class="heading clamp-[24px-5dvw-4xl] mr-[2%] sm:mb-[8%] lg:mb-[15%] 2xl:mb-[25%]">
          Стек технологий
        </div>
        <div
          class="bg-notblack sm:w-[70%] 2xl:w-[100%] rounded-3xl pb-2 text-white sm:mb-[5%] lg:mb-[10%]  hover:shadow-2xl hover:scale-105 duration-200"
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
          class="bg-notblack sm:w-[70%] 2xl:w-[100%] rounded-3xl pb-2 text-white mb-[15%] hover:shadow-2xl hover:scale-105 duration-200"
          v-motion :initial="slideLeft.initial" :visibleOnce="slideLeft.visible">
          <div class="text-2xl px-5 py-2 heading">Прочее</div>
          <div class="text-xl px-8 text">
            <ul>
              <li class="py-1">Tailwind CSS, REST API</li>
              <li class="py-1">Git, Docker</li>
              <li class="py-1">Vite, опыт с Webpack</li>
              <li class="py-1">Базовые знания Python и SQL</li>
              <li class="py-1">Bun и небольшой опыт пользования линуксом (ubuntu wsl)</li>
              <li class="py-1">Конфигурирование nginx</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Suspense>
      <Fishes />
    </Suspense>
  </div>
  <div class="h-[200dvh] bg-dblue" id="stackMobile" v-if="isMobile">
    <div class="h-[50%] ">
      <div class="heading ml-[20%] z-40 text-2xl absolute bottom-[-87%]">В вебе как рыба в воде</div>
      <Suspense>
        <Fishes />
      </Suspense>
    </div>
    <div class="min-h-[50%] bg-black">
      <div class=" flex flex-col items-center ">
        <div class="heading text-orange clamp-[24px-5dvw-4xl] my-[10%] z-40 ">
          Стек технологий
        </div>
        <div class="bg-dblue w-[70%] rounded-3xl pb-2 text-black mb-[15%]" v-motion :initial="slideLeft.initial"
          :visibleOnce="slideLeft.visible">
          <div class="text-2xl px-5 py-2 heading">Основное</div>
          <div class="text-xl px-8 text">
            <ul>
              <li class="py-1">JavaScript, опыт с TypeScript, NodeJs, HTML, CSS</li>
              <li class="py-1">Vue3, Nuxt3, React</li>
              <li class="py-1">ElysiaJs(backend), SQLite</li>
            </ul>
          </div>
        </div>
        <div class="bg-dblue w-[70%] rounded-3xl pb-2 text-black " v-motion :initial="slideRight.initial"
          :visibleOnce="slideRight.visible">
          <div class="text-2xl px-5 py-2 heading">Прочее</div>
          <div class="text-xl px-8 text">
            <ul>
              <li class="py-1">Tailwind CSS, REST API</li>
              <li class="py-1">Git, Docker</li>
              <li class="py-1">Vite, опыт с Webpack</li>
              <li class="py-1">Базовые знания Python и SQL</li>
              <li class="py-1">Bun и небольшой опыт пользования линуксом (ubuntu wsl)</li>
              <li class="py-1">Конфигурирование nginx</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class=" h-[100dvh] ">
    <div class="h-[25%] bg-blue flex items-center">
      <div class="ml-[5%] text-5xl heading">
        Кто я
      </div>
    </div>
    <div class="flex flex-col min-h-[75%] bg-dblue items-center justify-center py-[5%]">
      <div
        class="w-[95%] 2xl:w-[60%] min-h-[300px] bg-notblack rounded-3xl  flex flex-col items-center justify-center p-[3%] text text-white text-xl"
        v-motion :initial="slideDown.initial" :visible="slideDown.visible">
        <div class="text text-white text-xl">
          Меня зовут Иван, мне 21 год и я начинающий веб разработчик. Имею больше скилов во frontend, но так же
          заинтересован в backend. Учусь на последнем курсе Лесотехнического университета. Больше года самостоятельно
          изучаю сферу и надеюсь реализовать себя в ней. В основном занимаюсь самообразованием, проходил несколько
          курсов от Hexlet. Имею английский уровня b2 и китайский hsk3. Другие мои пет
          проекты можно посмотреть
        </div>

        <a href="https://github.com/LisovskiyIvan" v-motion :initial="slideRight.initial" :visible="slideRight.visible"
          target="_blank"
          class=" text-2xl mt-[2%] text text-white hover:scale-105 duration-300 after:bg-orange after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">на
          моем github</a>
        <RouterLink v-motion :initial="slideLeft.initial" :visible="slideLeft.visible" to="/contact"
          class=" text mt-[3%] text-white text-xl hover:scale-105 duration-300 after:bg-orange after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
          Контакты</RouterLink>
      </div>

    </div>
  </div>
  <div class="fixed bottom-[5%] right-[2%] z-100 w-12 sm:w-16 hover:scale-110 duration-300 z-50">
    <a href="https://github.com/LisovskiyIvan" target="_blank"><img src="/img/github.png" alt="githublink"></a>
  </div>
</template>
