import './App.css';
import {
  Stack,
  Box,
  HStack,
  Button,
  Text,
  useRadio,
  useRadioGroup,
  Circle,
  Center,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';
import SubmitedSVG from './SubmitedSVG';

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as='label'>
      <input {...input} />
      <Circle
        {...checkbox}
        cursor='pointer'
        bg='#262f38'
        boxShadow='md'
        _checked={{
          bg: '#fc7613',
          color: 'white',
          borderColor: '#fc7613',
        }}
        _hover={{
          bg: '#7c8799',
        }}
        px={6}
        py={4}
        mx={2}
        my={2}
      >
        {props.children}
      </Circle>
    </Box>
  );
}

function App() {
  const options = ['1', '2', '3', '4', '5'];
  const [showModal, setShowModal] = useState(false);

  const [rating, setRating] = useState('1');

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'radio',
    defaultValue: '1',
    onChange: setRating,
    value: rating,
  });

  const group = getRootProps();

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleReturn = () => {
    setShowModal(false);
  };
  return (
    <Center bg='#141519' height='100vh'>
      <Stack
        color='white'
        bg='#1f2630'
        width='27%'
        height='50%'
        m='1rem'
        my='1.5rem'
        p='3rem'
        borderRadius='2rem'
      >
        {!showModal && (
          <>
            <Icon
              viewBox='0 0 20 20'
              boxSize={8}
              bg='#262d37'
              borderRadius='lg'
              my='1rem'
              p='3px'
            >
              <path
                fill='#FC7614'
                d='m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z'
              />
            </Icon>
            <Text fontSize='4xl' fontWeight='bold' as='h1'>
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
        {showModal && (
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
