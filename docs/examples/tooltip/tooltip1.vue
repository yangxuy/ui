<template>
    <div class="tooltip-base-box">
        <div class="row center">
            <ss-tooltip class="box-item" placement="top-start">
                <ss-button>top-start</ss-button>
                <template #content>
                    <div>Top Left <span style="color: aquamarine;">prompts</span> info</div>
                </template>
            </ss-tooltip>
        </div>

    </div>
</template>

<style>
.tooltip-base-box {
    width: 600px;
}

.tooltip-base-box .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.tooltip-base-box .center {
    justify-content: center;
}

.tooltip-base-box .box-item {
    width: 110px;
    margin-top: 10px;
}
</style>