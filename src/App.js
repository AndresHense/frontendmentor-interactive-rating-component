import './App.css';
import {
  Stack,
  HStack,
  Button,
  Text,
  useRadioGroup,
  Center,
  Circle,
} from '@chakra-ui/react';
import { useState } from 'react';
import SubmitedSVG from './svgs/SubmitedSVG';
import RadioCard from './components/RadioCard';
import StarSVG from './svgs/StarSVG';

function App() {
  const options = ['1', '2', '3', '4', '5'];
  const [showThanks, setShowThanks] = useState(false);

  const [rating, setRating] = useState('1');

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'radio',
    defaultValue: '1',
    onChange: setRating,
    value: rating,
  });

  const group = getRootProps();

  const handleSubmit = () => {
    setShowThanks(true);
  };

  const handleReturn = () => {
    setShowThanks(false);
  };

  return (
    <Center bg='#141519' height='100vh'>
      <Stack
        color='white'
        bg='#1f2630'
        width={{ base: '90%', md: '65%', lg: '27%' }}
        height={{ base: '80%', md: '65%', lg: '50%' }}
        m='2rem'
        p='3rem'
        py='3rem'
        borderRadius='2rem'
      >
        {!showThanks && (
          <>
            <Circle bg='#262f38' my='0.4rem' width='40px' height='40px'>
              <StarSVG />
            </Circle>
            <Text fontSize='3xl' fontWeight='bold' as='h1'>
              How did we do?
            </Text>
            <Text fontSize='md' color='gray.400' as='p'>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </Text>
            <HStack {...group}>
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {value}
                  </RadioCard>
                );
              })}
            </HStack>
            <Button
              onClick={handleSubmit}
              bg='#fc7613'
              borderRadius='3rem'
              _hover={{
                bg: 'white',
                color: '#fc7613',
              }}
            >
              Submit
            </Button>
          </>
        )}
        {showThanks && (
          <>
            <Center>
              <Stack>
                <SubmitedSVG />
                <Text color='#fc7613' bg='#262f38' borderRadius='0.3rem'>
                  You selected {rating} out of 5
                </Text>
              </Stack>
            </Center>

            <Text fontSize='4xl' align='center' as='h1'>
              Thank You!
            </Text>
            <Text as='p' fontSize='lg' color='gray.400' align='center'>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </Text>
            <Button
              onClick={handleReturn}
              bg='#fc7613'
              borderRadius='3rem'
              _hover={{
                bg: 'white',
                color: '#fc7613',
              }}
            >
              Go Back
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
}

export default App;
