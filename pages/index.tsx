import { Grid } from "@nextui-org/react";
import { NextPage, GetStaticProps } from "next";
import { pokeApi } from "../api";
import { Layout } from '../components/layouts';
import { LayoutCard } from "../components/layouts";
import { PokemonList, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {

  return(

      <Layout title="Pokemon World">
        <h1>Pokemon World</h1>
        <Grid.Container gap={1} justify="center">
        {
          pokemons.map((pokemon) => (
            <LayoutCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
        </Grid.Container>
      </Layout>
  
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const {data} = await pokeApi.get<PokemonList>('/pokemon?limit=151')
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))

  return {
    props: {
    //  pokemons : pokemons   - si los nombres son iguales se puede abreviar en solo uno
     pokemons
  }
}}

export default HomePage