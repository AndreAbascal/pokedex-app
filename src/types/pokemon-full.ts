import { PokemonAbility } from "./pokemon-ability";
import { PokemonColor } from "./pokemon-color";
import { PokemonMove } from "./pokemon-move";
import { PokemonType } from "./pokemon-type";
import { PokemonStat } from "./pokemon-stat";

export interface PokemonFull {
	id: number;
	name: string;
	display_name: string;
	sprite: string;
	color: PokemonColor;
	types: PokemonType[];
	moves: PokemonMove[];
	abilities: PokemonAbility[];
	hp: number;
	stats: PokemonStat[];
	base_experience: number;
	base_happiness: number;
	capture_rate: number;
	height: number;
	weight: number;
	accuracy: number;
	evasion: number;
}