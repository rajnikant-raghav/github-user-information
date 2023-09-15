import {
  Box,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  Stat,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const UserDetails = ({ user }) => {
  return (
    <div>
      {user ? (
        <>
          <Box display={"flex"} justifyContent={"center"}>
            <Box
              w={"350px"}
              bg={"lightgray"}
              padding={"10px"}
              borderRadius={"5px"}
            >
              <Box display={"flex"} gap={"15px"}>
                <Image
                  borderRadius="9999px"
                  boxSize="100px"
                  src={user.avatar_url}
                  alt="Dan Abramov"
                />
                <Box spacing={0} direction={"column"}>
                  <Heading> {user.name}</Heading>
                  <Text lineHeight={"0"} size={"sm"}>
                    @{user.login}
                  </Text>
                  <Text>Created at: {user.created_at.substring(0, 10)}</Text>
                </Box>
              </Box>
              <Text>{user.bio}</Text>
              <Stack
                bg={"lightgray"}
                w={"350px"}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Button
                  border={"none"}
                  bg={"gray"}
                  color={"white"}
                  padding={"5px"}
                  borderRadius={"5px"}
                >
                  repos: {user.public_repos}
                </Button>
                <Button
                  border={"none"}
                  bg={"gray"}
                  color={"white"}
                  padding={"5px"}
                  borderRadius={"5px"}
                >
                  gists: {user.public_gists}
                </Button>
              </Stack>
            </Box>
          </Box>
          <Stack
          w={'100vw'}
          h={'50px'}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            top={"0px"}
            bg={'lightblue'}
          >
            <Text
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"9999px"}
              boxSize={"40px"}
              bg={"green"}
              color={'white'}
              fontSize={"20px"}
            >
              {user.name.substring(0, 1)}
            </Text>
            <Text>Welcome,</Text>
            <Heading fontSize={"15px"}>{user.name}</Heading>
          </Stack>
        </>
      ) : (
        <p>..</p>
      )}
    </div>
  );
};

export default UserDetails;
