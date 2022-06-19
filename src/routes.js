import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const Goals = React.lazy(() => import('./Demo/Other/Goals'));
const Panoram = React.lazy(() => import('./Demo/Other/Panoram'));
const Legislation = React.lazy(() => import('./Demo/Other/Legislation'));
const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));

const Orientation = React.lazy(() => import('./Demo/Other/Orientation'));
const Maintenance = React.lazy(() => import('./Demo/Other/Maintenance'));
// const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
// const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const Links = React.lazy(() => import('./Demo/Other/Links'));
const Information = React.lazy(() => import('../src/assets/files/info.pdf'));

const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/goals', exact: true, name: 'Objetivos', component: Goals },
    { path: '/panoram', exact: true, name: 'Paronama', component: () =>  {
                window.open('https://portalarquivos.saude.gov.br/campanhas/doeorgaos/index.html', '_blank')

        window.location.href="/goals"
    }},
    { path: '/legislation', exact: true, name: 'Sample Page', component: Legislation },
    { path: '/death-protocol', exact: true, name: 'Sample Page', component: () =>  {
        window.open('http://www.transplante.rj.gov.br/site/Arq/morte_%20encefalica.pdf', '_blank')

        window.location.href="/goals"
    } },
    { path: '/interview-orientation', exact: true, name: 'Orientação sobre Entrevista Familiar', component: Orientation },
    { path: '/donor-maintenance', exact: true, name: 'Manuntenção do Donor', component: Maintenance },
    { path: '/delivery-information', exact: true, name: 'Sample Page', component: () => {
        window.open('https://drive.google.com/file/d/1TxMFfXZDzZMDQnRQGQT5fwvx4BniZAmT/view?usp=sharing', '_blank')

        window.location.href="/goals"
        }},
    { path: '/links', exact: true, name: 'Links Importantes', component: Links },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
];

export default routes;