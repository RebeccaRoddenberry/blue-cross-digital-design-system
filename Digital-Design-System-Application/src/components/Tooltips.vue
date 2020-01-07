

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
                        Tooltips
                    </p>
                    <p>
                      The <v-chip label>v-tooltip</v-chip> component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a <v-chip label>v-model</v-chip>. When activated, tooltips display a text label identifying an element, such as a description of its function.
                    </p>

                    <v-btn href="https://wiki.bcbsnc.com/display/BCX/Tooltips" outlined color="#0E92C7" class="mr-4 mb-4 text-capitalize">
                        View Full Documentation
                        <v-icon right dark>open_in_new</v-icon>
                    </v-btn>

                    <v-btn href="https://www.nngroup.com/articles/tooltip-guidelines/" outlined color="#0E92C7" class="mb-4 text-capitalize">
                        Best Practices
                        <v-icon right dark>open_in_new</v-icon>
                    </v-btn>

                    <p>
                      Tooltips provide users with more context on the information they see. They will be marked with a "?" icon that displays text in a box on hover when using desktop and on touch when using mobile or tablet. This guide outlines suggested uses.
                    </p>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://zpl.io/V4dw0wJ" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/tooltips" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
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
                        Design
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
                      <v-card flat height="480">
                        <v-card-text>

                          <p class="title text--primary">
                              Desktop
                          </p>

                      <v-row>
                        <v-col>
                          <v-tooltip right>
                            <template v-slot:activator="{ on }">
                              <span class="mr-2"><strong>Out-of-Network</strong></span>
                              <v-icon color="#0E92C7" dark v-on="on">help</v-icon>
                            </template>
                            <span>Gumbo <strong>beet greens</strong> corn soko endive gumbo gourd.</span>
                          </v-tooltip>
                        </v-col>

                        <v-col>
                          <v-tooltip top>
                            <template v-slot:activator="{ on }">
                              <span class="mr-2"><strong>Applied to Coinsurance and Copayments Paid</strong></span>
                              <v-icon color="#0E92C7" dark v-on="on">help</v-icon>
                            </template>
                            <span>Gumbo <strong>beet greens</strong> corn soko endive gumbo gourd.</span>
                          </v-tooltip>
                        </v-col>
                      </v-row>

                      <p class="title text--primary mt-6">
                          Tablet & Mobile
                      </p>

                    <v-row>
                      <v-col>
                        <span class="mr-2"><strong>Out-of-Network</strong></span>
                        <v-icon color="#0E92C7" dark @click.stop="dialog = true">help</v-icon>
                        <v-dialog
                          v-model="dialog"
                          max-width="290"
                        >
                          <v-card>
                            <v-card-title class="headline">Out-of-Network</v-card-title>

                            <v-card-text>
                              Gumbo <strong>beet greens</strong> corn soko endive gumbo gourd.
                            </v-card-text>

                            <v-card-actions>
                              <v-spacer></v-spacer>

                              <v-btn
                                color="#0E92C7"
                                class="text-capitalize"
                                text
                                @click="dialog = false"
                              >
                                Close
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </v-col>
                    </v-row>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="480">
                        <v-card-text>
                          <p class="mb-0"><strong>Use to provide additional information about a feature or content.</strong></p>
                          <p>Examples: definitions of common industry terms; explanation of a field (e.g., why BCBSNC asks a user if their phone can browse the web on CPC form); using the filter feature on All Claims; etc.</p>

                          <p class="mb-0"><strong>Do not use for information vital to completing a task or legal disclaimers.</strong></p>
                          <p>Examples: noting required fields; instructions that a form needs to be mailed to complete processing; disclaimer on liabilities to the user; etc.</p>

                          <p>Write concisely. Tooltips should be brief and avoid long explanations. If an item needs more room, consider adding the copy to the page or find a home for it in FAQs.</p>

                          <p class="mb-0"><strong>Use tooltips sparingly.</strong></p>
                          <p>
                            <ul>
                              <li>Avoid cluttering the page. Try to limit the number of tooltips on a page to five. Exceptions can be made based on the complexity of information and the length of the page.</li>
                              <li>Do not use a tooltip twice on the same page – use on the first reference only (e.g., definitions).</li>
                              <li>However, using the same tooltip on different pages is acceptable. In the case of definitions, a user is likely to encounter some of these terms throughout the site, and since each user's path is different, they will miss the tooltip if it's only on a page that they didn't visit.</li>
                            </ul>
                          </p>

                          <p class="mb-0"><strong>Place tooltips properly.</strong></p>
                          <p>
                            <ul>
                              <li>If used to define a term, put the tooltip as close to the word as possible.</li>
                              <li>Do not use to define a term in a page title, component header or landing page subheads.</li>
                              <li>To explain multiple lines of text or column labels in a table, put them as close to the end of the information as possible.</li>
                              <li>Do not cover other important information with a tooltip. Refer to Vuetify for alignment and positioning options: https://vuetifyjs.com/en/components/tooltips.</li>
                            </ul>
                          </p>
                          <p class="mb-0"><strong>Include tooltips in Dupal.</strong></p>
                          <p>Per the development team, tooltips can be housed with the content in Drupal. Details on execution will be provided when available.</p>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="480">
                        <v-card-text>

                          <live-preview code="
<template>
  <v-tooltip right>
    <template v-slot:activator='{ on }'>
      <span class='mr-2'><strong>Out-of-Network</strong></span>
      <v-icon color='#0E92C7' dark v-on='on'>help</v-icon>
    </template>
    <span>Gumbo <strong>beet greens</strong> corn soko endive gumbo gourd.</span>
  </v-tooltip>
</template>
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
        dialog: false,
      }
    },
  }
</script>
