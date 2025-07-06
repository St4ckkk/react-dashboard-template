import { lazy } from 'react';

// Group lazy imports for better organization
export const PageRoutes = {
    Home: lazy(() => import('@pages/Home')),
    Dashboard: lazy(() => import('@pages/Dashboard')),
    Login: lazy(() => import('@pages/Login')),
    Register: lazy(() => import('@pages/Register')),
    NotFound: lazy(() => import('@pages/NotFound')),
    ComingSoon: lazy(() => import('@pages/ComingSoon')),
};

export const ComponentRoutes = {
    AccordionPage: lazy(() => import('@pages/components/accordions/AccordionPage')),
    AlertPage: lazy(() => import('@pages/components/alerts/AlertPage')),
    BadgePage: lazy(() => import('@pages/components/badges/BadgePage')),
    BreadcrumbPage: lazy(() => import('@pages/components/breadcrumbs/BreadCrumbPage')),
    ButtonsPage: lazy(() => import('@pages/components/buttons/ButtonPage')),
    CardsPage: lazy(() => import('@pages/components/cards/CardPage')),
    CarouselsPage: lazy(() => import('@pages/components/carousels/CarouselPage')),
    ListGroupPage: lazy(() => import('@pages/components/list-groups/ListGroupPage')),
    ModalPage: lazy(() => import('@pages/components/modals/ModalPage')),
    TabPage: lazy(() => import('@pages/components/tabs/TabPage')),
    PaginationPage: lazy(() => import('@pages/components/paginations/PaginationPage')),
    ProgressPage: lazy(() => import('@pages/components/progress/ProgressPage')),
    SpinnerPage: lazy(() => import('@pages/components/spinners/SpinnerPage')),
    ToastPage: lazy(() => import('@pages/components/toast/ToastPage')),
};

export const FeatureRoutes = {
    ManageAnnouncements: lazy(() => import('@pages/announcements/ManageAnnouncements')),
    MonitoringRequest: lazy(() => import('@pages/monitoring/MonitoringRequest')),
    ManageOfficials: lazy(() => import('@pages/officials/ManageOfficials')),
    ManageResidents: lazy(() => import('@pages/residents/ManageResidents')),
    Profile: lazy(() => import('@pages/settings/Profile')),
};