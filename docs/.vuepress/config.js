module.exports = {
    title: '守心自暖的博客',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/avatar.png' }], // 增加一个自定义的 favicon(网页标签的图标)
        ['link', { rel: 'manifest', href: '/avatar.png' }],
        ['link', { rel: 'apple-touch-icon', href: '/avatar.png' }],
    ],
    themeConfig: {
        logo: '/avatar.png',  // 左上角logo
        nav:[ // 导航栏配置
        {text: '首页', link: '/' },
        {text: '技术文档', link: '/tech/interview/' },
        {text: '简书主页', link: 'https://www.jianshu.com'}      
        ],
        sidebar: 'auto', // 侧边栏配置
    },
    theme: 'vuepress-theme-default',
    serviceWorker: true // 是否开启PWA
};