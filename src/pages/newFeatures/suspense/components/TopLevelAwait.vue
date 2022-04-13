<template>
  <n-card title="TopLevelAwait">
    <n-space vertical align="center">
      <Suspense>
        <Top />
        <template #fallback>
          loading...
        </template>
      </Suspense>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
import Top from '~/pages/asyncComponent/components/TopLevelAwaitComp.vue'
</script>
