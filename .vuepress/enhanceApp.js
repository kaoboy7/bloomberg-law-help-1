export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // add articles to folders marked for auto-insert
    siteData.themeConfig.sidebar = insertDynamicSidebar(siteData.themeConfig.sidebar, siteData.pages);
}

function insertDynamicSidebar(sidebar, pages) {
    return sidebar.map((item) => {
        if (typeof item === 'string') {
            // looking for path ending with /*
            if (item.match(/\/\*$/)) {
                // remove extra / 
                let ParentPath = item.substring(0, item.length - 1);
                item = {
                    title: '',
                    children: [ParentPath]
                };
                // item.children[0] = ParentPath;
                pages.forEach(page => {
                    if (page.path.startsWith(ParentPath))
                        if (page.path === ParentPath)
                        {
                            if(ParentPath === '/docs/')         { item.title = 'Bloomberg Law Help';  }
                            else if(ParentPath === '/archive/') { item.title = 'What\'s New Archive';  }
                            else                                { item.title = ParentPath; }
                            item.collapsable = true;
                        }
                            
                        else
                            // found page in path
                            item.children.push(page.path);
                });
            }
        }
        return item;
    });
}