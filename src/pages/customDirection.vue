<template>
  <n-space vertical>
    <n-slider v-model:value="pinPadding" :min="min" :max="max" :step="1" />
    <p ref="textEl" v-pin:[direction].a.b="pinPadding">
      v-pin
    </p>
  </n-space>
</template>

<route lang="yaml">
meta:
  menuTitle: CustomDirection
  menuOrderNo: 1500
</route>

<script lang="ts">
import { useAppStore } from '~/stores/app'

export default defineComponent({
  name: 'CustomDirective',
  setup() {
    const appStore = useAppStore()
    const pinPadding = ref<number>(appStore.siderWidth)
    const textEl = ref<HTMLElement>()
    const direction = ref<string>('left')
    const max = computed(() => {
      const w = textEl.value?.offsetWidth ?? 0
      return window.innerWidth - w
    })

    return {
      pinPadding,
      direction,
      max,
      textEl,
      min: appStore.siderWidth,
    }
  },
})
</script>
