<template>
  <div class="flex flex-col gap-2">
    <my-foo>Try toggle darkMode</my-foo>
    <my-foo color="white" bg-color="#adc59d" />
  </div>
</template>

<route lang="yaml">
meta:
  onlyClient: true
</route>

<script lang="ts">
import Foo from '~/webComponents/foo.ce.vue'

export default defineComponent({
  name: 'CustomElement',
  setup() {
    console.log(Foo.styles)
  },
})
</script>
