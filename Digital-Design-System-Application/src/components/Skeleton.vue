

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
                        Skeleton Loaders
                    <v-chip color="#e8b417" class="white--text">Coming Soon</v-chip>
                    </p>

                    <p>
                      The <v-chip label>v-skeleton-loader</v-chip> component is a versatile tool that can fill many roles within a project. At its heart, the component provides an indication to the user that something is coming but not yet available. There are over 30 pre-defined options available that can be combined to make custom examples.
                    </p>
                </v-card-text>
                <v-card-actions>
                        <!-- <v-btn href="https://app.zeplin.io/project/5c87f73aa1202f046e93b963/dashboard?seid=5c924e0a320dd2055d206f98" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn> -->
                        <v-btn href="https://vuetifyjs.com/en/components/skeleton-loaders" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Vuetify Documentation
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>

            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Blue Connect (Web)
                    </p>


                    <v-tabs
                      v-model="tabs"
                      background-color="transparent"
                    >
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Design
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Vue
                      </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tabs">


                      <v-tab-item>
                        <v-card flat height="350">
                          <v-card-text>

                            <v-sheet
                              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
                              class="px-3 pt-3 pb-3"
                            >
                              <v-skeleton-loader
                                class="mx-auto"
                                max-width="300"
                                type="card"
                              ></v-skeleton-loader>
                            </v-sheet>

                                </v-card-text>
                              </v-card>
                            </v-tab-item>


                      <v-tab-item>
                        <v-card flat height="350">
                          <v-card-text>

                            <live-preview code="
<v-skeleton-loader
  class='mx-auto'
  max-width='300'
  type='card'
></v-skeleton-loader>
                      ">
                      </live-preview>

                          </v-card-text>
                        </v-card>
                      </v-tab-item>
                      </v-tabs-items>

                </v-card-text>
            </v-card>


        </v-flex>
    </v-layout>
</v-container>

</template>

<script>
  export default {

    inject: ['theme'],

    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
