import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  Collapse,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const MotionBox = motion(Box)

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: () => void
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      color="gray.300"
      _hover={{ color: 'blue.300' }}
      fontWeight="medium"
      onClick={onClick}
      fontSize="lg"
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)
  
  const navBg = 'rgba(26, 32, 44, 0.8)'
  const borderColor = 'gray.700'

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      w="full"
      zIndex={1000}
      bg={scrolled ? navBg : 'transparent'}
      backdropFilter={scrolled ? 'blur(10px)' : 'none'}
      borderBottom={scrolled ? '1px solid' : 'none'}
      borderColor={borderColor}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        transition: 'all 0.3s ease',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-r, blue.300, purple.400)"
              bgClip="text"
              _hover={{ textDecoration: 'none' }}
            >
              TN
            </Link>
          </MotionBox>

          {/* Desktop Navigation */}
          <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <MotionBox
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <HStack spacing={6}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  >
                    <NavLink href={link.href}>{link.name}</NavLink>
                  </motion.div>
                ))}
              </HStack>
            </MotionBox>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                as={Link}
                href="/images/TrietNgoCV.pdf"
                download="TrietNgoCV.pdf"
                colorScheme="blue"
                variant="outline"
                size="sm"
                _hover={{ textDecoration: 'none', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                Resume
              </Button>
            </motion.div>
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
            colorScheme="blue"
          />
        </Flex>

        {/* Mobile Navigation */}
        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: 'none' }}>
            <VStack spacing={4} align="stretch">
              {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href} onClick={onClose}>
                  {link.name}
                </NavLink>
              ))}
              <Flex justify="space-between" align="center">
                <Button
                  as={Link}
                  href="/images/TrietNgoCV.pdf"
                  download="TrietNgoCV.pdf"
                  colorScheme="blue"
                  variant="outline"
                  size="sm"
                  onClick={onClose}
                  _hover={{ textDecoration: 'none' }}
                >
                  Resume
                </Button>
              </Flex>
            </VStack>
          </Box>
        </Collapse>
      </Container>
    </MotionBox>
  )
}
