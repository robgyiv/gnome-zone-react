import { Box, Image, Text } from '@chakra-ui/react';

export default function Item({ url, item }) {
  console.log('!!!', item, url);
  return (
    <>
      <Box>
        <Image src={url} alt={item} />
        <Text>I am a gnome</Text>
      </Box>
    </>
  );
}
