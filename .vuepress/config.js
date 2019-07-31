module.exports = {
    title: "Bloomberg Law Help",
    locales: {
        '/': {
            title: 'Bloomberg Law Help',
            description: 'Knowledgeable and experienced legal professionals including attorneys and law librarians are available to assist you 24/7. If you prefer direct communication, feel free to contact the Bloomberg Law Help Desk at 888.560.2529. If you are calling from outside the U.S. or Canada, please call +1 212.318.2800.'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'canonical', href: 'https://help.bloomberglaw.com' }],
        ['meta', { name: 'theme-color', content: '#0d9ddb' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
        ['script', {src: 'https://assets.adobedtm.com/launch-EN164714b0147e4e5b8dce3e9da522ec62.min.js', async: 'async'}]
    ],
    serviceWorker: true,
    theme: 'bna',
    themeConfig: {
        docsDir: 'docs',
        sidebar: ['/docs/*',],
        logo: "/header-logo.png",
        alternateHomeUrl: "http://www.bloomberglaw.com/",
        nav: [ { text: 'Live Chat', link: 'https://www.bloomberglaw.com/help_chat' }, ]
    }
}