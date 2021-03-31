import { parsePokemonInfo } from '@/utils/index';
import state from './state';

export default {
	get pokemonsInfo() {
		return state.list.map(parsePokemonInfo);
	},
};
