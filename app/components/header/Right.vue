<script lang="ts" setup>
import Cart from '~/assets/images/cart.svg'
import Heart from '~/assets/images/heart.svg'
import Search from '~/assets/images/search.svg'
</script>

<template>
  <div class="hidden md:flex gap-2">
    <Search class="text-5xl" :filled="true" />
    <Heart class="text-5xl" :filled="true" />
    <Cart class="text-5xl" :filled="true" />
  </div>
</template>
