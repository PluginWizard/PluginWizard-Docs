// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'PluginWizard',
			favicon: '/favicon.ico',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/PluginWizard/PluginWizard-Docs' },
				{ icon: "discord", label: "Discord", href: "https://discord.gg/tJ67vmyW7f" },
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
			customCss: [
				"./src/styles/custom.css"
			],
			components: {
				SiteTitle: "./src/components/overrides/SiteTitle.astro",
				Footer: "./src/components/overrides/Footer.astro",
			}
		}),
	],
});
