<script lang="tsx">
import Gbasic from '~/components/GlobalBasic.vue'
export default defineAsyncComponent<any>(
  () =>
    new Promise((resolve) => {
      setTimeout(resolve, 4000, defineComponent({
        render: () => <Gbasic>show on mounted after 4000ms</Gbasic>,
      }))
    },
    ),
)
</script>
