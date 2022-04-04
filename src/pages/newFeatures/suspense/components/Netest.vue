<script setup lang="ts">
import Top from '~/pages/asyncComponent/components/TopLevelAwaitComp.vue'
import asyncComp from '~/pages/asyncComponent/components/Delay.vue'
</script>

<template>
  <n-card title="Ignore children comp fallback">
    <n-space vertical align="center">
      <n-text>click refresh current page btn</n-text>
      <Suspense>
        <div>
          <Top />
          <div>
            <asyncComp />
          </div>
        </div>
        <template #fallback>
          <n-spin />
        </template>
      </Suspense>
    </n-space>
  </n-card>
</template>
