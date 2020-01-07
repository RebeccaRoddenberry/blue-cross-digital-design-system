

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
                        Breadcrumbs
                    </p>
                    <p>
                      The <v-chip label >v-breadcrumbs</v-chip> component is a navigational helper for pages. It can accept a Material Icons icon or text characters as a divider. An array of objects can be passed to the items property of the component. Additionally, slots exists for more control of the breadcrumbs, either utilizing <v-chip label>v-breadcrumbs-item</v-chip> or other custom markup.
                    </p>
                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/dashboard?seid=5d9c7accc8d95b6c42f5c28b" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/breadcrumbs#icon-dividers" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
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
                        Types
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
                      <v-card flat height="400">
                        <v-card-text>

                          <v-row>
                            <v-col md="4">
                              <p class="title text--primary">
                                Desktop
                              </p>

                            <v-card outlined>
                              <v-breadcrumbs
                                :items="items"
                                >
                                <template v-slot:divider>
                                  <v-icon>chevron_right</v-icon>
                                </template>
                              </v-breadcrumbs>
                            </v-card>
                          </v-col>

                          <v-col md="4">
                            <p class="title text--primary">
                              Tablet
                            </p>

                            <v-card outlined>
                              <v-breadcrumbs
                                :items="items"
                                >
                                <template v-slot:divider>
                                  <v-icon>chevron_right</v-icon>
                                </template>
                              </v-breadcrumbs>
                            </v-card>
                          </v-col>

                        <v-col md="4">
                          <p class="title text--primary">
                              Mobile
                          </p>

                          <v-card outlined>
                            <v-breadcrumbs
                              :items="items"
                              >
                              <template v-slot:divider>
                                <v-icon>chevron_right</v-icon>
                              </template>
                            </v-breadcrumbs>
                          </v-card>
                        </v-col>
                      </v-row>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="400">
                        <v-card-text>

                          <live-preview code="
<v-breadcrumbs :items='items'>
  <template v-slot:divider>
    <v-icon>chevron_right</v-icon>
  </template>
</v-breadcrumbs>
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
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        items: [
          {
            text: 'Home',
            disabled: false,
            href: '#',
          },
          {
            text: 'Link 1',
            disabled: false,
            href: '#',
          },
          {
            text: 'Link 2',
            disabled: true,
            href: '#',
          },
        ],
      }
    },
  }
</script>
