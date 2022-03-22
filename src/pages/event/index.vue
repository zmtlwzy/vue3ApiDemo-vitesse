<template>
  <div class="grid-layout-2">
      <EventBase />
      <EventModifiers />
      <EventModifiersUseTsx class="col-span-2" />
  </div>
</template>

<script setup lang="ts">
import { EventBase, EventModifiers, EventModifiersUseTsx } from './components'
</script>

<route lang="yaml">
meta:
  menuTitle: Event
  menuOrderNo: 600
</route>
