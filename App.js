import { useState, useEffect } from "react";
import { NativeBaseProvider, Box, Text} from "native-base";
import { auth } from "./app/fbConfig";
import Login from "./app/Login";
import TodoList from "./app/TodoList";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const _user = auth.currentUser;
    setUser(_user) 
  }, []);

  return (
    <NativeBaseProvider>
      <Box bg="rose.800" alignItems="center" justifyContent="center" flex={1}>
        <Text color="amber.400" fontSize="4xl">Checkov Todo</Text>
        {!user
          ? <Login setUser={setUser} />
          : <TodoList user={user} />
          }
      </Box>
    </NativeBaseProvider>    
  );
};
