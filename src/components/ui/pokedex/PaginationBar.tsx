import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setPage } from '../../../store/slices/filters.slice';

interface PaginationBarProps {
	totalCount: number;
}

const PaginationBar = ({ totalCount }: PaginationBarProps) => {
	const { page, pageSize } = useAppSelector((state) => state.filters);
	const dispatch = useAppDispatch();

	const totalPages = Math.ceil(totalCount / pageSize) || 1;

	return (
		<div className="flex justify-center items-center text-md font-semibold text-gray-800 space-x-4 bg-white p-4 rounded-xl shadow-lg border-2 border-blue-500">
			<button
				disabled={page <= 1}
				onClick={() => dispatch(setPage(page - 1))}
				className="px-4 py-2 border-2 border-red-500 rounded-full shadow-md text-red-500 hover:bg-red-500 hover:text-white transition duration-200 
                   disabled:opacity-40 disabled:cursor-not-allowed"
			>
				Prev
			</button>

			<span className="text-lg font-bold text-gray-700 bg-yellow-300 px-4 py-1 rounded-full border-2 border-yellow-500">
				Page {page} / {totalPages}
			</span>

			<button
				disabled={page >= totalPages}
				onClick={() => dispatch(setPage(page + 1))}
				className="px-4 py-2 border-2 border-red-500 rounded-full shadow-md text-red-500 hover:bg-red-500 hover:text-white transition duration-200 
                   disabled:opacity-40 disabled:cursor-not-allowed"
			>
				Next
			</button>
		</div>
	);
};

export default PaginationBar;
