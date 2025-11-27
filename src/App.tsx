import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProtectedRoutes from './router/ProtectedRoutes';
import HomePage from './pages/HomePage';

const PokedexPage = lazy(() => import('./pages/PokedexPage'));
const PokeInfoPage = lazy(() => import('./pages/PokeInfoPage'));

function App() {
	return (
		<Suspense fallback={<p>Loading Page...</p>}>
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route element={<ProtectedRoutes />}>
					<Route path="/pokedex" element={<PokedexPage />} />
					{/* RUTA CORREGIDA: Cambiamos a /pokedex/:name para anidarla bajo la Pokedex */}
					<Route path="/pokedex/:name" element={<PokeInfoPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default App;
