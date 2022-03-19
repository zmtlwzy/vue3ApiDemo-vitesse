<template>
  <n-card title="Composition Api Demo">
    <n-space vertical align="center">
      <des-table :var-obj="{ pageX, pageY }" />
      <des-table :var-obj="{ screenX, screenY }" />
      <des-table :var-obj="{ halfX, halfY }" />
    </n-space>
  </n-card>
</template>

<route lang="yaml">
meta:
  menuTitle: UseHook
  menuOrderNo: 900
</route>

<script setup lang="ts">
import { useHalfPosition, useMousePosition, useScreenPosition } from '~/composables'

const { pageX, pageY } = useMousePosition()
const { screenX, screenY } = useScreenPosition()
const { halfX, halfY } = useHalfPosition(pageX)
</script>
