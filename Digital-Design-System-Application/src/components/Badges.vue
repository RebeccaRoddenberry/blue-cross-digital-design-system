

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
                        Badges
                    </p>
                    <p>
                      The <v-chip label>v-badge</v-chip> component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.
                    </p>
                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/styleguide/components?cseid=5d1361f8114fcf03d8c1e219" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/badges" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
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
                      <v-card flat height="350">
                        <v-card-text>

                          <v-row>
                            <v-col md="2">
                              <p class="title text--primary">
                                  Top Navigation
                              </p>
                              <v-badge
                                :bottom="bottom"
                                color="#cb632b"
                                :left="left"
                                :overlap="overlap"
                                class="align-self-center"
                              >
                                <template v-slot:badge>
                                  <span class="my-n1"><strong>3</strong></span>
                                </template>
                                <v-icon
                                  large
                                  color="#58585c"
                                >
                                  mail
                                </v-icon>
                              </v-badge>
                            </v-col>

                            <v-col md="2">
                              <p class="title text--primary">
                                  List Item
                              </p>

                              <v-badge
                                color="#cb632b"
                                class="align-self-center"
                              >
                                <template v-slot:badge>
                                  <span class="m-0"><strong>3</strong></span>
                                </template>
                              </v-badge>
                            </v-col>

                            <v-col md="2">
                              <p class="title text--primary">
                                  Indicator
                              </p>

                              <v-badge
                                color="#cb632b"
                                class="align-self-center"
                              >
                                <template v-slot:badge>
                                  <span></span>
                                </template>
                              </v-badge>

                            </v-col>
                          </v-row>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="350">
                        <v-card-text>

                          <live-preview code="
<v-badge
  :bottom='bottom'
  color='#0E92C7'
  :left='left'
  :overlap='overlap'
  class='align-self-center'
>
  <template v-slot:badge>
    <span class='pb-1'><strong>3</strong></span>
  </template>
  <v-icon
    large
    color='#58585c'
  >
  mail
  </v-icon>
</v-badge>
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
        bottom: false,
        color: 'primary',
        colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'error lighten-2'],
        left: false,
        overlap: true,
      }
    },
  }
</script>
