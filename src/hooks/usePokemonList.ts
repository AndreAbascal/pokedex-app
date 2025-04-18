// src/hooks/usePokemonList.ts
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { appendPokemons, setPokemons } from '../store/slices/pokemonSlice';
import { PokemonBasic } from '../types/pokemon';
import { fetchPokemons } from '../services/api';

interface Filters {
	searchText?: string;
	selectedType?: string;
}

export default function usePokemonList(
	limit: number,
	offset: number,
	filters?: Filters
) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [hasMore, setHasMore] = useState(true);
	const [total, setTotal] = useState<number | null>(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchList = async () => {
			try {
				setLoading(true);
				setError('');

				const params: any = { limit, offset };

				if (filters?.searchText) params.search = filters.searchText;
				if (filters?.selectedType && filters.selectedType !== '0') {
					params.type = filters.selectedType;
				}

				const res = await fetchPokemons(params);

				const data = res.data;

				const all: PokemonBasic[] = data.results;
				const more: boolean = data.hasMore ?? false;
				const totalCount: number = data.total ?? null;

				if (offset === 0) {
					dispatch(setPokemons(all)); //first load
				} else {
					dispatch(appendPokemons(all));//load more
				}
				setHasMore(more);
				setTotal(totalCount);
			} catch (err: any) {
				console.error('PokemonList error:', err);
				setError('Error on fetching pokemons');
			} finally {
				setLoading(false);
			}
		};

		fetchList();
	}, [limit, offset, filters?.searchText, filters?.selectedType]);

	return { loading, error, hasMore, total};
}
