

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
                        Expansion Panels or "Accordions"
                    </p>
                    <p>
                      The <v-chip label>v-expansion-panel</v-chip> component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion-panel body at a time; however, with the multiple property, the expansion-panel can remain open until explicitly closed.
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
                        Interaction
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

                            <v-row justify="center">
                              <v-expansion-panels accordion>
                                <v-expansion-panel
                                  v-for="(item,i) in 5"
                                  :key="i"
                                >
                                  <v-expansion-panel-header>Item</v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-row>

                          </v-card-text>
                        </v-card>
                      </v-tab-item>


                      <v-tab-item>
                        <v-card flat height="350">
                          <v-card-text>
                            <p>
                              By default, only one panel opens at a time. This is fine if we are only displaying information, but can be overridden if member is taking action on each panel. (Example: Contact Preferences for Web)
                            </p>
                            <v-breadcrumbs
                              :items="items"
                              >
                              <template v-slot:divider>
                                <v-icon>chevron_right</v-icon>
                              </template>
                            </v-breadcrumbs>

                          </v-card-text>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item>
                        <v-card flat height="350">
                          <v-card-text>

                            <live-preview code="
<v-row justify='center'>
  <v-expansion-panels accordion>
    <v-expansion-panel
      v-for='(item,i) in 5'
      :key='i'
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-expansion-panels>
</v-row>
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
                      v-model="tabs3"
                      background-color="transparent"
                    >
                      <v-tab
                        v-for="o in 1"
                        :key="o"
                      >
                        Design
                      </v-tab>
                      <v-tab
                        v-for="o in 1"
                        :key="o"
                      >
                        Interaction
                      </v-tab>
                      <v-tab
                        v-for="o in 1"
                        :key="o"
                      >
                        Vue
                      </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tabs3">


                      <v-tab-item>
                        <v-card flat height="350">
                          <v-card-text>

                            <v-row justify="center">
                              <v-expansion-panels accordion>
                                <v-expansion-panel
                                  v-for="(item,i) in 5"
                                  :key="i"
                                >
                                  <v-expansion-panel-header>Item</v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-row>

                          </v-card-text>
                        </v-card>
                      </v-tab-item>


                      <v-tab-item>
                        <v-card flat height="350">
                          <v-card-text>
                            <p>
                              By default, only one panel opens at a time. This is fine if we are only displaying information, but can be overridden if member is taking action on each panel. (Example: Contact Preferences for Web)
                            </p>
                            <v-breadcrumbs
                              :items="items"
                              >
                              <template v-slot:divider>
                                <v-icon>chevron_right</v-icon>
                              </template>
                            </v-breadcrumbs>

                          </v-card-text>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item>
                        <v-card flat height="350">
                          <v-card-text>

                            <live-preview code="
<v-row justify='center'>
  <v-expansion-panels accordion>
    <v-expansion-panel
      v-for='(item,i) in 5'
      :key='i'
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-expansion-panels>
</v-row>
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
                      v-model="tabs2"
                      background-color="transparent"
                    >
                      <v-tab
                        v-for="n in 1"
                        :key="n"
                      >
                        Design
                      </v-tab>
                      <v-tab
                        v-for="n in 1"
                        :key="n"
                      >
                        Interaction
                      </v-tab>
                      <v-tab
                        v-for="n in 1"
                        :key="n"
                      >
                        Vue
                      </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tabs2">


                      <v-tab-item>
                        <v-card flat height="350">
                          <v-card-text>

                            <v-row justify="center">
                              <v-expansion-panels accordion>
                                <v-expansion-panel
                                  v-for="(item,i) in 5"
                                  :key="i"
                                >
                                  <v-expansion-panel-header>Item</v-expansion-panel-header>
                                  <v-expansion-panel-content>
                                    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                                  </v-expansion-panel-content>
                                </v-expansion-panel>
                              </v-expansion-panels>
                            </v-row>

                          </v-card-text>
                        </v-card>
                      </v-tab-item>


                      <v-tab-item>
                        <v-card flat height="350">
                          <v-card-text>
                            <p>
                              By default, only one panel opens at a time. This is fine if we are only displaying information, but can be overridden if member is taking action on each panel. (Example: Contact Preferences for Web)
                            </p>
                            <v-breadcrumbs
                              :items="items"
                              >
                              <template v-slot:divider>
                                <v-icon>chevron_right</v-icon>
                              </template>
                            </v-breadcrumbs>

                          </v-card-text>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item>
                        <v-card flat height="350">
                          <v-card-text>

                            <live-preview code="
<v-row justify='center'>
  <v-expansion-panels accordion>
    <v-expansion-panel
      v-for='(item,i) in 5'
      :key='i'
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-expansion-panels>
</v-row>
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
