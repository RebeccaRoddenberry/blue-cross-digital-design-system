

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
                        Right Rail
                    </p>
                    <p>
                      This sidebar is dedicated to in-context next-best-actions for the user to take.
                    </p>
                    <p class="title text--primary">Overview</p>
                      <p>The Right Rail aims to give users context to the page they are viewing and quick access to helpful information. Right Rail houses items not on the page to avoid redundancies. For example, if there is a component linking to a page that there’s not also a link in Related Information or Quick Links that goes to the same page.</p>
                      <p>The Right Rail should display on all top-level views. It is an optional component for secondary page levels, such as Claim Details.</p>
                      <p>Any combination of these shouldn’t take up more than 2/3 of the Right Rail height.</p>
                      <p>First release - "Help" and "Contact Us" can be found in the footer, so we will not be including it in the right rail until we have the Help Center finalized.</p>
                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/dashboard?seid=5dcad0f4a9b94d8ecb7907e9" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
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
                        Content Types
                    </p>
                    <p class="subtitle text--primary mt-n2">
                        (In order of their hierarchy)
                    </p>


                    <v-tabs
                      v-model="tabs"
                      background-color="transparent"
                    >
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Cards
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Information Blocks
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Related Information
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Quick Links
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        RTDM Tiles
                      </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tabs">

                      <v-tab-item>


                            <v-card flat height="500">
                              <v-card-text>

                                <v-card
                                  max-width="374"
                                  class="mb-4"
                                >
                                <v-img
                                  class="white--text align-end"
                                  height="8px"
                                  style="background: #0E92C7"
                                >
                                </v-img>
                                  <v-card-text>
                                    <p class="mb-n1 title text--primary">
                                      Title
                                    </p>
                                    <p class="subtitle text--primary">
                                      Subtitle
                                    </p>
                                    <p>
                                      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                                    </p>
                                  </v-card-text>
                                  <v-card-actions>
                                    <v-row justify='end'>
                                      <v-btn
                                        outlined
                                        color="#0E92C7"
                                        class="mr-5 mb-2 px-4 text-capitalize"
                                      >
                                        <strong>Button</strong>
                                      </v-btn>
                                    </v-row>
                                  </v-card-actions>
                                </v-card>


                            <p>
                              <ul>
                                <li>Header</li>
                                <li>Solid background</li>
                                <li>CTA outlined button or link</li>
                                <li>No imagery</li>
                                <li>Single Icon acceptable (example: Nurse Line)</li>
                                <li>No more than one card in RR to clearly define hierarchy</li>
                                <li>Keep in mind that this will not always be prioroty 1 on the tablet and mobile views when we push to the bottom</li>
                                <li>Example: Primary Care Provider</li>
                              </ul>
                            </p>

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
    data () {
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
