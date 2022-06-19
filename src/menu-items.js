import logo1 from './assets/images/plus-o-sabe.png';

export default {
    items: [
        {
            id: 'pages',
            title: 'Páginas',
            type: 'group',
            icon: 'icon-pages',
            children: [                
                {
                    id: 'goals',
                    title: 'Objetivos',
                    type: 'item',
                    url: '/goals',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'panoram',
                    title: 'Panorama da Doação de Orgãos e Tecidos',
                    type: 'item',
                    url: '/panoram',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'legislation',
                    title: 'Legislações sobre Captação de Órgãos e Tecidos',
                    type: 'item',
                    url: '/legislation',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'death-protocol',
                    title: 'Protocolo de Morte Encefálica',
                    type: 'item',
                    url: '/death-protocol',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'interview-orientation',
                    title: 'Orientações sobre Entrevista Familiar',
                    type: 'item',
                    url: '/interview-orientation',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'donor-maintenance',
                    title: 'Manutenção do Potencial Doador',
                    type: 'item',
                    url: '/donor-maintenance',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'delivery-information',
                    title: 'Informações sobre a entrega do corpo do Potencial Doador',
                    type: 'item',
                    url: '/delivery-information',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },
                {
                    id: 'links',
                    title: 'Links importantes',
                    type: 'item',
                    url: '/links',
                    classes: 'nav-item',
                    icon: 'feather icon-sidebar'
                },               
            ]
        }
    ]
}