<script setup lang="ts"></script>

<template>
  <div
    class="hero flex flex-col gap-4 p-8 h-full pb-34 relative bg-gray-200 rounded-3xl nebo nebo--bl"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BlockFirstCatalog />
      <BlockFirstProposals class="h-90" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <BlockFirstAccountProtection />
      <BlockFirstSocialNetworks />
      <BlockFirstArticles />
      <BlockFirstPasswordStore />
    </div>
    <div
      class="absolute ml-4 xs:ml-0 bottom-4 right-10 md:w-[10vw] lg:w-[12vw] xl:w-[18vw]"
    >
      <span class="lg:inline">
        Физические устройства из стали и титана
        <span class="block sm:hidden xl:inline"
          >надёжнее бумаги и облачных сервисов</span
        >
      </span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.nebo {
  --nb-r: 24px;
}
.hero {
  --nb-h: 52px;
  --nb-w: 70vw;
}
@media screen and (max-width: 430px) {
  /* Стили внутри этого блока применяются только если 
     устройство является экраном И ширина области просмотра 
     больше или равна 768 пикселям */
  .nebo {
    --nb-r: 0;
  }
}
</style>
