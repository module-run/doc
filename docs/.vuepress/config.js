import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'ModuleRun',
    description: '🎉 可视化硬件编程套件 🎉',

    theme: defaultTheme({
        logo: '/image/logo.svg',
        navbar: [
            {text: '首页', link: '/'},
            {text: '开始使用', link: '/get-started'},
            // {text: '树莓派', link: '/agent/raspberry-pi'},
            {text: '更新日志', link: '/change-log'},
        ],
    }),
    head: [
        ['script', {}, `var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?8850f376e3adfd6cc1cf53fe8bdb3ec6";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();`],
    ],

    bundler: viteBundler(),
})
