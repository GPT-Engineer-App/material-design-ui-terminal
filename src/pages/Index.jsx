import { Box, Divider, Text, Textarea, IconButton, Flex, VStack, useDisclosure } from "@chakra-ui/react";
import { FaGripLines, FaTerminal, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Index = () => {
  const { isOpen: isBottomBarOpen, onToggle: toggleBottomBar } = useDisclosure({ defaultIsOpen: true });
  const { isOpen: isRightBarOpen, onToggle: toggleRightBar } = useDisclosure({ defaultIsOpen: true });

  return (
    <Flex height="100vh" direction="column">
      <Flex flex="1" overflow="hidden">
        <Flex flex="1" bg="gray.100" p={4} direction="column">
          <Text fontSize="xl" mb={4}>
            Main Content Area
          </Text>
          <Textarea placeholder="Paste your base64 text here" />
        </Flex>
        {isRightBarOpen && (
          <VStack width="250px" bg="gray.200" p={4}>
            <Text fontSize="lg">Right Sidebar</Text>
            <Text>This could be additional tools or information.</Text>
          </VStack>
        )}
        <IconButton aria-label="Toggle right bar" icon={isRightBarOpen ? <FaArrowLeft /> : <FaArrowRight />} onClick={toggleRightBar} variant="ghost" position="absolute" right={isRightBarOpen ? "250px" : "0"} top="50%" zIndex="overlay" />
      </Flex>
      {isBottomBarOpen && (
        <Box bg="gray.300" p={4}>
          <Text fontSize="lg">Terminal Emulator</Text>
          <Text>This is a placeholder for a terminal emulator.</Text>
        </Box>
      )}
      <IconButton aria-label="Toggle bottom bar" icon={<FaGripLines />} onClick={toggleBottomBar} variant="ghost" position="absolute" bottom={isBottomBarOpen ? "100px" : "0"} left="50%" zIndex="overlay" />
      <Divider orientation="horizontal" />
    </Flex>
  );
};

export default Index;
