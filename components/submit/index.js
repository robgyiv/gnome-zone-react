import { useState } from 'react';
import { Button, Container, Box, GridItem, Input, Stack } from '@chakra-ui/react';
import { Program, Provider, web3 } from '@project-serum/anchor';

export default function Submit({
  gifList,
  isConnected,
  createGifAccount,
  getProvider,
  createProgram,
  baseAccount,
  getGifList,
}) {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const sendGif = async () => {
    if (inputValue.length > 0) {
      console.log('Gif link:', inputValue);
    } else {
      console.log('Empty input. Try again.');
    }
    if (inputValue.length === 0) {
      console.log('No gif link given');
      return;
    }
    console.log('Gif link:', inputValue);
    try {
      const provider = getProvider();
      const program = createProgram();

      await program.rpc.addGif(inputValue, {
        accounts: {
          baseAccount: baseAccount.publicKey,
        },
      });
      console.log('GIF sent to program successfully', inputValue);

      await getGifList();
    } catch (e) {
      console.log('Error sending GIF', e);
    }
  };

  const showButton = () => {
    if (gifList !== null) {
      return (
        <Stack direction={'row'}>
          <Input
            placeholder={'Gnome GIF URL...'}
            _focus={{
              bg: 'whiteAlpha.300',
            }}
            onChange={onInputChange}
            value={inputValue}
          />
          <Button
            _hover={{
              bg: 'green.600',
            }}
            aria-label="Subscribe"
            onClick={() => sendGif()}
          >
            Submit
          </Button>
        </Stack>
      );
    } else {
      return (
        <Stack direction={'row'}>
          <Button
            _hover={{
              bg: 'green.600',
            }}
            aria-label="Subscribe"
            onClick={() => createGifAccount()}
          >
            Do One-Time Initialization For GIF Program Account
          </Button>
        </Stack>
      );
    }
  };

  return (
    <Container maxW="container.xl">
      <GridItem rowStart={2} rowEnd={2}>
        <Box id="fun" maxW={'100%'}>
          {showButton()}
        </Box>
      </GridItem>
    </Container>
  );
}
