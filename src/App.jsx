import React, { useEffect, useState } from "react";
import { Stack, Button, Input, Box} from "@chakra-ui/react";
import UserDetails from "./components/UserDetails";

const App = () => {
  const [user, setUser] = useState();
  const [query, setQuery] = useState("rajnikant-raghav");

  const fetchUser = () => {
    fetch(`https://api.github.com/users/${query}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  };
 useEffect(()=>{
    fetchUser();
 },[])
  return (
    <Stack>
    <Box h={'50vh'} display={"flex"} justifyContent={"center"} alignItems={'center'}>
      <Stack spacing={20} w={"300px"}>
        <Input
          placeholder="Type a username"
          size="xs"
          border={"none"}
          padding={"10px"}
          bg={"lightgray"}
          borderRadius={"5px"}
          outline={"none"}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          bg={"gray"}
          color={"white"}
          border={"none"}
          padding={"10px"}
          cursor={"pointer"}
          onClick={fetchUser}
        >
          Submit
        </Button>
      </Stack>
    </Box>
    <UserDetails user={user}/>
    </Stack>
  );
};

export default App;
