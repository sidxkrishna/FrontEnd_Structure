import { Center, Spinner, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Landing() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/login", { replace: true }), 2400);
  });

  return (
    <Center bg={'gray.50'} flexDir={'column'} height={'100vh'}>
      <Heading marginBottom={'40px'}>Landing Page Content Goes Here </Heading>
      <Spinner />
    </Center>
  );
}