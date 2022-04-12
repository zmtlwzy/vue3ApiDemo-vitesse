<script lang="tsx">
interface NumObj {
  a: number
  b: number
}

const SlotsComp = defineComponent({
  setup(_, { slots }) {
    const state = reactive<NumObj>({
      a: 1,
      b: 1,
    })
    const el = ref<HTMLElement>()
    const tsx_default = () => <span style={{ margin: '0 5px' }}>default</span>
    const handleClick = () => {
      state.a *= 2
      state.b += 2
    }
    return (): JSX.Element => (
      <n-card ref={el} title="tsxDemo">
        <n-space vertical align="center">
          {slots.default?.() || tsx_default()}
          {slots.test?.({
            a: state.a,
            b: state.b,
          })}
          {el.value instanceof HTMLElement ? `offsetHeight:${el.value?.offsetHeight}px` : ''}
          <n-button type="primary" onClick={handleClick}>
            click
          </n-button>
        </n-space>
      </n-card>
    )
  },
})

export default defineComponent({

  setup() {
    const slots = {
      // default: () => <div>default slot</div>,
      test: ({ a, b }: NumObj) => {
        return <des-table varObj={{ a, b }}>666</des-table>
      },
    }

    return () => <SlotsComp v-slots={slots} />
  },
})
</script>
