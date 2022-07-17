

function nav() {
    return [
        { text: '随笔', link: '/' },
        { text: 'Css', link: '/css/demo', activeMatch: '/css/' },
        { text: 'JS', link: '/js/test', activeMatch: '/js/' },
    ]
}

function sidebarCss() {
    return [
        {
            text: 'Css',
            collapsible: true,
            items: [
                { text: '案例', link: '/css/demo' },
                { text: '其他', link: '/guide/getting-started' },
            ]
        },
        {
            text: 'Svg',
            collapsible: true,
            items: [
                { text: 'Markdown', link: '/guide/markdown' },
                { text: 'Asset Handling', link: '/guide/asset-handling' },
            ]
        }
    ]
}

function sidebarJS() {
    return [
        {
            text: 'JS',
            items: [
                { text: 'promise', link: '/js/promise' },
                { text: '继承', link: '/js/gen' },
            ]
        }
    ]
}

function sidebarLife() {
    return [
        {
            text: '随笔',
            items: [
                { text: '随手记', link: '/life/xianyun' },
                // { text: '过往', link: '/life/test' },
            ]
        }
    ]
}

module.exports = {
    lang: 'en-US',
    title: '闲云',
    description: '个人博客',
    // lastUpdated: true,
	base: '/',
    themeConfig: {
        nav: nav(),
        sidebar: {
            '/CSS/': sidebarCss(),
            '/JS/': sidebarJS(),
            '/': sidebarLife(),
        },

        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },

        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ],

        // footer: {
        //     message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 2019-present Evan You'
        // },

        // algolia: {
        //     appId: '8J64VVRP8K',
        //     apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        //     indexName: 'vitepress'
        // },

        // carbonAds: {
        //     code: 'CEBDT27Y',
        //     placement: 'vuejsorg'
        // }
    }
}
