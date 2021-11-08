import { Box, Grid, Heading, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Grid height="10vh" alignItems="center" justifyContent="center">
      <Box p={4}>
        <Heading>The Gnome Zone</Heading>
        <Text>Let's find the best gnomes and put them on the blockchain</Text>
      </Box>
    </Grid>
  );
}
