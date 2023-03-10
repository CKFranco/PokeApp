import React, { FC } from 'react'
import { Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props{
    id: number
}

export const FavoritePokeCard : FC<Props> = ({id}) => {

    const router = useRouter()

    const onFavoriteClick = () => {
        router.push(`/pokemon/${id}`)
    }


  return (
    <Grid xs={4} sm={3} md={2} xl={1}>
        <Card isHoverable isPressable onPress={onFavoriteClick} css={{ padding: "10px" }}>
        <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        /> 
        </Card>
    </Grid>
  )
}
