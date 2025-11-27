import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

const ProtectedRoutes = () => {
	const trainer = useAppSelector((state) => state.trainer);

	return trainer && trainer.length > 0 ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
