import { useState } from 'react';
import { Center, Badge, Box, Button, CircularProgress, Flex, Image } from '@chakra-ui/react';

export default function Item({ index, url, item, upvoteGif }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (index) => {
    setIsSubmitting(true);
    const result = await upvoteGif(index);
    setIsSubmitting(false);
  };

  return (
    <Flex flexDirection="column">
      <Center>
        <Badge>{item.votes} upgnomes</Badge>
      </Center>
      <Image src={url} alt={item} />
      <Button
        onClick={() => handleSubmit(index)}
        rightIcon={isSubmitting && <CircularProgress isIndeterminate size="16px" />}
      >
        +Upgnome+
      </Button>
    </Flex>
  );
}
