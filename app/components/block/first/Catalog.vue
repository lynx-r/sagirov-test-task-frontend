<script lang="ts" setup>
import Arrow from '~/assets/images/arrow.svg'
import Dev5 from '~/assets/images/devs/micro-sd.png'
import Dev6 from '~/assets/images/devs/password-store.png'
import Dev2 from '~/assets/images/devs/secux.png'
import Dev4 from '~/assets/images/devs/trezor.png'
import Dev1 from '~/assets/images/devs/y-flash.png'
import Dev3 from '~/assets/images/devs/yubikey.png'

const devices = [
  {
    src: Dev1,
    classContainer: 'z-50 flex items-center justify-center',
    classImg: 'h-11 w-11 -rotate-10',
  },
  {
    src: Dev2,
    classContainer: 'z-40',
    classImg: 'h-12 w-12',
  },
  {
    src: Dev3,
    classContainer: 'z-30',
    classImg: 'h-9 w-9',
  },
  {
    src: Dev4,
    classContainer: 'z-20',
    classImg: 'h-9 w-9 rotate-30',
  },
  {
    src: Dev5,
    classContainer: 'z-10',
    classImg: 'h-11 w-11',
  },
  {
    src: Dev6,
    classContainer: 'z-0',
    classImg: 'h-11 w-11',
  },
]

const { $viewport } = useNuxtApp()
const lessThanDesktop = ref(false)
watch(
  () => $viewport.isLessThan('desktop'),
  (newBreakpoint) => {
    lessThanDesktop.value = newBreakpoint
    console.log('New breakpoint:', newBreakpoint)
  },
  { immediate: true },
)
</script>

<template>
  <div class="flex flex-col justify-between bg-white p-7 rounded-3xl">
    <div class="mb-4">
      <div :class="{ 'flex items-end': !lessThanDesktop }">
        <UButton
          v-if="lessThanDesktop"
          size="xs"
          class="float-right flex items-center justify-center whitespace-nowrap"
          ><Arrow /> В каталог</UButton
        >
        <h1 class="text-lg md:text-sm lg:text-lg xl:text-4xl leading-tight">
          Интернет-магазин оборудования для защиты криптоактивов
        </h1>
        <UButton
          v-if="!lessThanDesktop"
          class="mb-2 flex items-center justify-center whitespace-nowrap"
          ><Arrow /> В каталог</UButton
        >
      </div>
      <!-- <UButton class="absolute right-0 top-5 lg:top-6 xl:top-8" -->
      <!-- ><Arrow /> В каталог</UButton -->
      <!-- > -->
      <div class="text-sm md:text-xs lg:text-sm xl:text-2xl w-[70%] mt-3">
        Сryptoro - официальный реселлер, самый большой выбор в России
      </div>
    </div>
    <div class="flex justify-between gap-4">
      <div class="flex gap-16">
        <div>
          <div class="text-2xl lg:text-2xl xl:text-6xl">10+</div>
          <div class="lg:text-xl">лет на рынке</div>
        </div>
        <div>
          <div class="text-2xl lg:text-2xl xl:text-6xl">50+</div>
          <div class="lg:text-xl">брендов</div>
        </div>
      </div>
      <div class="hidden items-center xl:flex mr-3">
        <div
          v-for="(dev, i) in devices"
          :key="i"
          class="w-18 h-18 border-2 border-white -mr-3 rounded-full bg-gray-200 flex items-center justify-center"
          :class="dev.classContainer"
        >
          <img :src="dev.src" :class="dev.classImg" />
        </div>
      </div>
    </div>
  </div>
</template>
