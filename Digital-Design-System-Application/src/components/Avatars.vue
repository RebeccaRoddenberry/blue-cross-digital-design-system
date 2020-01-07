

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
                        Avatars
                    </p>
                    <p>
                      The <v-chip label>v-avatar</v-chip> component is typically used to display circular user profile pictures. This component will allow you to dynamically size and add a border radius of responsive images, icons, and text. A tile variation is available for displaying an avatar without border radius.
                    </p>
                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/styleguide/components?cseid=5d1361be40481c643dee025e" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/avatars" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
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
                            <v-col md="2">
                              <p class="title text--primary">
                                  Desktop
                              </p>
                              <v-avatar color="#0E92C7" size="48">
                                <span class="white--text headline"><strong>JS</strong></span>
                              </v-avatar>
                              <v-icon right>arrow_drop_down</v-icon>
                            </v-col>

                            <v-col md="2">
                              <p class="title text--primary">
                                  Tablet
                              </p>
                              <v-avatar color="#0E92C7" size="48">
                                <span class="white--text headline"><strong>JS</strong></span>
                              </v-avatar>
                            </v-col>

                            <v-col md="2">
                              <p class="title text--primary">
                                  Mobile
                              </p>
                              <v-avatar color="#0E92C7" size="36">
                                <span class="white--text subtitle-2"><strong>JS</strong></span>
                              </v-avatar>
                            </v-col>
                          </v-row>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="400">
                        <v-card-text>

                          <live-preview code="
<v-avatar color='#0E92C7' size='48'>
  <span class='white--text headline'><strong>JS</strong></span>
</v-avatar>
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
      }
    },
  }
</script>
