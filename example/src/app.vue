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
</template>

<script setup lang="ts">
import { SSButton, SSForm, SSFormItem, SSInput, SSSpace, SSSelect, SSSelectOption } from '@yx-ui/components'
import { reactive, ref } from 'vue';

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
</script>