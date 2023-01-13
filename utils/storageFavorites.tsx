

const toggleFavorites = (id:number) => {

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  if( favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id)
  }else{
    favorites.push(id)
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const favoritesValidate = (id:number): boolean => {

  if(typeof window === 'undefined') return false
  //esta linea corrige error 500 relacionado con el localStorage
  

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

  return favorites.includes(id)

}

const pokemons = ():number[] => {

  return JSON.parse( localStorage.getItem('favorites') || '[]')

}

export {
   toggleFavorites,
   favoritesValidate,
   pokemons,
}