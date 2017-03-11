({
    mustDeps: [
        { block: 'modal', tech: 'bemhtml' },
        { block: 'form', tech: 'bemhtml' },
        { block: 'form', tech: 'css' },
        { block: 'next-tick' },
        { block: 'button', mods: { type: 'link' }, tech: 'bemhtml' },
        { block: 'modal', mods: { theme: 'islands', autoclosable: true } },
        { block: 'modal', mods: { theme: 'life-light' }, tech: 'css' },
        { block: 'modal', mods: { theme: 'islands' }, tech: 'css' },
        // { block: 'i-bem' }
    ],
    shouldDeps: [
        { block: 'button', mods: { view: 'add' }, tech: 'css' },
        { block: 'button', mods : { theme : 'shared', togglable : 'check' } },
        { block: 'checkbox', mods: { theme: 'shared', type: 'button' } },
        { block: 'menu', mods: { theme: 'life-light' } }
    ]
})