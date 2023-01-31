import { Box, Icon, Text } from '@chakra-ui/react';
import { BsArrowDownShort } from 'react-icons/bs';

const ScrollDownButton = () => {
  return (
    <Box w='100%' display='flex' flexDirection='column' alignItems='center'>
      <Text color='#909090'>Scroll Down</Text>
      <Icon as={BsArrowDownShort} boxSize={20} />
    </Box>
  );
};

export default ScrollDownButton;
