import React from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Link,
  Avatar,
} from '@chakra-ui/react'
import { FiDownload } from 'react-icons/fi'
import SimpleAnimation from './SimpleAnimation'

const HeroSection = () => {
  const textColor = 'gray.300'
  const accentColor = 'blue.300'

  return (
    <Container maxW="container.xl" py={20} minH="90vh" display="flex" alignItems="center">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        w="full"
        gap={10}
      >
        <VStack align="flex-start" spacing={6} flex={1}>
          <SimpleAnimation>
            <Text fontSize="lg" color={accentColor} fontWeight="medium" mb={2}>
              Hi, my name is
            </Text>
            <Heading
              as="h1"
              size="3xl"
              bgGradient="linear(to-r, blue.300, purple.400, pink.300)"
              bgClip="text"
              mb={4}
              fontWeight="bold"
            >
              Triet Ngo Phu Hoang
            </Heading>
            <Heading as="h2" size="2xl" color={textColor} mb={4}>
              Software Engineer - Technical Architect
            </Heading>
            <Text fontSize="xl" color={textColor} maxW="600px" lineHeight="1.6">
              Software Engineer and Technical Architect with 5+ years of experience building scalable web applications 
              and optimizing system architectures. Passionate about mentoring teams and delivering high-performance solutions.
            </Text>
          </SimpleAnimation>

          <SimpleAnimation delay={200}>
            <HStack spacing={4} mt={8}>
              <Button
                as={Link}
                href="/images/TrietNgoCV.pdf"
                download="TrietNgoCV.pdf"
                size="lg"
                colorScheme="blue"
                leftIcon={<Icon as={FiDownload} />}
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
              >
                Download CV
              </Button>
              <Button
                as={Link}
                href="#contact"
                size="lg"
                variant="outline"
                colorScheme="blue"
                _hover={{ transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                Get In Touch
              </Button>
            </HStack>
          </SimpleAnimation>
        </VStack>

        <SimpleAnimation delay={300} flex={1} display="flex" justifyContent="center">
          <Box textAlign="center">
            <Avatar size="2xl" bgGradient="linear(to-r, blue.300, purple.400)" name="Triet Ngo" color="white" />
          </Box>
        </SimpleAnimation>
      </Flex>
    </Container>
  )
}

export default HeroSection
