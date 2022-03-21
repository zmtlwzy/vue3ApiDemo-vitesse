<template>
  <n-card :title="$options.name">
    <div class="grid-layout-2 mt-5">
      <n-card title="useVshow">
        <n-tabs type="line">
          <n-tab-pane
            v-for="item in componentArr"
            :key="item.name"
            :name="item.name"
            display-directive="show"
          >
            <component :is="item" />
          </n-tab-pane>
        </n-tabs>
      </n-card>
      <n-card title="useKeepAlive">
        <n-space vertical>
          <n-space>
            <n-button-group>
              <n-button
                v-for="(item, index) in componentArr"
                :key="index"
                :ghost="currentTab === item.name ? false : true"
                @click="handleClick(item.name)"
                type="primary"
              >{{ item.name }}</n-button>
            </n-button-group>
          </n-space>
          <keep-alive>
            <component :is="componentArr.find(i => i.name === currentTab)" />
          </keep-alive>
        </n-space>
      </n-card>
    </div>
  </n-card>
</template>

<script lang="tsx">
import { common } from '~/composables';

const lifeCycleItemA = defineComponent({
  name: 'LifeCycleItemA',
  setup() {
    const { count, add } = common();

    onActivated(() => {
      console.log('onActivated in LifeCycleA');
      // make error
      throw new Error('some error');
    });
    onDeactivated(() => {
      console.log('onDeactivated in LifeCycleA');
    });
    return {
      count,
      add
    };
  },
  render() {
    return (
      <n-space vertical>
        {this.count}
        <n-button type="primary" onClick={this.add}>
          +
        </n-button>
      </n-space>
    );
  }
});

const lifeCycleItemB = defineComponent({
  name: 'LifeCycleItemB',
  setup() {
    const { count2, add } = common();

    onActivated(() => {
      console.log('onActivated in LifeCycleA');
      // make error
      throw new Error('some error');
    });
    onDeactivated(() => {
      console.log('onDeactivated in LifeCycleA');
    });
    return {
      count2,
      add
    };
  },
  render() {
    return (
      <n-space vertical>
        {this.count2}
        <n-button type="primary" onClick={this.add}>
          +
        </n-button>
      </n-space>
    );
  }
});

const lifeCycleItemC = defineComponent({
  name: 'LifeCycleItemC',
  setup() {
    const { count3, add } = common();

    onActivated(() => {
      console.log('onActivated in LifeCycleA');
      // make error
      throw new Error('some error');
    });
    onDeactivated(() => {
      console.log('onDeactivated in LifeCycleA');
    });
    return {
      count3,
      add
    };
  },
  render() {
    return (
      <n-space vertical>
        {this.count3}
        <n-button type="primary" onClick={this.add}>
          +
        </n-button>
      </n-space>
    );
  }
});

const componentArr = [lifeCycleItemA, lifeCycleItemB, lifeCycleItemC];
export default defineComponent({
  name: 'LifeCycle',
  components: {
    lifeCycleItemA,
    lifeCycleItemB,
    lifeCycleItemC
    // KeepAlive,
  },
  setup() {

    const currentTab = ref<string>(lifeCycleItemA.name);

    // LifeCycle
    onBeforeMount(() => {
      console.log('onBeforeMount');
    });
    onMounted(() => {
      console.log('onMounted');
    });
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    });
    onUpdated(() => {
      console.log('onUpdated');
    });
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    });
    onErrorCaptured((err, vm, info) => {
      console.log('onErrorCaptured', err, vm, info);
      return false;
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    onRenderTracked(({ key, target, type }) => {
      console.log('onRenderTracked', key, target, type);
    });
    onRenderTriggered(({ key, target, type }) => {
      console.log('onRenderTriggered', key, target, type);
    });

    const handleClick = (name: any) => {
      currentTab.value = name;
    };

    return {
      // count,
      // add,
      componentArr,
      handleClick,
      currentTab
    };

  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  }
});
</script>

<route lang="yaml">
meta:
  menuTitle: LifeCycle
  menuOrderNo: 900
</route>
