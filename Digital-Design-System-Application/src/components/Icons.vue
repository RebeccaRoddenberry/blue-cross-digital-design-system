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
                        Brand Icons
                    </p>
                    <p>Master Reference Sheet</p>

                    <v-row>
                      <v-col md="auto">
                        <v-img alt="Health" contain src="@/assets/img/icons/fc-solid-heart-rate.svg" width="50" />
                      </v-col>
                      <v-col md="auto">
                        <v-img alt="Hospital" contain src="@/assets/img/icons/fc-solid-hospital.svg" width="50" />
                      </v-col>
                      <v-col md="auto">
                        <v-img alt="Medical" contain src="@/assets/img/icons/fc-solid-medical.svg" width="50" />
                      </v-col>
                      <v-col md="auto">
                        <v-img alt="Doctor" contain src="@/assets/img/icons/fc-solid-doctor.svg" width="50" />
                      </v-col>
                      <v-col md="auto">
                        <v-img alt="Doctors" contain src="@/assets/img/icons/fc-solid-doctors.svg" width="50" />
                      </v-col>
                      <v-col md="auto">
                        <v-img alt="Doctors Network" contain src="@/assets/img/icons/fc-solid-doctors-network.svg" width="50" />
                      </v-col>
                    </v-row>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="/assets/downloads/bcbsnc-platform-assets.zip" color="#0E92C7" class="px-4 ml-2 mr-2 mb-2 white--text text-capitalize">
                            Download the PDF
                            <v-icon right dark>picture_as_pdf</v-icon>
                        </v-btn>
                        <v-btn href="/assets/downloads/bcbsnc-platform-assets.zip" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            Download the Sketch File
                            <v-icon right dark>cloud_download</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        FontCustom Icons
                    </p>
                    <p>For Branded icons that cannot be found in Material's Icon Set</p>

                    <p>*Designers should download this FontCustom file to use with Sketch files.</p>

                    <v-btn href="/assets/downloads/Accessibility Guide.pdf" outlined color="#0E92C7" class="mr-4 text-capitalize">
                        Download FontCustom Sketch File
                    </v-btn>

                    <v-row class="mt-6">
                      <v-col md="auto">
                        <v-img alt="Apple" contain src="@/assets/img/icons/fc-apple.svg" width="24" />
                      </v-col>
                      <v-col md="auto">
                        <v-img alt="Claims" contain src="@/assets/img/icons/fc-claims.svg" width="24" />
                      </v-col>
                      <v-col md="auto">
                        <v-img alt="Drugs" contain src="@/assets/img/icons/fc-drugs.svg" width="24" />
                      </v-col>
                      <v-col md="auto">
                        <v-img alt="Health" contain src="@/assets/img/icons/fc-health.svg" width="24" />
                      </v-col>
                      <v-col md="auto">
                        <v-img alt="Password" contain src="@/assets/img/icons/fc-password.svg" width="24" />
                      </v-col>
                      <v-col md="auto">
                        <v-img alt="SmartShopper" contain src="@/assets/img/icons/fc-smartshopper.svg" width="24" />
                      </v-col>
                    </v-row>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://ghe.bcbsnc.com/BCBSNC-Components/fontcustom-icons" color="#0E92C7" class="px-4 ml-2 mr-2 mb-2 white--text text-capitalize">
                            View Web FontCustom Icons on GitHub
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                        <v-btn href="https://ghe.bcbsnc.com/rebeccaroddenberry/BlueConnect-Mobile-Icons" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Mobile FontCustom Icons on GitHub
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Material Design Icons
                    </p>
                    <p>Handcrafted by our friends from Google</p>

                    <v-row class="mt-6">
                      <v-col md="auto">
                        <v-icon color="#19191B">home</v-icon>
                      </v-col>
                      <v-col md="auto">
                        <v-icon color="#19191B">event</v-icon>
                      </v-col>
                      <v-col md="auto">
                        <v-icon color="#19191B">info</v-icon>
                      </v-col>
                      <v-col md="auto">
                        <v-icon color="#19191B">folder</v-icon>
                      </v-col>
                      <v-col md="auto">
                        <v-icon color="#19191B">notifications</v-icon>
                      </v-col>
                      <v-col md="auto">
                        <v-icon color="#19191B">person</v-icon>
                      </v-col>
                    </v-row>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://material.io/resources/icons/?style=baseline" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Material Design Icons
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Blue Connect Web 2.0 Icon Classes
                    </p>

                    <v-expansion-panels accordion class="pt-2">
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Left Navigation</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                    <li class="mb-2"><strong>Profile:</strong> .fc-member (FontCustom) <v-chip small>24px</v-chip></li>
                                    <li class="mb-2"><strong>Home:</strong> .fc-home (FontCustom) <v-chip small>24px</v-chip></li>
                                    <li class="mb-2"><strong>Benefits</strong> .fc-benefits (FontCustom) <v-chip small>24px</v-chip></li>
                                    <li class="mb-2"><strong>Claims:</strong> .fc-claims (FontCustom) <v-chip small>24px</v-chip></li>
                                    <li class="mb-2"><strong>Find Care:</strong> .fc-health (FontCustom) <v-chip small>24px</v-chip></li>
                                    <li class="mb-2"><strong>WellBeing:</strong> .fc-apple (FontCustom) <v-chip small>24px</v-chip></li>
                                    <li class="mb-2"><strong>Activity Center:</strong> ic_notifications_24px (Material Design) <v-chip small>24px</v-chip></li>
                                    <li class="mb-2"><strong>Documents:</strong> ic_folder_24px (Material) <v-chip small>24px</v-chip></li>
                                    <li class="mb-2"><strong>Logout:</strong> .fc-logout (FontCustom) <v-chip small>24px</v-chip></li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Home</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="title">Member Card</p>
                              <ul>
                                  <li class="mb-2"><strong>Claims:</strong> .fc-claims (FontCustom) <v-chip small>24px</v-chip></li>
                                  <li class="mb-2"><strong>Coverage:</strong> .fc-benefits (FontCustom) <v-chip small>24px</v-chip></li>
                                  <li class="mb-2"><strong>ID Card:</strong> .fc-id-card (FontCustom) <v-chip small>24px</v-chip></li>
                                  <li class="mb-2"><strong>Documents & Forms:</strong> .fc-folder (Material Design) <v-chip small>24px</v-chip></li>
                              </ul>
                              <p class="title">Search for Doctors & More</p>
                              <ul>
                                  <li class="mb-2"><strong>Header:</strong> .fc-solid-search (FontCustom) <v-chip small>50px</v-chip></li>
                              </ul>
                              <p class="title">Save on Health Care</p>
                              <ul>
                                  <li class="mb-2"><strong>Header:</strong> .fc-solid-saving (FontCustom) <v-chip small>50px</v-chip></li>
                              </ul>
                              <p class="title">Account Balance</p>
                              <ul>
                                  <li class="mb-2"><strong>Header:</strong> .fc-solid-billing (FontCustom) <v-chip small>50px</v-chip></li>
                              </ul>
                              <p class="title">Need Help</p>
                              <ul>
                                  <li class="mb-2"><strong>Header:</strong> .fc-solid-help (FontCustom) <v-chip small>50px</v-chip></li>
                                  <li class="mb-2"><strong>Search the Help Center:</strong> .fc-search (FontCustom) <v-chip small>24px</v-chip></li>
                                  <li class="mb-2"><strong>Send a Secure Message:</strong> .fc-send-blue-cross-nc (FontCustom) <v-chip small>24px</v-chip></li>
                              </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Find Care</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="title">Search for Doctors & More</p>
                              <ul>
                                  <li class="mb-2"><strong>Find a Doctor:</strong> .fc-doctor (FontCustom) <v-chip small>24px</v-chip></li>
                                  <li class="mb-2"><strong>Find a Cost:</strong> .fc-smart-shopper-savings (FontCustom) <v-chip small>24px</v-chip></li>
                                  <li class="mb-2"><strong>Find a Pharmacy:</strong> .fc-pharmacy (FontCustom) <v-chip small>24px</v-chip></li>
                                  <li class="mb-2"><strong>Find a Drug:</strong> .fc-drugs (FontCustom) <v-chip small>24px</v-chip></li>
                                  <li class="mb-2"><strong>Find Care:</strong> .fc-urgent-care (FontCustom) <v-chip small>24px</v-chip></li>
                                  <li class="mb-2"><strong>Find an Urgent Care:</strong> .fc-apple (FontCustom) <v-chip small>24px</v-chip></li>
                                  <li class="mb-2"><strong>Find a Dentist:</strong> .fc-dental (FontCustom) <v-chip small>24px</v-chip></li>
                              </ul>
                              <p class="title">Compare and Save with SmartShopper</p>
                              <ul>
                                  <li class="mb-2"><strong>Header:</strong> .fc-smart-shopper-savings (FontCustom) <v-chip small>72px</v-chip></li>
                              </ul>
                              <p class="title">Health Questions? Call 24/7</p>
                              <ul>
                                  <li class="mb-2"><strong>Header:</strong> .fc-nurse-line (FontCustom) <v-chip small>72px</v-chip></li>
                              </ul>
                              <p class="title">Take Action to Avoid Health Problems</p>
                              <ul>
                                  <li class="mb-2"><strong>Header:</strong> .fc-solid-heart-rate (FontCustom) <v-chip small>50px</v-chip></li>
                              </ul>
                              <p class="title">Before You Choose a Doctor</p>
                              <ul>
                                  <li class="mb-2"><strong>Header:</strong> .fc-solid-doctor (FontCustom) <v-chip small>50px</v-chip></li>
                              </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                </v-card-text>
                <v-card-actions>
                      <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf?seid=5cf930ca7a42a545358be833" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                          View Specs & Styles in Zeplin
                      </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        FontCustom Icon Build Process
                    </p>

                      <p>Designer builds out the needed icon in SVG format.</p>
                      <p>
                        <ul>
                          <li>Dimensions: 250px X 250px</li>
                          <li>Color: #000000</li>
                          <li>Solid shapes and outlined fonts only</li>
                        </ul>
                      </p>

                      <p>Designer provides these icons to the assigned team developer to compile the font.</p>
                      <p>
                        <ul>
                          <li>Blue Connect Mobile - Seth Rhodes</li>
                          <li>Blue Connect 2.0 - Anand Krishnankutty</li>
                          <li>Blue Connect 1.0 - This team uses individual assets as well as the 2.0 font custom files</li>
                          <li>Smart Desktop - N/A This team utilizes the Material Design icon font only</li>
                          <li>Experience Health - TBD</li>
                        </ul>
                      </p>

                      <p>Developer recompiles the font following the instructions on this GitHub page.</p>

                      <p>Developer adds the new version to the following repositories in GitHub:</p>
                      <p>
                        <ul>
                          <li>Blue Connect Mobile Icons</li>
                          <li>Blue Connect Web Icons</li>
                        </ul>
                      </p>


                </v-card-text>
                <v-card-actions>
                        <v-btn href="/assets/downloads/bcbsnc-platform-assets.zip" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View on GitHub
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


        </v-flex>
    </v-layout>
</v-container>

</template>
