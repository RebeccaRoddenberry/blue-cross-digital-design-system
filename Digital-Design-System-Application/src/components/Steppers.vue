

<template>

<v-container fluid class="pa-8">
    <v-layout align-left justify-left>
        <v-flex text-xs-left>

            <!-- <div>
                <v-breadcrumbs :items="itemsbreadcrumbs" large></v-breadcrumbs>
            </div> -->

            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Steppers
                    </p>
                    <p>
                      The <v-chip label>v-stepper</v-chip> component displays progress through numbered steps.
                    </p>
                    <p>
                      A Progress indicator is a visual representation as a user moves through a set of steps. They guide the user through a number of steps in order to complete a specified process. They can also be used to indicate the status of an item they are keeping track of (ex. A claim moving from "Pending" to "Processed")
                    </p>
                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c87f73aa1202f046e93b963/dashboard?seid=5c98eda1e6cbce24f56f881e" color="#0E92C7" class="px-4 ml-2 mb-2 mr-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/steppers" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Vuetify Documentation
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>

            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Blue Conenct (Web)
                    </p>

                    <p class="title mt-4">
                        Desktop
                    </p>
                    <p>All links in a breadcrumb should be clickable except for the current page.</p>

                    <p class="title mt-4">
                        Tablet
                    </p>
                    <p>Tablet views will function just like web views. This posed any trouble so far, as we try to avoid pages more than four levels deep in the page structure.</p>

                    <p class="title mt-4">
                        Mobile
                    </p>
                    <p>At mobile-web views, we will just display the previous parent section instead of the whole breadcrumb trail.</p>

                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Blue Conenct (Mobile)
                    </p>

                    <p class="title mt-4">
                        Desktop
                    </p>
                    <p>All links in a breadcrumb should be clickable except for the current page.</p>

                    <p class="title mt-4">
                        Tablet
                    </p>
                    <p>Tablet views will function just like web views. This posed any trouble so far, as we try to avoid pages more than four levels deep in the page structure.</p>

                    <p class="title mt-4">
                        Mobile
                    </p>
                    <p>At mobile-web views, we will just display the previous parent section instead of the whole breadcrumb trail.</p>

                </v-card-text>
            </v-card>

        </v-flex>
    </v-layout>
</v-container>

</template>
