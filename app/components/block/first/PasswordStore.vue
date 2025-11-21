<script lang="ts" setup>
import Arrow from '~/assets/images/arrow.svg'
</script>

<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col h-80 sm:h-full justify-between p-4 rounded-3xl bg-cover bg-no-repeat bg-center card nebo nebo--br"
      style="background-image: url('/assets/images/bg/account-protection.jpg')"
    >
      <div class="text-white text-xl z-10">Хранение паролей и seed-фраз</div>
      <div class="flex justify-center">
        <img
          class="-m-20"
          width="300"
          src="/assets/images/devs/password-store.png"
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
  --nb-r: 16px;
}
.card {
  --nb-h: 6px;
  --nb-w: 6px;
}
</style>
