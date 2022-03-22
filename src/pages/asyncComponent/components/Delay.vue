<script lang="tsx">
import type { DefineComponent } from 'vue'
import Gbasic from '~/components/GlobalBasic.vue'

export default defineAsyncComponent<DefineComponent<{}, {}, any>>(
  () =>
    new Promise((resolve) => {
      setTimeout(resolve, 4000, defineComponent({
        render: () => <Gbasic>show on mounted after 4000ms</Gbasic>,
      }))
    },
    ),
)
</script>
