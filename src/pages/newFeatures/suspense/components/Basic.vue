<script setup lang="ts">
import asyncComp from '~/pages/asyncComponent/components/Delay.vue'
</script>

<template>
  <n-card title="suspense basic">
    <n-space vertical align="center">
      <Suspense>
        <asyncComp />
        <template #fallback>
          loading...
        </template>
      </Suspense>
    </n-space>
  </n-card>
</template>
