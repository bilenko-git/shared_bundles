([{   
    tech: 'js',
    mustDeps: [
        { block: 'info-modal', tech: 'bemhtml' },
        { block: 'form', tech: 'bemhtml' },
        { block: 'input', mods: { theme: 'life-light' }, tech: 'bemhtml' },
        { block: 'button', mods: { type: 'link' }, tech: 'bemhtml' },
        { block: 'userinfo', tech: 'bemhtml' },
        { block: 'input2' },
    ]
},{
    mustDeps: [
        { block: 'info-modal', tech: 'bemhtml' },
        { block: 'form', tech: 'bemhtml' },
        { block: 'form', tech: 'css' },
        { block: 'wrapper', tech: 'css' },
        { block: 'form' },
        { block: 'next-tick' },
        { block: 'button', mods: { view: 'main' } },
        { block: 'button', mods: { theme: 'life-light' } },
        { elem: 'button-group', mods: { size: ['s','m'], 'w-sep': true, type: [ 'list', 'line'] } },
        { block: 'input', mods: { theme: 'life-light' }, tech: 'bemhtml' },
        { block: 'button', mods: { type: 'link' }, tech: 'bemhtml' },
        { block: 'info-modal', mods: { theme: 'islands', autoclosable: true } },
        { block: 'info-modal', mods: { theme: 'life-light' }, tech: 'css' },
        { block: 'modal', mods: { theme: 'life-light' }, tech: 'css' },
        { block: 'info-modal', mods: { theme: 'islands' }, tech: 'css' },
        { block: 'menu', mods: { theme: 'life-light' }},
        { block: 'input2' },

    ],
    shouldDeps: [
        { block: 'button-hidden' },
        { elem: 'inner', techs: 'css' },
        { block: 'button', mods: { view: 'add' }, tech: 'css' },
        { block: 'button', mods : { theme : 'shared', togglable : 'check' } },
    ]
}]);