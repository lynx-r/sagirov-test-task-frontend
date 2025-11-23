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
        <div class="text-l">Аксессуары</div>
      </div>
      <img
        src="/assets/images/devs/coinkit.png"
        class="rotate-300 absolute -bottom-18 sm:-bottom-10 xl:-bottom-18 xl:right-12"
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
  --nb-r: 18px;
}
.card {
  --nb-h: 4px;
  --nb-w: 4px;
}
</style>
