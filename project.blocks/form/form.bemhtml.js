block('form')(
	js()(true),
	tag()('form'),
	attrs()(function() { return { action: this.ctx.action || '', method: this.ctx.method || 'post', enctype: this.ctx.enctype || 'multipart/form-data'}})
);
block('form').content()(function() {
    return this.ctx.content;
});
