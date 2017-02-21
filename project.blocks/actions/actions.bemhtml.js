block('actions')(
	js()({id: 'actions'})
);
block('actions').content()(function() {
    return {
        elem: 'inner',
        content: applyNext()
    };
});
