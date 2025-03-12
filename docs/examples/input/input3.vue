<template>
    <div>
        <ss-input clearable :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"></ss-input>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>