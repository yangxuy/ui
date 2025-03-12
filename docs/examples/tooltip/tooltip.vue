<template>
    <div class="tooltip-base-box">
        <div class="row center">
            <ss-tooltip class="box-item" effect="dark" content="Top Left prompts info" placement="top-start">
                <ss-button>top-start</ss-button>
            </ss-tooltip>
            <ss-tooltip class="box-item" effect="dark" content="Top Center prompts info" placement="top">
                <ss-button>top</ss-button>
            </ss-tooltip>
            <ss-tooltip class="box-item" effect="dark" content="Top Right prompts info" placement="top-end">
                <ss-button>top-end</ss-button>
            </ss-tooltip>
        </div>
        <div class="row">
            <ss-tooltip class="box-item" effect="dark" content="Left Top prompts info" placement="left-start">
                <ss-button>left-start</ss-button>
            </ss-tooltip>
            <ss-tooltip class="box-item" effect="dark" content="Right Top prompts info" placement="right-start">
                <ss-button>right-start</ss-button>
            </ss-tooltip>
        </div>
        <div class="row">
            <ss-tooltip class="box-item" effect="dark" content="Left Center prompts info" placement="left">
                <ss-button class="mt-3 mb-3">left</ss-button>
            </ss-tooltip>
            <ss-tooltip class="box-item" effect="dark" content="Right Center prompts info" placement="right">
                <ss-button>right</ss-button>
            </ss-tooltip>
        </div>
        <div class="row">
            <ss-tooltip class="box-item" effect="dark" content="Left Bottom prompts info" placement="left-end">
                <ss-button>left-end</ss-button>
            </ss-tooltip>
            <ss-tooltip class="box-item" effect="dark" content="Right Bottom prompts info" placement="right-end">
                <ss-button>right-end</ss-button>
            </ss-tooltip>
        </div>
        <div class="row center">
            <ss-tooltip class="box-item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
                <ss-button>bottom-start</ss-button>
            </ss-tooltip>
            <ss-tooltip class="box-item" effect="dark" content="Bottom Center prompts info" placement="bottom">
                <ss-button>bottom</ss-button>
            </ss-tooltip>
            <ss-tooltip class="box-item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
                <ss-button>bottom-end</ss-button>
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