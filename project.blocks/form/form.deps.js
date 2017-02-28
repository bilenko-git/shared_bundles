({
    tech: 'js',
    mustDeps: [
        { block: 'dropdown', tech: 'bemhtml' },
        // { block: 'popup', tech: 'bemhtml' },
        { block: 'tooltip', tech: 'bemhtml' }
    ]
},{
    mustDeps: [
        { block: 'button' },
        { block: 'button', mods: { view: 'main' } },
    ],
    shouldDeps: [
        // { block: 'dropdown', tech: 'bemhtml' },
        { block: 'dropdown' },
        { block: 'form', tech: 'bemhtml' },

        // { block: 'button', tech: 'bemhtml' },
        { block: 'link', tech: 'bemhtml' },
        { block: 'select', tech: 'bemhtml' },
        { block: 'tooltip', tech: 'css' },
        { block: 'select', mods: { mode: 'radio' }, tech: 'bemhtml' },
        { block: 'modal', mods: { autoclosable: true } },
        { block: 'popup', mods: { autoclosable: true } },
        { elem: 'button-group' },
        { elem: 'title' },
        { elem: 'text' },
        { elem: 'label' },
        { elem: 'submit' },
        { elem: 'text-error' },
        { elem: 'head-title' },
        { elem: '<test-button></test-button>s' },
        { block: 'input' },
        { block: 'checkbox' },
        { block: 'menu', mods: { theme: 'islands' }, tech: 'css' },
        { block: 'select', mods: { theme: 'islands' }, tech: 'css' },
        { block: 'input', mods: { theme: 'islands' }, tech: 'css' }
    ]
})
