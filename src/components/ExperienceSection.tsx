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
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { MdCheckCircle } from 'react-icons/md'

const MotionBox = motion.div

interface Experience {
  title: string
  company: string
  location: string
  period: string
  highlights: string[]
  technologies: string[]
}

const ExperienceSection = () => {
  const cardBg = 'gray.800'
  const textColor = 'gray.300'

  const experiences: Experience[] = [
    {
      title: 'Software Engineer - Technical Architect',
      company: 'ONE Tech Stop Viet Nam',
      location: 'Da Nang, Vietnam',
      period: 'Jul 2024 - Jul 2025',
      highlights: [
        'Architected the company\'s Design System; established Git strategy, release, and hotfix workflows.',
        'Migrated testing to Playwright/Vitest, reducing pipeline duration by 3x compared to Cypress.',
        'Integrated SonarCloud and Dependabot, achieving >90% test coverage and eliminating 100% of critical security issues.',
        'Received an Outstanding Performance Review for contributions.',
      ],
      technologies: ['React', 'TypeScript', 'Playwright', 'Vitest', 'SonarCloud', 'Docker', 'Git'],
    },
    {
      title: 'Software Engineer',
      company: 'mesoneer',
      location: 'Ho Chi Minh, Vietnam',
      period: 'Apr 2023 - Jul 2024',
      highlights: [
        'Reduced API latency by 90% by refactoring core logic and optimizing query planners with strategic indexing (200k users).',
        'Orchestrated Docker implementation, optimizing deployment processes and boosting efficiency by 40%.',
        'Restructured legacy codebase (Blaze template to React components), reducing website loading time by 30%.',
      ],
      technologies: ['React', 'Docker', 'Node.js', 'MongoDB', 'Query Optimization', 'Performance Optimization'],
    },
    {
      title: 'Software Engineer',
      company: 'Atherlabs - Sipher',
      location: 'Ho Chi Minh, Vietnam',
      period: 'Jan 2022 - Feb 2023',
      highlights: [
        'Implemented cron jobs to collect and store blockchain data in the data lake, reducing release time by 30%.',
        'Created AWS Lambda functions to stream data from DynamoDB to OpenSearch, improving search functionality by 20% and saving more than 5000 USD monthly for queries.',
      ],
      technologies: ['React', 'AWS Lambda', 'DynamoDB', 'OpenSearch', 'Blockchain', 'Node.js'],
    },
    {
      title: 'Tool and Game Engineer',
      company: 'Gear Game - Riot Games Extension team',
      location: 'Da Nang, Vietnam',
      period: 'Apr 2020 - Jan 2022',
      highlights: [
        'Developed a critical migration script to resolve data integrity issues for 1 million global accounts affected by network latency.',
        'Built an internal Game Data Version Control system that replaced legacy Excel workflows, resulting in a 30% increase in release speed and successful scale-out to 10+ teams.',
        'Coordinated large-scale code merges (>40,000 files) across global teams for Legends of Runeterra (Riot Games).',
      ],
      technologies: ['Game Development', 'Migration Scripts', 'Version Control Systems', 'Global Deployment'],
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
                      <Text fontSize="sm" color="gray.400">
                        {exp.location}
                      </Text>
                    </VStack>
                    <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
                      {exp.period}
                    </Badge>
                  </Flex>
                  
                  <List spacing={3} mb={4}>
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <ListItem key={highlightIndex} display="flex" alignItems="flex-start">
                        <ListIcon as={MdCheckCircle} color="green.400" mt={1} />
                        <Text color={textColor} fontSize="md" lineHeight="1.6">
                          {highlight}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                  
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
