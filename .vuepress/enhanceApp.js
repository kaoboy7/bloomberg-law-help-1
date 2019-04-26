import {Youtube, Brightcove, IFrameWrapper} from 'bnacomponents'

export default ({
    Vue, 
    siteData
}) => {
    siteData.themeConfig.sidebar = insertDynamicSidebar(siteData.themeConfig.sidebar, siteData.pages),
    Vue.component('Youtube', Youtube),
    Vue.component('IFrameWrapper', IFrameWrapper),
    Vue.component('Brightcove', Brightcove)
}

function insertDynamicSidebar(sidebar, pages) {
    return sidebar.map((item) => {
        if (typeof item === 'string') {
            if (item.match(/\/\*$/)) {
                let ParentPath = item.substring(0, item.length - 1);
                item = {
                    title: '',
                    children: [ParentPath]
                };
                pages.forEach(page => {
                    if (page.path.startsWith(ParentPath))
                        if (page.path === ParentPath) {
                            item.title = "";
                            item.collapsable = false;
                        }
                        else item.children.push(page.path);
                });
            }
        }
        return item;
    });
}
