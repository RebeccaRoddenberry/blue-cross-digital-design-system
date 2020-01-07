

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
                        Buttons
                    </p>
                    <p>
                      The <v-chip label>v-btn</v-chip> component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.
                    </p>
                </v-card-text>
                <v-card-actions class="mt-8">
                        <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/styleguide/components?cseid=5d1362335348846426f9856b" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/buttons" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Vuetify Documentation
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="http://codex.bcbsnc.com/accessibility/accessible-forms/index.html#buttons" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Accessibility on Button Labels
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
                      <v-card flat height="350">
                        <v-card-text>

                          <v-row>
                            <v-col>
                              <p class="title mt-4 text--primary">
                                  Raised
                              </p>

                              <v-row class="mb-4 ml-0">
                                <v-btn color="#0A6A90" class="px-4 white--text text-capitalize">
                                  <strong>Button</strong>
                                </v-btn>
                              </v-row>

                              <v-row class="mb-4 ml-0">
                                <v-btn color="#0A6A90" class="px-4 white--text text-capitalize">
                                  <v-icon left dark>search</v-icon>
                                  <strong>Button</strong>
                                </v-btn>
                              </v-row>

                              <v-row class="mb-4 ml-0">
                                <v-btn color="#0A6A90" class="px-4 white--text text-capitalize">
                                  <strong>Button</strong>
                                  <v-icon right dark>open_in_new</v-icon>
                                </v-btn>
                              </v-row>

                              <p class="mt-4">Used for the main CTA button.</p>
                            </v-col>


                            <v-col>
                              <p class="title mt-4 text--primary">
                                  Outlined
                              </p>

                              <v-row class="mb-4 ml-0">
                                <v-btn color="#0A6A90" outlined class="px-4 text-capitalize">
                                  <strong>Button</strong>
                                </v-btn>
                              </v-row>

                              <v-row class="mb-4 ml-0">
                                <v-btn color="#0A6A90" outlined class="px-4 text-capitalize">
                                  <v-icon left dark>search</v-icon>
                                  <strong>Button</strong>
                                </v-btn>
                              </v-row>

                              <v-row class="mb-4 ml-0">
                                <v-btn color="#0A6A90" outlined class="px-4 text-capitalize">
                                  <strong>Button</strong>
                                  <v-icon right dark>open_in_new</v-icon>
                                </v-btn>

                              </v-row>

                              <p class="mt-4">Used for card and secondary actions.</p>
                            </v-col>


                            <v-col>
                              <p class="title mt-4 text--primary">
                                  Flat
                              </p>

                              <v-btn color="#0A6A90" text class="px-4 text-capitalize">
                                <strong>Button</strong>
                              </v-btn>
                              <p class="mt-4">For use when multiple actions appear within the same card</p>
                            </v-col>


                          <v-col>
                            <p class="title mt-4 text--primary">
                                Disabled
                            </p>

                            <v-btn color="#0A6A90" disabled class="px-4 text-capitalize">
                              <strong>Button</strong>
                            </v-btn>
                            <p class="mt-4">For use when multiple actions appear within the same card</p>
                          </v-col>
                        </v-row>


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
                          <p>
                            <ul>
                              <li>Solid color (Primary CTA) buttons are used for more focused components/pages with a primary action</li>
                              <li>Outline buttons are used for solid color blocks or when applied over an image, they are also recommended as a secondary CTA when there are multiple cards.</li>
                              <li>Buttons that include icons - icons will be located to the left of the button text (Except for External Link icon)</li>
                              <li>Chips - Only for a group of many links / cloud tag more than 4</li>
                              <li>Disabled Buttons - the best practice is to remove / hide the button and provide the user some explanation text instead describing why the button or functionality is not available.</li>
                            </ul>
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
<v-btn color='#0A6A90' class='px-4 white--text text-capitalize'>
  <strong>Button</strong>
</v-btn>

<v-btn color='#0A6A90' outlined class='px-4 text-capitalize'>
  <strong>Button</strong>
</v-btn>

<v-btn color='#0A6A90' text class='px-4 text-capitalize'>
  <strong>Button</strong>
</v-btn>

<v-btn color='#0A6A90' disabled class='px-4 text-capitalize'>
    <strong>Button</strong>
</v-btn>
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
                        Notes
                    </p>

                    <v-expansion-panels accordion class="pt-2">
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Disabled Buttons</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>Best practice - remove / hide the button and provide the user some explanation text instead describing why the button or functionality is not available.</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Accessibility</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p>Below are related accessibility check list items that icons\buttons\links should follow (as provided from the Accessibility Team):</p>
                              <ul>
                                <li>The entire page is keyboard-navigable. Users can reach every interactive element of the page using a keyboard, including all user interface controls, using the default navigation keys (tab for forward, shift + tab for back, enter or space bar to trigger).</li>
                                <li>There are no keyboard traps that prevent keyboard-only users from navigating.</li>
                                <li>The navigation order of links, form elements, etc. is logical and intuitive.</li>
                                <li>It is visually apparent which page element has the current keyboard focus (i.e., as you tab through the page, you can see where you are).</li>
                                <li>Any image-based form buttons have clear, accurate alternate text.</li>
                                <li>Color is not the only way to distinguish important information.</li>
                                <li>Links are either underlined or have a 3:1 contrast ratio with surrounding text and change visually on focus and hover.</li>
                                <li>Text has enough contrast. The background and foreground colors have a contrast ratio of 3:1 for large text (18px and above) and 4.5:1 for smaller text.</li>
                                <li>If the same visual presentation can be made using text alone, an image is not used to present that text.</li>
                                <li>The font is readable and not too small (a least 9pt, 12pt preferred). (Optional)</li>
                                <li>Instructions do not rely upon shape, size, or visual location (e.g., "Click the square icon to continue" or "Instructions are in the right-hand column").</li>
                                <li>Instructions do not rely upon sound (e.g., "A beeping sound indicates you may continue.").</li>
                                <li>The purpose of each link (or form image button or image map hotspot) can be determined from the link text alone, or from the link text and its context (e.g., surrounding paragraph, list item, table cell, or table headers).</li>
                                <li>Links (or form image buttons) with the same text that go to different locations are readily distinguishable.</li>
                              </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
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
