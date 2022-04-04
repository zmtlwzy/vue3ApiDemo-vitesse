<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'
const props = defineProps<{ delay?: number }>()
await promiseTimeout(props.delay ?? Math.random() * 2000)
const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
const data = await res.json()
</script>

<template>
  <pre>{{ data }}</pre>
</template>
