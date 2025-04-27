<template>
    <SSSpace>
        <SSButton @click="onPosition('left')">Left</SSButton>
        <SSButton @click="onPosition('right')">Right</SSButton>
        <SSButton @click="onPosition('top')">Top</SSButton>
    </SSSpace>
    <SSForm :model="model" ref="formRef" :labelPosition="position">
        <SSFormItem prop="a" label="姓名" :rules="[{ type: 'string', required: true, message: '姓名必须填写' }]">
            <SSInput v-model="model.a" placeholder="SSInput" clearable></SSInput>
        </SSFormItem>

        <SSFormItem prop="b" label="姓名11111" :rules="[{ type: 'string', required: true, message: '姓名必须填写' }]">
            <SSSelect v-model="model.b" multiple>
                <SSSelectOption label="js" value="1212"></SSSelectOption>
                <SSSelectOption label="jave" value="222"></SSSelectOption>
            </SSSelect>
        </SSFormItem>
    </SSForm>

    <SSSpace>
        <button @click="validate">validate</button>
        <button @click="reset">reset</button>
    </SSSpace>

    <SSTable :data="data" ref="table" @change-select="onChangeSelect">
        <SSTableColumn type="selection"></SSTableColumn>
        <SSTableColumn type="index"></SSTableColumn>
        <SSTableColumn prop="id" label="ID" :width="120" fixed="left"></SSTableColumn>
        <SSTableColumn prop="lastName" label="LastName" sortable :sortingFn="customSortByLength" :width="120" />
        <SSTableColumn prop="age" label="Age" fixed="left"></SSTableColumn>
        <SSTableColumn prop="visits" label="Visits"></SSTableColumn>
        <SSTableColumn prop="status" label="status"></SSTableColumn>
        <SSTableColumn prop="progress" label="progress"></SSTableColumn>
        <SSTableColumn prop="createdAt" label="createdAt" fixed="right">
            <template v-slot="{ row, column }">
                <span>{{ formateData(row[column.id]) }}</span>
            </template>
        </SSTableColumn>
    </SSTable>

    <button @click="onToggleColumn">toggle column</button>
    <SSInput @input="onInput"></SSInput>

    <SSList :data="sentences" resize height="400" width="400" :loadMore="loadMore">
        <template v-slot="{ row, index }">
            <div>{{ index }}</div>
            <div>{{ row }}</div>
        </template>
    </SSList>

    <button @click="closeDemo">测试1</button>
    <div v-if="show" :ref="measureElement">测试</div>

    <SSCollapse>
        <div v-if="collapseOpen">这里是测试面板</div>
    </SSCollapse>

    <button @click="onCollapse">折叠面板</button>
</template>

<script setup lang="ts">
import { SSButton, SSForm, SSFormItem, SSInput, SSSpace, SSSelect, SSSelectOption, SSTable, SSTableColumn, SSList, SSCollapse } from '@yx-ui/components'
import { reactive, ref } from 'vue';
import { makeData } from './makeData'

const show = ref(true)

const dom = ref()
const closeDemo = () => {
    show.value = !show.value
}

const measureElement = (el) => {
    if (!dom.value) {
        dom.value = el
    }

}
const position = ref('left')

const onPosition = (po: string) => {
    position.value = po
}

const formRef = ref()

const model = reactive({
    a: "",
    b: [],
})

const validate = () => {
    formRef.value.validate()
}

const reset = () => {
    formRef.value.resetFields()
}

const data = ref(makeData(10))

const table = ref()

const onToggleColumn = () => {
    table.value.toggleColumn('status')
}

// ✅ 自定义排序函数（按字符串长度排序）
const customSortByLength = (rowA: string, rowB: string) => {
    return rowA.length - rowB.length;
};

const onChangeSelect = (selection: any) => {
    console.log(selection)
}

const onInput = (e: any) => {
    table.value.filterColumn('lastName', e)
}

const formateData = (time: Date) => {
    return time.getTime()
}

import { generateSentences } from './utils'

const sentences = ref<any>([])

sentences.value = generateSentences(10)

const loadMore = async () => {
    await new Promise((rs) => {
        setTimeout(() => {
            sentences.value.push(...generateSentences(10))
            rs(1)
        }, 2000)
    })
}


const collapseOpen = ref(false)
const onCollapse = () => {
    collapseOpen.value = !collapseOpen.value
}
</script>