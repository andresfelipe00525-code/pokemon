export interface PokemonListItem {
	name: string;
	url: string;
}

export interface PokemonListResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonListItem[];
}

export interface PokemonTypeDetails {
	name: string;
	url: string;
}

export interface PokemonTypeEntry {
	slot: number;
	type: PokemonTypeDetails; // Usamos la interfaz definida arriba
}

export interface PokemonStatDetails {
	name: string;
	url: string;
}

export interface PokemonStatEntry {
	base_stat: number;
	stat: PokemonStatDetails;
}

export interface OfficialArtwork {
	front_default: string | null;
}

export interface OtherSprites {
	'official-artwork': OfficialArtwork;
	[key: string]: any;
}

export interface PokemonSprites {
	front_default: string | null;
	other: OtherSprites;
}

export interface PokemonDetail {
	id: number;
	name: string;
	sprites: PokemonSprites;
	types: PokemonTypeEntry[];
	stats: PokemonStatEntry[];
}
