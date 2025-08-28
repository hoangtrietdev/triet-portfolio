import React from 'react'
import {
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardBody,
  VStack,
  Text,
  HStack,
  Badge,
  Link,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const MotionBox = motion.div

const ProjectsSection = () => {
  const cardBg = 'gray.800'
  const textColor = 'gray.300'

  const projects = [
    {
      title: 'Study Overseas Roadmap',
      description: 'Engineered a comprehensive study abroad guidance platform using Next.js, TypeScript, and Supabase. Integrated Groq AI API for real-time chatbot assistance across 8 roadmap stages with bilingual support (English/Vietnamese), achieving 99.9% uptime.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Groq AI API', 'React Query'],
      liveUrl: 'https://studyoverseasmap.com/',
    }
  ]

  return (
    <Container maxW="container.xl" py={20} id="projects">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Featured Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card 
                bg={cardBg} 
                shadow="lg" 
                borderRadius="xl" 
                h="full"
                _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
                transition="all 0.3s"
              >
                <CardBody p={8}>
                  <VStack align="stretch" spacing={4} h="full">
                    <Heading as="h3" size="lg" color="blue.300">
                      {project.title}
                    </Heading>
                    
                    <Text color={textColor} fontSize="md" lineHeight="1.6" flex={1}>
                      {project.description}
                    </Text>
                    
                    <VStack spacing={4} align="stretch">
                      <HStack spacing={2} flexWrap="wrap">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            colorScheme="purple" 
                            variant="subtle" 
                            px={2} 
                            py={1} 
                            borderRadius="md"
                            fontSize="xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </HStack>
                      
                      <HStack spacing={4}>
                        <Link 
                          href={project.liveUrl}
                          isExternal
                          color="blue.400"
                          _hover={{ color: 'blue.300' }}
                          fontSize="sm"
                          fontWeight="medium"
                        >
                          <HStack spacing={1}>
                            <Icon as={FiExternalLink} />
                            <Text>Live Demo</Text>
                          </HStack>
                        </Link>
                      </HStack>
                    </VStack>
                  </VStack>
                </CardBody>
              </Card>
            </MotionBox>
          ))}
        </SimpleGrid>
      </MotionBox>
    </Container>
  )
}

export default ProjectsSection
