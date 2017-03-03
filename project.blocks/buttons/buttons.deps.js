([{
    tech: 'js',
    mustDeps: [
        { block: 'form', tech: 'bemhtml' },
        { block: 'popup', tech: 'bemhtml' },
        // { block: 'modal', tech: 'bemhtml' },
        // { block: 'modal', mods: { theme: 'life-light' }, tech: 'bemhtml' },
        // { block: 'dropdown', tech: 'bemhtml' },
        { block: 'tooltip', tech: 'bemhtml' }
    ]
},{
    mustDeps: [
        // { block: 'modal', mods: { theme: 'life-light', autoclosable: true, visible: true }},
        { block: 'modal' },
        { block: 'popup', mods: { autoclosable: true, visible: true }},
    ],
    shouldDeps: [
    ]
}])