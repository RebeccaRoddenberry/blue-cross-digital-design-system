

<template>

<v-navigation-drawer
  v-model="drawer"
  app
  fixed
  >

    <v-list dense>
        <v-list-item active-class="primary--text" v-for="item in home" :key="item.title" :to="item.to">
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>



    <v-list-item>
        <v-list-item-content>
            <v-list-item-title class="title">
                Guidelines
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
        <v-list-item active-class="primary--text" v-for="item in guidelines" :key="item.title" :to="item.to">
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>



    <v-list-item>
        <v-list-item-content>
            <v-list-item-title class="title">
                Components
            </v-list-item-title>
        </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
        <v-list-item active-class="primary--text" v-for="item in components" :key="item.title" :to="item.to">
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>

</v-navigation-drawer>

</template>

<script>
export default {
    data() {
        return {

          theme: {
            primary: '#0E92C7',
          },

            drawer: true,

            home: [

                {
                    title: 'Dashboard',
                    icon: 'home',
                    to: '/'
                },

            ],
            guidelines: [

                {
                    title: 'Accessibility',
                    icon: 'accessibility',
                    to: 'accessibility'
                },

                {
                    title: 'Colors',
                    icon: 'color_lens',
                    to: 'colors'
                },

                {
                    title: 'Content',
                    icon: 'assignment',
                    to: 'content'
                },

                {
                    title: 'Formatting',
                    icon: 'text_format',
                    to: 'formatting'
                },

                {
                    title: 'Icons',
                    icon: 'bubble_chart',
                    to: 'icons'
                },

                {
                    title: 'Imagery',
                    icon: 'image',
                    to: 'imagery'
                 },

                 {
                     title: 'Logos',
                     icon: 'featured_video',
                     to: 'logos'
                 },

                 {
                     title: 'Testing',
                     icon: 'verified_user',
                     to: 'testing'
                 },

                 {
                     title: 'Typography',
                     icon: 'text_fields',
                     to: 'typography'
                 },

            ],

            components: [

                {
                    title: 'Alerts',
                    icon: 'notifications',
                    to: 'alerts'
                },
                {
                    title: 'Avatars',
                    icon: 'account_circle',
                    to: 'avatars'
                },
                {
                    title: 'Badges',
                    icon: 'brightness_1',
                    to: 'badges'
                },
                {
                    title: 'Breadcrumbs',
                    icon: 'chevron_right',
                    to: 'breadcrumbs'
                },
                {
                    title: 'Buttons',
                    icon: 'radio_button_checked',
                    to: 'buttons'
                },
                {
                    title: 'Cards',
                    icon: 'view_module',
                    to: 'cards'
                },
                {
                    title: 'Dialogs',
                    icon: 'chrome_reader_mode',
                    to: 'dialogs'
                },
                {
                    title: 'Expansion Panels',
                    icon: 'expand_more',
                    to: 'expansion'
                },
                {
                    title: 'Footer',
                    icon: 'call_to_action',
                    to: 'footer'
                },
                {
                    title: 'Forms',
                    icon: 'input',
                    to: 'forms'
                },
                {
                    title: 'Graphs',
                    icon: 'insert_chart',
                    to: 'graphs'
                },
                {
                    title: 'Help',
                    icon: 'help',
                    to: 'help'
                },
                {
                    title: 'Hero Banners',
                    icon: 'view_carousel',
                    to: 'hero'
                },
                {
                    title: 'Lists',
                    icon: 'list_alt',
                    to: 'lists'
                },
                {
                    title: 'Navigation',
                    icon: 'menu_open',
                    to: 'navigation'
                },
                {
                    title: 'Right Rail',
                    icon: 'vertical_split',
                    to: 'rightrail'
                },
                {
                    title: 'Search & Filter',
                    icon: 'search',
                    to: 'search'
                },
                {
                    title: 'Skeleton Loaders',
                    icon: 'refresh',
                    to: 'skeleton'
                },
                {
                    title: 'Steppers',
                    icon: 'skip_next',
                    to: 'steppers'
                },
                {
                    title: 'Tables',
                    icon: 'table_chart',
                    to: 'tables'
                },
                {
                    title: 'Tabs',
                    icon: 'tab',
                    to: 'tabsnav'
                },
                {
                    title: 'Tiles',
                    icon: 'picture_in_picture',
                    to: 'tiles'
                },
                {
                    title: 'Tooltips',
                    icon: 'info',
                    to: 'tooltips'
                },
            ],
        }
    }
}

</script>
