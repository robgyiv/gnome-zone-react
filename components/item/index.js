import { Center, Badge, Box, Button, Flex, Image } from '@chakra-ui/react';

export default function Item({ index, url, item, upvoteGif }) {
  return (
    <Flex flexDirection="column">
      <Center>
        <Badge>{item.votes} upgnomes</Badge>
      </Center>
      <Image src={url} alt={item} />
      <Button onClick={() => upvoteGif(index)}>+Upgnome+</Button>
    </Flex>
  );
}
