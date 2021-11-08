import { Box, Grid } from '@chakra-ui/react';

import Item from '../item';

export default function Gallery() {
  return (
    <Grid justifyItems={'center'}>
      <Box width={'70vw'}>
        <Grid templateColumns={'repeat(4, 1fr)'} templateRows={'auto'} gridGap={'2rem'}>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </Grid>
      </Box>
    </Grid>
  );
}
