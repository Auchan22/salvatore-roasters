import { Box, Button, Flex, Heading, HStack, Link } from '@chakra-ui/react';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const el = navRef.current;
    gsap.set(el, { opacity: 0 });
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        ease: Power3.easeIn,
        transitionDuration: '250ms',
        scrollTrigger: {
          trigger: '#navbar',
          start: 'top top',
          scrub: true,
          pin: true,
          end: '+=120',
        },
      },
    );
  }, []);

  return (
    <Flex
      minWidth='100vw'
      bg='#fff'
      minHeight='80px'
      position='fixed'
      alignItems='center'
      zIndex='10000'
      justifyContent='space-around'
      ref={navRef}
      id='#navbar'
    >
      <Heading>Salvatore Roasters</Heading>
      <HStack>
        <Link>Home</Link>
        <Link>Nosotros</Link>
        <Link>Contacto</Link>
      </HStack>
      <Button>mENU</Button>
    </Flex>
  );
};

export default Navbar;
