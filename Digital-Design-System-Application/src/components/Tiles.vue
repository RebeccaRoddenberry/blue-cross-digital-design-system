

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
                        Tiles
                    </p>
                    <p>
                      Tiles can be used to display groups of information, pages, or links. Blue Cross NC has brand approved tile styles for all communications associated with Page Layouts. Use the styles below when creating tiles. Do not alter the approved tile styles, colors, or layouts.
                    </p>

                    <v-btn to="rightrail" outlined color="#0E92C7" class="mr-4 mb-4 text-capitalize">
                        Right Rail Usage
                    </v-btn>

                    <v-expansion-panels accordion class="pt-2">
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Standards</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <ul>
                                <li>Aspect Ratio (1:1) or Square (340x340px)</li>
                                <li>Full tile area is the link (not just blue tab or text).</li>
                                <li>Live area (margins) should be 40px from the top and bottom and 30px from the sides</li>
                                <li>All text and/or logos should be locked to the upper left corner of the live area and left-aligned whenever possible</li>
                                <li>Tile Headline: Univers Condensed Bold (~30px/34px)</li>
                                <li>Secondary Text: Univers Roman/Basic (~18px/24px)</li>
                                <li>Allow for 12px between Headline and Secondary text.</li>
                                <li>Light tile style is a light image or solid color with dark text (#023347). Dark tile style is a dark image or solid color with white text (#FFF).</li>
                                <li>Blue Tab (lower right corner) color is #00AEEF, 90% opacity on ALL tiles and the same size in all tiles appearing in the same instance</li>
                              </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Style Guidelines</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p><strong>Manage My Plan</strong> style is intended to be the simplest design:</p>
                              <p>
                                <ul>
                                  <li>Use solid color backgrounds: light (#BBE2EF) or dark (#0D5C7B)</li>
                                  <li>Use flat icons as a visual</li>
                                </ul>
                              <p>

                              <p><strong>Manage My Health</strong> style is intended to encourage behavioral change:</p>
                              <p>
                                <ul>
                                  <li>Use lifestyle or other relevant photography</li>
                                  <li>Photos should not be blurred to the point the user cannot understand the composition. If necessary, the photo can have an light or dark overlay to increase contrast with text</li>
                                </ul>
                              </p>

                              <p><strong>Offers (promotional or campaign)</strong> have the most flexibility as they have the shortest shelf-life and need to be integrated with other components such as emails or web banners</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card-text>
                <v-card-actions >
                        <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/dashboard?seid=5dcad0f4a9b94d8ecb7907e9" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            Download Tile Template (AI)
                            <v-icon right dark>cloud_download</v-icon>
                        </v-btn>
                        <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/dashboard?seid=5dcad0f4a9b94d8ecb7907e9" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            Download Tile Template (PSD)
                            <v-icon right dark>cloud_download</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                  <p class="display-1 text--primary">
                      Design
                  </p>
                  <v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/tile-anatomy-1.jpg" />
                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                  <p class="display-1 text--primary">
                      Examples
                  </p>
                  <v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/tile-anatomy-2.jpg" />
                </v-card-text>
            </v-card>


        </v-flex>
    </v-layout>
</v-container>

</template>
