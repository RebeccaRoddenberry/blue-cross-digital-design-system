

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
                        Content
                    </p>
                    <p>View the DX Content Strategy Documentation for the latest updates.</p>
                </v-card-text>
                <v-card-actions>
                    <v-btn href="https://wiki.bcbsnc.com/display/DECS/Digital+Experience+Content+Strategy+Home" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                        DX Content Strategy Documentation
                        <v-icon right dark>open_in_new</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                  <p class="display-1 text--primary">
                      Measure Your Content Reading Level
                  </p>
                    <p class="subtitle-1 text--primary">
                        Blue Cross NC has set goals for simplifying language in member communications. To check how your documents measure up, follow these simple steps to measure your reading level.
                    </p>
                    <p class="mb-0 title text--primary">Check language simplification targets in MS Word</p>
                    <p>
                        <ol>
                            <li>Click on click on File, then Options</li>
                            <li>Click Proofing. Select “Check grammar with spelling and Show readability statistics.”</li>
                            <li>Open an MS Word document, click on the Review Tab, click Spelling & Grammar. Readability statistics will show up at the end.</li>
                        </ol>
                    </p>

                    <p>Simplification Targets</p>
                    <v-card outlined width="400">
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Blue Cross NC Targets</th>
                                        <th class="text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in targets" :key="item.name">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.calories }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                      </v-card>

                        <p class="mt-6">Readability Statistics</p>

                        <v-row>
                          <v-col>
                            <v-card class="mb-6" outlined width="400">
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">Counts</th>
                                                <th class="text-left"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in readabilitycounts" :key="item.name">
                                                <td>{{ item.name }}</td>
                                                <td>{{ item.calories }}</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                              </v-card>
                            </v-col>

                            <v-col>
                              <v-card class="mb-6" outlined width="400">
                                  <v-simple-table>
                                      <template v-slot:default>
                                          <thead>
                                              <tr>
                                                  <th class="text-left">Readability</th>
                                                  <th class="text-left"></th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr v-for="item in readabilityaverages" :key="item.name">
                                                  <td>{{ item.name }}</td>
                                                  <td>{{ item.calories }}</td>
                                              </tr>
                                          </tbody>
                                      </template>
                                  </v-simple-table>
                              </v-card>
                            </v-col>

                            <v-col>
                              <v-card outlined width="400">
                              <v-simple-table>
                                  <template v-slot:default>
                                      <thead>
                                          <tr>
                                              <th class="text-left">Averages</th>
                                              <th class="text-left"></th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr v-for="item in readabilityreadability" :key="item.name">
                                              <td>{{ item.name }}</td>
                                              <td>{{ item.calories }}</td>
                                          </tr>
                                      </tbody>
                                  </template>
                              </v-simple-table>
                            </v-card>
                          </v-col>

                        </v-row>

                    <p class="title mt-4 mb-0">Health Literacy Advisor (HLA) Tool</p>
                    <p>If you create a lot of content, you may benefit from the HLA tool from Microsoft Word. It puts Language Simplification guidelines and tips into action and:
                      <p>
                        <ul>
                        <li>Scores your writing for reading level and comprehension</li>
                        <li>Highlights words and phrases to simplify</li>
                        <li>Helps you reach 6th- to 8th-grade reading level targets</li>
                        </ul>
                      </p>
                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Naming Principle
                    </p>
                    <p>To help consumers easily navigate through the BCBSNC systems and programs, it is recommended that more descriptive, user-friendly language is used.</p>

                    <v-card outlined>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Suggestion</th>
                                        <th class="text-left">Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in principles" :key="item.name">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.calories }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card>

                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Terms & Definitions
                    </p>
                    <p>Replacing industry jargon with everyday language will help make all our communications simpler and clearer.</p>

                    <v-expansion-panels accordion class="pt-4">
                        <v-expansion-panel v-for="(item,a) in 1" :key="a">
                            <v-expansion-panel-header>Alert Code</v-expansion-panel-header>
                            <v-expansion-panel-content>
                               A message explaining how a service was processed or alerting you to a problem with the claim. It helps you see how the plan decided what it will pay for the services you received.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,a) in 1" :key="a">
                            <v-expansion-panel-header>Allowed Amount</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The most your plan will pay for a covered service. Blue Cross NC negotiates this lower rate with in-network providers to save you money. For example, a doctor charges $150 for a visit — but the allowed amount is $100. Thus, you save $50 as a plan member. (If you see an out-of-network provider that charges more than the allowed amount, you may have to pay the extra cost.)
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Amount Not Covered / Other Liability</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              This can include non-covered services, out-of-network costs above the allowed amount and services that didn’t get prior review (approval) as required.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Appeal</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              A request that your plan review a decision that denies a benefit or payment (either in whole or in part). Most appeal requests will need to go to Original Medicare since it is your primary insurance plan.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Assignment</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              An agreement by providers to be paid directly by Medicare, to accept the payment amount Medicare approves for the service, and to not bill you for any more than the Medicare deductible and coinsurance.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Blue Cross NC Member Savings</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The total amount you saved as a Blue Cross NC member from in-network discounts and plan payments.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Blue Cross NC Paid</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The amount your Medicare Supplement plan paid for covered services you received.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Coinsurance</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The amount you may be required to pay as your share of the cost for services after you pay any deductibles. Coinsurance is usually a percentage (for example, 20%).
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Copayment (Copay)</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              A fixed amount (for example, $15) you pay for a covered health care service, usually when you get the service. The amount can vary by the type of covered service.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Covered Services</v-expansion-panel-header>
                            <v-expansion-panel-content>
                               Refer to your benefit booklet for details on which services are covered by your Medicare Supplement plan.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Deductible</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The amount you must pay for health care before your Medicare Supplement plan begins to pay.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Family Deductible</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Once the sum of all family member payments meets the family deductible, each member begins to pay the copay or coinsurance amount.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Family Out-of-Pocket Limit</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Once this limit is reached, your plan pays 100% of covered services for each family member.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>In-Network</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Doctors, hospitals, clinics and other providers that contract with your plan to provide services at a lower rate.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>In-Network Discount</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The amount you saved by using a provider that is in-network for your plan. It’s the difference between what your provider charged and the allowed amount.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Medicare-Approved Amount</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The amount a provider that accepts Medicare assignment (rates) can be paid. It may be less than the actual amount the provider charged.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Medicare Supplement Plan (Medigap)</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              A policy that helps pay some of the health care costs that Original Medicare doesn’t cover — like copays, coinsurance and deductibles. Medicare first pays its share of the Medicare-approved amount for covered health care costs. Then, your Medicare Supplement plan pays its share.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Original Medicare</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Includes Part A (Hospital Insurance) and Part B (Medical Insurance). After you pay a deductible, Medicare pays its share of the Medicare-approved amount, and you pay your share (coinsurance and deductibles).
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Out-of-Network</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Services from doctors, hospitals, clinics and other providers that don’t have a contract with your plan. They usually cost you more than in-network providers.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Out-of-Pocket Limit</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The total you’ll spend during a benefit year before your plan starts to pay 100% of covered services.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Plan’s Limit</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              This is the specific deductible, coinsurance or out-of-pocket limit for your plan.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Preferred Care (Tier 1)</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Specialists and facilities that deliver quality care at a better value, so out-of-pocket costs are lower. Tiers apply to all facilities and these specialty practices: Cardiology; Endocrinology; Gastroenterology; Orthopedic Surgery; General Surgery; Neurology; and OB/GYN. (All primary care providers are considered Preferred Care.)
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Service</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The type of care you received. Different services can share the same label, like “Medical” or “Facility.” This helps protect your privacy. Contact your provider for more details on a service.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Standard Care (Tier 2)</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Specialists and facilities that meet Blue Cross NC’s quality standards, but out-of-pocket costs are higher than Preferred Care (Tier 1). See Preferred Care definition above.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>What You May Owe</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The amount you’ll ultimately pay the provider after any payments from Medicare and your Medicare Supplement plan are applied. It does not reflect payments you’ve already made to the provider.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Your Plan Paid</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              The amount your plan paid for services you received. Please note that this amount may be $0 if you receive services that go towards your deductible and your deductible has not been met or if your copay is equal to or more than the allowed amount. As a Blue Cross NC member, you receive discounts by using providers that are in-network.
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                      Standard Legal Copy
                    </p>
                    <p class="mb-0 title text--primary">Standard Legal – for deliverables <strong>without</strong> third-party trademarks</p>
                    <p>® Marks of the Blue Cross and Blue Shield Association, an association of independent Blue Cross and Blue Shield Plans. Blue Cross and Blue Shield of North Carolina is an independent licensee of the Blue Cross and Blue Shield Association. UXXXXX, X/XX</p>
                    <p><strong>OR</strong></p>
                    <p>®, SM Marks of the Blue Cross and Blue Shield Association, an association of independent Blue Cross and Blue Shield Plans. Blue Cross and Blue Shield of North Carolina is an independent licensee of the Blue Cross and Blue Shield Association. UXXXXX, X/XX</p>

                    <p class="mb-0 title text--primary">Standard Legal – for deliverables <strong>with</strong> third-party trademarks</p>
                    <p>
                      BLUE CROSS®, BLUE SHIELD® and the Cross and Shield symbols are marks of the Blue Cross and Blue Shield Association, an association of independent Blue Cross and Blue Shield Plans. ®1, SM1 Mark of Blue Cross and Blue Shield of North Carolina. All other marks and trade names are the property of their respective owners. Blue Cross and Blue Shield of North Carolina is an independent licensee of the Blue Cross and Blue Shield Association. UXXXXX, X/XX
                    </p>

                    <p class="mb-0 title text--primary">Marks</p>
                    <p>When there are BCBSNC marks, they will be noted with ®1 or SM1. These marks will be noted in the legal copy in the following way: ®1, SM1 Marks of Blue Cross and Blue Shield of North Carolina.
                      This line of legal copy will be placed immediately following “… an association of independent Blue Cross and Blue Shield Plans.”</p>

                    <p>If there are third-party marks, they should be recognized with the following line:</p>
                    <ul>
                      <li>All other marks and trade names are property of their respective owners.</li>
                      <li>This line of legal copy will be placed immediately following the BCBSA service mark legal copy and, if applicable, after the BCBSNC service mark legal copy.</li>
                    </ul>

                    <p>When there are multiple Blue marks, use the following line:</p>
                    <ul>
                      <li>BLUE CROSS®, BLUE SHIELD®, the Cross and Shield symbols and all related derivative marks are marks of the Blue Cross and Blue Shield Association, an association of independent Blue Cross and Blue Shield Plans.</li>
                      <li>This line is useful when you have a piece that, for instance, mentions Blue 20/20, Health Line Blue and Dental Blue.</li>
                    </ul>

                    <p>If the Blue Cross and Blue Shield of North Carolina logo is present and space is extremely limited, the legal copy may be reduced as appropriate to:
                      ®, SM Marks of the Blue Cross and Blue Shield Association. UXXXXX, X/XX</p>
                    <p><strong>OR</strong></p>
                    <p>® Marks of the Blue Cross and Blue Shield Association. UXXXXX, X/XX</p>

                    <p class="mb-0 title text--primary">Important Note</p>
                    <p>
                      For any piece without a definitive solicitation or call-to-action (for example, “Talk with your broker today...” or “Visit our website to sign up...” or “Call now to purchase coverage...”), the following legal copy DOES NOT need to appear: “Blue Cross and Blue Shield of North Carolina is an independent licensee of the Blue Cross and Blue Shield Association.” However, legal copy regarding ownership of service marks and trademarks must still appear. So, for instance, standard legal for deliverables without third-party marks and without a call-to-action would be: ®, SM Marks of the Blue Cross and Blue Shield Association. UXXXXX, X/XX
                    </p>

                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                      SEO
                    </p>
                    <p>Importance of adding meta tags to campaign pages.</p>
                    <p>Use www.browseo.net to see how a page ranks before editing.</p>

                    <v-btn href="http://www.browseo.net/" outlined color="#0E92C7" class="mr-4 text-capitalize">
                        Visit BrowSEO
                        <v-icon right dark>open_in_new</v-icon>
                    </v-btn>

                    <p class="mt-4 title text--primary">Search Engine Optimization (SEO) is how you optimize your website, webpage, microsite,video, or image to rank on Google or other search engines.</p>
                    <p>SEO can affect how your page searches internally as well.</p>
                    <p>SEO is a broad strategy to increase the visibility of your digital products, but we focus heavily on a few tactics to increase SEO:</p>
                      <ul>
                        <li>Metadata (titles, descriptions, keywords)</li>
                        <li>Video titles, descriptions, and keywords</li>
                        <li>Alt tags on images</li>
                        <li>Text links and button content</li>
                        <li>Dynamic headlines and subheads</li>
                      </ul>

                      <v-expansion-panels accordion class="pt-4">
                          <v-expansion-panel v-for="(item,a) in 1" :key="a">
                              <v-expansion-panel-header>Meta Title</v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <p>
                                  <ul>
                                    <li>The meta title should describe what the page is about in a few keywords. Do not just take the headline of the page.</li>
                                    <li>Titles should be dynamic for each page.</li>
                                    <li>Titles should include the company name or abbreviation (Blue Cross NC).</li>
                                    <li>All titles should be 55 characters or less.</li>
                                  </ul>
                                </p>
                                <p><strong>For example:</strong></p>
                                  <p>Health Insurance Plans for North Carolina | Blue Cross NC.</p>
                                  <p>Dental Blue for Individuals | Dental Plans | Blue Cross NC</p>
                              </v-expansion-panel-content>
                          </v-expansion-panel>
                          <v-expansion-panel v-for="(item,a) in 1" :key="a">
                              <v-expansion-panel-header>Meta Description</v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <p>
                                  <ul>
                                    <li>Meta descriptions should tell what the page is about or what the user will find on the page.</li>
                                    <li>All meta descriptions should be 160 characters or less.</li>
                                    <li>They should include common keywords about the page and be written in sentence form.</li>
                                    <li>Add the company name in the meta description.</li>
                                  </ul>
                                </p>
                                <p><strong>For example:</strong></p>
                                  <p>Blue Cross NC offers comprehensive health insurance plans for individuals, families, Medicare, and businesses. Shop for vision, dental, and health insurance plans.</p>
                              </v-expansion-panel-content>
                          </v-expansion-panel>
                          <v-expansion-panel v-for="(item,i) in 1" :key="i">
                              <v-expansion-panel-header>Meta Keywords</v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <p>
                                  <ul>
                                    <li>Meta keywords are no longer used to help your page rank on search engines.</li>
                                    <li>However, it is still necessary to add a few common search terms and keywords to your metadata for internal search.</li>
                                    <li>Google still reads them to index your site and pages in proper categories.</li>
                                    <li>Use between 6 and 10 keywords for each page that are unique to the page or your site.</li>
                                  </ul>
                                </p>
                              </v-expansion-panel-content>
                          </v-expansion-panel>
                          <v-expansion-panel v-for="(item,i) in 1" :key="i">
                              <v-expansion-panel-header>Video Metadata</v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <p>
                                  <ul>
                                    <li>Titles should include a keyword phrase about the video and either a dash (-) or a pipe (|) and the company name, Blue Cross NC.</li>
                                    <li>Investing $5 million in Diabetes Research | Blue Cross NC</li>
                                    <li>Descriptions should tell what the video is about quickly. Put the most important details in the beginning.</li>
                                    <li>Choose a particular category for your video to increase search return. Add helpful keyword tags for each video.</li>
                                  </ul>
                                </p>
                              </v-expansion-panel-content>
                          </v-expansion-panel>
                          <v-expansion-panel v-for="(item,i) in 1" :key="i">
                              <v-expansion-panel-header>Alt Tags</v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <p>
                                  <ul>
                                    <li>Each image on a page should have an alt tag written.</li>
                                    <li>Not having alt tags can hurt your page rankings and overall SEO.</li>
                                    <li>Alt tags should be a short sentence about the image.</li>
                                    <li>Alt tags should describe the image in detail.</li>
                                  </ul>
                                </p>
                                <p><strong>For example:</strong></p>
                                  <p>Woman and Young Daughter Speaking with Female Doctor</p>
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
    data() {
        return {
            targets: [{
                name: 'Word per Sentence',
                calories: 'Average of 15 or fewer',
            }, {
                name: 'Passive Sentences',
                calories: '10% or less',
            }, {
                name: 'Flesch-Kincaid Grade Level',
                calories: '6th - 8th grade',
            }, ],

            principles: [{
                name: 'Refer to initiatives using words that a consumer would use and that are more descriptive and functional in nature rather than Blue-centric words.',
                calories: 'Example for online links: “find a doctor or hospital” instead of “BlueDocFind”',
            }, {
                name: 'Use a commonplace, functional description rather than a custom name. It is more user friendly and broadly understood.',
                calories: 'Example for online links: “My Account” instead of “My Blue Dashboard”',
            }, {
                name: 'Refrain from further Blue naming if the initiative is already in the Blue context. It detracts from the overall brand strength and increases consumer confusion.',
                calories: 'Example: “student insurance options” instead of “Blue college plans”',
            },
               {
                name: 'Give internal projects a project name rather than a Blue-centric name.',
                calories: 'Example: “Project Boomerang” instead of “Blue Retain”',
            }, ],

            readabilitycounts: [{
                name: 'Words',
                calories: '187',
            }, {
                name: 'Characters',
                calories: '942',
            }, {
                name: 'Paragraphs',
                calories: '18',
            }, {
                name: 'Sentences',
                calories: '13',
            },],

            readabilityaverages: [{
                name: 'Sentences per Paragraph',
                calories: '1.6',
            }, {
                name: 'Words per Sentence',
                calories: '9.8',
            }, {
                name: 'Characters per Word',
                calories: '4.9',
            }, ],

            readabilityreadability: [{
                name: 'Passive Sentences',
                calories: '0%',
            },
              {
                name: 'Passive Sentences',
                calories: '0%',
              },
              {
                name: 'Flesch Reading Ease',
                calories: '63.3',
              },
              {
                name: 'Flesch-Kincaid Grade Level',
                calories: '6.8',
              },
          ],
        }
    },
}

</script>

<style lang="scss" scoped>
::v-deep {

  .v-data-table {
    td {
      padding: 18px;
    }

  }

}
</style>
