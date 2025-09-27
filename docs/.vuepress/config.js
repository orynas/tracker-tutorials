import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'en-US',

    title: 'Tracker Tutorials',
    base: '/tracker-tutorials/',

    theme: defaultTheme({
        logo: 'images/tracker-logo.webp',

        navbar: [
            '/',
            {
                text: 'Docs',
                link: 'https://opensourcephysics.github.io/tracker-website/help/frameset.html',
            },
        ],
        sidebar: [
            {
                text: 'Introduction',
                prefix: '/introduction/',
                link: '/introduction/',
            },
            {
                text: 'Installation',
                prefix: '/installation/',
                link: '/installation/',
            },
        ],
    }),

    bundler: viteBundler(),
})
