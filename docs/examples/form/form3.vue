<template>
    <ss-form :model="formModel" ref="form">
        <ss-form-item label="姓名" prop="userName" :rules="[
            { type: 'string', required: true, message: '名称必须填写', }
        ]">
            <ss-input v-model="formModel.userName" />
        </ss-form-item>
        <ss-form-item label="年龄" prop="userAge">
            <ss-input v-model="formModel.userAge" />
        </ss-form-item>
        <ss-form-item label="兴趣爱好" prop="avor">
            <ss-input v-model="formModel.avor" />
        </ss-form-item>
    </ss-form>

    <ss-space>
        <ss-button @click="onValidate">validate</ss-button>
        <ss-button @click="reset">reset</ss-button>
    </ss-space>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const formModel = reactive({
    userName: '',
    userAge: '',
    avor: ''
})

const form = ref()

const onValidate = () => {
    form.value.validate()
}

const reset = () => {
    form.value.resetFields()
}
</script>

<style scoped></style>