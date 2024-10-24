import { Box, Container, HStack, Image } from "@chakra-ui/react";
import { ConnectWalletButton } from "./ConnectWalletButton";
export const Navbar = () => {
  return (
    <Box
      px={0}
      position={"sticky"}
      top={0}
      zIndex={10}
      py={2}
      h={"auto"}
      w={"full"}
      bg={"#0a9400"}
    >
      <Container
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={"center"}
        maxW={"container.xl"}
      >
        <HStack flex={1} justifyContent={"start"}>
        <Image src="/logo.png" width="90px" height="70px" />
        </HStack>

        <HStack flex={1} spacing={1} justifyContent={"end"}>
          <ConnectWalletButton />
        </HStack>
      </Container>
    </Box>
  );
};
