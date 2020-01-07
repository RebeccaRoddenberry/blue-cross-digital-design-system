

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
                      Cards
                    </p>
                    <p>
                      The <v-chip label>v-card</v-chip> component is a versatile component that can be used for anything from a panel to a static image. The card component has numerous helper components to make markup as easy as possible. Components that have no listed options use Vue's functional component option for faster rendering and serve as markup sugar to make building easier.
                    </p>
                    <p>
                      Cards use a border around the grouped content, and the background color within the card that differs from background color of the underlying canvas. These visual-design elements create a strong sense that the different bits of information contained within the border are grouped together.
                    </p>
                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/styleguide/components?cseid=5d13634813a9e303f6376234" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/cards" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
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
                      <v-card flat height="670">
                        <v-card-text>

                          <v-row>
                          <v-col>
                            <p class="title text--primary">
                                Primary
                            </p>

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
                          </v-col>

                          <v-col>
                            <p class="title text--primary">
                                Primary with Icon
                            </p>

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
                                <v-row class="mt-n3 mb-n3">
                                  <v-col
                                    cols="2"
                                  >
                                    <v-avatar color="#0E92C7" size="48">
                                      <span class="white--text headline"><v-icon dark class="mt-n1">favorite</v-icon></span>
                                    </v-avatar>
                                  </v-col>

                                  <v-col>
                                    <p class="mb-n1 title text--primary">
                                      Title
                                    </p>
                                    <p class="subtitle text--primary">
                                      Subtitle
                                    </p>
                                  </v-col>
                                </v-row>

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
                          </v-col>

                          <v-col>
                            <p class="title text--primary">
                                Secondary
                            </p>

                            <v-card
                              max-width="374"
                              class="mb-4"
                            >
                              <v-card-text>
                                <p class="title text--primary">
                                  Title
                                </p>
                                <div class="text--primary">
                                  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                                </div>
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
                          </v-col>

                        </v-row>


                        <v-row>
                        <v-col md="auto" class="mr-8">
                          <p class="title text--primary">
                              Tabs
                          </p>

                          <v-card
                            max-width="374"
                            class="mb-4"
                          >
                              <v-tabs
                                v-model="tabstest"
                                background-color="transparent"
                              >
                                <v-tab
                                  v-for="t in 1"
                                  :key="t"
                                  class="text-capitalize"
                                >
                                  Tab 1
                                </v-tab>
                                <v-tab
                                  v-for="t in 1"
                                  :key="t"
                                  class="text-capitalize"
                                >
                                  Tab 2
                                </v-tab>
                                <v-tab
                                  v-for="t in 1"
                                  :key="t"
                                  class="text-capitalize"
                                >
                                  Tab 3
                                </v-tab>
                              </v-tabs>

                              <v-divider></v-divider>
                              <v-card-text>
                                <p>
                                  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                                </p>
                              </v-card-text>
                          </v-card>
                        </v-col>


                        <v-col md="auto">
                          <p class="title text--primary">
                              Solid
                          </p>

                          <v-card
                            max-width="374"
                            class="mb-4"
                            color="#003359"
                            dark
                          >
                            <v-card-text>

                              <p class="title white--text">
                                Title
                              </p>

                              <p>
                                Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                              </p>

                            </v-card-text>
                            <v-card-actions>
                              <v-row justify='end'>
                                <v-btn
                                  outlined
                                  color="#ffffff"
                                  class="mr-5 mb-2 px-4 text-capitalize"
                                >
                                  <strong>Button</strong>
                                </v-btn>
                              </v-row>
                            </v-card-actions>
                          </v-card>
                        </v-col>

                      </v-row>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="670">
                        <v-card-text>
                          <p>We use these blocks to visually push other content components (like tables, lists or grouped links) forward on the page. Card backgrounds are white (#ffffff) while page backgrounds are generally a neutral color (#f1f1f2).</p>

                          <p>Other uses for cards can include presenting content in tabs as well as providing a section header with a lifestyle image.</p>

                          <p>Best practice: Try to limit the number of these types of cards that appear on each page.</p>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="670">
                        <v-card-text>

                          <live-preview code="
<v-card
  max-width='374'
  class='mb-4'
>
<v-img
  class='white--text align-end'
  height='8px'
  style='background: #0E92C7'
>
</v-img>
<v-card-text>
  <p class='title text--primary'>
    Title
  </p>
<div class='text--primary'>
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</div>
</v-card-text>
<v-card-actions>
  <v-row justify='end'>
    <v-btn
      outlined
      color='#0E92C7'
      class='mr-5 mb-2 px-4 text-capitalize'
      >
      <strong>Button</strong>
    </v-btn>
  </v-row>
</v-card-actions>
</v-card>
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
        tabstest: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
  }
</script>
