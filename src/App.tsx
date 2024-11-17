import { Route, Routes } from 'react-router-dom';
import './App.scss';

export const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />;
    <Route path="/catalog" element={<CatalogPage />} />;
    <Route path="/catalog" element={<CatalogPage />}>
      <Route path="/:category" element={<CategoryPage />} />
    </Route>
    <Route path="/product" element={<ProductPage />}>
      <Route path="/:id" element={<ProductDetailPage />} />
    </Route>
    <Route path="/favourites" element={<FavouritesPage />} />
  </Routes>
);
