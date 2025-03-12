<template>
    <form :class="cls">
        <slot />
    </form>
</template>

<script setup lang="ts">
import "../style/css"
import { computed, provide, toRefs } from 'vue';
import { FormProp, Arrayable, formContextKey, FormItemContext, FormItemProp, useFormLabelWidth } from './form';
import { useNameSpace } from '@yx-ui/hooks';
import { ValidateFieldsError } from "async-validator";

defineOptions({
    name: 'ss-form'
})

const ns = useNameSpace('form')

const fields: FormItemContext[] = []

const props = withDefaults(defineProps<FormProp>(), {
    model: {}
})

const cls = computed(() => [
    ns.b(),
    ns.m(props.size),
    {
        [ns.m('inline')]: props.inline,
        [ns.m(`label-${props.labelPosition}`)]: props.labelPosition
    }
])

const getField = (prop: string): FormItemContext | undefined => {
    return fields.find(field => field.prop?.value === prop)
}

const addField = (field: FormItemContext): void => {
    fields.push(field)
}

const removeField = (field: FormItemContext): void => {
    if (field.prop) {
        fields.splice(fields.indexOf(field), 1)
    }
}

const resetFields = (properties?: Arrayable<FormItemProp>): void => {
    if (properties?.length) {
        properties.forEach(property => {
            if (property.prop) {
                const filed = fields.find(field => field.prop == property.prop)
                filed?.resetField(property)
            }
        })
    } else {
        console.log("---", fields)
        fields.forEach(field => field.resetField())
    }
}

const clearValidate = (properties?: Arrayable<FormItemProp>): void => {
    if (properties?.length) {
        properties.forEach(property => {
            if (property.prop) {
                const filed = fields.find(field => field.prop == property.prop)
                filed?.clearValidate()
            }
        })
    } else {
        fields.forEach(field => field.clearValidate())
    }
}

const validateField = (properties?: Arrayable<FormItemProp>) => {
    if (properties?.length) {
        properties.forEach(property => {
            if (property.prop) {
                const filed = fields.find(field => field.prop == property.prop)
                filed?.validate()
            }
        })
    } else {
        fields.forEach(field => field.validate())
    }
}

provide(formContextKey, {
    ...toRefs<FormProp>(props),
    getField,
    addField,
    removeField,
    resetFields,
    clearValidate,
    validateField,
    ...useFormLabelWidth()
})

const getValidateFields = (file?: FormItemProp) => {
    if (file) {
        return fields.filter(field => field.prop == file?.prop)
    }

    return fields
}
const doValidate = async (field?: FormItemProp) => {
    const validateFiles = getValidateFields(field)
    if (!validateFiles.length) return true
    let validationErrors: ValidateFieldsError = {}
    for (const field of validateFiles) {
        try {
            await field.validate();
        } catch (fields) {
            validationErrors = {
                ...validationErrors,
                ...(fields as ValidateFieldsError),
            }
        }
    }


    if (Object.keys(validationErrors).length === 0) return true
    return Promise.reject(validationErrors)
}

const validate = async (callback?: Function) => {
    try {
        const result = await doValidate()
        if (result == true) {
            await callback?.(true)
        }
        return result
    } catch (e) {
        if (e instanceof Error) throw e

        const invalidFields = e as ValidateFieldsError


        if (props.scrollToError) {
            scrollToField(Object.keys(invalidFields)[0])
        }

        await callback?.(false, invalidFields)

        return Promise.reject(invalidFields)
    }
}

const scrollToField = (prop: string) => {
    const field = fields.find(field => field.prop?.value == prop)
    if (field) {
        // field.$el?.scrollIntoView()
    }
}

defineExpose({
    validate,
    validateField,
    resetFields,
    scrollToField,
    clearValidate,
})
</script>

<style scoped></style>