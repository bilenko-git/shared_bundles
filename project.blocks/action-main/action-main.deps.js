({
    mustDeps: [
        { block: 'modal', tech: 'bemhtml' },
        { block: 'form', tech: 'bemhtml' },
        { block: 'form', tech: 'css' },
        { block: 'wrapper', tech: 'css' },
        // { block: 'page' },
        { block: 'next-tick' },
        { block: 'input', mods: { theme: 'life-light' }, tech: 'bemhtml' },
        { block: 'button', mods: { type: 'link' }, tech: 'bemhtml' },
        { block: 'modal', mods: { theme: 'islands', autoclosable: true } },
        // { block: 'info-modal', mods: { theme: 'life-light' }, tech: 'css' },
        // { block: 'info-modal', mods: { theme: 'islands' }, tech: 'css' },
        // { block: 'i-bem' }
    ],
    shouldDeps: [
        { elem: 'inner', techs: 'css' }
    ]
});

