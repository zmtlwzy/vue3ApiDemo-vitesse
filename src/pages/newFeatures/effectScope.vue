<template>
  <n-card :title="$options.name">
    <des-table :var-obj="{ counter, doubled }" />
    <template #action>
      <n-space>
        <n-button @click="counter++">
          add
        </n-button>
        <n-button @click="handleScope('on')">
          on
        </n-button>
        <n-button @click="handleScope('off')">
          off
        </n-button>
        <n-button @click="handleScope('stop')">
          stop
        </n-button>
        <n-button @click="handleScope('currentStop')">
          currentStop
        </n-button>
        <n-button @click="handleScope('scope2On')">
          scope2On
        </n-button>
      </n-space>
    </template>
  </n-card>
</template>

<script lang="ts">
import { promiseTimeout } from '@vueuse/core'
import { effectScope, getCurrentScope, onScopeDispose } from 'vue'

export default defineComponent({
  name: 'EffectScope',
  setup() {
    const counter = ref(1)
    const scope = effectScope() as any
    const scope2 = effectScope() as any
    const detachedScope = effectScope(true)

    console.log(scope, 'scope')
    console.log(scope2, 'scope2')
    console.log(scope?.parent === scope2?.parent)

    const state = scope.run(() => {
      const doubled = computed(() => counter.value * 2)

      watch(doubled, () => console.log(doubled.value))

      watchEffect(() => console.log('Count: ', doubled.value))
      onScopeDispose(() => {
        console.log('cleaned!')
      })
      return {
        doubled,
      }
    })

    detachedScope.run(() => {
      onScopeDispose(() => {
        console.log('detachedScope cleaned!')
      })
    })

    onUnmounted(async () => {
      console.log('unmounted')
      await promiseTimeout(2000)
      detachedScope.stop()
    })

    scope2.cleanups.push(() => {
      console.log('scope2 cleanups push')
    })
    scope.cleanups.push(() => {
      console.log('scope cleanups push')
    })

    currentScope()

    const handleScope = (keyName: 'on' | 'off' | 'stop' | 'currentStop' | 'scope2On') => {
      if (keyName === 'currentStop') {
        console.log(currentScope()?.stop())
        return
      }

      if (keyName === 'scope2On') {
        scope2.on()
        currentScope()
        return
      }

      scope[keyName]()
      const curScope = currentScope()
      console.log(curScope === scope, curScope === scope2)
    }

    function currentScope() {
      const s = getCurrentScope()
      console.log(s, 'current')
      return s
    }

    return {
      ...state,
      counter,
      handleScope,
    }
  },
})
</script>
