import { Youtube, Brightcove, IFrameWrapper, vimeo } from 'bnacomponents'

const bnacomponents = require('bnacomponents');

export default ({
    Vue,
    siteData
}) => {
    siteData.themeConfig.sidebar = bnacomponents.insertDynamicSidebar(siteData.themeConfig.sidebar, siteData.pages),
        Vue.component('Youtube', Youtube),
        Vue.component('IFrameWrapper', IFrameWrapper),
        Vue.component('Brightcove', Brightcove),
        Vue.component('vimeo', vimeo)
}