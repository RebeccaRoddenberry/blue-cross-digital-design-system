

<template>

<v-container fluid class="pa-0">

  <v-carousel hide-delimiters
      continuous
      cycle
      show-arrows-on-hover
      height="364"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
      >
      <v-img alt="Blue Connect Web" contain src="@/assets/img/slides/blue-connect-web-slide.png"/>
      </v-carousel-item>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
      >
      <v-img alt="Blue Connect Mobile" contain src="@/assets/img/slides/blue-connect-mobile-slide.png"/>
      </v-carousel-item>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
      >
      <v-img alt="SmartDesktop" contain src="@/assets/img/slides/smartdesktop-slide.png"/>
      </v-carousel-item>
    </v-carousel>


    <v-layout align-left justify-left class="pa-8">
        <v-flex text-xs-left>



            <div class="headline">Guidelines</div>
            <p>Our guidelines define best practices in usage, visual composition and limitations around our brand, including our color palette and logo usage.</p>

            <v-row v-for="n in 1" :key="n" :class="n === 1 ? 'mr-6' : ''" no-gutters>

                <v-card max-width="400" class="mr-6 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Accessibility
                        </p>
                        <p>At Blue Cross and Blue Shield of North Carolina, we want to ensure users of all abilities can access our site and applications</p>
                        <v-chip outlined class="ma-1 mb-2">508 Compliance</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Color Contrast</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Technical Guidelines</v-chip>
                    </v-card-text>
                    <v-card-actions>
                            <v-btn to="accessibility" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                                Understand Accessibility
                            </v-btn>
                    </v-card-actions>
                </v-card>

                <v-card max-width="400" class="mr-6 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Colors
                        </p>
                        <p>The official color of Blue Cross NC brand is Pantone Process Cyan (#00AEEF).</p>
                        <v-chip outlined class="ma-1 mb-2">Blue Cross NC</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Web</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Primary & Secondary Palette</v-chip>
                    </v-card-text>
                    <v-card-actions>
                      <div class="mb-2" style="position: absolute; bottom: 0;">
                            <v-btn to="colors" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                                Read Up on Colors
                            </v-btn>
                      </div>
                    </v-card-actions>
                </v-card>

                <v-card max-width="400" class="mr-6 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Content
                        </p>
                        <p>It also serves as a content standards reference for those involved in the development of Web content at Blue Cross and Blue Shield of North Carolina (BCBSNC).</p>
                        <v-chip outlined class="ma-1 mb-2">Simplification</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Terms & Legal</v-chip>
                        <v-chip outlined class="ma-1 mb-2">SEO Best Practices</v-chip>
                    </v-card-text>
                    <v-card-actions>
                      <div class="mb-2" style="position: absolute; bottom: 0;">
                            <v-btn to="content" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                                Check Content Strategy
                            </v-btn>
                      </div>
                    </v-card-actions>
                </v-card>

                <v-card max-width="400" class="mr-6 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Icons
                        </p>
                        <p>Designer builds out the needed icon in SVG format: Dimensions 250px X 250px, Color #000000, Solid shapes and outlined fonts only</p>
                        <v-chip outlined class="ma-1 mb-2">Fontcustom Icons</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Material Icons</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Brand-specific Icons</v-chip>
                    </v-card-text>
                    <v-card-actions class="mt-8">
                        <div class="mb-2" style="position: absolute; bottom: 0;">
                            <v-btn to="icons" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                                Download Full Icon Sets
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>



                <v-card max-width="400" class="mr-6 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Imagery
                        </p>
                        <p>The imagery selected for our materials and communications should differentiate us from other healthcare companies.</p>
                        <v-chip outlined class="ma-1 mb-2">Lifestyle Imagery</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Health and Recovery</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Metamorphic</v-chip>
                    </v-card-text>
                    <v-card-actions class="mt-8">
                        <div class="mb-2" style="position: absolute; bottom: 0;">
                            <v-btn to="imagery" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                                Imagery Guidelines & Usage
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>

                <v-card max-width="400" class="mr-6 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Logos
                        </p>
                        <p>To preserve the integrity of our brand, we must use the Blue Cross and Blue Shield of North Carolina logo correctly in ever application.</p>
                        <v-chip outlined class="ma-1 mb-2">Blue Cross NC Brand</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Digital Products</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Co-branding</v-chip>
                    </v-card-text>
                    <v-card-actions class="mt-8">
                        <div class="mb-2" style="position: absolute; bottom: 0;">
                            <v-btn to="logos" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                                Download Our Logos
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>

                <v-card max-width="400" class="mr-6 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Testing
                        </p>
                        <p>Based on the feedback of previous Member Council participants, we developed statements to reflect the priorities of our users and to help us set clear goals for this website.</p>
                        <v-chip outlined class="ma-1 mb-2">Outcome Statements</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Storyboards</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Task List</v-chip>
                    </v-card-text>
                    <v-card-actions class="mt-8">
                        <div class="mb-2" style="position: absolute; bottom: 0;">
                            <v-btn to="testing" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                                Usability Testing Strategy
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>

                <v-card max-width="400" class="mr-6 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Typography
                        </p>
                        <p>The sans serif font, Univers LT Std , should be used in all large-format type treatments, headlines, subheadlines, call-outs and body copy.</p>
                        <v-chip outlined class="ma-1 mb-2">About Univers</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Font Fallbacks</v-chip>
                        <v-chip outlined class="ma-1 mb-2">Download Font Files</v-chip>
                    </v-card-text>
                    <v-card-actions class="mt-8">
                        <div class="mb-2" style="position: absolute; bottom: 0;">
                            <v-btn to="typography" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                                Font Usage & Guidelines
                            </v-btn>
                        </div>
                    </v-card-actions>
                </v-card>

            </v-row>


        </v-flex>
    </v-layout>
</v-container>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '/assets/img/slides/blue-connect-web-slide.svg',
          },
        ],
      }
    },
  }
</script>
