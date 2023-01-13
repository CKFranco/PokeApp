
import { useEffect, useState} from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui/NoFavorites'
import { pokemons } from '../../utils'
import { FavoritePokemons } from '../../components/ui/FavoritePokemons';



const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    
    setFavoritePokemons(pokemons())
  
  }, [])
  

  return (
    <Layout title='Pokemon-Favorites'>
      {
        favoritePokemons.length === 0 
        ? (<NoFavorites/>)
        : ( <FavoritePokemons pokemons={favoritePokemons}/>)
      }    
    </Layout>
  )
}

export default FavoritesPage