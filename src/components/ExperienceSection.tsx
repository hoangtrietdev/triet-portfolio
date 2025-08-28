import React from 'react'
import {
  Container,
  Heading,
  VStack,
  Card,
  CardBody,
  Flex,
  Text,
  Badge,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.div

const ExperienceSection = () => {
  const cardBg = 'gray.800'
  const textColor = 'gray.300'

  const experiences = [
    {
      title: 'Software Engineer - Technical Architect',
      company: 'ONE Tech Stop Viet Nam',
      period: 'Jul 2024 - Present',
      description: 'Design and maintain overall architecture of Design System project codebase. Migrated testing system to Playwright and Vitest, reducing test pipeline duration threefold. Set up SonarCloud integration achieving 90%+ test coverage. Implemented Dependabot and Google\'s distroless images, eliminating 100% of critical security issues.',
      technologies: ['React', 'TypeScript', 'Playwright', 'Vitest', 'SonarCloud', 'Docker'],
    },
    {
      title: 'Software Engineer',
      company: 'Freelance VNUK',
      period: 'Mar 2024 - Mar 2025',
      description: 'Built core APIs for the university from scratch, reducing data retrieval time by 30%. Led system design and product delivery planning, increasing project completion rate by 40%. Optimized image assets and implemented lazy loading, reducing website loading time by 50%. Mentored a team of three developers.',
      technologies: ['Node.js', 'React', 'TypeScript', 'System Design', 'Performance Optimization'],
    },
    {
      title: 'Software Engineer',
      company: 'mesoneer',
      period: 'Apr 2023 - Jul 2024',
      description: 'Orchestrated Docker implementation, optimizing deployment processes and boosting efficiency by 40%. Restructured legacy codebase from Blaze template into React components, reducing website loading time by 30%. Streamlined cron job code, decreasing system runtime by 20% for 200,000 users.',
      technologies: ['React', 'Docker', 'Node.js', 'MongoDB', 'DevOps', 'Performance Optimization'],
    },
    {
      title: 'Software Engineer',
      company: 'Atherlabs - Sipher',
      period: 'Jan 2022 - Feb 2023',
      description: 'Engineered template repository and UI library with optimized configurations, reducing setup time by 35%. Implemented cron jobs to collect blockchain data in data lake, reducing release time by 30%. Created AWS Lambda functions to stream data from DynamoDB to OpenSearch, improving search functionality by 20%.',
      technologies: ['React', 'AWS Lambda', 'DynamoDB', 'OpenSearch', 'Blockchain', 'Node.js'],
    },
    {
      title: 'Tool and Game Engineer',
      company: 'Gear Game - Riot Games Extension',
      period: 'Apr 2020 - Jan 2022',
      description: 'Maintained and developed new features for Legends of Runeterra across multiple major events. Wrote migration scripts affecting over 1 million users. Recognized with Outstanding performance review. Acted as second key member responsible for releasing features and coordinating large-scale code merges across global teams.',
      technologies: ['Game Development', 'Migration Scripts', 'Global Deployment', 'Performance Optimization'],
    },
  ]

  return (
    <Container maxW="container.xl" py={20} id="experience">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Experience
        </Heading>

        <VStack spacing={8} align="stretch">
          {experiences.map((exp, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card bg={cardBg} shadow="lg" borderRadius="xl" overflow="hidden">
                <CardBody p={8}>
                  <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="flex-start" mb={4}>
                    <VStack align="flex-start" spacing={1}>
                      <Heading as="h3" size="lg" color="blue.300">
                        {exp.title}
                      </Heading>
                      <Text fontSize="xl" fontWeight="semibold" color="purple.300">
                        {exp.company}
                      </Text>
                    </VStack>
                    <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
                      {exp.period}
                    </Badge>
                  </Flex>
                  
                  <Text color={textColor} mb={4} fontSize="lg" lineHeight="1.7">
                    {exp.description}
                  </Text>
                  
                  <HStack spacing={3} flexWrap="wrap">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} colorScheme="purple" variant="subtle" px={2} py={1} borderRadius="md">
                        {tech}
                      </Badge>
                    ))}
                  </HStack>
                </CardBody>
              </Card>
            </MotionBox>
          ))}
        </VStack>
      </MotionBox>
    </Container>
  )
}

export default ExperienceSection
