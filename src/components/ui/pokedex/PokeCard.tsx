import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../../../services/pokemon.api';
import type { PokemonListItem } from '../../../types/pokemon.interface';

interface PokeCardProps {
	pokemon: PokemonListItem;
}

const PokeCard = ({ pokemon }: PokeCardProps) => {
	const navigate = useNavigate();

	const { data } = useGetPokemonByNameQuery(pokemon.name || '', {
		skip: !pokemon.name,
	});

	const handleNavigation = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		navigate(`/pokedex/${pokemon.name}`);
	};

	return (
		<article
			onClick={handleNavigation}
			className="
        bg-white border-4 border-red-600 rounded-2xl p-6 shadow-xl 
        cursor-pointer transition-all duration-300 transform 
        hover:scale-[1.03] hover:shadow-2xl hover:border-blue-500
    "
		>
			<h3
				className="
        capitalize font-black text-2xl text-red-700 text-center 
        mb-2 tracking-wider
    "
			>
				{pokemon.name}
			</h3>

			<div
				className="
        flex justify-center items-center h-40 w-full bg-gray-100 
        rounded-lg border-2 border-gray-400 mb-4
    "
			>
				<img
					src={data?.sprites.other?.['official-artwork']?.front_default ?? ''}
					alt={data?.name}
					className="
                w-36 h-36 object-contain 
                transition-transform duration-300 group-hover:scale-110
            "
				/>
			</div>

			<p
				className="
        text-sm font-medium text-yellow-600 text-center 
        border-t border-gray-300 pt-2
    "
			>
				Tap to view details <span className="font-bold">→</span>
			</p>
		</article>
	);
};

export default PokeCard;
