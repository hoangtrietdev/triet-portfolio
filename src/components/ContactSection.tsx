import React from 'react'
import {
  Container,
  Heading,
  Text,
  VStack,
  Card,
  CardBody,
  Button,
  Link,
  Icon,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

const MotionBox = motion.div

const ContactSection = () => {
  const textColor = 'gray.300'
  const cardBg = 'gray.800'

  return (
    <Container maxW="container.xl" py={20} id="contact">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center' }}
      >
        <Heading as="h2" size="xl" mb={6}>
          Get In Touch
        </Heading>
        
        <Text fontSize="lg" color={textColor} maxW="600px" mx="auto" mb={10} lineHeight="1.6">
          I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat 
          about technology. Feel free to reach out if you&apos;d like to connect!
        </Text>

        <Card bg={cardBg} shadow="xl" borderRadius="xl" maxW="500px" mx="auto">
          <CardBody p={8}>
            <VStack spacing={6}>
              <Button
                as={Link}
                href="mailto:hoangtrietdev@gmail.com"
                size="lg"
                colorScheme="blue"
                leftIcon={<Icon as={FiMail} />}
                w="full"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
              >
                Send Me an Email
              </Button>
              
              <HStack spacing={8}>
                <Button
                  as={Link}
                  href="https://linkedin.com/in/triet-ngo-phu-hoang"
                  variant="ghost"
                  leftIcon={<Icon as={FiLinkedin} />}
                  color="blue.400"
                >
                  LinkedIn
                </Button>
                <Button
                  as={Link}
                  href="https://github.com/hoangtrietdev"
                  variant="ghost"
                  leftIcon={<Icon as={FiGithub} />}
                  color="purple.400"
                >
                  GitHub
                </Button>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      </MotionBox>
    </Container>
  )
}

export default ContactSection
