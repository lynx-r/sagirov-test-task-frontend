<script lang="ts" setup>
import type { MenuItem } from '~~/shared/types'

const { data } = await useAsyncData<{ records: MenuItem[] }>(
  'list-menu-items',
  () => $fetch('/api/list-menu-items'),
)
</script>

<template>
  <UHeader class="border-none relative backdrop-blur-none">
    <template #left>
      <NuxtLink to="/">
        <HeaderLeft class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>
    <UNavigationMenu
      color="neutral"
      variant="link"
      :items="data?.records"
      class="bg-gray-200 rounded-full px-2"
    >
      <template #item="{ item, active }">
        <div
          :class="[
            'px-4 py-2 transition-colors duration-200 block',
            {
              'bg-green-500 text-white rounded-full': active,
              'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200':
                !active,
            },
          ]"
        >
          {{ item.label }}
        </div>
      </template>
    </UNavigationMenu>
    <template #right>
      <HeaderRight />
    </template>

    <template #body>
      <UNavigationMenu
        :items="data?.records"
        orientation="vertical"
        class="-mx-2.5"
    /></template>
  </UHeader>
</template>
