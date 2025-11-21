<script setup>
import LogoName from '~/assets/images/logo-name.svg'
import Logo from '~/assets/images/logo.svg'
</script>

<template>
  <div class="flex gap-3 items-center">
    <Logo class="text-5xl" filled />
    <LogoName
      class="hidden sm:block w-52 mb-1.5"
      :font-controlled="false"
      filled
    />
  </div>
</template>
