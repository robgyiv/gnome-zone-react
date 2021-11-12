import { useState } from 'react';
import { Button, CircularProgress, Container, Box, GridItem, Input, Stack } from '@chakra-ui/react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const sendGif = async () => {
    if (inputValue.length === 0) {
      console.log('No gif link given');
      return;
    }
    try {
      setIsSubmitting(true);
      const program = createProgram();

      await program.rpc.addGif(inputValue, {
        accounts: {
          baseAccount: baseAccount.publicKey,
        },
      });
      setInputValue('');
      console.log('GIF sent to program successfully', inputValue);

      await getGifList();
    } catch (e) {
      console.log('Error sending GIF', e);
    }
    setIsSubmitting(false);
  };

  const showButton = () => {
    if (gifList !== null) {
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendGif();
          }}
        >
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
              rightIcon={isSubmitting && <CircularProgress isIndeterminate size="16px" />}
            >
              Submit
            </Button>
          </Stack>
        </form>
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

  const showConnectButton = () => {
    <Button id="foo" onClick={() => connectWallet()}>
      Connect to Wallet
    </Button>;
  };

  const connectWallet = async () => {
    const { solana } = window;

    if (solana) {
      const response = await solana.connect();
      const publicKey = response.publicKey.toString();
      setWalletAddress(publicKey);
    }
  };

  return (
    <Container maxW="container.md">
      <GridItem rowStart={2} rowEnd={2}>
        <Box id="fun" maxW={'100%'}>
          {isConnected ? showButton() : showConnectButton()}
        </Box>
      </GridItem>
    </Container>
  );
}
