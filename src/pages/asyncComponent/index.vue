<script lang="tsx">
import { A, B } from './components'
import { createAsyncComponent } from './components/createAsyncComponents'

export default defineComponent({
  setup() {
    const AsyncCom = createAsyncComponent(() => import('./components/LargeImg.vue'))
    return () => (
      <div class="grid-layout-1/12">
        <n-h2>Set the network speed to slow3G and below in devtools</n-h2>
        <A />
        <B />
        <AsyncCom />
      </div>
    )
  },
})
</script>

<route lang="yaml">
meta:
  menuTitle: AsyncComponent
  menuOrderNo: 1000
</route>
