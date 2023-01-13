import { FC } from 'react'
import { Grid } from '@nextui-org/react';
import { FavoritePokeCard } from '../pokemonCard/FavoritePokeCard';

interface Props{
    pokemons: number[]
}

export const FavoritePokemons : FC<Props> = ({pokemons}) => {
    
  return (
    <Grid.Container gap={2} direction={"row"} justify={"flex-start"}>
      {pokemons.map((id) => (
        <FavoritePokeCard id={id} key={id}/>
      ))}
    </Grid.Container>
  );
}
