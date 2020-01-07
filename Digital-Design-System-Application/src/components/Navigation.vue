

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
                        Navigation
                    </p>
                    <p>
                      The <v-chip label>v-navigation-drawer</v-chip> component is what your users will utilize to navigate through the application. The navigation-drawer is pre-configured to work with or without <strong>vue-router</strong> right out the box. For the purpose of display, some examples are wrapped in a <v-chip label>v-card</v-chip> element. Within your application you will generally place the <v-chip label>v-navigation-drawer</v-chip> as a direct child of <v-chip label>v-app</v-chip>.
                    </p>
                    <p class="title text--primary mb-1">Main Navigation Elements</p>
                    <p>
                      <ul>
                        <li>Left Navigation</li>
                        <li>Toolbar</li>
                        <li>Section Headers</li>
                        <li>Page Titles, Heros</li>
                        <li>Badges</li>
                        <li>Avatars</li>
                      </ul>
                    </p>
                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c87f73aa1202f046e93b963/dashboard?seid=5c91035eea57b00545642550" color="#0E92C7" class="px-4 ml-2 mb-2 mr-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/navigation-drawers" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
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
                      Notes
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
                    <v-card flat height="450">
                      <v-card-text>

                        <p class="title mt-4 mb-0 text--primary">
                            Toolbar
                        </p>
                        <p class="subtitle text--primary">
                            Desktop
                        </p>

                        <v-card outlined class="mb-6">
                        <v-toolbar
                          height="64"
                          :elevation="0"
                        >
                          <v-toolbar-title><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/logos/blue-connect-regular.svg" width="234" /></v-toolbar-title>

                          <v-spacer></v-spacer>

                          <template v-if="$vuetify.breakpoint.smAndUp">

                            <v-btn icon class="mr-4">
                                <v-icon
                                  color="#58585c"
                                >
                                  mail
                                </v-icon>
                            </v-btn>
                            <v-avatar color="#0E92C7" size="40">
                              <span class="white--text title mt-n1"><strong>JS</strong></span>
                            </v-avatar>
                            <v-icon right class="ml-0">arrow_drop_down</v-icon>
                          </template>
                        </v-toolbar>
                      </v-card>


                      <p class="subtitle text--primary">
                          Tablet (App Bar)
                      </p>

                      <v-card width="960" class="mb-6">
                      <v-toolbar
                        color="#003359"
                        dark
                        height="64"
                        :elevation="0"
                      >
                      <v-app-bar-nav-icon class="ml-n2 mr-n3" />
                        <v-toolbar-title><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/logos/blue-connect-inverse.svg" width="234" /></v-toolbar-title>

                        <v-spacer></v-spacer>

                        <template v-if="$vuetify.breakpoint.smAndUp">

                          <v-btn icon class="mr-4">
                              <v-icon
                                dark
                              >
                                mail
                              </v-icon>
                          </v-btn>
                          <v-avatar color="#0E92C7" size="40">
                            <span class="white--text title mt-n1"><strong>JS</strong></span>
                          </v-avatar>
                          <v-icon right class="ml-0">arrow_drop_down</v-icon>
                        </template>
                      </v-toolbar>
                    </v-card>


                    <p class="subtitle text--primary">
                        Mobile (App Bar)
                    </p>

                    <v-card width="374" class="mb-6">
                    <v-toolbar
                      color="#003359"
                      dark
                      height="64"
                      :elevation="0"
                    >
                    <v-app-bar-nav-icon class="ml-n2 mr-n3" />
                      <v-toolbar-title><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/logos/abbreviated-inverse.svg" width="88" /></v-toolbar-title>

                      <v-spacer></v-spacer>

                      <template v-if="$vuetify.breakpoint.smAndUp">

                        <v-btn icon class="mr-2">
                            <v-icon
                              dark
                            >
                              mail
                            </v-icon>
                        </v-btn>
                        <v-avatar color="#0E92C7" size="40">
                          <span class="white--text title mt-n1"><strong>JS</strong></span>
                        </v-avatar>

                      </template>
                    </v-toolbar>
                  </v-card>

                      </v-card-text>
                    </v-card>
                  </v-tab-item>


                  <v-tab-item>
                    <v-card flat height="450">
                      <v-card-text>

                        <p>
                          Page titles should live on a white background to reduce “banding” when paired with tabs.
                        </p>
                        <p>
                          Will not show when page has hero banner as title will be incorporated in hero.
                        </p>
                        <p>
                          Breadcrumbs will live directly under the page title.
                        </p>

                      </v-card-text>
                    </v-card>
                  </v-tab-item>


                  <v-tab-item>
                    <v-card flat height="450">
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


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Blue Connect (Mobile)
                    </p>

                    <v-tabs
                      v-model="tabs2"
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
                        Notes
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Vue
                      </v-tab>
                    </v-tabs>

                  <v-tabs-items v-model="tabs2">
                    <v-tab-item>
                      <v-card flat height="450">
                        <v-card-text>

                          <p class="title mt-4 mb-0 text--primary">
                              Toolbar
                          </p>
                          <p class="subtitle text--primary">
                              Desktop
                          </p>

                          <v-card outlined class="mb-6">
                          <v-toolbar
                            height="64"
                            :elevation="0"
                          >
                            <v-toolbar-title><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/logos/blue-connect-regular.svg" width="234" /></v-toolbar-title>

                            <v-spacer></v-spacer>

                            <template v-if="$vuetify.breakpoint.smAndUp">

                              <v-btn icon class="mr-4">
                                  <v-icon
                                    color="#58585c"
                                  >
                                    mail
                                  </v-icon>
                              </v-btn>
                              <v-avatar color="#0E92C7" size="40">
                                <span class="white--text title mt-n1"><strong>JS</strong></span>
                              </v-avatar>
                              <v-icon right class="ml-0">arrow_drop_down</v-icon>
                            </template>
                          </v-toolbar>
                        </v-card>


                        <p class="subtitle text--primary">
                            Tablet (App Bar)
                        </p>

                        <v-card width="960" class="mb-6">
                        <v-toolbar
                          color="#003359"
                          dark
                          height="64"
                          :elevation="0"
                        >
                        <v-app-bar-nav-icon class="ml-n2 mr-n3" />
                          <v-toolbar-title><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/logos/blue-connect-inverse.svg" width="234" /></v-toolbar-title>

                          <v-spacer></v-spacer>

                          <template v-if="$vuetify.breakpoint.smAndUp">

                            <v-btn icon class="mr-4">
                                <v-icon
                                  dark
                                >
                                  mail
                                </v-icon>
                            </v-btn>
                            <v-avatar color="#0E92C7" size="40">
                              <span class="white--text title mt-n1"><strong>JS</strong></span>
                            </v-avatar>
                            <v-icon right class="ml-0">arrow_drop_down</v-icon>
                          </template>
                        </v-toolbar>
                      </v-card>


                      <p class="subtitle text--primary">
                          Mobile (App Bar)
                      </p>

                      <v-card width="374" class="mb-6">
                      <v-toolbar
                        color="#003359"
                        dark
                        height="64"
                        :elevation="0"
                      >
                      <v-app-bar-nav-icon class="ml-n2 mr-n3" />
                        <v-toolbar-title><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/logos/abbreviated-inverse.svg" width="88" /></v-toolbar-title>

                        <v-spacer></v-spacer>

                        <template v-if="$vuetify.breakpoint.smAndUp">

                          <v-btn icon class="mr-2">
                              <v-icon
                                dark
                              >
                                mail
                              </v-icon>
                          </v-btn>
                          <v-avatar color="#0E92C7" size="40">
                            <span class="white--text title mt-n1"><strong>JS</strong></span>
                          </v-avatar>

                        </template>
                      </v-toolbar>
                    </v-card>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>


                    <v-tab-item>
                      <v-card flat height="450">
                        <v-card-text>

                          <p>
                            Page titles should live on a white background to reduce “banding” when paired with tabs.
                          </p>
                          <p>
                            Will not show when page has hero banner as title will be incorporated in hero.
                          </p>
                          <p>
                            Breadcrumbs will live directly under the page title.
                          </p>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>


                    <v-tab-item>
                      <v-card flat height="450">
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


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        SmartDesktop
                    </p>

                    <v-tabs
                      v-model="tabs3"
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
                        Notes
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Vue
                      </v-tab>
                    </v-tabs>

                  <v-tabs-items v-model="tabs3">
                    <v-tab-item>
                      <v-card flat height="450">
                        <v-card-text>

                          <p class="title mt-4 mb-0 text--primary">
                              Toolbar
                          </p>
                          <p class="subtitle text--primary">
                              Desktop
                          </p>

                          <v-card outlined class="mb-6">
                          <v-toolbar
                            height="64"
                            :elevation="0"
                          >
                            <v-toolbar-title><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/logos/blue-connect-regular.svg" width="234" /></v-toolbar-title>

                            <v-spacer></v-spacer>

                            <template v-if="$vuetify.breakpoint.smAndUp">

                              <v-btn icon class="mr-4">
                                  <v-icon
                                    color="#58585c"
                                  >
                                    mail
                                  </v-icon>
                              </v-btn>
                              <v-avatar color="#0E92C7" size="40">
                                <span class="white--text title mt-n1"><strong>JS</strong></span>
                              </v-avatar>
                              <v-icon right class="ml-0">arrow_drop_down</v-icon>
                            </template>
                          </v-toolbar>
                        </v-card>


                        <p class="subtitle text--primary">
                            Tablet (App Bar)
                        </p>

                        <v-card width="960" class="mb-6">
                        <v-toolbar
                          color="#003359"
                          dark
                          height="64"
                          :elevation="0"
                        >
                        <v-app-bar-nav-icon class="ml-n2 mr-n3" />
                          <v-toolbar-title><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/logos/blue-connect-inverse.svg" width="234" /></v-toolbar-title>

                          <v-spacer></v-spacer>

                          <template v-if="$vuetify.breakpoint.smAndUp">

                            <v-btn icon class="mr-4">
                                <v-icon
                                  dark
                                >
                                  mail
                                </v-icon>
                            </v-btn>
                            <v-avatar color="#0E92C7" size="40">
                              <span class="white--text title mt-n1"><strong>JS</strong></span>
                            </v-avatar>
                            <v-icon right class="ml-0">arrow_drop_down</v-icon>
                          </template>
                        </v-toolbar>
                      </v-card>


                      <p class="subtitle text--primary">
                          Mobile (App Bar)
                      </p>

                      <v-card width="374" class="mb-6">
                      <v-toolbar
                        color="#003359"
                        dark
                        height="64"
                        :elevation="0"
                      >
                      <v-app-bar-nav-icon class="ml-n2 mr-n3" />
                        <v-toolbar-title><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/logos/abbreviated-inverse.svg" width="88" /></v-toolbar-title>

                        <v-spacer></v-spacer>

                        <template v-if="$vuetify.breakpoint.smAndUp">

                          <v-btn icon class="mr-2">
                              <v-icon
                                dark
                              >
                                mail
                              </v-icon>
                          </v-btn>
                          <v-avatar color="#0E92C7" size="40">
                            <span class="white--text title mt-n1"><strong>JS</strong></span>
                          </v-avatar>

                        </template>
                      </v-toolbar>
                    </v-card>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>


                    <v-tab-item>
                      <v-card flat height="450">
                        <v-card-text>

                          <p>
                            Page titles should live on a white background to reduce “banding” when paired with tabs.
                          </p>
                          <p>
                            Will not show when page has hero banner as title will be incorporated in hero.
                          </p>
                          <p>
                            Breadcrumbs will live directly under the page title.
                          </p>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>


                    <v-tab-item>
                      <v-card flat height="450">
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
        tabs2: null,
        tabs3: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
