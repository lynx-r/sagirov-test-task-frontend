<script lang="ts" setup></script>

<template>
  <div class="mt-2 xs:-mt-2">
    <div class="text-4xl mb-6">Товары, которые покупают чаще всего</div>
    <div
      class="flex flex-col md:grid md:grid-cols-[1fr_2fr_1fr] gap-4 md:h-[700px]"
    >
      <!-- Колонка 1 -->
      <div class="flex flex-col md:grid gap-4">
        <BlockSecondWallets />
        <BlockSecondU2FTokens />
      </div>

      <!-- Колонка 2 (3 карточки) -->
      <!-- Карточки должны быть подогнаны по высоте под первый ряд -->
      <div class="flex flex-col md:grid gap-4 md:grid-rows-4">
        <BlockSecondSeedRecordDevs class="md:row-span-1" />
        <BlockSecondPopular class="md:row-span-2" />
        <BlockSecondWiresAndAdapters class="md:row-span-1" />
      </div>

      <!-- Колонка 3 -->
      <div class="flex flex-col md:grid gap-4">
        <BlockSecondAccessors />
        <BlockSecondCases />
      </div>
    </div>
  </div>
</template>
