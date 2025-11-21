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
</script>

<template>
  <div class="flex flex-col justify-between bg-white p-4 rounded-3xl">
    <div class="relative">
      <div class="md:text-sm lg:text-lg xl:text-2xl">
        Интернет-магазин оборудования для защиты криптоактивов
      </div>
      <UButton class="absolute right-0 top-5 lg:top-6 xl:top-8"
        ><Arrow /> В каталог</UButton
      >
      <div class="md:text-xs lg:text-sm xl:text-lg mt-3">
        Сryptoro - официальный реселлер, самый большой выбор в России
      </div>
    </div>
    <div class="flex justify-between gap-4">
      <div class="flex gap-6">
        <div>
          <div class="text-2xl lg:text-2xl xl:text-4xl">10+</div>
          <div class="lg:text-xl">лет на рынке</div>
        </div>
        <div>
          <div class="text-2xl lg:text-2xl xl:text-4xl">50+</div>
          <div class="lg:text-xl">брендов</div>
        </div>
      </div>
      <div class="hidden items-center xl:flex mr-3">
        <div
          v-for="(dev, i) in devices"
          :key="i"
          class="w-16 h-16 border-2 border-white -mr-3 rounded-full bg-gray-200 flex items-center justify-center"
          :class="dev.classContainer"
        >
          <img :src="dev.src" :class="dev.classImg" />
        </div>
      </div>
    </div>
  </div>
</template>
