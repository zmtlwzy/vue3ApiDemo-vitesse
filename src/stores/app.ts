import { acceptHMRUpdate, defineStore } from 'pinia'
import { useDemoStore } from './demo'
import { resetSharedState } from '~/composables'

export const useAppStore = defineStore('app', () => {
  const { count: refreshId, inc } = useCounter(0)
  const siderWidth = ref(210)
  const headerHeight = ref(60)

  function resetAllState() {
    refreshId.value++
    useDemoStore().$reset()
    resetSharedState()
  }

  return {
    siderWidth,
    headerHeight,
    refreshId,
    inc,
    resetAllState,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
