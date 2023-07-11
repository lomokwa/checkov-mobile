import { useState } from "react";
import { Text, Center, Box, Heading, VStack, FormControl, Input, Button } from "native-base";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./fbConfig";


export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        setUser(res.user)
      })
      .catch(err => alert(err.message))
  };

  return(
      <Center w="100%">
        <Box safeArea px={2} py={8} w="90%" maxW={290}>
          <Heading size="lg" fontWeight={600} color="gray.50">
            Welcome
          </Heading>
          <Heading mt={1} color="gray.300" fontWeight="medium" size="xs">
            Sign in to continue.
          </Heading>
          <VStack space={3} mt={5}>
            <FormControl isRequired>
              <FormControl.Label>Email</FormControl.Label>
              <Input onChangeText={setEmail} size="lg" color="gray.300" keyboardType="email-address" placeholder="example@email.com" />
            </FormControl>
            <FormControl isRequired>
            <FormControl.Label>Password</FormControl.Label>
              <Input onChangeText={setPassword} size="lg" color="gray.300" type="password" placeholder="********"/>
            </FormControl>
            <Button onPress={handleLogin} mt={3} colorScheme="amber">
              Sign In
            </Button>
          </VStack>
        </Box>
      </Center>
  );
};