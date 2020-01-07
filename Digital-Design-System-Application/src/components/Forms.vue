

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
                        Forms
                    </p>

                    <p>Patterns for Form Elements:</p>
                      <ul>
                        <li>Text Fields</li>
                        <li>Selects</li>
                        <li>Selection Controls</li>
                        <li>Error messaging & inline validation</li>
                        <li>Date Picker</li>
                      </ul>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c87f73aa1202f046e93b963/dashboard?seid=5c93e50c9f489505caeb9ffe" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/forms" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
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
                            <v-col md="4">
                              <p class="title text--primary">
                                  Text Fields
                              </p>
                              <v-text-field
                                label="Outlined Text Field"
                                outlined
                                color="#0E92C7"
                              ></v-text-field>
                              <v-textarea
                                outlined
                                color="#0E92C7"
                                name="input-7-4"
                                label="Outlined Text Aread"
                                value="Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."
                              ></v-textarea>
                            </v-col>


                            <v-col md="4">
                              <p class="title text--primary">
                                  Selects
                              </p>
                              <v-select
                                :items="items"
                                label="Outlined Select"
                                outlined
                                color="#0E92C7"
                              ></v-select>
                            </v-col>


                            <v-col md="4">
                              <p class="title text--primary">
                                  Selection Controls
                              </p>
                                <v-checkbox
                                  color="#0E92C7"
                                  v-model="checkbox"
                                  :label="`Checkbox 1: ${checkbox.toString()}`"
                                ></v-checkbox>
                                <v-radio-group v-model="radioGroup">
                                  <v-radio
                                    color="#0E92C7"
                                    v-for="n in 3"
                                    :key="n"
                                    :label="`Radio ${n}`"
                                    :value="n"
                                  ></v-radio>
                                </v-radio-group>
                                <v-switch
                                  color="#0E92C7"
                                  v-model="switch1"
                                  :label="`Switch 1: ${switch1.toString()}`"
                                ></v-switch>
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
                        Vue
                      </v-tab>
                    </v-tabs>

                  <v-tabs-items v-model="tabs2">
                    <v-tab-item>
                      <v-card flat height="350">
                        <v-card-text>

                          <v-row>
                            <v-col md="4">
                              <p class="title text--primary">
                                  Text Fields
                              </p>
                              <v-text-field
                                label="Outlined Text Field"
                                outlined
                                color="#0E92C7"
                              ></v-text-field>
                              <v-textarea
                                outlined
                                color="#0E92C7"
                                name="input-7-4"
                                label="Outlined Text Aread"
                                value="Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."
                              ></v-textarea>
                            </v-col>


                            <v-col md="4">
                              <p class="title text--primary">
                                  Selects
                              </p>
                              <v-select
                                :items="items"
                                label="Outlined Select"
                                outlined
                                color="#0E92C7"
                              ></v-select>
                            </v-col>


                            <v-col md="4">
                              <p class="title text--primary">
                                  Selection Controls
                              </p>
                                <v-checkbox
                                  color="#0E92C7"
                                  v-model="checkbox"
                                  :label="`Checkbox 1: ${checkbox.toString()}`"
                                ></v-checkbox>
                                <v-radio-group v-model="radioGroup">
                                  <v-radio
                                    color="#0E92C7"
                                    v-for="n in 3"
                                    :key="n"
                                    :label="`Radio ${n}`"
                                    :value="n"
                                  ></v-radio>
                                </v-radio-group>
                                <v-switch
                                  color="#0E92C7"
                                  v-model="switch1"
                                  :label="`Switch 1: ${switch1.toString()}`"
                                ></v-switch>
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
                        Vue
                      </v-tab>
                    </v-tabs>

                  <v-tabs-items v-model="tabs3">
                    <v-tab-item>
                      <v-card flat height="350">
                        <v-card-text>

                          <v-row>
                            <v-col md="4">
                              <p class="title text--primary">
                                  Text Fields
                              </p>
                              <v-text-field
                                label="Outlined Text Field"
                                outlined
                                color="#0E92C7"
                              ></v-text-field>
                              <v-textarea
                                outlined
                                color="#0E92C7"
                                name="input-7-4"
                                label="Outlined Text Aread"
                                value="Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."
                              ></v-textarea>
                            </v-col>


                            <v-col md="4">
                              <p class="title text--primary">
                                  Selects
                              </p>
                              <v-select
                                :items="items"
                                label="Outlined Select"
                                outlined
                                color="#0E92C7"
                              ></v-select>
                            </v-col>


                            <v-col md="4">
                              <p class="title text--primary">
                                  Selection Controls
                              </p>
                                <v-checkbox
                                  color="#0E92C7"
                                  v-model="checkbox"
                                  :label="`Checkbox 1: ${checkbox.toString()}`"
                                ></v-checkbox>
                                <v-radio-group v-model="radioGroup">
                                  <v-radio
                                    color="#0E92C7"
                                    v-for="n in 3"
                                    :key="n"
                                    :label="`Radio ${n}`"
                                    :value="n"
                                  ></v-radio>
                                </v-radio-group>
                                <v-switch
                                  color="#0E92C7"
                                  v-model="switch1"
                                  :label="`Switch 1: ${switch1.toString()}`"
                                ></v-switch>
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
        tabs2: null,
        tabs3: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        checkbox: true,
        radioGroup: 1,
        switch1: true,
      }
    },
  }
</script>
