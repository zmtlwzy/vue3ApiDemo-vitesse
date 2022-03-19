<template>
  <div class="grid-layout-2">
    <div class="col-span-2">
      <BaseDemo />
    </div>
    <UseCssModule />
    <UseCssVars />
  </div>
</template>

<route lang="yaml">
meta:
  menuTitle: CssVar
  menuOrderNo: 1400
</route>

<script setup lang="ts">
import { BaseDemo, UseCssModule, UseCssVars } from './components'
</script>
