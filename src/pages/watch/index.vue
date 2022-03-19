<template>
  <div class="grid-layout-2">
    <div class="col-span-2">
      <n-h2>
        Watch Demo
        <n-text depth="3" class="my-$n-h text-sm">
          (Open console)
        </n-text>
      </n-h2>
    </div>
    <component :is="comp" v-for="comp in allComps" :key="comp.name" />
  </div>
</template>

<script setup lang="ts">
import * as allComps from './components'
</script>

<route lang="yaml">
meta:
  menuTitle: Watch
  menuOrderNo: 400
</route>
