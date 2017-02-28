({
    mustDeps: [
        { block: 'info-modal', tech: 'bemhtml' },
        { block: 'form', tech: 'bemhtml' },
        { block: 'form', tech: 'css' },
        { block: 'page' },
        { block: 'next-tick' },
        { block: 'button', mods: { type: 'link' }, tech: 'bemhtml' },
        { block: 'info-modal', mods: { theme: 'islands', autoclosable: true } },
        { block: 'info-modal', mods: { theme: 'life-light' }, tech: 'css' },
        { block: 'info-modal', mods: { theme: 'islands' }, tech: 'css' },
        // { block: 'i-bem' }
    ],
    shouldDeps: [
        { elem: 'inner', techs: 'css' }
    ]
})