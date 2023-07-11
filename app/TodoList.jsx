import { useState, useEffect } from "react";
import { Text, Center, Box, Heading, VStack, Checkbox, HStack } from "native-base";
import TodoHeader from "./TodoHeader";

export default function TodoList({ user }) {
  
  const [todoItems, setTodoItems] = useState();

  useEffect(() => {
    if(user) {
      fetch(`https://checkov-api-lmkw.web.app/tasks/${user.uid}`)
        .then(res => res.json())
        .then(setTodoItems)
        .catch(alert)
    }
  }, [user])
  
  return(
    <Center w="100%">
      <Box maxW={300} w="100%">
        <VStack space={4}>
          <TodoHeader user={user} setTodoItems={setTodoItems} />
          {!todoItems
            ? <Text fontSize="lg" color="gray.300" textAlign="center">Loading...</Text>
            : todoItems.map(item => (
              <HStack key={item.id} w="100%" justifyContent="space-between" alignItems="center">
                  <Checkbox aria-label={item.title} isChecked={item.done} />
                  <Text color={item.done ? "coolGray.400" : "gray.50"} fontSize={25} mx={2} strikeThrough={item.done} textAlign="left" width="100%">{item.title}</Text>
              </HStack>
            ))
          }
        </VStack>
      </Box>
    </Center>
  );
};