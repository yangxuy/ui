<template>
    <div :class="cls">

        <header :class="ns.m('title')">
            <slot name="header">
                <span role="heading">
                    {{ title }}
                </span>
            </slot>
        </header>

        <CloseIcon @click="onClose" :class="ns.m('close')" />

        <main>
            <slot></slot>
        </main>

        <div>
            <footer v-if="$slots.footer" :class="ns.e('footer')">
                <slot name="footer"></slot>
            </footer>
            <footer :class="ns.m('footer-btn')" v-if="onCancel || onConfirm">
                <SSButton v-if="onCancel" @click="_onCancel">取消</SSButton>
                <SSButton v-if="onConfirm" type="primary" @click="_onConfirm">确定</SSButton>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
import { SSButton } from "@yx-ui/components"
import { useNameSpace } from '@yx-ui/hooks';
import { computed, inject } from 'vue';
import CloseIcon from '../../icon/close.vue'
import { dialogInjectionKey } from "./dialog";

defineOptions({
    name: "dialog-content"
})

const props = defineProps<{
    fullScreen?: boolean,
    center?: boolean,
    title?: string,
    showClose?: boolean,
    footer?: boolean,
}>()

const ns = useNameSpace("dialog-content")

const cls = computed(() => [
    ns.b(),
    ns.is('dialog-center', props.center),
    ns.is('fullscreen', props.fullScreen),
])

const { onCancel, onConfirm, onClose } = inject(dialogInjectionKey, {})

const _onCancel = () => {
    if (onCancel) {
        onCancel()
    }

    onClose!()
}

const _onConfirm = () => {
    if (onConfirm) {
        onConfirm()
    }
    onClose!()
}
</script>

<style scoped></style>