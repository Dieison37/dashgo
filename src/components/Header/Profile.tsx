import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({showProfileData = true }: ProfileProps ) {
  return (
    <Flex align="center">
    { showProfileData && ( 
    <Box mr="4" textAlign="right">
    <Text>Dieison Lemes</Text>
     <Text color="gray.300" fontSize="small">
      dieisonambiental@gmail.com
      </Text>
    </Box>
    )}

    <Avatar size="md" name="Dieison" src="https://github.com/Dieison37.png" />
   </Flex>
  );
}