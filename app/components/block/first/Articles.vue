<script lang="ts" setup>
import Arrow from '~/assets/images/arrow.svg'
import Clip from '~/assets/images/clip.svg'
</script>

<template>
  <div
    class="flex flex-col h-60 sm:h-full justify-between bg-white p-4 rounded-3xl"
  >
    <div class="flex justify-between">
      <div>
        <UButton color="neutral" variant="outline"
          ><span class="hidden xl:inline">Актуальные статьи</span>
          <span class="xs:inline xl:hidden">Статьи</span></UButton
        >
      </div>
      <Clip class="text-4xl" filled />
    </div>
    <div class="flex justify-between items-end relative">
      <UButton color="neutral" variant="outline"
        ><Arrow filled />Читать</UButton
      >
      <img
        src="/assets/images/bg/articles.png"
        class="w-26 xl:w-60 absolute -bottom-4 -right-4 rounded-br-4xl"
      />
    </div>
  </div>
</template>
