<template>
    <Teleport :to="appendTo">
        <Transition :name="ns.b('fade')">
            <SSOverlay v-show="model" :z-index="currentZIndex" @click="onClickModal">
                <div v-if="rendered" :class="cls" :style="style" @click.stop>
                    <header :class="ns.m('header')">
                        <slot name="header">
                            <span :class="ns.m('header-title')"> {{ title }}</span>
                        </slot>
                        <CloseIcon @click="onCloseDrawer" :class="ns.m('header-close')" v-if="showClose" />
                    </header>
                    <slot />
                </div>
            </SSOverlay>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import "../style/css"
import { SSOverlay } from '@yx-ui/components'
import { useNameSpace, useZIndex } from '@yx-ui/hooks';
import { DrawerProps } from './drawer';
import { computed, ref, watch } from 'vue';
import { addUnit } from '../../utils/utils';
import CloseIcon from '../../icon/close.vue'

const props = withDefaults(defineProps<DrawerProps>(), {
    appendTo: 'body',
    direction: 'rtl',
    size: '50%',
    showClose: true
})

defineOptions({
    name: "ss-drawer"
})

const rendered = ref(false)
const ns = useNameSpace('drawer')

const { currentZIndex } = useZIndex()

const model = defineModel<boolean>()

const emit = defineEmits(['close'])

const cls = computed(() => [
    ns.b(),
    ns.m(props.direction)
])

const isHorizontal = computed(
    () => props.direction === 'rtl' || props.direction === 'ltr'
)

const size = computed(() => addUnit(props.size)).value

const style = computed(() => (isHorizontal.value ? ({ width: size }) : ({ height: size })))

const onClickModal = () => {
    model.value = false
}

const onCloseDrawer = () => {
    model.value = false
    emit('close')

    if (props.destroyOnClose) {
        rendered.value = false
    }
}

watch(() => model.value, (val) => {
    if (val) {
        rendered.value = true
    }
})

</script>

<style scoped></style>