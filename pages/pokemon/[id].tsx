import { useState } from 'react'

import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import Image from 'next/image';

import confetti from 'canvas-confetti';

import pokeApi from '../../api/pokeAPi';
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces';
import { toggleFavorites, favoritesValidate } from '../../utils';
import { getPokemonData } from '../../utils/getPokemonData';



interface Props {
  pokemon: Pokemon
}

const PokemonPage : NextPage<Props> = ({pokemon}) => {

  const [isInFavorites, setIsInFavorites] = useState(favoritesValidate(pokemon.id))

  const onToggleFavorite = () => {
    toggleFavorites(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if(!isInFavorites){
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0,
        }
      })
    }

  }
    
  return (
    <Layout title={pokemon.name.toUpperCase()}>
        <Grid.Container css={{marginTop:'0px'}} gap={1}>

          <Grid xs={5} sm={4}>

            <Card isHoverable css={{padding:'10px'}}>
              <Card.Body>
                
                <Card.Image 
                src={pokemon.sprites.other?.dream_world.front_default || '/no-img.png'}
                alt={pokemon.name}
                height='100%'
                width={'500px'}
                />
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={8}>
            <Card isHoverable>
              <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                <Text h1 transform='capitalize'>
                 {pokemon.name}
                </Text>
                <Button 
                color="gradient" 
                ghost={!isInFavorites}
                onPress={onToggleFavorite}
                >
                  {isInFavorites ? 'Eliminar de favoritos' : 'Guardar en Favoritos'}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container display='flex' justify='space-between'>
                  <Image 
                  alt='sprite image'
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                  />
                  <Image 
                  alt='sprite image'
                  src={pokemon.sprites.back_default}
                  width={100}
                  height={100}
                  />
                  <Image 
                  alt='sprite image'
                  src={pokemon.sprites.front_shiny}
                  width={100}
                  height={100}
                  />
                  <Image 
                  alt='sprite image'
                  src={pokemon.sprites.back_shiny}
                  width={100}
                  height={100}
                  />
                </Container>             
              </Card.Body>
            </Card>
          </Grid>

        </Grid.Container>

    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const paths = [...Array(151)].map((value, index) => ({params: {id: `${index+1}`}}))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  //params se desestructura de ctx, abreviacion de context, que a su vez context es la informacion que esta pasando getStaticProps

  const {id} = params as { id: string };
  //as { id: string } solo es un typado simplificado

  return {
    props: {
     pokemon: await getPokemonData(id)
     //éste pokemon es el que le da los valores al pokemon que se esta recibiendo al inicio de la página
  }
}}

export default PokemonPage