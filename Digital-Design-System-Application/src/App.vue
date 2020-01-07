

<template>

<v-app>

    <app-bar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer"></app-bar>
    <left-navigation ref="drawer"></left-navigation>

    <v-content>
        <router-view />
    </v-content>

    <app-footer />

</v-app>

</template>

<script>

//import Dashboard from './components/Dashboard';
import LeftNavigation from './components/LeftNavigation';
import AppBar from './components/AppBar';
import AppFooter from './components/AppFooter';

export default {
    name: 'App',

    components: {
        //Dashboard,
        LeftNavigation,
        AppBar,
        AppFooter,
    }
};

</script>
