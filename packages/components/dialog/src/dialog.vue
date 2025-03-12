<template>
    <Teleport :to="appendTo">
        <Transition :name="ns.b('fade')">
            <SSOverlay mask v-show="model" :z-index="currentZIndex">
                <div :class="ns.b()" @click.self.stop="onClickMask" :style="style">
                    <DialogContent :fullScreen="fullscreen" :footer="footer" :showClose="showClose" :center="center"
                        :title="title">
                        <slot />

                        <template v-if="$slots.footer" #footer>
                            <slot name="footer" />
                        </template>
                    </DialogContent>
                </div>
            </SSOverlay>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import "../style/css"
import { useLockScreen, useNameSpace, useZIndex } from '@yx-ui/hooks';
import SSOverlay from '../../overlay';
import { dialogInjectionKey, DialogProps } from './dialog';
import { computed, CSSProperties, provide, watch } from "vue";
import DialogContent from "./dialog-content.vue";

defineOptions({
    name: "ss-dialog"
})

const props = withDefaults(defineProps<DialogProps>(), {
    appendTo: 'body',
    closeOnClickModal: true,
    closeOnPressEscape: true,
    width: 300,
    footer: true,
    lockScroll: true
})

const model = defineModel({
    default: false
})

const { currentZIndex, nextZIndex } = useZIndex()

const ns = useNameSpace('dialog')


const onClose = async () => {
    if (props.beforeClose) {
        const res = await props.beforeClose()
        if (!res) {
            return
        }
    }
    model.value = false
}

const onClickMask = async () => {
    if (props.closeOnClickModal) {
        onClose()
    }
}

watch(() => model.value, (val: boolean) => {
    if (val) {
        nextZIndex()
    }
})

const style = computed<CSSProperties>(() => {
    const style: CSSProperties = {}
    if (!props.fullscreen) {
        style['--dialog-width'] = props.width + 'px'
        if (props.top) {
            style['--dialog-top'] = props.top + 'px'
        }
    } else {
        style['--dialog-width'] = '100%'
    }

    if (props.center) {
        style['display'] = 'flex'
    }

    return style
})

if (props.lockScroll) {
    useLockScreen(model)
}

provide(dialogInjectionKey, {
    onCancel: props.onCancel,
    onConfirm: props.onConfirm,
    onClose
})

</script>

<style scoped></style>