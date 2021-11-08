import { Box, Grid } from '@chakra-ui/react';

import Item from '../item';

export default function Gallery({ gifList }) {
  return (
    <Grid justifyItems={'center'}>
      <Box width={'70vw'}>
        <Grid templateColumns={'repeat(4, 1fr)'} templateRows={'auto'} gridGap={'2rem'}>
          {gifList.length > 0 &&
            gifList.map((item, index) => <Item key={index} url={item.gifLink} alt={item} />)}
        </Grid>
      </Box>
    </Grid>
  );
}
