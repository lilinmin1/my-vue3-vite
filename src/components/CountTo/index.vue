<template>
  <span :style="{ color }">
    {{ value }}
  </span>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, watchEffect, unref, onMounted, watch } from 'vue';
  // useTransition 值之间的过渡
  // 为了简单转换，提供要观看的数字源值。更改后，输出将转换为新值
  import { useTransition, TransitionPresets } from '@vueuse/core';
  import { isNumber } from '../../utils/is';

  const props = {
    startVal: { type: Number, default: 0 },
    endVal: { type: Number, default: 2021 },
    duration: { type: Number, default: 1500 },
    autoplay: { type: Boolean, default: true },
    decimals: {
      type: Number,
      default: 0,
      validator(value: number) {
        return value >= 0;
      },
    }, // 保存几位数
    prefix: { type: String, default: '' },  //前置值
    suffix: { type: String, default: '' }, // 后置值
    separator: { type: String, default: ',' },
    decimal: { type: String, default: '.' },
    /**
     * font color
     */
    color: { type: String },
    /**
     * Turn on digital animation
     */
    useEasing: { type: Boolean, default: true },
    /**
     * Digital animation
     */
    transition: { type: String, default: 'linear' },
  };

  export default defineComponent({
    name: 'CountTo',
    props,
    emits: ['onStarted', 'onFinished'],
    setup(props, { emit }) {
      const source = ref(props.startVal);
      const disabled = ref(false);
      let outputValue = useTransition(source);

      // unref ==> val = isRef(val) ? val.value : val
      const value = computed(() => formatNumber(unref(outputValue)));

      // 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新运行该函数
      watchEffect(() => {
        source.value = props.startVal;
      });

      // 使用数据侦听多个源
      watch([() => props.startVal, () => props.endVal], () => {
        if (props.autoplay) {
          start();
        }
      });

      onMounted(() => {
        props.autoplay && start();
      });

      function start() {
        run();
        source.value = props.endVal;
      }

      function reset() {
        source.value = props.startVal;
        run();
      }

      function run() {
        outputValue = useTransition(source, {
          disabled,
          duration: props.duration,//持续时间
          onFinished: () => emit('onFinished'),
          onStarted: () => emit('onStarted'),
          ...(props.useEasing ? { transition: TransitionPresets[props.transition] } : {}),
        });
      }

      function formatNumber(num: number | string) {
        if (!num) {
          return '';
        }
        const { decimals, decimal, separator, suffix, prefix } = props;
        num = Number(num).toFixed(decimals);
        num += '';

        const x = num.split('.');
        let x1 = x[0];
        const x2 = x.length > 1 ? decimal + x[1] : '';

        // 数字转 千分位显示
        const rgx = /(\d+)(\d{3})/;
        if (separator && !isNumber(separator)) {
          while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + separator + '$2');
          }
        }
        return prefix + x1 + x2 + suffix;
      }

      return { value, start, reset };
    },
  });
</script>
