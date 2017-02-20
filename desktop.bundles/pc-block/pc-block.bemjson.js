module.exports = {
	block: 'page',
	title: 'Title of the page',
	favicon: '/favicon.ico',
	head: [
	{ elem: 'meta', attrs: { name: 'description', content: '' } },
	{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
	{ elem: 'css', url: 'pc-block.min.css' }
	],
	scripts: [{ elem: 'js', url: 'pc-block.min.js' }],
	mods: { theme: 'life-light' },
	content: [{
		block: 'pc-block',
		js: true,
		content: {
			elem: 'wrapper',
			content: [{
				elem: 'head-info',
				elemMods: { closed: true },
				content: {
					elem: 'hi-group',
					content: [{
						elem: 'hi-text',
						content: [{
							block: 'pc-block',
							elem: 'hi-text',
							elemMods: { cover: true },
							tag: 'i',
							content: ''
						}, 'Часто задаваемые вопросы']
					}, {
						elem: 'hi-group',
						elemMods: { controls: 'right' },
						content: {
							block: 'button',
							mix: { block: 'pc-block', elem: 'button', elemMods: { toggle: 'closed' } },
							content: {
								block: 'icon',
								content: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path></svg>'
							}
						}
					}]
				}
			}, {
				elem: 'content',
				elemMods: { closed: true },
				content: [{
					elem: 'content',
					elemMods: { info: true },
					content: 'Часто задаваемые вопросы'
				}]
			}]
		}
	}]
};
