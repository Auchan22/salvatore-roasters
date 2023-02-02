import { Box, Container, Flex, VStack } from '@chakra-ui/react';
import React from 'react';

const ImageGrid = () => {
  return (
    <Container
      sx={{
        maxWidth: '100vw',
        minHeight: '100vh',
        position: 'relative',
        scrollSnapAlign: 'start',
      }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        minWidth='100%'
        minHeight='100vh'
        gap='10%'
        alignItems='center'
        justifyContent='center'
      >
        <VStack spacing='20%'>
          <Box width='240px' height='240px' bg='#909090' borderRadius='10px'>
            1
          </Box>
          <Box width='240px' height='240px' bg='#909090' borderRadius='10px'>
            2
          </Box>
        </VStack>
        <VStack alignItems='center' justifyContent='center'>
          <Box width='400px' height='400px' bg='#909090' borderRadius='10px'>
            3
          </Box>
        </VStack>
        <VStack spacing='20%'>
          <Box width='240px' height='240px' bg='#909090' borderRadius='10px'>
            4
          </Box>
          <Box width='240px' height='240px' bg='#909090' borderRadius='10px'>
            5
          </Box>
        </VStack>
      </Flex>
    </Container>
  );
};

export default ImageGrid;
