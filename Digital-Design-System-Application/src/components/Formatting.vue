

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
                        Formatting
                    </p>

                    <p>
                      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
                    </p>

                </v-card-text>
                <v-card-actions>
                    <v-btn href="https://app.zeplin.io/project/5c631d7feca40f46769905cf/dashboard?seid=5d541381152c905223a9405e" color="#0E92C7" class="px-4 ml-2 mb-2 white--text text-capitalize">
                        View Specs & Styles in Zeplin
                        <v-icon right dark>open_in_new</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>


            <v-card class="pa-2 mb-6">
                <v-card-text>
                  <p class="display-1 text--primary">
                      Date
                  </p>

                  <p class="headline text--primary mb-2">Paragraph Format</p>

                    <v-card outlined class="mb-6">
                      <v-simple-table
                        hide-default-header
                      >
                          <template v-slot:default>
                              <thead>
                                  <tr>
                                      <th class="text-left">Type</th>
                                      <th class="text-left">Example</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="item in paragraph" :key="item.name">
                                      <td>{{ item.name }}</td>
                                      <td>{{ item.calories }}</td>
                                  </tr>
                              </tbody>
                          </template>
                      </v-simple-table>
                    </v-card>


                    <p class="headline text--primary mb-2">Tables & Lists</p>

                      <v-card outlined class="mb-6">
                        <v-simple-table
                          hide-default-header
                        >
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">Type</th>
                                        <th class="text-left">Example</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in tables" :key="item.name">
                                        <td>{{ item.name }}</td>
                                        <td>{{ item.calories }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                      </v-card>

                      <p class="headline text--primary mb-0">Examples</p>

                      <v-row>
                        <v-col>
                          <p class="title text--primary mb-2">Table</p>
                          <v-card outlined class="mb-6">
                            <v-data-table
                              :headers="sampleheaders"
                              :items="sampleitems"
                              :items-per-page="5"
                              class="elevation-1"
                            ></v-data-table>
                          </v-card>
                        </v-col>

                        <v-col>
                          <p class="title text--primary mb-2">List</p>

                          <v-card outlined class="pa-4">
                              <v-radio-group v-model="radios" :mandatory="false">

                                      <v-row class="mt-n8">
                                        <v-col md="1" class="ml-2 mt-2 mr-n8">
                                          <v-radio color="#0E92C7" label="" value="radio-1"></v-radio>
                                        </v-col>

                                        <v-col>
                                        <v-list-item three-line>
                                          <v-list-item-content>
                                            <v-list-item-title class="mb-1">(01/01/2019 - 12/31/2019) - <span class="green--text"><strong>Active</strong></span></v-list-item-title>
                                            <v-list-item-text>
                                              <span class="text--primary mb-2"><strong>Blue Options</strong></span><v-chip label small class="ml-2 px-2">Health</v-chip>
                                            </v-list-item-text>
                                            <v-list-item-text>
                                              <p class="text--primary mb-1">Covered Members: <strong>Julie, Luke</strong></p>
                                            </v-list-item-text>
                                            <v-list-item-text>
                                              <p class="text--primary">Subscriber ID: <strong>YPN10127670100</strong></p>
                                            </v-list-item-text>
                                          </v-list-item-content>
                                        </v-list-item>
                                      </v-col>
                                    </v-row>

                                    <v-row class="mt-n8">
                                      <v-col md="1" class="ml-2 mt-2 mr-n8">
                                        <v-radio color="#0E92C7" label="" value="radio-2"></v-radio>
                                      </v-col>

                                      <v-col>
                                        <v-list-item three-line>
                                          <v-list-item-content>
                                            <v-list-item-title class="mb-1">(01/01/2019 - 12/31/2019) - <span class="green--text"><strong>Active</strong></span></v-list-item-title>
                                            <v-list-item-text>
                                              <span class="text--primary mb-2"><strong>Blue Select</strong></span><v-chip label small class="ml-2 px-2">Dental</v-chip>
                                            </v-list-item-text>
                                            <v-list-item-text>
                                              <p class="text--primary mb-1">Covered Members: <strong>Julie, Luke</strong></p>
                                            </v-list-item-text>
                                            <v-list-item-text>
                                              <p class="text--primary">Subscriber ID: <strong>YPN10127670100</strong></p>
                                            </v-list-item-text>
                                          </v-list-item-content>
                                        </v-list-item>
                                    </v-col>
                                  </v-row>

                                  <v-row class="mt-n8">
                                    <v-col md="1" class="ml-2 mt-2 mr-n8">
                                      <v-radio color="#0E92C7" label="" value="radio-3"></v-radio>
                                    </v-col>

                                    <v-col class="mb-n10">
                                      <v-list-item three-line>
                                        <v-list-item-content>
                                          <v-list-item-title class="mb-1">(01/01/2019 - 12/31/2019) - <span class="green--text"><strong>Active</strong></span></v-list-item-title>
                                          <v-list-item-text>
                                            <span class="text--primary mb-2"><strong>Blue Select</strong></span><v-chip label small class="ml-2 px-2">Prescription</v-chip>
                                          </v-list-item-text>
                                          <v-list-item-text>
                                            <p class="text--primary mb-1">Covered Members: <strong>Julie, Luke</strong></p>
                                          </v-list-item-text>
                                          <v-list-item-text>
                                            <p class="text--primary">Subscriber ID: <strong>YPN10127670100</strong></p>
                                          </v-list-item-text>
                                        </v-list-item-content>
                                      </v-list-item>
                                  </v-col>
                                </v-row>

                              </v-radio-group>

                          </v-card>
                        </v-col>
                      </v-row>

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

            paragraph: [{
                name: 'Date',
                calories: 'Follow this format: Monday (day), July 1 (month + date), 2018 (year).',
            }, {
                name: 'Time',
                calories: 'Don’t use colons for times on the hour. Ex: 3 p.m., 8:30 a.m.',
            }, {
                name: 'Day',
                calories: 'Omit st., th., rd., and th. Ex: July 1, not July 1st. Never say “yesterday.” Use the day of the week instead.',
            }, {
                name: 'Month',
                calories: 'Abbreviate Jan., Feb., Aug., Sept., Oct., Nov. and Dec. when writing out a specific date. Spell out names of months when not used to indicate a specific date. Ex: Aug. 3, 2018.',
            }, {
                name: 'Year',
                calories: 'Use numerals rather than spelling them out. Ex: 2018, not twenty-eighteen. a.m. and p.m. should use periods and lower case letters.',
            }, ],

            tables: [{
                name: 'Tables: This is so when multiple dates appear in columns they line up and are easily scanned',
                calories: '01/01/2020”',
            }, {
                name: 'Lists: First three letters of month, no period',
                calories: 'Jan 1, 2020',
            }, ],

            sampleheaders: [
            {
              text: 'Date',
              align: 'left',
              sortable: false,
              value: 'date',
            },
            { text: 'Member', value: 'member' },
            { text: 'Service', value: 'service' },
          ],

        sampleitems: [
          {
            date: '09/28/2019',
            member: 'Topper Larks',
            service: "Medical",
          },
          {
            date: '08/27/2018',
            member: 'Topper Larks',
            service: "Medical",
          },
          {
            date: '07/26/2017',
            member: 'Topper Larks',
            service: "Medical",
          },
          {
            date: '06/25/2016',
            member: 'Topper Larks',
            service: "Medical",
          },
          {
            date: '05/24/2015',
            member: 'Topper Larks',
            service: "Medical",
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
