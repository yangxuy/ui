<template>
    <component :is="tag" :class="cls" @click="handleClick" v-loading="loading">
        <span v-if="$slots.default">
            <slot />
        </span>
    </component>
</template>

<script lang="ts" setup>
import '../style/css'
import { computed } from "vue";
import { useNameSpace } from "@yx-ui/hooks";
import { buttonEmits, ButtonProps } from './button';
import { vLoading } from '../../loading';

defineOptions({
    name: 'ss-button'
})

const props = withDefaults(defineProps<ButtonProps>(), {
    size: "",
    tag: "button",
    type: '',
    plain: false,
    disabled: false
})

const emit = defineEmits(buttonEmits)

const ns = useNameSpace("button");

const cls = computed(() => [
    ns.b(),
    ns.m(props.type),
    ns.m(props.size),
    ns.is('plain', props.plain),
    ns.is('disabled', props.disabled),
    ns.is('round', props.round),
    ns.is('circle', props.circle),
    ns.is('loading', props.loading),
])

const handleClick = (evt: MouseEvent) => {
    if (props.disabled) {
        evt.stopPropagation()
        return
    }
    emit('click', evt)
}
</script>