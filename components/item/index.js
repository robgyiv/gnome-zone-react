import { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Item({ index, url, item, upvoteGif }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (index) => {
    setIsSubmitting(true);
    const result = await upvoteGif(index);
    setIsSubmitting(false);
  };

  return (
    <Flex flexDirection="column">
      <Flex w="full" alignItems="center" justifyContent="center">
        <Box
          maxW="md"
          w="xs"
          mx="auto"
          bg={useColorModeValue('white', 'gray.800')}
          shadow="md"
          rounded="md"
        >
          <Image h={48} w="full" fit="cover" mt={2} src={url} alt="Gnome GIF" />

          <Flex alignItems="center" justifyContent="space-between" px={4} py={2} roundedBottom="lg">
            <Text>{item.votes} votes</Text>
            <Button
              px={2}
              py={1}
              // bg="gray.800"
              fontSize="xs"
              // color="gray.900"
              fontWeight="bold"
              // rounded="md"
              textTransform="uppercase"
              // _hover={{
              //   bg: 'gray.200',
              // }}
              // _focus={{
              //   bg: 'gray.400',
              // }}
              rightIcon={isSubmitting && <CircularProgress isIndeterminate size="16px" />}
              onClick={() => handleSubmit(index)}
            >
              Upgnome
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
