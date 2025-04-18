import { PokemonColor } from "./pokemon-color";
import { PokemonStat } from "./pokemon-stat";
import { PokemonType } from "./pokemon-type";

export interface PokemonBasic {
	id: number;
	name: string;
	display_name: string;
	sprite: string;
	color: PokemonColor;
	searchable?: string;
	types?: PokemonType[];
	stats?: PokemonStat[];
	base_experience?: number;
	base_happiness?: number;
	capture_rate?: number;
	height?: number;
	weight?: number;
	accuracy?: number;
	evasion?: number;
}
