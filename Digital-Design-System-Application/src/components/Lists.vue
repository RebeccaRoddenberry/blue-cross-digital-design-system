

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
                        Lists
                    </p>
                    <p>
                      The <v-chip label>v-list</v-chip> component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists present content in a way that makes it easy to identify a specific item in a collection. They provide a consistent styling for organizing groups of text and images.
                    </p>
                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/styleguide/components?cseid=5d1363fcc0b0e869459cf075" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/expansion-panels" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Vuetify Documentation
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>

            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Web
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
