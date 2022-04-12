<script setup lang="ts">
import SlotBase from './components/Basic.vue'
import FunDemo from './components/RenderFunction.vue'
import TsxDemo from './components/TsxDemo.vue'
import DesTable from '#/src/components/DesTable.vue'
</script>

<template>
  <div grid-layout-1>
    <SlotBase v-slot="slotProps">
      <pre>{{ slotProps }}</pre>
    </SlotBase>
    <FunDemo>
      <template #foo="{x, y}">
        <DesTable :var-obj="{x, y}" />
      </template>
    </FunDemo>
    <TsxDemo />
  </div>
</template>

<route lang="yaml">
meta:
  menuTitle: Slots
  menuOrderNo: 650
</route>
