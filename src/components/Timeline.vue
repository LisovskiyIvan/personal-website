<script setup lang="ts">
const skills = {
  start: ["HTML", "CSS", "JS", "docker", "nodejs"],
  first: ["Vue", "Nuxt", "Tailwind CSS", "REST API"],
};
</script>

<template>
  <div class="min-h-[100dvh] flex justify-center bg-blue text-black text">
    <ul
      className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical w-[70%] py-[5%]"
    >
      <li>
        <div
          className="timeline-start md:text-end mb-10 mt-5 text-white bg-black rounded-xl p-3 mr-5"
        >
          <div className="text-lg heading font-black">Начало</div>
          Больше года назад начал заинтересовался веб девом, html css js как
          стандарт новичка. Написал свой первый докер файл до того, как узнал
          что такое nodejs и package.json(конечно оно не сработало и пришлось
          узнать). Сделали с другом конвертер валют(я только фронтенд), ничего
          интересного.
          <div className="text-lg heading font-black my-1">
            Использованные технологии
          </div>
          <div
            className="badge badge-primary badge-outline mx-1 "
            v-for="(item, index) in skills.start"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div
          className="timeline-end mb-10 text-white bg-black rounded-xl p-3 ml-5 "
        >
          <div className="text-lg heading font-black ">Первый фреймворк</div>
          Посмотрев на react и vue, мне больше понравился vue. Посмотрел доки,
          посмотрел nuxt - решил писать на nuxt (ошибка). Идея сайта для
          просмотра аниме - в итоге ничего особого не вышло, дальше верстки дело
          не зашло (оно и не удивительно, слишком мало знаний).
          <div className="text-lg heading font-black my-1">
            Использованные технологии
          </div>
          <div
            className="badge badge-primary badge-outline mx-1 "
            v-for="(item, index) in skills.first"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div
          className="timeline-start md:text-end mb-10 text-white bg-black rounded-xl p-3 mr-5"
        >
          <div className="text-lg heading font-black">Больше фреймворков</div>
          Рынок труда заставил начать пользоваться react. К этому моменту я уже
          дошел до использованния TypeScript. Первый опыт использованния react
          после vue был довольно странным, много вопросов и еще меньше ответов. Первый пет проект, который не так уж и плох это <span>Dictionarwhy</span>. П
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div
          className="timeline-end mb-10 text-white bg-black rounded-xl p-3 ml-5"
        >
          <div className="text-lg heading font-black">Не только фронтенд</div>
          iPhone is a line of smartphones produced by Apple Inc. that use
          Apple's own iOS mobile operating system. The first-generation iPhone
          was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since
          then, Apple has annually released new iPhone models and iOS updates.
          As of November 1, 2018, more than 2.2 billion iPhones had been sold.
          As of 2022, the iPhone accounts for 15.6% of global smartphone market
          share
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div
          className="timeline-start md:text-end mb-10 text-white bg-black rounded-xl p-3 mr-5"
        >
          <div className="text-lg heading font-black">И вот я тут</div>
          The Apple Watch is a line of smartwatches produced by Apple Inc. It
          incorporates fitness tracking, health-oriented capabilities, and
          wireless telecommunication, and integrates with iOS and other Apple
          products and services
        </div>
      </li>
      <hr />
    </ul>
  </div>
</template>
