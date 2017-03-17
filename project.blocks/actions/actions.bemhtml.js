block('actions')(
	js()(function(){ return { id: this.generateId()}})
);
block('actions').content()(function() {
    return {
        elem: 'inner',
        elemMods: this.ctx.innerMods,
        content: applyNext()
    };
});
