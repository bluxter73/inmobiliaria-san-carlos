import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AdminLayout from './components/admin/AdminLayout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import About from './pages/About';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProperties from './pages/admin/AdminProperties';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="propiedades" element={<Properties />} />
        <Route path="propiedades/:id" element={<PropertyDetail />} />
        <Route path="acerca-de-mi" element={<About />} />
      </Route>

      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="propiedades" element={<AdminProperties />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
