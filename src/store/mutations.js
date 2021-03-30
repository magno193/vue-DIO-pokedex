import state from './state';

export default {
	// Updates the pokedex loading offset
	updateOffset() {
		state.offset += state.limit;
	},
	// Adds pokemon's to pokedex for the infinite loading
	setList(list) {
		state.list.push(...list);
		state.tmpList.push(...list);
	},
	// Informs if the pokedex needs more data
	setListHasNext(flag) {
		state.listHasNext = flag;
	},
	// Informs if the pokedex has finished fetching data
	setListHasCompleted(flag) {
		state.listHasCompleted = flag;
	},
	// Informs if the pokedex has an error
	setListHasError(flag) {
		state.listHasError = flag;
	},
	// Adds the pokedex only the searched pokemon
	addPokemonSearched(pokemon) {
		state.list = [pokemon];
	},
	// Informs that the search is happening
	setIsSearching(flag) {
		state.isSearching = flag;
	},
	// Informs that the search has been done
	setIsPokemonSearch(flag) {
		state.isPokemonSearch = flag;
	},
	// Informs that search got an error
	setSearchHasError(flag) {
		state.searchHasError = flag;
	},
	// Resets the pokedex to the last cache and removes search information
	resetList() {
		state.list = [...state.tmpList];
		state.isPokemonSearch = false;
		state.listHasError = false;
		state.searchHasError = false;
	},
};
