<script setup lang="ts">
import type { Ref } from 'vue'
import * as Comps from './components'

const handleClick = (e: Ref<number>) => {
  isRef(e) && e.value++
}
const comp = $ref<any>()
watch(
  () => comp,
  (el) => {
    console.log(el?.count2, 'comp expose count2')
  },
)
</script>

<template>
  <div class="grid-layout-2">
    <Comps.Base />
    <Comps.UseContext ref="comp" msg="demo2" :num="123" @inc="handleClick">
      <template #default>
        slot_default
      </template>
      <template #other>
        slot_other
      </template>
    </Comps.UseContext>
  </div>
</template>

<route lang="yaml">
meta:
  menuTitle: Reactivity Transform
  menuOrderNo: 1700
</route>
