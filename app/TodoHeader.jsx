import { Input, Button, HStack } from "native-base"
import { useState } from "react"


export default function TodoHeader({ setTodoItems, user }) {

  const [newItem, setNewItem] = useState("");

  const addNewItem = () => {
    if(!newItem) return

    const newTodoItem = {
      uid: user.uid,
      title: newItem,
    };

    fetch(`https://checkov-api-lmkw.web.app/tasks/${user.uid}`, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newTodoItem),
    }) 
      .then(res => res.json())
      .then(setTodoItems)
      .catch(alert)
      .finally(() => setNewItem(""))

  };

  return(
    <HStack space={2}>
      <Input value={newItem} onChangeText={setNewItem} size="lg" color="coolGray.200" flex={1} placeholder="Add Task" />
      <Button colorScheme="amber" onPress={addNewItem}>Add</Button>
    </HStack>
  );
};