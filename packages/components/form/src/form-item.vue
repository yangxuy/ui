<template>
    <div ref="formItemRef" :class="cls">
        <slot name="label">
            <FormLabel is-auto-width :is-required="isRequired">
                <div :class="ns.e('label')">{{ label }}</div>
            </FormLabel>
        </slot>
        <div :class="ns.m('content')">
            <slot></slot>
            <Transition name="fade">
                <slot name="error" v-if="shouldShowError">
                    <div :class="ns.m('error')">{{ validateMessage }}</div>
                </slot>
            </Transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, computed, onMounted, toRefs, reactive, onBeforeUnmount, ref, nextTick, useSlots, provide } from 'vue';
import { formContextKey, FormItemContext, FormItemProp, FormItemRule, FormValidateFailure, FormItemValidateState, formItemContextKey } from './form';
import { deepCopy } from '../../utils/utils';
import AsyncValidator from 'async-validator'
import { useNameSpace } from '@yx-ui/hooks';
import FormLabel from './form-label.vue'

defineOptions({
    name: 'ss-form-item'
})

const ns = useNameSpace('form-item')

const props = withDefaults(defineProps<FormItemProp>(), {
})

const slots = useSlots()
const validateMessage = ref('')
const validateState = ref<FormItemValidateState>('')

const formItemRef = ref<HTMLDivElement>()

const formContext = inject(formContextKey)!

const fieldValue = computed(() => {
    const model = formContext?.model
    if (!model || !props.prop) {
        return
    }
    return model.value[props.prop]
})

let initialValue: any

const isRequired = computed(() =>
    normalizedRules.value.some((rule) => rule.required)
)

const hasLabel = computed<boolean>(() => {
    return !!(props.label || slots.label)
})

const labelPosition = computed(
    () => props.labelPosition || formContext?.labelPosition?.value
)

const cls = computed(() => [
    ns.b(),
    ns.m(props.size),
    ns.is('error', validateState.value == 'success'),
    ns.is('required', props.required || isRequired.value),
    {
        [ns.m(`label-${labelPosition.value}`)]: labelPosition.value
    }
])

const resetField = async () => {
    if (props.prop && formContext.model) {
        console.log(props.prop)
        formContext.model.value[props.prop] = initialValue
        await nextTick()
        clearValidate()
    }
}

const normalizedRules = computed(() => {
    const { required } = props
    if (props.rules) {
        const rules: FormItemRule[] = Array.isArray(props.rules) ? props.rules : [props.rules]
        for (let index = 0; index < props.rules.length; index++) {
            const element = props.rules[index];
            element.required = required || element.required
        }
        return rules
    }
    return []
})

const validateEnabled = computed(() => normalizedRules.value.length > 0)

const shouldShowError = computed(() => validateState.value == 'error' && validateMessage.value)

const getFilteredRule = (trigger?: string) => {
    const rules = normalizedRules.value

    return rules.filter(rule => {
        if (!rule.trigger || !trigger) return true
        if (Array.isArray(rule.trigger)) {
            return rule.trigger.includes(trigger)
        } else {
            return rule.trigger == trigger
        }
    })
}

const setValidationState = (state: FormItemValidateState) => validateState.value = state;

const onValidationError = (error: FormValidateFailure) => {
    const { errors, fields } = error
    if (!errors || !fields) {
        console.error(error)
    }

    setValidationState('error')

    validateMessage.value = errors
        ? errors?.[0]?.message ?? `${props.prop} is required`
        : ''
}

const doValidate = async (rules: FormItemRule[]) => {
    if (props.prop) {

        const ruleName = props.prop

        const validator = new AsyncValidator({
            [ruleName]: rules
        })

        return validator.validate({ [ruleName]: fieldValue.value }, { firstFields: true })
            .then(() => {
                setValidationState('success')
                return true
            })
            .catch((err: FormValidateFailure) => {
                onValidationError(err)
                return Promise.reject(err)
            })
    }
}

const validate: FormItemContext['validate'] = (trigger, callback) => {
    if (!props.prop || !validateEnabled.value) {
        return true
    }

    const rules = getFilteredRule(trigger)

    if (rules.length == 0) {
        return true
    }

    return doValidate(rules)
        .then(() => {
            callback?.(true)
            return true as const
        })
        .catch((err: FormValidateFailure) => {
            const { fields } = err
            callback?.(false, fields)
            return Promise.reject(fields)
        })
}

const clearValidate = () => {
    setValidationState('')
    validateMessage.value = ''
}

const isGroup = computed<boolean>(() => {
    return hasLabel.value
})

const context: any = reactive({
    ...toRefs<FormItemProp>(props),
    $el: formItemRef,
    resetField,
    clearValidate,
    validate,
    validateState,
    isGroup,
    hasLabel,
    fieldValue,
})

provide(formItemContextKey, context)

onMounted(() => {
    if (props.prop) {
        formContext?.addField(context)
        initialValue = deepCopy(fieldValue.value)
    }
})

onBeforeUnmount(() => {
    formContext.removeField(context)
})

</script>

<style scoped></style>