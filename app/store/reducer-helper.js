function toCamel(string){
	return string.toLowerCase().replace(/(\_[a-z])/g, function($1){return $1.toUpperCase().replace('_','');});
}

export const Reducer = function(){
  return (state, action) => {
    if (!state) {
      state = this.initialState;
    }
    let handler = toCamel('ON_'+action.type);
    if (this[handler]) {
      return Object.assign({}, state, this[handler](action));
    }
    return state
  }
}
