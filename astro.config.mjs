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
					label: 'Getting Started',
					items: [
						{ label: 'Getting Started', slug: 'getting-started' },
					],
				},
				{
					label: 'Messages',
					items: [
						{ label: 'Chat messages', slug: 'messages' },
					],
				},
				{
					label: 'Commands',
					items: [
						"commands",
						"commands/command-arguments",
						"commands/command-suggestions",
						"commands/subcommands"
					],
				},
				{
					label: 'Worlds & Regions',
					items: [
						"worlds",
						"worlds/regions"
					],
				}

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
