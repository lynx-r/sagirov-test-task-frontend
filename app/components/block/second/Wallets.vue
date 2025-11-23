<script lang="ts" setup>
import Arrow from '~/assets/images/arrow.svg'
import LockIcon from '~/assets/images/lock.svg'
</script>

<template>
  <div class="flex flex-col h-55 sm:h-full">
    <div
      class="flex flex-col relative h-full justify-between p-4 rounded-3xl bg-gray-200 card nebo nebo--br"
    >
      <div class="flex justify-start items-center gap-2">
        <LockIcon class="text-xl" filled />
        <div class="text-l">Аппаратные кошельки</div>
      </div>
      <img
        src="/assets/images/devs/ledger.png"
        class="rotate-20 absolute right-20 sm:-right-2 xl:right-16 sm:-bottom-18 xl:-bottom-28 w-50 xl:w-70"
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
