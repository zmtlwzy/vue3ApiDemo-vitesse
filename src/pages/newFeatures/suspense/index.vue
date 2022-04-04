<script setup lang="ts">
import * as allComps from './components'
</script>

<template>
  <div class="grid-layout-2">
    <div class="col-span-2">
      <n-h2> Suspense Demo</n-h2>
    </div>
    <component :is="comp" v-for="comp in allComps" :key="comp.name" />
  </div>
</template>

<route lang="yaml">
meta:
  menuTitle: Suspense
</route>
