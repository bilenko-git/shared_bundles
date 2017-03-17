block('c-chart')(
	js()(function(){ return this.jsAttrs || true}),
	content()(function() {
		return {
			tag: 'canvas',
			attrs: { id: this.generateId(), width: '280', height: '50' },
			elem: 'item',
			elemMods: { view: 'simple' }
		}
	})
)