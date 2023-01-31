import {
  Box,
  Container,
  Flex,
  Icon,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { AiOutlineInstagram } from 'react-icons/ai';
import ScrollDownButton from './ScrollDownButton';

import beans1 from '../assets/beans1.png';
import beans2 from '../assets/beans2.png';

const Hero = () => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          transform: 'rotate(90deg)',
          top: '5%',
          left: -110,
        }}
      >
        <img
          src={beans2}
          style={{
            filter: 'opacity(50%)',
          }}
        />
      </div>
      <img
        src={beans1}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          filter: 'opacity(50%)',
        }}
      />
      <Container sx={{ minWidth: '100vw', minHeight: '100vh' }}>
        <Flex
          paddingTop='10%'
          paddingBottom='10%'
          mx='5%'
          direction={{ base: 'column', md: 'row' }}
          zIndex={5}
        >
          <Box w={{ base: '100%', md: '60%' }}>
            <Heading maxW={{ base: '100%', md: '70%' }} fontSize='5rem'>
              El disfrute <br />
              de un buen cafe
            </Heading>
            <Text fontSize='4xl'>
              Te invitamos a que explores nuestra página, y descubras quienes
              somos
            </Text>
          </Box>
          <Text maxW={{ md: '40%' }} fontSize='4xl' color='#909090'>
            Nuestro cafe es de la mejor calidad, preparado por expertos para que
            vengas, y puedas disfrutar de un una rica taza, acompañada de
            nuestras dulces tortas
          </Text>
        </Flex>
        <Link
          href='https://www.instagram.com/salvatore_roasters/'
          target='_blank'
        >
          <Icon
            sx={{ position: 'absolute', bottom: 5 }}
            as={AiOutlineInstagram}
            boxSize={10}
          />
        </Link>

        <ScrollDownButton />
      </Container>
    </>
  );
};

export default Hero;
