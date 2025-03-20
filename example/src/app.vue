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

    <button @click="validate">validate</button>
    <button @click="reset">reset</button>

    <SSTable :data="data">
        <SSTableColumn type="index"></SSTableColumn>
        <SSTableColumn prop="id" label="ID"></SSTableColumn>
        <SSTableColumn prop="lastName" label="LastName"></SSTableColumn>
        <SSTableColumn prop="age" label="Age" sortable></SSTableColumn>
        <SSTableColumn prop="visits" label="Visits"></SSTableColumn>
        <SSTableColumn prop="status" label="status"></SSTableColumn>
        <SSTableColumn prop="progress" label="progress"></SSTableColumn>
        <SSTableColumn prop="createdAt" label="createdAt">
            <template v-slot:default="{ row, column }">
                <span>{{ row[column.id] }}</span>
            </template>
        </SSTableColumn>
    </SSTable>


</template>

<script setup lang="ts">
import { SSButton, SSForm, SSFormItem, SSInput, SSSpace, SSSelect, SSSelectOption, SSTable, SSTableColumn } from '@yx-ui/components'
import { reactive, ref } from 'vue';
import { makeData } from './makeData'

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
</script>