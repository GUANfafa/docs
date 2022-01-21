module.exports = {
    title: 'GUANfafa 文档',
    description: 'GUANfafa...',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'GUANfafa的 QA 博客',
                items: [
                    { text: 'Github', link: 'https://github.com/GUANfafa/docs' },
                    { text: '掘金', link: '123' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/',
                collapsable: false, // 不折叠
                children: [
                    { title: "test1", path: "/handbook/test1" },
                    { title: "test2", path: "/handbook/test2" }
                ],
            }
        ]
    }
}