<template>
  <aside :class="ns.b()" :style="style">
    <slot />
  </aside>
</template>
<script lang="ts" setup>
import { useNameSpace } from '@yx-ui/hooks'
import { computed } from 'vue'

import type { CSSProperties } from 'vue'

defineOptions({
  name: 'ss-aside',
})

const props = defineProps<{
  width: string
}>()

const ns = useNameSpace('aside')

const style = computed(
  () =>
    (props.width ? ns.cssVarBlock({ width: props.width }) : {}) as CSSProperties
)
</script>
