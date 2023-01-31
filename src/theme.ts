// 1. Import `extendTheme`
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'Nunito',
      },
    },
  },
});

export default theme;
