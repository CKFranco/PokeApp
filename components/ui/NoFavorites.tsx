import React from 'react'
import { Grid, Card, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <>
      <Grid.Container
        justify="center"
        css={{
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 100px)",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <Text h1>No hay favoritos</Text>
        <Card.Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          }
          width={250}
          height={250}
          css={{
            opacity: "0.5",
          }}
        />
      </Grid.Container>
    </>
  );
}
