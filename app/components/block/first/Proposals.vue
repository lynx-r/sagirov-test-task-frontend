<script lang="ts" setup>
import Arrow from '~/assets/images/arrow.svg'
import Cryptotag from '~/assets/images/devs/cryptotag.png'
import Secux from '~/assets/images/devs/secux.png'
import Trezor from '~/assets/images/devs/trezor.png'
import Yubikey from '~/assets/images/devs/yubikey.png'
import LogoWhite from '~/assets/images/logo-white.svg'

const devices = [
  {
    src: Secux,
    name: 'Аппаратный кошелёк SecuX Nifty NFT',
    price: '24 490 ₽',
  },
  {
    src: Cryptotag,
    name: 'Устройство для записи seed фразы Cryptotag Thor',
    price: '14 490 ₽',
  },
  {
    src: Yubikey,
    name: 'Аппаратный ключ Yubikey 5C Nano',
    price: '2 490 ₽',
  },
  {
    src: Trezor,
    name: 'Аппаратный кошелёк Trezor T Black',
    price: '8 490 ₽',
  },
]
</script>

<template>
  <div
    class="flex flex-col justify-between p-4 rounded-3xl bg-cover bg-no-repeat bg-center"
    style="background-image: url('/assets/images/bg/proposal.jpg')"
  >
    <div class="flex justify-between">
      <div>
        <UButton color="neutral" variant="outline"
          >Выгодные предложения</UButton
        >
      </div>
      <LogoWhite class="text-4xl" filled />
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="(dev, i) in devices"
        :key="i"
        class="flex items-center bg-white rounded-3xl p-2"
      >
        <img
          :src="dev.src"
          class="w-8 h-8 md:w-8 md:h-8 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
        />
        <div class="flex flex-col justify-between xl:ml-2">
          <div class="text-xs md:text-sm">{{ dev.name }}</div>
          <div class="flex justify-between text-xs md:text-sm">
            <div>{{ dev.price }}</div>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
