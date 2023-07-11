import { useState, useEffect } from "react";
import { Text, Center, Box, Heading, VStack, Checkbox, HStack, Button } from "native-base";
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

  const handleItemUpdate = (id, done) => {
    const itemUpdate = { id, done: !done };
    fetch(`https://checkov-api-lmkw.web.app/tasks/${user.uid}`, {
      method: "PATCH",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(itemUpdate),
    })
    .then(res => res.json())
    .then(data => {
      setTodoItems(data)
    })
    .catch(alert)
  };

  const handleItemDelete = (id) => {
    const itemDelete = { id };
    fetch(`https://checkov-api-lmkw.web.app/tasks/${user.uid}`, {
      method: "DELETE",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(itemDelete)
    })
    .then(res => res.json())
    .then(data => {
      setTodoItems(data)
    })
    .catch(alert)
  }
  
  return(
    <Center w="100%">
      <Box maxW={300} w="100%">
        <VStack space={4}>
          <TodoHeader user={user} setTodoItems={setTodoItems} />
          {!todoItems
            ? <Text fontSize="lg" color="gray.300" textAlign="center">Loading...</Text>
            : todoItems.map(item => {
              const thisItemId = item.id;
              const thisItemDone = item.done;
              return (
              <HStack key={item.id} w="100%" justifyContent="space-between" alignItems="center">
                  <Checkbox onChange={ () => handleItemUpdate(thisItemId, thisItemDone)} aria-label={item.title} isChecked={item.done} />
                  <Text onPress={ () => handleItemUpdate(thisItemId, thisItemDone)} color={item.done ? "coolGray.400" : "gray.50"} fontSize={25} mx={2} strikeThrough={item.done} textAlign="left" width="50%">{item.title}</Text>
                  <Button colorScheme={"rose"} onPress={ () => handleItemDelete(thisItemId) }>Delete</Button>
              </HStack>
            )})
          }
        </VStack>
      </Box>
    </Center>
  );
};