export interface PokemonMove {
	id: number;
	type_id: number;
	name: string;
	displayName: string;
	accuracy: number;
	effect: string;
	short_effect: string;
	flavor_text: string;
	power: number;
	pp: number;
	priority: number;
}