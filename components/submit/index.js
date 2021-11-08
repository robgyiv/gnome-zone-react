import {
  Button,
  Box,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  IconButton,
} from '@chakra-ui/react';

export default function Item() {
  return (
    <Grid justifyItems={'center'}>
      <Box width={'70vw'}>
        <Stack direction={'row'}>
          <Input
            placeholder={'Gnome GIF URL...'}
            _focus={{
              bg: 'whiteAlpha.300',
            }}
          />
          <Button
            _hover={{
              bg: 'green.600',
            }}
            aria-label="Subscribe"
            // icon={<BiMailSend />}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}
