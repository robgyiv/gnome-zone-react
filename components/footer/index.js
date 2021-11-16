import {
  Box,
  Container,
  GridItem,
  Link,
  Text,
  Stack,
  IconButton,
  ButtonGroup,
  useColorMode,
} from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    // Credit to https://chakra-templates.dev/page-sections/footer
    <Container maxW="100%" bg={colorMode === 'light' ? 'gray.50' : 'gray.700'}>
      <Container maxW="container.xl">
        <GridItem rowStart={4} rowEnd={4}>
          <Box as="footer" role="contentinfo" mx="auto" py="12" padding="8">
            <Stack>
              <Stack direction="row" spacing="4" align="center" justify="space-between">
                <Text>
                  Made by{' '}
                  <Link href="https://robbie.computer" isExternal>
                    robgyiv.eth
                  </Link>
                </Text>
                <ButtonGroup variant="ghost" color="gray.600">
                  <IconButton
                    as="a"
                    href="https://github.com/robgyiv"
                    aria-label="GitHub"
                    rel="noopen noreferrer"
                    target="_blank"
                    icon={<FaGithub fontSize="20px" />}
                  />
                  <IconButton
                    as="a"
                    href="https://twitter.com/robgyiv"
                    aria-label="Twitter"
                    rel="noopen noreferrer"
                    target="_blank"
                    icon={<FaTwitter fontSize="20px" />}
                  />
                </ButtonGroup>
              </Stack>
              <Box
                alignSelf={{
                  base: 'center',
                  sm: 'start',
                }}
              >
                <Text>
                  Thanks to{' '}
                  <Link href="https://buildspace.so/" isExternal>
                    buildspace
                  </Link>{' '}
                  for the fun project
                </Text>
              </Box>
            </Stack>
          </Box>
        </GridItem>
      </Container>
    </Container>
  );
}
