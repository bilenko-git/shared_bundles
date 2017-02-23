({
    mustDeps: [
        { block: 'modal', tech: 'bemhtml' },
        { block: 'modal', mods: { theme: 'islands', autoclosable: true } },
        { block: 'modal', mods: { theme: 'life-light' }, tech: 'css' },
        { block: 'modal', mods: { theme: 'islands' }, tech: 'css' },
        // { block: 'i-bem' }
    ],
    shouldDeps: [
        { elem: 'inner', techs: 'css' }
    ]
})