block('actions')(
	js()(true)
);
block('actions').content()(function() {
    return {
        elem: 'inner',
        content: applyNext()
    };
});
