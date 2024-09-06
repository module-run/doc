import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'ModuleRun',
    description: '专业的可视化开发工具',

    theme: defaultTheme({
        logo: '/image/logo.svg',
        navbar: [
            {text: '首页', link: '/'},
            {text: '开始使用', link: '/get-started'},
            {text: '树莓派', link: '/agent/raspberry-pi'},
            {text: '更新日志', link: '/change-log'},
        ],
    }),

    bundler: viteBundler(),
})
