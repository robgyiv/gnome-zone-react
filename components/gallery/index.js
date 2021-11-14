import { Container, Box, Grid, GridItem } from '@chakra-ui/react';

import Item from '../item';

export default function Gallery({ gifList, upvoteGif }) {
  return (
    <Container maxW="container.xl">
      <GridItem rowStart={3} rowEnd={3}>
        <Box padding="8">
          <Grid templateColumns={'repeat(3, 1fr)'} templateRows={'auto'} gridGap={'2rem'}>
            {gifList.length > 0 &&
              gifList.map((item, index) => (
                <Item
                  key={index}
                  index={index}
                  item={item}
                  url={item.gifLink}
                  alt={item}
                  upvoteGif={upvoteGif}
                />
              ))}
          </Grid>
        </Box>
      </GridItem>
    </Container>
  );
}
