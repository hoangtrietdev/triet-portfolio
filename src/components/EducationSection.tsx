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
  Link,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { MdCheckCircle } from 'react-icons/md'

const MotionBox = motion.div

interface Achievement {
  text: string
  subtext?: string
  date?: string
  link?: string
}

interface Education {
  degree: string
  school: string
  period: string
  location: string
  gpa?: string
  achievements: Achievement[]
}

const EducationSection = () => {
  const cardBg = 'gray.800'
  const textColor = 'gray.300'

  const education: Education[] = [
    {
      degree: 'Master of Technology - Software Engineering and Digital Transformation',
      school: 'ESIGELEC',
      period: 'Feb 2026 - Present',
      location: 'France',
      achievements: [],
    },
    {
      degree: 'MSc in Computer Science and Engineering',
      school: 'University of Pécs',
      period: 'Sep 2025 - Feb 2026',
      location: 'Hungary',
      gpa: '4.5/5',
      achievements: [
        {
          text: 'Presenter & Author | 21st Miklos Ivanyi International PhD and DLA Symposium',
          subtext: 'Paper (No. 64): Trustworthy Parallelization Recommendations Through Multi-Layer Validation',
          date: 'Oct 2025',
        },
        {
          text: 'Grant Recipient | UP FEIT Scholarship for Scientific and Art Projects',
          date: '2025',
        },
        {
          text: 'Project Lead: LLVM Analyzer with LLM',
          subtext: 'Robert Bosch TMDK Scholarship Winner',
          link: 'https://github.com/hoangtrietdev/llvm-analyze',
        },
        {
          text: 'Project Lead: Healthcare Application with VR and AR',
          link: 'https://organ-insight3-d.vercel.app/',
        },
      ],
    },
    {
      degree: 'Bachelor in Computer Science and Engineering',
      school: 'University of Da Nang, VNUK',
      period: 'Sep 2016 - Apr 2021',
      location: 'Vietnam',
      gpa: '3.38/4',
      achievements: [
        {
          text: 'Received maximum GPA (4.0) in the Graduation Project',
        },
        {
          text: 'Worked as a teaching assistant',
        },
        {
          text: 'AWS Cloud Ambassador',
          subtext: 'Organized many workshops to share information about AWS cloud services',
        },
      ],
    },
  ]

  return (
    <Container maxW="container.xl" py={20} id="education">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          Education
        </Heading>

        <VStack spacing={8} align="stretch">
          {education.map((edu, index) => (
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
                        {edu.degree}
                      </Heading>
                      <Text fontSize="xl" fontWeight="semibold" color="purple.300">
                        {edu.school}
                      </Text>
                      {edu.gpa && (
                        <Badge colorScheme="green" fontSize="md" px={3} py={1} borderRadius="md">
                          GPA: {edu.gpa}
                        </Badge>
                      )}
                    </VStack>
                    <VStack align={{ base: 'flex-start', md: 'flex-end' }} spacing={1}>
                      <Badge colorScheme="blue" fontSize="sm" px={3} py={1} borderRadius="full">
                        {edu.period}
                      </Badge>
                      <Text fontSize="sm" color={textColor}>
                        {edu.location}
                      </Text>
                    </VStack>
                  </Flex>

                  {edu.achievements.length > 0 && (
                    <List spacing={3} mt={4}>
                      {edu.achievements.map((achievement, achIndex) => (
                        <ListItem key={achIndex} display="flex" alignItems="flex-start">
                          <ListIcon as={MdCheckCircle} color="green.400" mt={1} />
                          <VStack align="flex-start" spacing={1} flex={1}>
                            <HStack spacing={2} flexWrap="wrap">
                              {achievement.link ? (
                                <Link href={achievement.link} isExternal color="blue.400" _hover={{ color: 'blue.300' }}>
                                  <HStack spacing={1}>
                                    <Text fontWeight="semibold">{achievement.text}</Text>
                                    <Icon as={FiExternalLink} boxSize={3} />
                                  </HStack>
                                </Link>
                              ) : (
                                <Text color={textColor} fontWeight="semibold">
                                  {achievement.text}
                                </Text>
                              )}
                              {achievement.date && (
                                <Badge colorScheme="purple" variant="subtle" fontSize="xs">
                                  {achievement.date}
                                </Badge>
                              )}
                            </HStack>
                            {achievement.subtext && (
                              <Text color={textColor} fontSize="sm" pl={0}>
                                {achievement.subtext}
                              </Text>
                            )}
                          </VStack>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </CardBody>
              </Card>
            </MotionBox>
          ))}
        </VStack>
      </MotionBox>
    </Container>
  )
}

export default EducationSection
