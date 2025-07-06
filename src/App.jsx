import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

// Import pages
import Home from '@pages/Home'
import Dashboard from '@pages/Dashboard'
import Login from '@pages/Login'
import Register from '@pages/Register'
import NotFound from '@pages/NotFound'
import ComingSoon from '@pages/ComingSoon'

// Import page components
import AccordionPage from '@pages/components/accordions/AccordionPage'
import AlertPage from '@pages/components/alerts/AlertPage'
import BadgePage from '@pages/components/badges/BadgePage'
import BreadcrumbPage from '@pages/components/breadcrumbs/BreadCrumbPage'
import ButtonsPage from '@pages/components/buttons/ButtonPage'
import CardsPage from '@pages/components/cards/CardPage'
import CarouselsPage from '@pages/components/carousels/CarouselPage'
import ListGroupPage from '@pages/components/list-groups/ListGroupPage'
import ModalPage from '@pages/components/modals/ModalPage'
import TabPage from './pages/components/tabs/TabPage'
import PaginationPage from '@pages/components/paginations/PaginationPage'

// Import feature pages
import ManageAnnouncements from '@pages/announcements/ManageAnnouncements'
import MonitoringRequest from '@pages/monitoring/MonitoringRequest'
import ManageOfficials from '@pages/officials/ManageOfficials'
import ManageResidents from '@pages/residents/ManageResidents'
import Profile from '@pages/settings/Profile'
import ProgressPage from './pages/components/progress/ProgressPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Component Documentation Pages */}
        <Route path="/components" element={<Navigate to="/components/accordions" replace />} />
        <Route path="/components/accordions" element={<AccordionPage />} />
        <Route path="/components/alerts" element={<AlertPage />} />
        <Route path="/components/badges" element={<BadgePage />} />
        <Route path="/components/breadcrumbs" element={<BreadcrumbPage />} />
        <Route path="/components/buttons" element={<ButtonsPage />} />
        <Route path="/components/cards" element={<CardsPage />} />
        <Route path="/components/carousels" element={<CarouselsPage />} />
        <Route path="/components/list-groups" element={<ListGroupPage />} />
        <Route path="/components/modals" element={<ModalPage />} />

        {/* Placeholder routes for components not yet created */}
        <Route path="/components/tabs" element={<TabPage />} />
        <Route path="/components/pagination" element={<PaginationPage />} />
        <Route path="/components/progress" element={<ProgressPage />} />
        <Route path="/components/spinners" element={<ComingSoon />} />
        <Route path="/components/tooltips" element={<ComingSoon />} />
        <Route path="/components/dropdowns" element={<ComingSoon />} />
        <Route path="/components/formfields" element={<ComingSoon />} />
        <Route path="/components/calendar" element={<ComingSoon />} />
        <Route path="/components/table" element={<ComingSoon />} />

        {/* Feature Pages */}
        <Route path="/announcements" element={<ManageAnnouncements />} />
        <Route path="/monitoring" element={<MonitoringRequest />} />
        <Route path="/officials" element={<ManageOfficials />} />
        <Route path="/residents" element={<ManageResidents />} />
        <Route path="/settings" element={<Profile />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App