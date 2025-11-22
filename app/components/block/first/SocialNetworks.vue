<script lang="ts" setup>
import LogoWhite from '~/assets/images/logo-white.svg'
import Telegram from '~/assets/images/telegram.svg'
import Youtube from '~/assets/images/youtube.svg'
</script>

<template>
  <div
    class="flex flex-col h-80 sm:h-full justify-between p-7 rounded-3xl bg-cover bg-no-repeat bg-center"
    style="background-image: url('/assets/images/bg/social-networks.jpg')"
  >
    <div class="flex justify-between">
      <div>
        <UButton color="neutral" variant="outline">Социальные сети </UButton>
      </div>
      <LogoWhite class="text-4xl" filled />
    </div>
    <div class="flex justify-between">
      <div class="flex gap-2">
        <Telegram class="text-4xl" filled />
        <Youtube class="text-4xl" filled />
      </div>
      <div
        class="sm:hidden xl:block text-green-500 bg-white rounded-full px-3 py-2"
      >
        shop@cryptoro.ru
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.nebo {
  --nb-r: 16px;
}
.card {
  --nb-h: 6px;
  --nb-w: 6px;
}
</style>
