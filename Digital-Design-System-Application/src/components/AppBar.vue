

<template>

<v-app-bar app color="#003359" dark>
    <div class="d-flex align-center">
        <v-app-bar-nav-icon class="mr-4" @click.stop="$emit('toggle-drawer')" />
        <v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/Logo.svg" width="120" />
        <v-toolbar-title>Digital Design System</v-toolbar-title>
    </div>
</v-app-bar>

</template>
