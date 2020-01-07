

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
                            Checklist
                        </p>
                        <p>Download the PDFs:</p>

                        <v-btn href="/assets/downloads/Accessibility Guide.pdf" outlined color="#0E92C7" class="mr-4 text-capitalize">
                            Accessibility Guide
                            <v-icon right dark>picture_as_pdf</v-icon>
                        </v-btn>

                        <v-btn href="assets/downloads/Accessibility Quick Checklist.pdf" outlined color="#0E92C7" class="text-capitalize">
                            Accessibility Checklist
                            <v-icon right dark>picture_as_pdf</v-icon>
                        </v-btn>

                        <v-expansion-panels accordion class="pt-4">
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Alternate Text</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>Every image on the page has clear, appropriate alternate text.</li>
                                        <li>Decorative images and graphics are loaded by CSS or have null/empty alt values (alt="").</li>
                                        <li>Complex graphics (graphs, charts, etc.) either have a descriptive caption or a link to a description.</li>
                                        <li>Alternate text on image links is descriptive enough to convey appropriate information and direction to members.</li>
                                        <li>Any image-based form buttons have clear, accurate alternate text.</li>
                                        <li>If the same visual presentation can be made using text alone, an image is not used to present that text.</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Code Standards</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>The page is readable and functional when the text size is doubled.</li>
                                        <li>The web page has a descriptive and informative page title.</li>
                                        <li>The language of the page is identified using the HTML lang attribute</li>
                                        <li>The language of page content that is in a different language is identified using the lang attribute</li>
                                        <li>The HTML of a page of validates without significant errors.</li>
                                        <li>Semantic markup is used to designate headings code(h1), lists (ul, ol, and dl), emphasized or special text (strong, code, abbr, blockquote, for example), etc. Semantic markup is used appropriately.</li>
                                        <li>Markup is used in a way that facilitates accessibility. This includes following the HTML/XHTML specifications and using forms, form labels, frame titles, etc. appropriately.</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Content</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>Page headings are informative.</li>
                                        <li>Large blocks of text are broken up with useful headings.</li>
                                        <li>Navigation links that are repeated on web pages do not change order when navigating through the site.</li>
                                        <li>Elements that have the same functionality across multiple web pages are consistently identified.</li>
                                        <li>Instructions do not rely upon shape, size, or visual location (e.g., "Click the square icon to continue" or "Instructions are in the right-hand column").</li>
                                        <li>Instructions do not rely upon sound (e.g., "A beeping sound indicates you may continue.").</li>
                                        <li>The purpose of each link (or form image button or image map hotspot) can be determined from the link text alone, or from the link text and its context (e.g., surrounding paragraph, list item, table cell, or table
                                            headers).</li>
                                        <li>Links (or form image buttons) with the same text that go to different locations are readily distinguishable.</li>
                                        <li>Multiple ways are available to find other web pages on the site</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Design</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>Color is not the only way to distinguish important information.</li>
                                        <li>Links are either underlined or have a 3:1 contrast ratio with surrounding text and change visually on focus and hover.</li>
                                        <li>Text has enough contrast. The background and foreground colors have a contrast ratio of 3:1 for large text (18px and above) and 4.5:1 for smaller text.</li>
                                        <li>If the same visual presentation can be made using text alone, an image is not used to present that text.</li>
                                        <li>The font is readable and not too small (a least 9pt, 12pt preferred). (Optional)</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Documentation and Support</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>The documentation and support pages are accessible.</li>
                                        <li>The documentation includes any accessibility features, including any special keyboard shortcuts. (Optional)</li>
                                        <li>If there is audio technical support, like a phone line, there is a non-audio alternative, like a support email address, for users with hearing or speech difficulties. (Optional, required for Medicare)</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Files & Plug-Ins</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Any linked files are also accessible.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Forms</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>Each form element has a corresponding label element (preferred) or a title attribute.</li>
                                        <li>Any image-based form buttons have clear, accurate alternate text.</li>
                                        <li>Related form fields are grouped.</li>
                                        <li>The tab order of the fields (the order a user travels through them with the tab key) matches the visual order.</li>
                                        <li>Users can navigate and submit a form using only a keyboard.</li>
                                        <li>If the form has a time limit, there is a way to extend that limit.</li>
                                        <li>It is visually apparent which form field has the current keyboard focus (i.e., as you tab through the field, you can see where you are).</li>
                                        <li>Form fields are identified as required or optional. Any special formatting instructions are obvious and linked to the form field</li>
                                        <li>Form validation errors are presented in an efficient, intuitive, and accessible manner.</li>
                                        <li>If an input error is detected, provide suggestions for fixing the input in a timely and accessible manner</li>
                                        <li>Sufficient labels, cues, and instructions for required interactive elements are provided via instructions, examples, properly positioned form labels, and/or fieldsets/legends.</li>
                                        <li>If the user can change or delete legal or financial data, the changes/deletions can be reversed, verified, or confirmed.</li>
                                        <li>When a page element receives focus, it does not result in a substantial change to the page that could confuse or disorient the user.</li>
                                        <li>When a user inputs information or interacts with a control, it does not result in a substantial change to the page without warning.</li>
                                        <li>On a form validation, focus automatically moves to the error message or first invalid field (optional)</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Keyboard Accessibility</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>The entire page is keyboard-navigable. Users can reach every interactive element of the page using a keyboard, including all user interface controls, using the default navigation keys (tab for forward, shift + tab
                                            for back, enter or spacebar to trigger).</li>
                                        <li>There are no keyboard traps that prevent keyboard-only users from navigating.</li>
                                        <li>The navigation order of links, form elements, etc. is logical and intuitive.</li>
                                        <li>It is visually apparent which page element has the current keyboard focus (i.e., as you tab through the page, you can see where you are).</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Multimedia</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>No autoplay (preferred) OR a mechanism is provided to stop, pause, mute, or adjust volume for audio that automatically plays on a page for more than 3 seconds.</li>
                                        <li>Audio-only files have transcripts.</li>
                                        <li>Videos without an audio track have a text-based description.</li>
                                        <li>Videos have synchronized captions.</li>
                                        <li>No page content flashes more than 3 times per second unless that flashing content is sufficiently small and the flashes are of low contrast and do not contain too much red.</li>
                                        <li>Audio or video players have keyboard controls.</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Skip Navigation Link</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>There is a way to skip over repetitive navigation menus, if they exist. Note that an expandable and collapsible menu (e.g., a “hamburger” menu on a mobile page) meets this standard without a separate skip navigation
                                            link.</li>
                                        <li>The skip nav link is the first focusable object on a page.</li>
                                        <li>The skip nav link is either visible or appears on focus.</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Tables</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>Data tables have marked header cells.</li>
                                        <li>Tables are not used for layout (preferred), or layout tables do not have header cells.</li>
                                        <li>If a large or complex table has multiple levels of headers, the headers have an appropriate scope (Optional).</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Timed Elements</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <ul>
                                        <li>Every timed element (e.g., sliders, timed forms) has a way to either pause the content or extend the time.</li>
                                        <li>Automatically moving, blinking, or scrolling content that lasts longer than 5 seconds can be paused, stopped, or hidden by the user.</li>
                                        <li>Automatically updating content can be paused, stopped, or hidden.</li>
                                    </ul>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                    </v-card-text>
                    <v-card-actions>
                            <v-btn href="/assets/downloads/bcbsnc-platform-assets.zip" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                                Download SCSS Files
                                <v-icon right dark>cloud_download</v-icon>
                            </v-btn>
                    </v-card-actions>
                </v-card>


                <v-card class="pa-2 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                          Accessibility - General Guidelines
                        </p>
                        <p>Blue Cross and Blue Shield of North Carolina (Blue Cross NC) ensures our site and communications can be used and read by everyone. This includes anyone with visual, hearing, mental and physical disabilities. We make it our priority to comply with the WCAG 2.0 Level AA and PDF/UA guidelines. The guidelines listed below are to be used to tailor your communications and materials to follow the accessibility standards.</p>
                        <p>Section 508 Guidelines, as set by the federal government in Section 508 of the Rehabilitation Act (29 U.S.C. 794d)</p>

                        <v-expansion-panels accordion class="pt-2">
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Color Contrast</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p>
                                      Blue Cross NC follows color contrast standards to ensure foreground and a background colors provide enough of a contrast to make text easy to read for anyone with low vision or poor color vision. Smaller text (below 18pt) should have a contrast ratio of 4.5:1. Larger text can have a ratio of 3:1. [W3C]
                                    </p>
                                    <p>
                                      You can use the Color Contrast Analyzer to check the contrast of two colors.
                                    </p>
                                    <v-btn href="http://leaverou.github.io/contrast-ratio/" outlined color="#0E92C7" class="mr-4 text-capitalize">
                                        Color Contrast Analyzer
                                        <v-icon right dark>open_in_new</v-icon>
                                    </v-btn>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Text Size and Formatting</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p>Standard text size should be 16px (or 12pt) and a minimum of 12px (or 9pt) for readibility. Text links should appear blue, follow color contrast standards and are underlined on rollover except in the exceptions such as primary navigation.</p>

                                    <p>This is a basic text link (#0B76A1): <a href style="text-decoration: none; color: #0B76A1">Text Link</a></p>
                                    <p><v-chip label>This is a darker link color for shaded backgrounds (#04506E): <a href style="text-decoration: none; color: #04506E">Text Link</a></v-chip></p>
                                    <p>This is a text link that has been visited (#663366): <a href style="text-decoration: none; color: #663366">Visited Text Link</a></p>
                                    <p>If the link takes the user to a new website, it should use the New Window icon: <a href style="text-decoration: none; color: #0B76A1">Visit Website</a><v-icon right>open_in_new</v-icon></p>
                                    <p>If you are linking to a PDF file, it should indicate the file type: <a href style="text-decoration: none; color: #0B76A1">Download File (PDF)</a></p>
                                    <p>Or you can use an icon to show a file type: <a href style="text-decoration: none; color: #0B76A1">Download File</a><v-icon right>picture_as_pdf</v-icon></p>

                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Technical Guidelines</v-expansion-panel-header>
                                <v-expansion-panel-content>

                                  <v-btn href="/assets/downloads/Accessibility Guide.pdf" outlined color="#0E92C7" class="mr-4 text-capitalize">
                                      Alerts and Updates
                                      <v-icon right dark>picture_as_pdf</v-icon>
                                  </v-btn>

                                  <v-btn href="assets/downloads/Accessibility Quick Checklist.pdf" outlined color="#0E92C7" class="mr-4 text-capitalize">
                                      ARIA
                                      <v-icon right dark>picture_as_pdf</v-icon>
                                  </v-btn>

                                  <v-btn href="assets/downloads/Accessibility Quick Checklist.pdf" outlined color="#0E92C7" class="mr-4 text-capitalize">
                                      Captions
                                      <v-icon right dark>picture_as_pdf</v-icon>
                                  </v-btn>

                                  <v-btn href="assets/downloads/Accessibility Quick Checklist.pdf" outlined color="#0E92C7" class="mr-4 text-capitalize">
                                      Forms
                                      <v-icon right dark>picture_as_pdf</v-icon>
                                  </v-btn>

                                  <v-btn href="assets/downloads/Accessibility Quick Checklist.pdf" outlined color="#0E92C7" class="mr-4 text-capitalize">
                                      Keyboard Accessibility
                                      <v-icon right dark>picture_as_pdf</v-icon>
                                  </v-btn>

                                  <v-btn href="assets/downloads/Accessibility Quick Checklist.pdf" outlined color="#0E92C7" class="mr-4 text-capitalize">
                                      Modal Windows
                                      <v-icon right dark>picture_as_pdf</v-icon>
                                  </v-btn>

                                  <v-btn href="assets/downloads/Accessibility Quick Checklist.pdf" outlined color="#0E92C7" class="text-capitalize">
                                      Skip Navigation Links
                                      <v-icon right dark>picture_as_pdf</v-icon>
                                  </v-btn>

                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel v-for="(item,i) in 1" :key="i">
                                <v-expansion-panel-header>Universal Access</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                  <p>For questions about technologies like screen readers, screen magnification or speech recognition software, please contact our Accessibility Coordinator at dg-accessibility@bcbsnc.com.</p>
                                  <p class="mb-0 title text--primary">Technical Information</p>
                                  <p>The web application support standards are to be used by internal and external quality assurance. The guidelines listed below outline the browser and web application standards for vendor compliance. Adherence to these standards must always be in conjunction with active BLue Cross NC consultation and approval.
                                  </p>

                                  <p><strong>All vendors and internal development teams are required to comply with these standards.</strong></p>

                                  <p>To maintain our core sales and customer service capabilities, Blue Cross NC must keep all external-facing applications compatible with the current browser versions and devices used by our customers and business partners.
                                  </p>

                                  <p>Blue Cross NC uses state-of-the art web-analytics tools to monitor the browsers, devices and operating systems used by site visitors to our website and web-based applications. All Blue Cross NC applications are required to operate in a materially comparable way on both personal computers and mobile devices via Blue Cross NC supported browsers.
                                  </p>

                                  <p><strong>Please see below for technical support requirements, including</strong></p>
                                    <ul>
                                      <li>Supported browsers</li>
                                      <li>Supported mobile devices</li>
                                      <li>Peak hourly volumes</li>
                                    </ul>

                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>

                    </v-card-text>
                </v-card>


                <v-card class="pa-2 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                          Supported Browsers
                        </p>

                          <p>We support the following browsers (complete list):</p>

                          <p>Personal Computers:</p>
                          <ul>
                            <li>Microsoft Internet Explorer 11</li>
                            <li>Microsoft Edge</li>
                            <li>Apple Safari 9</li>
                            <li>Mozilla Firefox (all versions updated in the past 6 months)</li>
                            <li>Google Chrome (all versions updated in the past 6 months)</li>
                          </ul>

                          <p>Mobile Devices:</p>
                          <ul>
                            <li>Google Chrome on Android</li>
                            <li>Apple Safari on iOS</li>
                          </ul>

                          <p>Important notes for browser support compliance:</p>
                          <ol>
                            <li>Blue Cross NC will review and update the Blue Cross NC supported Internet browsers list on a quarterly basis. It is your responsibility to regularly review the Blue Cross NC supported Internet browsers list.</li>
                            <li>Quality assurance testing should be performed across all supported browsers, with the majority of testing focused on the most highly used browser for the application's target audience.</li>
                            <li>Development teams and vendors must be prepared to support new browser versions within 90 days of the updated Blue Cross NC supported Internet browsers list.</li>
                          </ol>

                    </v-card-text>
                </v-card>


                <v-card class="pa-2 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                          Supported Mobile Devices
                        </p>

                          <p>We support all mobile devices released since 2017 for the following device types:</p>

                          <ul>
                            <li>Apple iPhone</li>
                            <li>Apple iPad</li>
                            <li>Galaxy S Series</li>
                            <li>Galaxy Note series</li>
                            <li>Galaxy Tab series</li>
                            <li>Amazon Fire series</li>
                            <li>Motorola Droid</li>
                          </ul>

                    </v-card-text>
                </v-card>


                <v-card class="pa-2 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                          Peak Hourly Volume Support
                        </p>

                          <p>All Blue Cross NC web applications are required to support 200% of Peak Hourly Volumes for those applications.</p>

                          <p>Performance, Volume and Stress (PVS) testing should be conducted against the numbers below.</p>

                          <p>Secure Member Portal Requirements:</p>
                            <ul>
                              <li>Peak Hourly Volume = 5,580 visits per hour*</li>
                              <li>PVS Test Volume = 11,160 visits per hour*</li>
                            </ul>

                          <p>Public Web Page Requirements:</p>
                          <ul>
                            <li>Peak Hourly Volume = 5,861 visits per hour*</li>
                            <li>PVS Test Volume = 11,722 visits per hour*</li>
                          </ul>

                          <p class="mb-0 mt-4 caption text--primary"><strong>*Analytics as of Q1 2016</strong></p>
                          <p class="caption text--primary">All standards will be reviewed on a quarterly basis and updated as needed.</p>

                          <p>Important notes for browser support compliance:</p>
                          <ul>
                            <li>Blue Cross NC will review and update the Blue Cross NC peak hourly support volume requirements on a quarterly basis. It is your responsibility to regularly review the Blue Cross NC peak hourly support volume requirements.</li>
                          </ul>

                    </v-card-text>
                </v-card>


                <v-card class="pa-2 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                          Member Data and Communication Preferences
                        </p>

                        <p>Blue Cross NC is the system of record for all member data and member communication preferences. Members must not be allow to modify their data or communication preference without Blue Cross NC’s permission.</p>

                    </v-card-text>
                </v-card>


                <v-card class="pa-2 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                          Webpage URLs
                        </p>

                        <p>All webpages should be hosted at a Blue Cross NC URL domain which will be defined by Blue Cross NC (e.g.http://www.BlueCrossNCassignedname.bcbsnc.com).</p>

                    </v-card-text>
                </v-card>


                <v-card class="pa-2 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                          Analytics Tools
                        </p>

                        <p>All consumer-facing components of webpages should include Blue Cross NC’s standard Adobe Web Analytics and OpinionLab code. All implementation of these analytics tools should be approved by Blue Cross NC.</p>

                    </v-card-text>
                </v-card>


                <v-card class="pa-2 mb-6">
                    <v-card-text>
                        <p class="display-1 text--primary">
                          Legal Notifications
                        </p>

                        <p>All webpages must include specific legal notifications as required by the federal and state governments and Blue Cross NC approved policies. All legal notifications must always be in made conjunction with active Blue Cross NC consultation and approval.</p>

                        <p class="mb-0 title text--primary">Multi-Language</p>
                          <p>Below is the Blue Cross NC approved notification for multi-language requirement.</p>

                          <v-btn href="https://www.bluecrossnc.com/about-us/policies-and-best-practices/non-discrimination-policy-and-accessibility-services" outlined color="#0E92C7" class="mr-4 text-capitalize">
                              Information in Other Languages
                              <v-icon right dark>open_in_new</v-icon>
                          </v-btn>

                          <p class="mb-0 mt-6 title text--primary">Non-Discrimination</p>
                          <p>Below is the Blue Cross NC approved notification for our non-discrimination requirement.</p>
                          <p>Blue Cross and Blue Shield of North Carolina does not discriminate on the basis of race, color, national origin, sex, age or disability in its health programs and activities.
                            Learn more about our non-discrimination policy and no-cost services available to you.</p>

                            <v-btn href="https://www.bluecrossnc.com/about-us/policies-and-best-practices/non-discrimination-policy-and-accessibility-services" outlined color="#0E92C7" class="mr-4 text-capitalize">
                                Non-discrimination Policy
                                <v-icon right dark>open_in_new</v-icon>
                            </v-btn>

                    </v-card-text>
                </v-card>

            </v-flex>
        </v-layout>
    </v-container>

</template>
