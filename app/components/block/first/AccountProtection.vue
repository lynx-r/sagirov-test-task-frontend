<script lang="ts" setup>
import Arrow from '~/assets/images/arrow.svg'
</script>

<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col h-full justify-between p-7 rounded-3xl bg-cover bg-no-repeat bg-center card nebo nebo--br"
      style="background-image: url('/assets/images/bg/account-protection.jpg')"
    >
      <div class="text-white text-xl">Защита учётных записей</div>
      <div
        class="-mb-12 xl:-mb-19 mt-4 ml-10 sm:-ml-6 xl:ml-8 h-40 w-40 lg:h-50 lg:w-50 xl:h-70 xl:w-70 -rotate-15"
      >
        <img
          src="/assets/images/devs/y-flash.png"
          class="w-full h-full object-contain"
        />
      </div>
    </div>
    <div class="flex justify-end -mt-8">
      <UButton class="h-8 rounded-xl">
        <Arrow filled />
      </UButton>
    </div>
  </div>
</template>

<style lang="css" scoped>
.nebo {
  --nb-r: 18px;
}
.card {
  --nb-h: 4px;
  --nb-w: 4px;
}
</style>
