<script lang="ts" setup>
import type { OurAdvantage } from '~~/shared/types'

const { data } = await useAsyncData<{ records: OurAdvantage[] }>(
  'advantages',
  () => $fetch('/api/list-advantages'),
)
</script>

<template>
  <div class="flex flex-col lg:flex-row justify-between gap-4 mt-4">
    <UPageCTA
      v-for="item in data?.records"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :links="item.links"
      :orientation="item.orientation"
      class="w-full"
    >
      <img :src="item.image_url" />
    </UPageCTA>
  </div>
</template>
