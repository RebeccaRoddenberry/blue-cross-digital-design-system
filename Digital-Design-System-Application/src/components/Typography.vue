

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
                        Univers <v-chip outlined>...pronounced "Uni-verrr"</v-chip>
                    </p>

                    <p>The sans serif font, Univers LT Std, should be used in all large-format type treatments, headlines, subheadlines, call-outs and body copy. The clean modern look and the variety of typefaces within the Univers LT Std family make it a great ambassador of the Blue Cross NC brand. Univers LT Std should be used in any situation in which the choice of fonts noticeably impacts the look and feel of the brand.</p>

                    <p>
                      <v-btn href="/assets/downloads/Accessibility Guide.pdf" outlined color="#0E92C7" class="mr-4 text-capitalize">
                          Download Platform SCSS Assets
                          <v-icon right dark>cloud_download</v-icon>
                      </v-btn>

                      <v-btn href="assets/downloads/Accessibility Quick Checklist.pdf" outlined color="#0E92C7" class="text-capitalize">
                          Download Font Files
                          <v-icon right dark>cloud_download</v-icon>
                      </v-btn>
                    </p>

                    <p class="subtitle-1 text--primary">Selected Typefaces in use for Web:</p>

                    <v-row>
                        <v-col md="4">
                            <p class="display-4 text--primary">.display-4</p>
                            <p class="display-3 text--primary">.display-3</p>
                            <p class="display-2 text--primary">.display-2</p>
                            <p class="display-1 text--primary">.display-1</p>
                            <p class="headline text--primary">.headline</p>
                            <p class="title text--primary">.title</p>
                            <p class="subtitle-1 text--primary">.subtitle</p>
                            <p class="body-2 text--primary">.body-2</p>
                            <p class="body-1 text--primary">.body-1</p>
                            <p class="caption text--primary">.caption</p>
                        </v-col>
                        <v-col>
                            <p class="display-4 text--primary">UniversLTStd-Cn, Light, 112px,</p>
                            <p class="display-3 text--primary">UniversLTStd-Cn, Regular, 56px,</p>
                            <p class="display-2 text--primary">UniversLTStd-Cn, Regular, 45px,</p>
                            <p class="display-1 text--primary">UniversLTStd-Cn, Bold, 36px,</p>
                            <p class="headline text--primary">UniversLTStd-Cn, Bold, 30px,</p>
                            <p class="title text--primary">UniversLTStd-Cn, Bold, 24px,</p>
                            <p class="subtitle-1 text--primary">UniversLTStd, Regular, 20px,</p>
                            <p class="body-2 text--primary">UniversLTStd, Bold, 16px,</p>
                            <p class="body-1 text--primary">UniversLTStd, Regular, 16px,</p>
                            <p class="caption text--primary">UniversLTStd, Regular, 14px,</p>
                        </v-col>
                    </v-row>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://zpl.io/bA75DGx" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View in Zeplin
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Alternate Font
                    </p>
                    <p>Helvetica Neue, Helvetica and Arial can be used as fall back options – in that order. Do NOT use Serif fonts on any communications associated with Blue Cross NC. Condensed font versions are used for headers while light/thin versions are used for larger text. A higher contrast is preferred on communications.</p>

                    <v-row>
                        <v-col>
                            <p class="subtitle-1 text--primary">Helvetica Neue</p>
                            <v-img alt="Blue Connect" contain src="@/assets/img/helvetica.svg" />
                        </v-col>
                        <v-col>
                            <p class="subtitle-1 text--primary">Arial</p>
                            <v-img alt="Blue Connect" contain src="@/assets/img/arial.svg" />
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                      Logo Font
                    </p>
                    <p>The serif typeface, Walbaum Bold, is used as the Blue Cross and Blue Shield of North Carolina type treatment. It should only be used for the word “Blue” in any Blue Cross NC product or program type treatments.</p>
                    <p class="subtitle-1 text--primary">Walbaum Bold</p>
                      <v-img alt="Blue Connect" contain src="@/assets/img/walbaum.svg" />

                </v-card-text>
            </v-card>


        </v-flex>
    </v-layout>
</v-container>

</template>
