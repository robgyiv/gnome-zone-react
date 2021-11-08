import { Box, Text, Stack, IconButton, ButtonGroup } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    // Credit to https://chakra-templates.dev/page-sections/footer
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{
        base: '4',
        md: '8',
      }}
      width={'100vw'}
    >
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <Text>Made by robgyiv.eth</Text>
          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="20px" />}
            />
            <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
          </ButtonGroup>
        </Stack>
        <Box
          alignSelf={{
            base: 'center',
            sm: 'start',
          }}
        >
          <Text>Thanks to Buildspace for the fun project</Text>
        </Box>
      </Stack>
    </Box>
  );
}