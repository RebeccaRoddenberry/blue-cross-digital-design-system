

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
                        Footer
                    </p>
                    <p>The <v-chip label>v-footer</v-chip> component is used for displaying general information that a user might want to access from any page within your site.</p>
                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/dashboard?seid=5d9c7ab878d02b6bd5384850" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Specs & Styles in Zeplin
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
                      <v-card flat>
                        <v-card-text>

                          <p class="title text--primary mb-4">
                              Desktop
                          </p>

                          <v-card outlined class="pa-6 mb-6">
                          <v-footer
                            light
                            padless
                            class="mt-6"
                          >
                            <v-card
                              outlined
                              class="white lighten-1 text-left"
                            >

                            <v-row
                              no-gutters

                            >

                            <v-col cols="auto">
                              <v-card-text class="pt-2">
                                <v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/logos/blue-connect-regular.svg" width="234" />
                              </v-card-text>
                            </v-col>

                            <v-col md="auto" class="ml-md-auto mr-n4">
                              <v-card-text class="pt-0">
                                <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-facebook</v-icon></v-sheet>
                              </v-card-text>
                            </v-col>

                            <v-col md="auto" class="mr-n4">
                              <v-card-text class="pt-0">
                                <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-twitter</v-icon></v-sheet>
                              </v-card-text>
                            </v-col>

                            <v-col md="auto" class="mr-n4">
                              <v-card-text class="pt-0">
                                <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-youtube</v-icon></v-sheet>
                              </v-card-text>
                            </v-col>

                            <v-col md="auto" class="mr-n4">
                              <v-card-text class="pt-0">
                                <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-linkedin</v-icon></v-sheet>
                              </v-card-text>
                            </v-col>

                            <v-col md="auto" class="mr-n4">
                              <v-card-text class="pt-0">
                                <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-instagram</v-icon></v-sheet>
                              </v-card-text>
                            </v-col>

                            <v-col md="auto" class="mr-n4">
                              <v-card-text class="pt-0">
                                <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-pinterest</v-icon></v-sheet>
                              </v-card-text>
                            </v-col>

                            <v-col md="auto" class="mr-n4">
                              <v-card-text class="pt-0">
                                <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-rss</v-icon></v-sheet>
                              </v-card-text>
                            </v-col>

                            <v-col md="auto" class="mr-n4">
                              <v-card-text class="pt-0">
                                <v-sheet style="border-radius: 8px" color="#0e92c7" height="32" width="32" class="mb-4"><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/App-Icon-1024.svg" width="32" /></v-sheet>
                              </v-card-text>
                            </v-col>

                          </v-row>

                            <v-divider></v-divider>

                            <v-card-text class="pt-4">
                                <v-row
                                  no-gutters
                                >
                                  <v-col md="auto" class="text-center mx-md-auto"><a style='text-decoration: none' color="#0E92C7" href="#">Home</a></v-col>
                                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                                  <v-col md="auto" class="text-center mx-md-auto"><a style='text-decoration: none' color="#0E92C7" href="#">Help</a></v-col>
                                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                                  <v-col md="auto" class="text-center mx-md-auto"><a style='text-decoration: none' color="#0E92C7" href="#">About Us</a></v-col>
                                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                                  <v-col md="auto" class="text-center mx-md-auto"><a style='text-decoration: none' color="#0E92C7" href="#">Media Center</a></v-col>
                                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                                  <v-col md="auto" class="text-center mx-md-auto"><a style='text-decoration: none' color="#0E92C7" href="#">Accessibility</a></v-col>
                                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                                  <v-col md="auto" class="text-center mx-md-auto"><a style='text-decoration: none' color="#0E92C7" href="#">Fraud & Abuse</a></v-col>
                                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                                  <v-col md="auto" class="text-center mx-md-auto"><a style='text-decoration: none' color="#0E92C7" href="#">Privacy & Security</a></v-col>
                                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                                  <v-col md="auto" class="text-center mx-md-auto"><a style='text-decoration: none' color="#0E92C7" href="#">Careers</a></v-col>
                                  <v-divider class="mx-4" :inset="inset" vertical></v-divider>
                                  <v-col md="auto" class="text-center mx-md-auto"><a style='text-decoration: none' color="#0E92C7" href="#">Contact Us</a></v-col>
                                </v-row>
                            </v-card-text>

                            <v-divider></v-divider>

                              <v-card-text class="pt-4">
                                Blue Cross and Blue Shield of North Carolina does not discriminate on the basis of race, color, national origin, sex, age or disability in its health programs and activities. Learn more about our non-discrimination policy and no-cost services available to you.
                              </v-card-text>

                              <v-card-text class="pt-0">
                                <strong>Information in Other Languages</strong>

                                  <v-row no-gutters>
                                    <v-col md="auto" class="text-left mr-md-auto"><a href="#">Español</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">中文</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">Tiếng Việt</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">한국어</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">Français</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">العَرَبِيَّة</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">Hmoob</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">ру́сский</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">Tagalog</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">ગુજરાતી</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">ភាសាខ្មែរ</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">Deutsch</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">हिन्दी</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">ລາວ</a></v-col>
                                    <v-col md="auto" class="text-left mx-md-auto"><a href="#">日本語</a></v-col>
                                  </v-row>
                              </v-card-text>

                              <v-divider></v-divider>

                              <v-card-text>
                                © {{ new Date().getFullYear() }} Blue Cross and Blue Shield of North Carolina. ®, SM Marks of the Blue Cross and Blue Shield Association, an association of independent Blue Cross and Blue Shield Plans. Blue Cross and Blue Shield of North Carolina is an independent licensee of the Blue Cross and Blue Shield Association.
                              </v-card-text>
                            </v-card>
                          </v-footer>
                        </v-card>



                        <p class="title text--primary mb-4">
                          Mobile
                        </p>

                        <v-card
                          outlined
                          class="pa-6"
                          max-width="374"
                        >

                        <v-footer
                          light
                          padless
                          class="mt-6"
                        >
                          <v-card
                            outlined
                            class="white lighten-1 text-left"
                          >

                          <v-row
                            no-gutters
                            justify="center"
                          >

                          <v-col cols="auto">
                            <v-card-text class="pt-2">
                              <v-img alt="Digital Design System" class="shrink" contain src="@/assets/img/logos/blue-connect-regular.svg" width="234" />
                            </v-card-text>
                          </v-col>
                        </v-row>


                        <v-row
                          no-gutters
                          justify="center"
                        >
                          <v-col md="2" class="ml-n6 mr-n4">
                            <v-card-text class="pt-0">
                              <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-facebook</v-icon></v-sheet>
                            </v-card-text>
                          </v-col>

                          <v-col md="2" class="mr-n4">
                            <v-card-text class="pt-0">
                              <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-twitter</v-icon></v-sheet>
                            </v-card-text>
                          </v-col>

                          <v-col md="2" class="mr-n4">
                            <v-card-text class="pt-0">
                              <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-youtube</v-icon></v-sheet>
                            </v-card-text>
                          </v-col>

                          <v-col md="2" class="mr-n4">
                            <v-card-text class="pt-0">
                              <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-linkedin</v-icon></v-sheet>
                            </v-card-text>
                          </v-col>

                          <v-col md="2" class="mr-n4">
                            <v-card-text class="pt-0">
                              <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-instagram</v-icon></v-sheet>
                            </v-card-text>
                          </v-col>

                          <v-col md="2" class="mr-n4">
                            <v-card-text class="pt-0">
                              <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-pinterest</v-icon></v-sheet>
                            </v-card-text>
                          </v-col>

                          <v-col md="2" class="mr-n4">
                            <v-card-text class="pt-0">
                              <v-sheet style="border-radius: 8px" color="#3B3B3F" height="32" width="32" class="mb-4"><v-icon dark class="pa-1">mdi-rss</v-icon></v-sheet>
                            </v-card-text>
                          </v-col>

                          <v-col md="2" class="mr-n4">
                            <v-card-text class="pt-0">
                              <v-sheet style="border-radius: 8px" color="#0e92c7" height="32" width="32" class="mb-4"><v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/App-Icon-1024.svg" width="32" /></v-sheet>
                            </v-card-text>
                          </v-col>
                        </v-row>

                          <v-divider></v-divider>

                          <v-card-text class="pt-4 text-center">

                                <p class="mb-4"><a style='text-decoration: none' color="#0E92C7" href="#">Home</a></p>
                                <p class="mb-4"><a style='text-decoration: none' color="#0E92C7" href="#">Help</a></p>
                                <p class="mb-4"><a style='text-decoration: none' color="#0E92C7" href="#">About Us</a></p>
                                <p class="mb-4"><a style='text-decoration: none' color="#0E92C7" href="#">Media Center</a></p>
                                <p class="mb-4"><a style='text-decoration: none' color="#0E92C7" href="#">Accessibility</a></p>
                                <p class="mb-4"><a style='text-decoration: none' color="#0E92C7" href="#">Fraud & Abuse</a></p>
                                <p class="mb-4"><a style='text-decoration: none' color="#0E92C7" href="#">Privacy & Security</a></p>
                                <p class="mb-4"><a style='text-decoration: none' color="#0E92C7" href="#">Careers</a></p>
                                <p class="mb-4"><a style='text-decoration: none' color="#0E92C7" href="#">Contact Us</a></p>

                          </v-card-text>

                          <v-divider></v-divider>

                            <v-card-text class="pt-4 text-center">
                              Blue Cross and Blue Shield of North Carolina does not discriminate on the basis of race, color, national origin, sex, age or disability in its health programs and activities. Learn more about our non-discrimination policy and no-cost services available to you.
                            </v-card-text>

                            <v-card-text class="pt-0 text-center">
                              <strong>Information in Other Languages</strong>

                                <v-row no-gutters>
                                  <v-col md="auto" class="text-left mr-md-auto"><a href="#">Español</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">中文</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">Tiếng Việt</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">한국어</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">Français</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">العَرَبِيَّة</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">Hmoob</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">ру́сский</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">Tagalog</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">ગુજરાતી</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">ភាសាខ្មែរ</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">Deutsch</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">हिन्दी</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">ລາວ</a></v-col>
                                  <v-col md="auto" class="text-left mx-md-auto"><a href="#">日本語</a></v-col>
                                </v-row>
                            </v-card-text>

                            <v-divider></v-divider>

                            <v-card-text class="text-center">
                              © {{ new Date().getFullYear() }} Blue Cross and Blue Shield of North Carolina. ®, SM Marks of the Blue Cross and Blue Shield Association, an association of independent Blue Cross and Blue Shield Plans. Blue Cross and Blue Shield of North Carolina is an independent licensee of the Blue Cross and Blue Shield Association.
                            </v-card-text>
                          </v-card>
                        </v-footer>
                      </v-card>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="450">
                        <v-card-text>
                          <p>To Be Included within the Footer:</p>
                          <p>
                            <ul>
                              <li>Home</li>
                              <li>Help</li>
                              <li>About Us</li>
                              <li>Media Center</li>
                              <li>Careers</li>
                              <li>Privacy & Security</li>
                              <li>Fraud & Abuse</li>
                              <li>Contact Us</li>
                              <li>Discrimination verbiage</li>
                              <li>Info in other languages</li>
                              <li>Social media links (facebook, twitter, Youtube, LinkedIn, Pinterest, GooglePlus, BC Blog)</li>
                              <li>Blue Connect Mobile App call out</li>
                              <li>Copyright line</li>
                            </ul>
                          </p>

                              <p>Footnotes:</p>
                              <p><ul><li>Footnotes will live on background space and not card / content block</li></ul></p>

                        </v-card-text>
                      </v-card>
                    </v-tab-item>

                    <v-tab-item>
                      <v-card flat height="450">
                        <v-card-text>

                          <live-preview code="
<template>
  <v-card height='150'>
    <v-footer
      absolute
      class='font-weight-medium'
    >
      <v-col
        class='text-center'
        cols='12'
      >
      </v-col>
    </v-footer>
  </v-card>
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
      }
    },
  }
</script>
