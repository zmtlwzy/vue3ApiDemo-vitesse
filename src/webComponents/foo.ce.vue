<template>
  <div :class="getClass" :style="getStyle">
    <slot>customElement</slot>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { isDark } from '~/composables/dark'

const getClass = computed(() => (isDark.value ? 'dark' : null))
const props = defineProps<{
  color?: string
  bgColor?: string
}>()

const getStyle = computed(() => {
  const { color, bgColor } = props
  const cssProp = {} as CSSProperties
  if (color)
    cssProp.color = color
  if (bgColor)
    cssProp['background-color'] = bgColor
  return cssProp
})
</script>

<style>
div {
  display: inline-block;
  padding: 1rem;
  background-color: #0960bd1a;
  border-radius: 5px;
}

div.dark {
  background-color: #63e2b726;
}
</style>
