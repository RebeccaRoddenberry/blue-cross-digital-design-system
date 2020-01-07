

<template>

<v-container fluid class="pa-8">
    <v-layout align-left justify-left>
        <v-flex text-xs-left>

            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Alerts
                    </p>
                    <p>
                      The <v-chip label>v-alert</v-chip> component is used to convey important information to the user through the use contextual types icons and color. These default types come in in 4 variations: <strong>success</strong>, <strong>info</strong>, <strong>warning</strong>, and <strong>error</strong>. Default icons are assigned which help represent different actions each type portrays. Many parts of an alert such as <v-chip label>border</v-chip>, <v-chip label>icon</v-chip>, and <v-chip label>color</v-chip> can also be customized to fit almost any situation.
                    </p>
                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c87f73aa1202f046e93b963/dashboard?seid=5c910249c4b29f250d0ab728" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://vuetifyjs.com/en/components/alerts" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Vuetify Documentation
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Global Alerts
                    </p>

                          <v-tabs
                            v-model="tabs"
                            background-color="transparent"
                            max-height="400"
                          >
                            <v-tab
                              v-for="n in 1"
                              :key="n"
                            >
                              Types
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
                              Content
                            </v-tab>
                            <v-tab
                              v-for="n in 1"
                              :key="n"
                            >
                              Placement
                            </v-tab>
                            <v-tab
                              v-for="n in 1"
                              :key="n"
                            >
                              Vue
                            </v-tab>
                          </v-tabs>

                        <v-tabs-items v-model="tabs">
                          <v-tab-item>
                            <v-card
                            flat
                            height="450"
                            >
                              <v-card-text>
                                <p class="font-weight-bold">High alert (Red)</p>
                                <v-alert type="error" width="800">
                                    I'm an error alert.
                                </v-alert>
                                <p>This could signify user error or critical information.</p>

                                <p class="font-weight-bold">Medium priority (Yellow)</p>
                                <v-alert type="warning" width="800">
                                    I'm a warning alert.
                                </v-alert>
                                <p>System outage, user action required, planned system outage.</p>

                                <p class="font-weight-bold">Low priority (Blue)</p>
                                <v-alert type="info" width="800">
                                    I'm an info alert.
                                </v-alert>
                                <p>Information message, supplemental info, alternative to tool tip.</p>
                              </v-card-text>
                            </v-card>
                          </v-tab-item>

                        <v-tab-item>
                            <v-card flat height="450">
                              <v-card-text>
                                <p>
                                  <ul>
                                    <li>The user can close the global alert.</li>
                                    <li>Once closed, the alert will no longer be present during the user’s session.</li>
                                    <li>The global alert is not fixed. It will scroll with the page.</li>
                                  </ul>
                                </p>
                              </v-card-text>
                            </v-card>
                          </v-tab-item>


                        <v-tab-item>
                            <v-card flat height="450">
                              <v-card-text>
                                <p>The global alert may have a link or a button.</p>
                              </v-card-text>
                            </v-card>
                          </v-tab-item>


                        <v-tab-item>
                            <v-card flat height="450">
                              <v-card-text>
                                <p>
                                  <ul>
                                    <li>The global alert will be present on every application page.</li>
                                    <li>The global alert will be placed directly below the global top nav.</li>
                                  </ul>
                                </p>
                              </v-card-text>
                            </v-card>
                          </v-tab-item>


                          <v-tab-item>
                            <v-card flat height="450">
                              <v-card-text>

                                <live-preview code="
<template>
  <div>
    <v-alert type='success'>
      I'm a success alert.
    </v-alert>
  </div>
</template>
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
                        Page-Level Alerts
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
                        Interaction
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Content
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Placement
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Number of Alerts
                      </v-tab>
                      <v-tab
                        v-for="m in 1"
                        :key="m"
                      >
                        Priority
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
                      <v-card flat height="560">
                        <v-card-text>
                          <p class="font-weight-bold">High alert (Red)</p>
                          <v-alert prominent type="error" width="800">
                              <v-row align="center">
                                  <v-col class="grow">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion.</v-col>
                                  <v-col class="shrink">
                                      <v-btn class="ma-0" outlined color="white">Action</v-btn>
                                  </v-col>
                              </v-row>
                          </v-alert>
                          <p>This could signify user error or critical information.</p>

                          <p class="font-weight-bold">Medium priority (Yellow)</p>
                          <v-alert prominent type="warning" width="800">
                              <v-row align="center">
                                  <v-col class="grow">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion.</v-col>
                                  <v-col class="shrink">
                                      <v-btn class="ma-0" outlined color="white">Action</v-btn>
                                  </v-col>
                              </v-row>
                          </v-alert>
                          <p>System outage, user action required, planned system outage.</p>

                          <p class="font-weight-bold">Low priority (Blue)</p>
                          <v-alert prominent type="info" width="800">
                              <v-row align="center">
                                  <v-col class="grow">Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion.</v-col>
                                  <v-col class="shrink">
                                      <v-btn class="ma-0" outlined color="white">Action</v-btn>
                                  </v-col>
                              </v-row>
                          </v-alert>
                          <p>Information message, supplemental info, alternative to tool tip.</p>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                  <v-tab-item>
                      <v-card flat height="560">
                        <v-card-text>
                          <p>
                            The user can close the page-level alert. Once closed, the alert will no longer be present during the user’s session.
                          </p>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>


                  <v-tab-item>
                      <v-card flat height="560">
                        <v-card-text>
                          <p>The page-level alert may have a link or a button.</p>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>


                  <v-tab-item>
                      <v-card flat height="560">
                        <v-card-text>
                          <p>
                            <ul>
                              <li>The page-level alert can be posted to the homepage, or any secondary page, depending on which page(s) are effected.</li>
                              <li>Page-level alert will be added only to page(s) effected For both the homepage and the secondary pages, the page-level
                              alert will be placed at the top of page, under the global top nav.</li>
                            </ul>
                          </p>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                        <v-card flat height="560">
                          <v-card-text>
                            <p>
                              <ul>
                                <li>The site can have both a system-level alert on the homepage and a page-level alert on the homepage.</li>
                                <li>There may be multiple system and page-level alerts presented at the same time.</li>
                              </ul>
                            </p>
                          </v-card-text>
                        </v-card>
                      </v-tab-item>

                      <v-tab-item>
                          <v-card flat height="560">
                            <v-card-text>
                              <p>System-level alerts would take priority of placement above any page-level alerts that exist on the homepage. System-level alerts are only shown on the homepage.</p>
                            </v-card-text>
                          </v-card>
                        </v-tab-item>


                    <v-tab-item>
                      <v-card flat height="560">
                        <v-card-text>

                          <live-preview code="
<template>
  <div>
    <v-alert prominent type='error'>
      <v-row align='center'>
          <v-col class='grow'>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion.</v-col>
          <v-col class='shrink'>
              <v-btn class='ma-0' outlined color='white'>Action</v-btn>
          </v-col>
      </v-row>
    </v-alert>
  </div>
</template>
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
                        Component-Level Alerts
                    </p>

                    <v-tabs
                      v-model="tabs3"
                      background-color="transparent"
                    >
                      <v-tab
                        v-for="p in 1"
                        :key="p"
                      >
                        Types
                      </v-tab>
                      <v-tab
                        v-for="p in 1"
                        :key="p"
                      >
                        Interaction
                      </v-tab>
                      <v-tab
                        v-for="p in 1"
                        :key="p"
                      >
                        Content
                      </v-tab>
                      <v-tab
                        v-for="p in 1"
                        :key="p"
                      >
                        Placement
                      </v-tab>
                      <v-tab
                        v-for="p in 1"
                        :key="p"
                      >
                        Vue
                      </v-tab>
                    </v-tabs>

                  <v-tabs-items v-model="tabs3">
                    <v-tab-item>
                      <v-card flat height="560">
                        <v-card-text>
                          <p class="font-weight-bold">High alert (Red)</p>
                          <v-alert type="error" width="400">
                              I'm an error alert.
                          </v-alert>
                          <p>This could signify user error or critical information.</p>

                          <p class="font-weight-bold">Medium priority (Yellow)</p>
                          <v-alert dismissible type="warning" width="400">
                              I'm a warning alert.
                          </v-alert>
                          <p>System outage, user action required, planned system outage.</p>

                          <p class="font-weight-bold">Low priority (Blue)</p>
                          <v-alert dismissible type="info" width="400">
                              I'm an info alert.
                          </v-alert>
                          <p>Information message, supplemental info, alternative to tool tip.</p>

                          <p class="font-weight-bold">Success (Green)</p>
                          <v-alert type="success" width="400">
                              I'm a success alert.
                          </v-alert>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                  <v-tab-item>
                      <v-card flat height="560">
                        <v-card-text>
                          <p>
                            The user will not be able to close the component level alerts/notifications. High alert (Red) error messages will remain until the user has submitted the corrections/valid entries. Once the valid entries are submitted, the user will
                                receive the green confirmation message. The green confirmation message will remain during the user’s session until logout. If the form submission has valid entries – the green confirmation message will be shown. The green confirmation
                                message will remain during that user’s session until logout.
                          </p>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>


                  <v-tab-item>
                      <v-card flat height="560">
                        <v-card-text>
                          <p>The component alert may have a link or button at the end of the alert.</p>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>


                  <v-tab-item>
                      <v-card flat height="560">
                        <v-card-text>
                          <p>
                            <ul>
                              <li>The component alert/notification will be at the top of the component, underneath the component title.</li>
                              <li>If there are tabs within the component, the alert/notification will be placed underneath the tabs.</li>
                            </ul>
                          </p>
                        </v-card-text>
                      </v-card>
                    </v-tab-item>


                    <v-tab-item>
                      <v-card flat height="560">
                        <v-card-text>
                          <live-preview code="
<template>
  <div>
    <v-alert type='success'>
      I'm a success alert.
    </v-alert>

    <v-alert type='info'>
      I'm an info alert.
    </v-alert>

    <v-alert type='warning'>
      I'm a warning alert.
    </v-alert>

    <v-alert type='error'>
      I'm an error alert.
    </v-alert>
  </div>
</template>
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
                        Alert Session Storage Information
                    </p>

                    <v-expansion-panels accordion class="pt-2">
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Component-Level Alert</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                  <li>User will not be able to close out of a component-level notification. </li>
                                  <li>The notification will not have an ‘x’ to close the notification.</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>System-Level & Page-Level Alerts</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <ul>
                                <li>User will be able to close out of a system-level and page-level alerts.</li>
                                <li>The alert will have an ‘x’ that the user can click to close the alert.</li>
                                <li>If a user closes out the alert, the alert should not appear as long as they are logged in to that session.</li>
                                <li>If the user closes the alert, then closes the browser window, then opens a new window & logs back in – they will see the alert, again – as long as the alert is within the timeframe of how long it should exist on the app (provided by business).</li>
                                <li>If the user closes the alert, then reloads the page, the alert should not re-appear. The alert is dismissed for as long as you are logged in to that session.</li>
                                <li>If the user closes the alert, they will not have a way to access the alerts while in that session.</li>
                              </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <p class="display-1 text--primary mt-6">Content Guidelines</p>
                    <v-expansion-panels accordion class="pt-2">
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Direct and Concise</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <ul>
                                  <li>Alerts should be direct and concise.</li>
                                  <li>Start confirmation alerts with a 2-3 word statement. Example: Password updated.; Message sent.; etc.</li>
                              </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Standard Hyperlinking Practices</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <ul>
                                <li>Use standard hyperlinking practices within the text when necessary. Alternatively, a hyperlink with text in a call-to-action format can be placed at the end of the message.</li>
                                <li>Example: Your current email address is returning Blue Cross NC emails as spam. "Change Email"</li>
                              </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Provide Additional Instructions</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <ul>
                                <li>Follow up with additional instructions where necessary, particularly error messages</li>
                                <li>Example: The information you entered is not correct. Please try again.</li>
                                <li>All error messages should end with “Please try again.” The only exception is for service error, in which case we need to add “later,” since we don’t know when the service will be restored.</li>
                                <li>Example: Due to a Blue Cross NC technical issue, we’re unable to process your request right now. Please try again later.</li>
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
          items: [
          {
            text: 'Dashboard',
            disabled: false,
            href: 'breadcrumbs_dashboard',
          },
          {
            text: 'Link 1',
            disabled: false,
            href: 'breadcrumbs_link_1',
          },
          {
            text: 'Link 2',
            disabled: true,
            href: 'breadcrumbs_link_2',
          },
        ],
      }
    },
  }
</script>
