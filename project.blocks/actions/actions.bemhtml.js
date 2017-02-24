block('actions')(
	js()(function(){ return { id: this.generateId()}})
);
block('actions').content()(function() {
    return {
        elem: 'inner',
        content: applyNext()
    };
});
