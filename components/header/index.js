import { Box, Grid, Container, GridItem, Heading, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Container maxW="container.xl">
      <GridItem rowStart={1} rowEnd={1} id="asdjhkdasj" maxWidth={'100%'} padding="8">
        <Heading>The Gnome Zone</Heading>
        <Text>Find the best gnomes and put them on the blockchain</Text>
      </GridItem>
    </Container>
  );
}
