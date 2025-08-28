import React from 'react'
import {
  Container,
  Heading,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.div

const AchievementsSection = () => {
  const cardBg = 'gray.800'
  const textColor = 'gray.300'

  const achievements = [
    {
      number: '90%+',
      label: 'Test Coverage',
      description: 'Implemented SonarCloud integration and achieved over 90% test coverage for Design System project'
    },
    {
      number: '50%',
      label: 'Team Productivity',
      description: 'Mentored teams and improved productivity by 50% through structured learning and leadership'
    },
    {
      number: '40%',
      label: 'Deployment Efficiency',
      description: 'Orchestrated Docker implementation and optimized deployment processes by 40%'
    },
    {
      number: '3x',
      label: 'Testing Speed',
      description: 'Migrated testing system to Playwright and Vitest, reducing pipeline duration threefold'
    }
  ]

  return (
    <Container maxW="container.xl" py={20} id="achievements">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Impact & Achievements
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {achievements.map((achievement, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card bg={cardBg} shadow="lg" borderRadius="xl" textAlign="center" p={6}>
                <CardBody>
                  <VStack spacing={4}>
                    <Heading 
                      size="3xl" 
                      bgGradient="linear(to-r, blue.300, purple.400)" 
                      bgClip="text"
                    >
                      {achievement.number}
                    </Heading>
                    <Heading as="h3" size="md" color="blue.300">
                      {achievement.label}
                    </Heading>
                    <Text color={textColor} fontSize="sm" textAlign="center">
                      {achievement.description}
                    </Text>
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

export default AchievementsSection
