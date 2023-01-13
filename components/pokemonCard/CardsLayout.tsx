import { Grid, Card, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { SmallPokemon } from "../../interfaces";


interface Pokemon {
  pokemon: SmallPokemon
}


export const LayoutCard = ({pokemon}: Pokemon) => {

  const router = useRouter()

  const onClick = () => {
    router.push(`/name/${pokemon.name}`)
  }

  return (
    
      <Grid xs={4}>
      <Card 
        css={{ h: "$25", $$cardColor: '$colors$accents2' }} 
        isHoverable 
        isPressable
        onClick={onClick}
      >
        <Card.Body >
          <p>
            {`#${pokemon.id}`}
          </p>
          <Text 
          transform="capitalize"
          h6 size={15} 
          color="white" 
          css={{ mt: 0 }}>
            {pokemon.name}
          </Text>
        <Card.Image 
          src={pokemon.img}
          width={100}
          height={100}
          />
        </Card.Body>
      </Card>
      </Grid>
  
  );
}

