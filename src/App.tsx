import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/pages/HomePage';

export const App = () => (
  <div className="app">
    <Routes>
      <Route path="/" element={<HomePage />} />;
      {/*     <Route path="/catalog" element={<CatalogPage />} />;
    <Route path="/catalog" element={<CatalogPage />}>
      <Route path="/:category" element={<CategoryPage />} />
    </Route>
    <Route path="/product" element={<ProductPage />}>
      <Route path="/:id" element={<ProductDetailPage />} />
    </Route>
    <Route path="/favourites" element={<FavouritesPage />} /> */}
    </Routes>
  </div>
);
