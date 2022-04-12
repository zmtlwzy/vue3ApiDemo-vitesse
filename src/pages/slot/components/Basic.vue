<script lang="ts">
export default defineComponent({
  name: 'SlotBasic',
  setup() {
    const greetingMessage = ref('some text')
    return { greetingMessage }
  },
})
</script>

<template>
  <n-card title="slotBasicDemo">
    <slot :a="1" :msg="greetingMessage" />
    <slot name="other">
      <n-text>slot default content</n-text>
    </slot>
  </n-card>
</template>
