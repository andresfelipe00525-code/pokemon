import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setTrainer } from '../store/slices/trainer.slice';

const HomePage = () => {
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleStart = () => {
		if (name.trim().length >= 3) {
			dispatch(setTrainer(name.trim()));
			navigate('/pokedex');
		} else {
			alert('Your trainer name must be at least 3 characters long!');
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center gradient from-red-600 via-blue-700 to-yellow-400 p-4">
			<div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full text-center border-8 border-yellow-300  outline-4 outline-red-500 transform hover:scale-105 transition-transform duration-300">
				<h1 className="text-6xl md:text-7xl font-extrabold text-red-700 mb-6 drop-shadow-lg font-['Pokemon_Solid'] animate-bounce">
					Pokedex
				</h1>

				<h2 className="text-4xl font-bold text-blue-800 mb-4 animate-fade-in">
					¡Hello, Trainer!
				</h2>

				<p className="text-xl text-gray-700 mb-8 max-w-md mx-auto leading-relaxed">
					Enter your trainer name for start de adventure Pokemon!
				</p>

				<div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
					<input
						type="text"
						placeholder="Enter your trainer name"
						value={name}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setName(e.target.value)
						}
						className="flex p-4 border-4 border-blue-600 rounded-xl text-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-md transition-all duration-300 bg-blue-50 hover:bg-white"
					/>

					<button
						onClick={handleStart}
						className="bg-red-600 text-white font-black text-xl md:text-2xl p-4 rounded-xl border-4 border-yellow-300 shadow-lg uppercase tracking-wide hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-yellow-400 active:scale-95 transition-all duration-300 flex"
					>
						¡GOTTA CATCH 'EM ALL!!
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
