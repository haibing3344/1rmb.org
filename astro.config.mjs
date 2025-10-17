// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://1rmb.org',
	integrations: [
		starlight({
			title: '一元机场',
			description: '一元机场提供稳定、高速、安全的网络加速服务，让您畅享全球互联网。',
			social: [{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/jichang360' }],
			locales: {
                root: {
                  label: '简体中文',
                  lang: 'zh-CN',
                },
			},
			logo: {
				src: './src/assets/logo.png',
				alt: '一元机场',
			},

			sidebar: [
				{
					label: '🎉机场推荐',
					badge: '推荐',
					slug: 'jichangtuijian',
				},
				{
					label: '客户端下载',
					items: [
						{ label: '客户端下载', slug: 'download' },
					],
				},
				{
					label: '教程',
					autogenerate: { directory: 'tutorial' },
				},
				{
					label: '⭐️科学上网梯子加速器机场推荐',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '🚀优信云', badge: { text: 'IEPL/IPLC 高速专线', variant: 'success' },link: 'https://a.suola.link/youxinyun' },
						{ label: '🚀扬帆云', badge: { text: '老牌机场分站', variant: 'note' },link: 'https://a.suola.link/yfy' },
						{ label: '🚀疾风云', badge: { text: '可做备用机场', variant: 'tip' },link: 'https://a.suola.link/jifeng' },
						{ label: '🚀尔湾云', badge: { text: '性价比高', variant: 'danger' },link: 'https://a.suola.link/erwan' },
						{ label: '🚀网际快车', badge: { text: '性价比高', variant: 'caution' },link: 'https://a.suola.link/wjkc' },
					],
				},
			],
		}),
	],
});
