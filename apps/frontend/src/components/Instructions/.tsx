import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/1.svg",
    title: "Connect Wallet",
    description: "To join us, all you need to do is connect your VeWorld wallet! ",
  },
  {
    icon: "/steps/2.svg",
    title: "Drive & Play",
    description: "Interested in making the world better just by driving efficiently?Yes, we know we are!",
  },
  {
    icon: "/steps/3.svg",
    title: "Your Rewards!",
    description: "Recieve automatically calculated BT3R token in your wallet and cash out when needed! ",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex p={{ base: 4 }} w="100%" direction={{ base: "column", md: "row" }}>
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
