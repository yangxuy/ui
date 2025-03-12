<template>
    <div class="common-layout">
        <ss-container>
            <ss-header>Header</ss-header>
            <ss-container direction="ho">
                <ss-aside width="200px">Aside</ss-aside>
                <ss-container>
                    <ss-main>Main</ss-main>
                    <ss-footer>Footer</ss-footer>
                </ss-container>
            </ss-container>
        </ss-container>
    </div>
</template>

<style>
.ss-header,
.ss-footer {
    background-color: rgb(197.7, 225.9, 255);
    text-align: center;
}

.ss-main {
    background-color: rgb(235.9, 245.3, 255);
    text-align: center;
    height: 150px;
}

.ss-aside {
    background-color: rgb(216.8, 235.6, 255);
}
</style>