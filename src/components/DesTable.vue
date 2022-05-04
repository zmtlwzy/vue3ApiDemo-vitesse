<template>
  <table>
    <tr v-for="(item, i) in arr" :key="i">
      <td mr-1>
        {{ `${item[0]}:` }}
      </td>
      <td pl-2>
        {{ item[1] }}
      </td>
    </tr>
  </table>
</template>

<script setup lang="ts">
const props = defineProps<{
  varObj: Record<string, any>
}>()
function getVarNameStr(v: Record<string, any>) {
  return Object.entries(v)
}

const arr = computed(() => {
  return getVarNameStr(props.varObj)
})
</script>
