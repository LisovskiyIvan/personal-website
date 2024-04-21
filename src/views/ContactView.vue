<script setup lang="ts">

</script>


<template>
    <div class="h-[100dvh] bg-notblack flex justify-center items-center">
        <div class="bg-dblue w-[900px] h-[500px] rounded-3xl p-4 flex justify-center items-center">
            <div class="text-notblack text-5xl absolute">
                <div class="flex justify-center items-center py-2">
                    <span class="font-bold">mail &nbsp</span> daymedead.dev@gmail.com
                </div>
                <div class="flex justify-center items-center py-2">
                    <span class="font-bold">tg &nbsp</span>@daymedead
                </div>
            </div>
            <RouterLink to="/" class="relative font-semibold top-[45%] right-[43%] text-2xl hover:scale-105 duration-300 after:bg-black after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                    Обратно
            </RouterLink>
        </div>
    </div>
</template>