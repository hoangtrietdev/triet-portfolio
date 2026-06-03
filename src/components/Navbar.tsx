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
import { useEffect, useState, type MouseEvent } from 'react'

const MotionBox = motion(Box)

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

interface NavLinkProps {
  href: string
  children: React.ReactNode
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  isActive?: boolean
}

const NavLink = ({ href, children, onClick, isActive }: NavLinkProps) => {
  return (
    <Link
      href={href}
      color={isActive ? 'white' : 'gray.300'}
      _hover={{ color: 'white', textDecoration: 'none' }}
      fontWeight="medium"
      onClick={onClick}
      fontSize={{ base: 'md', md: 'sm', lg: 'md' }}
      position="relative"
      display="inline-block"
      py={1}
      px={1}
      _after={{
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: isActive ? '100%' : '0%',
        height: '2px',
        borderRadius: 'full',
        backgroundColor: 'blue.300',
        transition: 'width 0.25s ease',
      }}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navBg = 'rgba(26, 32, 44, 0.8)'
  const borderColor = 'gray.700'

  const scrollToSection = (targetElement: HTMLElement, href: string) => {
    const navElement = document.querySelector('nav')
    const navHeight = navElement?.getBoundingClientRect().height ?? 64
    const offset = navHeight + 12
    const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - offset

    window.history.replaceState(null, '', href)
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1))

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
        threshold: [0.15, 0.3, 0.5, 0.75],
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const targetId = href.slice(1)
    const targetElement = document.getElementById(targetId)

    if (!targetElement) {
      return
    }

    setActiveSection(targetId)
    onClose()
    window.setTimeout(() => {
      scrollToSection(targetElement, href)
    }, 260)
  }

  return (
    <MotionBox
      as="nav"
      position="fixed"
      top={0}
      w="full"
      zIndex={1000}
      bg={{ base: navBg, md: scrolled ? navBg : 'transparent' }}
      backdropFilter={{ base: 'blur(10px)', md: scrolled ? 'blur(10px)' : 'none' }}
      borderColor={borderColor}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        transition: 'all 0.3s ease',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'blur(10px)',
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
          <HStack spacing={4} alignItems="center" display={{ base: 'none', md: 'flex' }}>
            <MotionBox
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <HStack spacing={4}>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  >
                    <NavLink
                      href={link.href}
                      onClick={handleNavClick(link.href)}
                      isActive={activeSection === link.href.slice(1)}
                    >
                      {link.name}
                    </NavLink>
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
                <NavLink
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick(link.href)}
                  isActive={activeSection === link.href.slice(1)}
                >
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
