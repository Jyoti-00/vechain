import {
  Box,
  Card,
  HStack,
  Image,
  VStack,
  Text,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import { MdOutlineArrowOutward } from "react-icons/md";

export const InfoCard = () => {
  return (
    <Card w={"full"}>
      <Box p={3}>
        <VStack w={"full"} spacing={{ base: 2, md: 4 }}>
          <Image src="/zenvoltfront.png" borderRadius={16} height="550px" width="1200px"/>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            direction={{ base: "column", md: "row" }}
            alignItems={"center"}
          >
            <HStack alignSelf={{ base: "center", md: "flex-start" }}>
              <Image src="/logo.png" h={16} borderRadius={16} />
              <Text fontSize={24} fontWeight={800}>
                ZenVolt
              </Text>
              <Text fontSize={15} fontWeight={800}>
              Drive Tomorrow!              </Text>
            </HStack>
            
            <Flex
              mt={{ base: 4, md: 0 }}
              direction={{ base: "column", md: "row" }}
            >
              <HStack alignSelf={{ base: "center", md: "flex-start" }}>
              
            </HStack>
              
            </Flex>
          </Flex>
        </VStack>
      </Box>
    </Card>
  );
};
