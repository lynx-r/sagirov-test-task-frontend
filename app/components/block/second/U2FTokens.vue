<script lang="ts" setup>
import Arrow from '~/assets/images/arrow.svg'
import LockIcon from '~/assets/images/lock.svg'
</script>

<template>
  <div class="flex flex-col h-55 sm:h-full">
    <div
      class="flex flex-col relative h-full p-4 rounded-3xl bg-gray-200 card nebo nebo--br"
    >
      <div class="flex justify-start items-center gap-2">
        <LockIcon class="text-xl" filled />
        <div class="text-l">U2F-токены</div>
      </div>
      <img
        src="/assets/images/devs/u2f-token.png"
        class="rotate-300 absolute bottom-8 xl:bottom-14"
        width="320"
        alt=""
      />
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
