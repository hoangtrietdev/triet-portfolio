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
import { FiExternalLink } from 'react-icons/fi'

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
    },
    {
      title: 'Organ Insight 3D',
      description: 'Developed an advanced medical imaging platform using Three.js, TypeScript, and Groq AI API. Implemented X-ray image scanning with AI-powered health status analysis and interactive 3D organ visualization, providing real-time diagnostic insights and immersive 3D model rendering for enhanced medical understanding.',
      technologies: ['Three.js', 'TypeScript', 'Groq AI API', 'Next.js', 'WebGL'],
      liveUrl: 'https://organ-insight3-d.vercel.app/',
    },
    {
      title: 'Parallel Analyzer',
      description: 'Built an intelligent code analysis tool using C++, LLVM, Python, and React. Implemented a sophisticated 6-phase hybrid strategy with Groq AI API and OpenMP integration to automatically detect parallelizable code sections, analyze dependencies, and suggest optimization opportunities for high-performance computing applications.',
      technologies: ['C++', 'LLVM', 'Python', 'React', 'TypeScript', 'Groq AI API', 'OpenMP'],
      liveUrl: 'https://parallel-analyzer.duckdns.org/',
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
