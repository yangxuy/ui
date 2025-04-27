<template>
    <div ref="scrollBox" :class="cls" :style="style">
        <div :style="{
            height: `${totalSize}px`,
            width: '100%',
            position: 'relative',
        }">
            <div v-for="virtualRow in virtualRows" :key="virtualRow.index" :data-index="virtualRow.index"
                :ref="measureElement" :style="{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: `translateY(${virtualRow?.start ?? 0}px)`,
                }">
                <slot :row="data[virtualRow.index]" :index="virtualRow.index" />
            </div>
        </div>
        <div ref="loadBox">
            {{ hasMore ? loading ? '正在加载。。。' : '加载更多。。。' : '没有更多了' }}
        </div>
    </div>
</template>


<script setup lang="ts">
import { ListProps } from './list';
import { computed, CSSProperties, onMounted, onUnmounted, ref } from 'vue'
import { useNameSpace } from '@yx-ui/hooks';
import { useVirtualizer } from '@tanstack/vue-virtual'

const scrollBox = ref()

defineOptions({
    name: 'ss-list'
})

const loadBox = ref<HTMLDivElement>()
// 加载状态
const loading = ref(false)

const ns = useNameSpace('list')

const cls = computed(() => [
    ns.b()
])

const emits = defineEmits(['loadMore'])

const props = withDefaults(defineProps<ListProps>(), {
    size: 50,
    resize: false,
    hasMore: true,
    direction: 'vertical'
})

const style = computed<CSSProperties>(() => {
    let { height, width } = props
    return {
        height: height ? height + 'px' : '100%',
        width: width ? width + 'px' : '100%',
        overflow: 'auto',
    }
})

const options = computed(() => {
    return {
        count: props.data.length,
        estimateSize: (index: number) => typeof props.size == 'function' ? props.size(index) : props.size,
        getScrollElement: () => scrollBox.value
    }
})

const state = useVirtualizer(options)

const virtualRows = computed(() => state.value.getVirtualItems())

const totalSize = computed(() => state.value.getTotalSize())

const measureElement = (el: Element) => {
    if (!el || !props.resize) {
        return
    }

    state.value.measureElement(el)

    return undefined
}

const loadMore = async () => {
    if (loading.value && !props.hasMore) return
    loading.value = true
    await props.loadMore()
    loading.value = false
}

const ob = new IntersectionObserver(async (entries) => {
    if (entries[0].isIntersecting) {
        loadMore()
    }
}, {
    root: null, // 相对于视口
    rootMargin: '10px',
    threshold: 0.1,
})

onMounted(() => {
    ob.observe(loadBox.value!)
})

onUnmounted(() => {
    ob.unobserve(loadBox.value!)
    ob.disconnect()
})
</script>
