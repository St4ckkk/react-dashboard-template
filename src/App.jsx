import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'

// Import pages
import Home from '@pages/Home'
import Dashboard from '@pages/Dashboard'
import Login from '@pages/Login'
import NotFound from '@pages/NotFound'
import ComingSoon from '@pages/ComingSoon'

// Import page components
import AccordionPage from '@pages/components/accordions/AccordionPage'
import AlertPage from '@pages/components/alerts/AlertPage'
import BadgePage from '@pages/components/badges/BadgePage'

import BreadcrumbsPage from '@pages/components/breadcrumbs/BreadcrumbPage'
import ButtonsPage from '@pages/components/buttons/ButtonPage'
import CardsPage from '@pages/components/cards/CardPage'
import CarouselsPage from '@pages/components/carousels/CarouselPage'


// Import feature pages
import ManageAnnouncements from '@pages/announcements/ManageAnnouncements'
import MonitoringRequest from '@pages/monitoring/MonitoringRequest'
import ManageOfficials from '@pages/officials/ManageOfficials'
import ManageResidents from '@pages/residents/ManageResidents'
import Profile from '@pages/settings/Profile'

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Component Documentation Pages */}
        <Route path="/components" element={<Navigate to="/components/accordions" replace />} />
        <Route path="/components/accordions" element={<AccordionPage />} />
        <Route path="/components/alerts" element={<AlertPage />} />
        <Route path="/components/badges" element={<BadgePage />} />
        {/* Add other component routes as files exist */}
        <Route path="/components/breadcrumbs" element={<BreadcrumbsPage />} />
        <Route path="/components/buttons" element={<ButtonsPage />} />
        <Route path="/components/cards" element={<CardsPage />} />
        <Route path="/components/carousels" element={<CarouselsPage />} />

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