<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>
<script lang="ts" setup>
import { useNameSpace } from '@yx-ui/hooks';


defineOptions({
  name: 'ss-main',
})

const ns = useNameSpace('main')
</script>
