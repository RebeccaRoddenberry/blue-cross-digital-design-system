

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
                        Imagery
                    </p>
                    <p>The imagery selected for our materials and communications should differentiate us from other healthcare companies. Choose images that support our brand strength, identity, and stability. Our imagery guidelines are designed to encourage
                        correct selection of images for all Blue Cross NC affiliated materials. Follow the principles listed below and the three image type requirements when choosing images for your communications.</p>

                    <v-alert
                      dense
                      type="info"
                    >
                    All images intended for public release must follow Corporate Style guidelines, have the authorized and documented licensing (Royalty-free or Rights-managed), and be reviewed and approved by Blue Cross NC. Please send requests
                        to your Blue Cross NC contact.
                    </v-alert>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="/assets/downloads/bcbsnc-platform-assets.zip" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Brand and Imagery Guidelines for our Medicare Audience
                            <v-icon right dark>picture_as_pdf</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Image Selection
                    </p>
                    <p>Our imagery has three categories:</p>
                    <p>
                        <ol>
                            <li>Lifestyle</li>
                            <li>Health and Recovery</li>
                            <li>Metaphoric</li>
                        </ol>
                    </p>

                    <p>Our imagery is engaging and distinctive yet maintains a common style. Always keep the following principles in mind while selecting or shooting imagery:</p>

                    <v-expansion-panels accordion class="pt-2">
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Maintain Authenticity</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                    <li>Honest and believable; never artificial, manipulated, overly posed or stylized.</li>
                                    <li>Tone is slightly desaturated with a bit of contrast between the foreground and background.</li>
                                    <li>Lighting should come from existing sources whenever possible. Back light effects, color burns and light leaks should occur naturally and not be overly sought after or staged.</li>
                                    <li>Aim for a realistic style rather than one that is distorted or exaggerated.</li>
                                    <li>People appear candid and sincere. People engaged in activities appear to be acting spontaneously, unaware of the camera. Show activities that evoke feelings of aspiration and are honest and believable life moments.</li>
                                    <li>Interiors and outdoor environments are shot true to life. They are shown as they normally appear, not obviously staged or dressed.</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Express Diversity</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>Our imagery reflects our consumers’ cultures and communities across North Carolina.</p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Eliminate Special Effects</v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                    <li>Do not use lens effects or artificial filters that distort or exaggerate subjects.</li>
                                    <li>Do not use duotones or other stylized techniques.</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Lifestyle
                    </p>
                    <p>Lifestyle showcases the people whose lives we impact through our business. Use the following examples as a guide when selecting or shooting images in this category:
                    </p>
                    <p>
                        <ol>
                            <li><strong>Capture Moments of Aspiration:</strong> Candid and unposed, capturing genuine momentsas they happen.</li>
                            <li><strong>Engaged:</strong> Subjects involved in a process or an activity,never just sitting or posed.</li>
                            <li><strong>Focused:</strong> Subjects are engrossed, fully absorbed in the moment.</li>
                            <li><strong>Active:</strong> Images should always imply an action.</li>
                        </ol>
                    </p>
                    <v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/imagery/images-lifestyle.jpg" width="800" />
                </v-card-text>
            </v-card>

            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Health and Recovery
                    </p>
                    <p>Health and Recovery imagery showcases the end benefit of the services we provide. Use the following concepts as a guide when selecting or shooting images in this category:
                    </p>
                    <p>
                        <ol>
                            <li><strong>Focus:</strong> The main focus should be on the patient and the doctor, therapist or support staff should be secondary. Either in the foreground or midrange, the patient should always be in focus; the doctor may be softly out of focus.</li>
                            <li><strong>Positive:</strong> Imagery focuses on the positive side of health care and recovery; never on moments of negativity or uncertainty.</li>
                            <li><strong>Genuine:</strong> Subjects are candid and unposed, captured in genuine moments and settings.</li>
                        </ol>
                    </p>
                    <v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/imagery/images-health-recovery.jpg" width="800" />
                </v-card-text>
            </v-card>

            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Metaphoric
                    </p>
                    <p>Metaphoric imagery allows for visual communications that are far less literal than our other imagery and creates restful breaks that allow deeper reflection. It suggests ideas and metaphors that engage the audience on an intellectual
                        and emotional level. Use the following concepts as a guide when selecting or shooting images in this category:
                    </p>
                    <p>
                        <ol>
                            <li><strong>Human:</strong> Subjects must contain reference to humanity.</li>
                            <li><strong>Aspirational:</strong> Subjects should reflect an aspirational moment or activity.</li>
                            <li><strong>Distinctive:</strong> Select images that immediately capture the imagination.</li>
                            <li><strong>Simple:</strong> Choose subjects that are quickly and easily understood.</li>
                        </ol>
                    </p>
                    <v-img alt="Digital Design System" class="shrink mr-6" contain src="@/assets/img/imagery/images-metaphoric.jpg" width="800" />
                      <p></p>
                    <p>This is a selection from the Blue Cross NC Brand Style Guide (pdf). See Sections 4.8-4.13 for more details.</p>
                </v-card-text>
            </v-card>

            <v-alert
              dense
              type="info"
            >
              The photography in this document is for inspiration only. Licensing and or permission for the use of any imagery in this guide must be obtained prior to use outside this document. Do not photocopy, redraw or reenact any of the images within this document without the appropriate licensing or permission.
            </v-alert>


        </v-flex>
    </v-layout>
</v-container>

</template>
