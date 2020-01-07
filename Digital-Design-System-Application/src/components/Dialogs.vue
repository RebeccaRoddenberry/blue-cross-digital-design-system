

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
                        Dialogs
                    </p>
                    <p>
                      The <v-chip label>v-dialog</v-chip> component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.
                    </p>

                    <p>
                      Modals inform users about a task and can contain critical information, require decisions, or involve multiple tasks. These dialogs are purposefully interruptive, so they should be used sparingly.
                    </p>


                    <p class="title text--primary">Guidelines</p>
                    <ul>
                      <li>Modals with two actions should be side-by-side at the bottom.</li>
                        <ul>
                          <li>Save will always be bottom right</li>
                          <li>The negative action like Cancel or Back will always be bottom left</li>
                        </ul>
                      <li>A way to close the modal will be found in the top right corner</li>
                      <li>If there are more than two actions for the user to take, the buttons will be stacked</li>
                    </ul>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c87f73aa1202f046e93b963/dashboard?seid=5c912570161735068c68bae0" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/dialogs#modal" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
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
                      <v-card flat height="360">
                        <v-card-text>

                          <v-row>
                            <v-col>

                              <p class="title text--primary mb-0">
                                  Modal
                              </p>
                              <p class="subtitle text--primary mb-6">
                                Similar to a Simple Dialog, except that it's not dismissed when touching outside.
                              </p>

                              <v-dialog
                                v-model="modal"
                                width="500"
                                persistent
                              >
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    outlined
                                    color="#0E92C7"
                                    class="mr-4 text-capitalize"
                                    v-on="on"
                                  >
                                    Request New ID Card
                                  </v-btn>
                                </template>

                                <v-card
                                  class="px-6 py-4"
                                >

                                <v-row>
                                  <v-col>
                                    <p class="title text--primary">
                                      Request New ID Card
                                    </p>
                                  </v-col>

                                  <v-col md="auto">
                                    <v-btn text icon color="#0E92C7">
                                      <v-icon>close</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>

                                      <p class="text--primary">
                                        You should receive your replacement ID card in three to five business days at the mailing address on file.
                                      </p>
                                      <p>
                                        <strong>Note:</strong> ID cards are not available for inactive plans.
                                      </p>

                                      <v-row>
                                        <v-col>
                                          <p class="mb-0 text--primary">
                                            <strong>Mailing Address</strong>
                                          </p>
                                        </v-col>

                                        <v-col md="auto">
                                          <v-btn text class="mb-0 ml-0 text-capitalize" color="#0E92C7">Edit</v-btn>
                                        </v-col>
                                      </v-row>

                                      <v-row>
                                        <v-col
                                          cols="1"
                                          class="mr-n2"
                                        >
                                          <v-icon class="mt-3">place</v-icon>
                                        </v-col>

                                        <v-col>
                                          <p>
                                            123 Roadname Ln.<br>
                                            Durham, NC 27713
                                          </p>
                                        </v-col>
                                      </v-row>


                                  <v-card-actions>
                                    <v-row justify='end'>

                                      <v-btn
                                        text
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 text-capitalize"
                                        @click="modal = false"
                                      >
                                        Cancel
                                      </v-btn>
                                      <v-btn
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 white--text text-capitalize"
                                        @click="modal = false"
                                      >
                                        Submit
                                      </v-btn>
                                    </v-row>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-col>

                            <v-col>

                              <p class="title text--primary mb-0">
                                  Dialog
                              </p>
                              <p class="subtitle text--primary mb-6">
                                Simple dialog that allows the user to dismiss by clicking outside.
                              </p>

                              <v-dialog
                                v-model="dialog"
                                width="500"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    outlined
                                    color="#0E92C7"
                                    class="mr-4 text-capitalize"
                                    v-on="on"
                                  >
                                    Are you still there?
                                  </v-btn>
                                </template>

                                <v-card
                                  class="px-6 py-4"
                                >

                                <v-row>
                                  <v-col>
                                    <p class="title text--primary">
                                      Leave Blue Connect?
                                    </p>
                                  </v-col>

                                  <v-col md="auto">
                                    <v-btn text icon color="#0E92C7">
                                      <v-icon>close</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>

                                      <p class="text--primary">
                                        You are leaving Blue Connect and Blue Cross and Blue Shield of North Carolina's plan information. The site you are going to is either a third-party bender contracted with Blue Cross NC to provide services or an external website independent of Blue Cross NC.
                                      </p>

                                  <v-card-actions>
                                    <v-row justify='end'>

                                      <v-btn
                                        text
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 text-capitalize"
                                        @click="dialog = false"
                                      >
                                        Cancel
                                      </v-btn>
                                      <v-btn
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 white--text text-capitalize"
                                        @click="dialog = false"
                                      >
                                        Continue
                                      </v-btn>
                                    </v-row>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-col>

                          </v-row>


                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="360">
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
                      <v-card flat height="360">
                        <v-card-text>

                          <v-row>
                            <v-col>

                              <p class="title text--primary mb-0">
                                  Modal
                              </p>
                              <p class="subtitle text--primary mb-6">
                                Similar to a Simple Dialog, except that it's not dismissed when touching outside.
                              </p>

                              <v-dialog
                                v-model="modalmobile"
                                width="500"
                                persistent
                              >
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    outlined
                                    color="#0E92C7"
                                    class="mr-4 text-capitalize"
                                    v-on="on"
                                  >
                                    Request New ID Card
                                  </v-btn>
                                </template>

                                <v-card
                                  class="px-6 py-4"
                                >

                                <v-row>
                                  <v-col>
                                    <p class="title text--primary">
                                      Request New ID Card
                                    </p>
                                  </v-col>

                                  <v-col md="auto">
                                    <v-btn text icon color="#0E92C7">
                                      <v-icon>close</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>

                                      <p class="text--primary">
                                        You should receive your replacement ID card in three to five business days at the mailing address on file.
                                      </p>
                                      <p>
                                        <strong>Note:</strong> ID cards are not available for inactive plans.
                                      </p>

                                      <v-row>
                                        <v-col>
                                          <p class="mb-0 text--primary">
                                            <strong>Mailing Address</strong>
                                          </p>
                                        </v-col>

                                        <v-col md="auto">
                                          <v-btn text class="mb-0 ml-0 text-capitalize" color="#0E92C7">Edit</v-btn>
                                        </v-col>
                                      </v-row>

                                      <v-row>
                                        <v-col
                                          cols="1"
                                          class="mr-n2"
                                        >
                                          <v-icon class="mt-3">place</v-icon>
                                        </v-col>

                                        <v-col>
                                          <p>
                                            123 Roadname Ln.<br>
                                            Durham, NC 27713
                                          </p>
                                        </v-col>
                                      </v-row>


                                  <v-card-actions>
                                    <v-row justify='end'>

                                      <v-btn
                                        text
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 text-capitalize"
                                        @click="modalmobile = false"
                                      >
                                        Cancel
                                      </v-btn>
                                      <v-btn
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 white--text text-capitalize"
                                        @click="modalmobile = false"
                                      >
                                        Submit
                                      </v-btn>
                                    </v-row>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-col>

                            <v-col>

                              <p class="title text--primary mb-0">
                                  Dialog
                              </p>
                              <p class="subtitle text--primary mb-6">
                                Simple dialog that allows the user to dismiss by clicking outside.
                              </p>

                              <v-dialog
                                v-model="dialogmobile"
                                width="500"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    outlined
                                    color="#0E92C7"
                                    class="mr-4 text-capitalize"
                                    v-on="on"
                                  >
                                    Are you still there?
                                  </v-btn>
                                </template>

                                <v-card
                                  class="px-6 py-4"
                                >

                                <v-row>
                                  <v-col>
                                    <p class="title text--primary">
                                      Leave Blue Connect?
                                    </p>
                                  </v-col>

                                  <v-col md="auto">
                                    <v-btn text icon color="#0E92C7">
                                      <v-icon>close</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>

                                      <p class="text--primary">
                                        You are leaving Blue Connect and Blue Cross and Blue Shield of North Carolina's plan information. The site you are going to is either a third-party bender contracted with Blue Cross NC to provide services or an external website independent of Blue Cross NC.
                                      </p>

                                  <v-card-actions>
                                    <v-row justify='end'>

                                      <v-btn
                                        text
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 text-capitalize"
                                        @click="dialogmobile = false"
                                      >
                                        Cancel
                                      </v-btn>
                                      <v-btn
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 white--text text-capitalize"
                                        @click="dialogmobile = false"
                                      >
                                        Continue
                                      </v-btn>
                                    </v-row>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-col>

                          </v-row>


                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="360">
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
                      <v-card flat height="360">
                        <v-card-text>

                          <v-row>
                            <v-col>

                              <p class="title text--primary mb-0">
                                  Modal
                              </p>
                              <p class="subtitle text--primary mb-6">
                                Similar to a Simple Dialog, except that it's not dismissed when touching outside.
                              </p>

                              <v-dialog
                                v-model="modalsmart"
                                width="500"
                                persistent
                              >
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    outlined
                                    color="#0E92C7"
                                    class="mr-4 text-capitalize"
                                    v-on="on"
                                  >
                                    Request New ID Card
                                  </v-btn>
                                </template>

                                <v-card
                                  class="px-6 py-4"
                                >

                                <v-row>
                                  <v-col>
                                    <p class="title text--primary">
                                      Request New ID Card
                                    </p>
                                  </v-col>

                                  <v-col md="auto">
                                    <v-btn text icon color="#0E92C7">
                                      <v-icon>close</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>

                                      <p class="text--primary">
                                        You should receive your replacement ID card in three to five business days at the mailing address on file.
                                      </p>
                                      <p>
                                        <strong>Note:</strong> ID cards are not available for inactive plans.
                                      </p>

                                      <v-row>
                                        <v-col>
                                          <p class="mb-0 text--primary">
                                            <strong>Mailing Address</strong>
                                          </p>
                                        </v-col>

                                        <v-col md="auto">
                                          <v-btn text class="mb-0 ml-0 text-capitalize" color="#0E92C7">Edit</v-btn>
                                        </v-col>
                                      </v-row>

                                      <v-row>
                                        <v-col
                                          cols="1"
                                          class="mr-n2"
                                        >
                                          <v-icon class="mt-3">place</v-icon>
                                        </v-col>

                                        <v-col>
                                          <p>
                                            123 Roadname Ln.<br>
                                            Durham, NC 27713
                                          </p>
                                        </v-col>
                                      </v-row>


                                  <v-card-actions>
                                    <v-row justify='end'>

                                      <v-btn
                                        text
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 text-capitalize"
                                        @click="modalsmart = false"
                                      >
                                        Cancel
                                      </v-btn>
                                      <v-btn
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 white--text text-capitalize"
                                        @click="modalsmart = false"
                                      >
                                        Submit
                                      </v-btn>
                                    </v-row>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-col>

                            <v-col>

                              <p class="title text--primary mb-0">
                                  Dialog
                              </p>
                              <p class="subtitle text--primary mb-6">
                                Simple dialog that allows the user to dismiss by clicking outside.
                              </p>

                              <v-dialog
                                v-model="dialogmobile"
                                width="500"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-btn
                                    outlined
                                    color="#0E92C7"
                                    class="mr-4 text-capitalize"
                                    v-on="on"
                                  >
                                    Are you still there?
                                  </v-btn>
                                </template>

                                <v-card
                                  class="px-6 py-4"
                                >

                                <v-row>
                                  <v-col>
                                    <p class="title text--primary">
                                      Leave Blue Connect?
                                    </p>
                                  </v-col>

                                  <v-col md="auto">
                                    <v-btn text icon color="#0E92C7">
                                      <v-icon>close</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>

                                      <p class="text--primary">
                                        You are leaving Blue Connect and Blue Cross and Blue Shield of North Carolina's plan information. The site you are going to is either a third-party bender contracted with Blue Cross NC to provide services or an external website independent of Blue Cross NC.
                                      </p>

                                  <v-card-actions>
                                    <v-row justify='end'>

                                      <v-btn
                                        text
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 text-capitalize"
                                        @click="dialogmobile = false"
                                      >
                                        Cancel
                                      </v-btn>
                                      <v-btn
                                        color="#0E92C7"
                                        class="px-4 ml-2 mb-0 white--text text-capitalize"
                                        @click="dialogmobile = false"
                                      >
                                        Continue
                                      </v-btn>
                                    </v-row>
                                  </v-card-actions>
                                </v-card>
                              </v-dialog>
                            </v-col>

                          </v-row>


                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="360">
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
        dialog: false,
        modal: false,
        dialogmobile: false,
        modalmobile: false,
        dialogsmart: false,
        modalsmart: false,
        tabs: null,
        tabs2: null,
        tabs3: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
