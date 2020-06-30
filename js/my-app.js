// Initialize your app
var app = new Framework7({
    id: 'com.app',
    root: '#app',
    theme: 'md',
    view: {
        pushState: false
    },
    cache: false,
    cacheDuration: 0,
    modalTitle: 'Flores',
    dialog: {
        title: 'Flores',
        buttonOk: 'Aceptar',
    },

    routes: [{
            path: '/home/',
            url: 'index.html',
            name: 'home',
        },
        {
            path: '/Cumpleanos/',
            url: 'Cumpleanos.html',
            name: 'Cumpleanos',
        },
        {
            path: '/perfil/',
            url: 'perfil.html',
            name: 'perfil',
        },
        {
            path: '/sanvalentin/',
            url: 'sanvalentin.html',
            name: 'sanvalentin',
        },
        {
            path: '/aniversarios/',
            url: 'aniversarios.html',
            name: 'aniversarios',
        },
        {
            path: '/bodas/',
            url: 'bodas.html',
            name: 'bodas',
        },

    ]

});

// Export selectors engine
var $$ = Dom7;