import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './index.css'

// Import loading component
import LoadingSpinner from '@components/LoadingSpinner'

// Lazy load pages
const Home = lazy(() => import('@pages/Home'))
const Dashboard = lazy(() => import('@pages/Dashboard'))
const Login = lazy(() => import('@pages/Login'))
const Register = lazy(() => import('@pages/Register'))
const NotFound = lazy(() => import('@pages/NotFound'))
const ComingSoon = lazy(() => import('@pages/ComingSoon'))

// Lazy load component pages
const AccordionPage = lazy(() => import('@pages/components/accordions/AccordionPage'))
const AlertPage = lazy(() => import('@pages/components/alerts/AlertPage'))
const BadgePage = lazy(() => import('@pages/components/badges/BadgePage'))
const BreadcrumbPage = lazy(() => import('@pages/components/breadcrumbs/BreadCrumbPage'))
const ButtonsPage = lazy(() => import('@pages/components/buttons/ButtonPage'))
const CardsPage = lazy(() => import('@pages/components/cards/CardPage'))
const CarouselsPage = lazy(() => import('@pages/components/carousels/CarouselPage'))
const ListGroupPage = lazy(() => import('@pages/components/list-groups/ListGroupPage'))
const ModalPage = lazy(() => import('@pages/components/modals/ModalPage'))
const TabPage = lazy(() => import('./pages/components/tabs/TabPage'))
const PaginationPage = lazy(() => import('@pages/components/paginations/PaginationPage'))
const ProgressPage = lazy(() => import('@pages/components/progress/ProgressPage'))
const SpinnerPage = lazy(() => import('@pages/components/spinners/SpinnerPage'))
const ToastPage = lazy(() => import('@pages/components/toast/ToastPage'))

// Lazy load feature pages
const ManageAnnouncements = lazy(() => import('@pages/announcements/ManageAnnouncements'))
const MonitoringRequest = lazy(() => import('@pages/monitoring/MonitoringRequest'))
const ManageOfficials = lazy(() => import('@pages/officials/ManageOfficials'))
const ManageResidents = lazy(() => import('@pages/residents/ManageResidents'))
const Profile = lazy(() => import('@pages/settings/Profile'))

// Enhanced Loading Component with different variants
const PageLoadingSpinner = ({ variant = 'default' }) => {
  switch (variant) {
    case 'dashboard':
      return (
        <div className="min-h-screen bg-layout flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading Dashboard...</p>
          </div>
        </div>
      )

    case 'components':
      return (
        <div className="min-h-screen bg-layout flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            <p className="mt-4 text-gray-600 text-sm">Loading Component...</p>
          </div>
        </div>
      )

    case 'minimal':
      return (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        </div>
      )

    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      )
  }
}

// Create route groups for better organization and loading strategies
const RouteGroup = ({ children, fallback = <PageLoadingSpinner /> }) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
)

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages with individual loading */}
        <Route path="/" element={
          <RouteGroup fallback={<PageLoadingSpinner />}>
            <Home />
          </RouteGroup>
        } />

        <Route path="/login" element={
          <RouteGroup fallback={<PageLoadingSpinner />}>
            <Login />
          </RouteGroup>
        } />

        <Route path="/register" element={
          <RouteGroup fallback={<PageLoadingSpinner />}>
            <Register />
          </RouteGroup>
        } />

        <Route path="/dashboard" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="dashboard" />}>
            <Dashboard />
          </RouteGroup>
        } />

        {/* Component Documentation Pages with specialized loading */}
        <Route path="/components" element={<Navigate to="/components/accordions" replace />} />

        <Route path="/components/accordions" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <AccordionPage />
          </RouteGroup>
        } />

        <Route path="/components/alerts" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <AlertPage />
          </RouteGroup>
        } />

        <Route path="/components/badges" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <BadgePage />
          </RouteGroup>
        } />

        <Route path="/components/breadcrumbs" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <BreadcrumbPage />
          </RouteGroup>
        } />

        <Route path="/components/buttons" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <ButtonsPage />
          </RouteGroup>
        } />

        <Route path="/components/cards" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <CardsPage />
          </RouteGroup>
        } />

        <Route path="/components/carousels" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <CarouselsPage />
          </RouteGroup>
        } />

        <Route path="/components/list-groups" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <ListGroupPage />
          </RouteGroup>
        } />

        <Route path="/components/modals" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <ModalPage />
          </RouteGroup>
        } />

        <Route path="/components/toast" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <ToastPage />
          </RouteGroup>
        } />

        <Route path="/components/tabs" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <TabPage />
          </RouteGroup>
        } />

        <Route path="/components/pagination" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <PaginationPage />
          </RouteGroup>
        } />

        <Route path="/components/progress" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <ProgressPage />
          </RouteGroup>
        } />

        <Route path="/components/spinners" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="components" />}>
            <SpinnerPage />
          </RouteGroup>
        } />

        {/* Placeholder routes */}
        <Route path="/components/tooltips" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="minimal" />}>
            <ComingSoon />
          </RouteGroup>
        } />

        <Route path="/components/dropdowns" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="minimal" />}>
            <ComingSoon />
          </RouteGroup>
        } />

        <Route path="/components/formfields" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="minimal" />}>
            <ComingSoon />
          </RouteGroup>
        } />

        <Route path="/components/calendar" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="minimal" />}>
            <ComingSoon />
          </RouteGroup>
        } />

        <Route path="/components/table" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="minimal" />}>
            <ComingSoon />
          </RouteGroup>
        } />

        {/* Feature Pages with default loading */}
        <Route path="/announcements" element={
          <RouteGroup>
            <ManageAnnouncements />
          </RouteGroup>
        } />

        <Route path="/monitoring" element={
          <RouteGroup>
            <MonitoringRequest />
          </RouteGroup>
        } />

        <Route path="/officials" element={
          <RouteGroup>
            <ManageOfficials />
          </RouteGroup>
        } />

        <Route path="/residents" element={
          <RouteGroup>
            <ManageResidents />
          </RouteGroup>
        } />

        <Route path="/settings" element={
          <RouteGroup>
            <Profile />
          </RouteGroup>
        } />

        {/* 404 Page */}
        <Route path="*" element={
          <RouteGroup fallback={<PageLoadingSpinner variant="minimal" />}>
            <NotFound />
          </RouteGroup>
        } />
      </Routes>
    </Router>
  )
}

export default App