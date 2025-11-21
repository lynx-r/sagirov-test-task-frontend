<script lang="ts" setup>
import Arrow from '~/assets/images/arrow.svg'
import LockIcon from '~/assets/images/lock.svg'
</script>

<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col relative h-full p-4 rounded-3xl bg-gray-200 card nebo nebo--br"
    >
      <div class="flex justify-start h-full gap-2">
        <LockIcon class="text-xl mt-0.5" filled />
        <div class="flex flex-col justify-between">
          <div class="text-l">Устройства для записи seed</div>
          <div class="text-sm">
            Надежные устройства для хранения мнемонической фразы, необходимой
            для восстановления доступа к вашим средствам
          </div>
        </div>
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
