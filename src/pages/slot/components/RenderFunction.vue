<script lang="ts">
import { NCard } from 'naive-ui'
export default defineComponent({
  setup(_, { slots }) {
    const { x, y } = useMouse()
    return () => h(NCard, { title: 'RenderFunctionDemo' }, () => [
      slots.default?.() || 'default slot',
      slots.foo?.({ x, y }),
    ],
    )
  },
})
</script>
