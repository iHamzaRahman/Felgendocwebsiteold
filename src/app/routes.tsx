import { Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { FelgenreparaturPage } from './pages/FelgenreparaturPage';
import { FahrzeugaufbereitungPage } from './pages/FahrzeugaufbereitungPage';
import { GaleriePage } from './pages/GaleriePage';
import { UeberUnsPage } from './pages/UeberUnsPage';
import { KontaktPage } from './pages/KontaktPage';

export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/felgenreparatur" element={<FelgenreparaturPage />} />
        <Route path="/fahrzeugaufbereitung" element={<FahrzeugaufbereitungPage />} />
        <Route path="/galerie" element={<GaleriePage />} />
        <Route path="/ueber-uns" element={<UeberUnsPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
      </Routes>
    </Layout>
  );
}
