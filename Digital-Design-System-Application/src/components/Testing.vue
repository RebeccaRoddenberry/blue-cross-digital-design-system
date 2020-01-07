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
                        Testing
                    </p>
                    <p class="mb-0 title text--primary">Users</p>
                    <p>Those who use our digital properties, including our unauthenticated shopper web site, our Blue Connect site & app, our employer portal, & our provider portal.</p>

                    <p class="mb-0 title text--primary">User Research</p>
                    <p>Any attempt learn about our users, e.g., gathering user demographics or opinions via surveys.</p>

                    <p class="mb-0 title text--primary">User Testing</p>
                    <p>A subset of user research in which we gather direct feedback from users on our ideas (i.e., testing our ideas with users). Ideas could be presented in various ways, e.g., wireframes or comps (pictures of the final product), storyboards, presentations. The ideas could be presented in a focus group or to single users. MAG (our Member Advisory Group) is great alternative to focus groups for this kind of research.</p>

                    <p>Usability Testing (some call it “usability research” or “usability studies”) – A subset of user testing in which we gather direct feedback from users who are actually using something very similar or identical to the digital product/tool we are evaluating. They could be using the actual tool or a prototype that looks & behaves like the tool. (Usability testing is not done in focus groups.) Usability testing is the most reliable method for predicting how effectively people can use a tool & how they will feel about using it.</p>

                    <p>In addition to Accessibility Testing, we use the Design Thinking process involves testing a number of assets with member councils:</p>

                    <p>
                      <ul>
                        <li>Outcome Statements</li>
                        <li>Storyboards</li>
                        <li>Completing a task list with a clickable prototype (Axure)</li>
                      </ul>
                    </p>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="/assets/downloads/bcbsnc-platform-assets.zip" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            Download Common FAQs about Usability Testing
                            <v-icon right dark>cloud_download</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Blue Connect 2.0 for Medicare - A Case Study
                    </p>
                    <p>Below are samples for each type of asset. References are from the Blue Connect 2.0 experience for our Medicare audience.</p>

                    <v-data-table
                      :headers="headers"
                      :items="testingitems"
                      :hide-default-footer="true"
                      class="elevation-1"
                    ></v-data-table>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="/assets/downloads/bcbsnc-platform-assets.zip" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            Initial Questions
                            <v-icon right dark>cloud_download</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Outcome Statements
                    </p>

                    <p>
                      Intro: Based on the feedback of previous Member Council participants, we developed statements to reflect the priorities of our users and to help us set clear goals for this website. In this section, you will be reading six outcome statements, some of which are accompanied by storyboards to illustrate the desired outcomes. After reading the statements, you will be asked to sort them based on your own priorities.
                    </p>

                      <ol>
                        <li>"When I want to know what my coverage includes, I want to get an easy to understand summary."</li>
                        <li>"I want to know how much I’ve spent during my plan year and what I would be responsible for paying for future procedures, so that I make better decisions."</li>
                        <li>"When I want to understand how I was billed by my provider for services I received, I want to see a clear, detailed breakdown of my claim."</li>
                        <li>"When I login to the website, I want see information that is important to my insurance coverage, and to understand the resources and features that are available to me."</li>
                        <li>"I don’t want the website to be complicated or make me feel stressed out. I want a clear, uncluttered layout and I want to understand how to use the site."</li>
                        <li>"When I need help understanding how something works, I want to have different types of help available to help me achieve my goal or answer my question."</li>
                      </ol>

                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Storyboards
                    </p>

                    <v-img alt="Digital Design System" class="shrink mb-6" contain src="@/assets/img/outcome-statement-1.png" width="1200" />
                    <v-img alt="Digital Design System" class="shrink mb-6" contain src="@/assets/img/outcome-statement-2.png" width="1200" />
                    <v-img alt="Digital Design System" class="shrink mb-6" contain src="@/assets/img/outcome-statement-6.png" width="1200" />

                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Task List
                    </p>

                    <p>
                      All tasks run on the following prototypes
                    </p>

                    <v-btn href="https://44fa6j.axshare.com/#g=1&p=homepage" outlined color="#0E92C7" class="mr-4 text-capitalize">
                        Prototype A
                        <v-icon right dark>open_in_new</v-icon>
                    </v-btn>

                    <v-btn href="https://44fa6j.axshare.com/#g=1&p=homepage_v01" outlined color="#0E92C7" class="mr-4 text-capitalize">
                        Prototype B
                        <v-icon right dark>open_in_new</v-icon>
                    </v-btn>

                    <v-expansion-panels accordion class="mt-6">
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Task #1</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="display-1 text--primary">Find Karen’s In-Network Copay</p>
                              <p>Imagine that Karen wants to know how much her copay is going to be at an upcoming doctor’s visit. (Be ready to write down your answer to a question about this.)</p>
                              <p><strong>In order to visit her In-Network Primary Care Physician, how much will Karen owe for her copay? When you find it, please write down your answer to this question.</strong></p>
                              <v-sheet color="#0e92c7" class="pt-6 pl-6 pb-2 white--text">
                              <p class="headline">Question: <strong>How much is Karen’s copay for Primary Care Physician Office Visits?</strong></p>
                              <p class="headline">Answer: <strong>$10</strong></p>
                              </v-sheet>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Task #2</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="display-1 text--primary">Find Details on Karen’s Policy</p>
                              <p>Imagine that Karen wanted to find out if chiropractic services are covered under her current policy.</p>
                              <p><strong>Find out if chiropractic services are covered under Karen’s health policy.</strong></p>
                              <v-sheet color="#0e92c7" class="pt-6 pl-6 pb-2 white--text">
                              <p class="headline">Question: <strong>Does Karen’s health policy cover chiropractic services?</strong></p>
                              <p class="headline">Answer: <strong>Yes (Open EOC PDF and find Chapter 4. Medical Benefits Chart (what is covered and what you pay))</strong></p>
                              </v-sheet>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Task #3</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="display-1 text--primary">Find Karen's Most Recent Claim for an In-Network Doctor Visit</p>
                              <p>Imagine Karen has a question about her most recent doctor visit.</p>
                              <p><strong>What was the date of service for the most recent claim on Karen's health plan?</strong></p>
                              <v-sheet color="#0e92c7" class="pt-6 pl-6 pb-2 white--text">
                              <p class="headline">Question: <strong>What was the date of service for Karen’s most recent claim?</strong></p>
                              <p class="headline">Answer: <strong>1/1/2019</strong></p>
                              </v-sheet>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Task #4</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="display-1 text--primary">Understand Karen’s Claims Details</p>
                              <p>Imagine Karen has a question about how much money she owes for a recent visit.</p>
                              <p><strong>Open the Claims Detail page of Karen's most recent Health Claim. In the cost breakdown to the right, what does “Allowed Amount” mean?</strong></p>
                              <v-sheet color="#0e92c7" class="pt-6 pl-6 pb-2 white--text">
                              <p class="headline">Question: <strong>What is the definition of Amount Allowed?</strong></p>
                              <p class="headline">Answer: <strong>The reduced rate Blue Cross NC negotiated with in-network providers for covered services.</strong></p>
                              </v-sheet>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Task #5</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="display-1 text--primary">Understand Karen’s Claims Details</p>
                              <p>Imagine that Karen is curious about what she will potentially end up paying toward a doctor’s visit.</p>
                              <p><strong>Click on the link that opens the Explanation of Benefits associated with Karen's most recent claim.</strong></p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Task #6</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="display-1 text--primary">Find Nearby Urgent Care Services</p>
                              <p>Imagine Karen has experienced a minor sprain, but her primary care provider isn’t open.</p>
                              <p><strong>Click on the link that opens a directory of Urgent Care centers in Karen’s network.</strong></p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                        <v-expansion-panel v-for="(item,i) in 1" :key="i">
                            <v-expansion-panel-header>Task #7</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              <p class="display-1 text--primary">Understand Karen’s Claims Details</p>
                              <p>Imagine that Karen is curious about what she will potentially end up paying toward a doctor’s visit.</p>
                              <p><strong>Click on the link that opens the Explanation of Benefits associated with Karen's most recent claim.</strong></p>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                </v-card-text>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                    <p class="display-1 text--primary">
                        Results & Recommendations
                    </p>

                    <p class="title text-primary">
                      Medicare Advantage 2.0 Usability Test 1
                    </p>
                    <v-btn href="https://44fa6j.axshare.com/#g=1&p=homepage" outlined color="#0E92C7" class="mr-4 text-capitalize">
                        Download Test 1
                        <v-icon right dark>picture_as_pdf</v-icon>
                    </v-btn>

                    <p class="mt-6 title text-primary">
                      Additional Medicare Testing Results from Exceptional Experience
                    </p>
                    <v-btn href="https://44fa6j.axshare.com/#g=1&p=homepage_v01" outlined color="#0E92C7" class="mr-4 text-capitalize">
                        Download Results
                        <v-icon right dark>picture_as_pdf</v-icon>
                    </v-btn>

                </v-card-text>
                <v-card-actions>
                        <v-btn href="https://44fa6j.axshare.com/#g=1&p=homepage" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                            View Prototype
                            <v-icon right dark>open_in_new</v-icon>
                        </v-btn>
                </v-card-actions>
            </v-card>


        </v-flex>
    </v-layout>
</v-container>

</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Type of Usability Test)',
            align: 'left',
            sortable: false,
            value: 'type',
          },
          { text: 'Purpose', value: 'purpose' },
          { text: 'Primary Focus of Data Collection', value: 'focus' },
          { text: 'When To Do It', value: 'when' },
          { text: 'Number of Participants', value: 'participants' },
        ],
        testingitems: [
          {
            type: 'Iterative - (Also known as “formative testing” - because you are still formulating the UX design.)',
            purpose: 'Determine what elements of the UX don’t work for users. Explore ideas on how to fix them.',
            focus: 'Qualitative – Observations of what was difficult for users to accomplish & why.',
            when: 'Repeatedly, as the design evolves when there’s still time to improve the UX before release.',
            participants: '5-8 per type of user. This many typically reveals 80% of the possible problems users will have. (Finding all possible problem could take hundreds of users.)',
          },
          {
            type: 'Benchmarking - (Also known as “summative testing” – because it provides a summary of how well the final UX performs.)',
            purpose: 'Collect data appropriate for comparison to earlier versions of the site or to competitors’ sites.',
            focus: 'Quantitative – Percentage of users who could complete critical tasks, measures of ease (time for task, number of clicks) & measures of perceptions, e.g. NPS.',
            when: 'After the design is completed & the site/app launched.',
            participants: '50 or more. This many is needed to achieve statistical significance (i.e., the ability to know that your results were not due to chance factors.)',
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
