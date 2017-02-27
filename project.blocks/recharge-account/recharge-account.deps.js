({
    mustDeps: [
        { block: 'button' },
        { block: 'button', mods: { view: 'main' } },
        { block: 'modal',  tech: 'bemhtml' },
    ],
    shouldDeps: [
        { block: 'form', tech: 'bemhtml' },
        { block: 'button', tech: 'bemhtml' },
        { block: 'select', tech: 'bemhtml' },
        { block: 'select', mods: { mode: 'radio' }, tech: 'bemhtml' },
        { block: 'modal', mods: { autoclosable: true } },
        { block: 'popup', mods: { autoclosable: true } },
        // { block: 'menu', tech: 'bemhtml'},
        { elem: 'button-group' },
        { elem: 'submit' },
        { block: 'input' },
        { block: 'checkbox' },
        { block: 'menu', mods: { theme: 'islands' }, tech: 'css' },
        { block: 'select', mods: { theme: 'islands' }, tech: 'css' },
        { block: 'input', mods: { theme: 'islands' }, tech: 'css' }
    ]
})
