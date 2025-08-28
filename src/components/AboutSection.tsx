import React from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardBody,
  CardHeader,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiJavascript, 
  SiAmazon, 
  SiDocker, 
  SiMysql,
  SiMongodb, 
  SiGit, 
  SiJest, 
  SiNextdotjs, 
  SiNestjs,
  SiAmazondynamodb,
  SiExpress
} from 'react-icons/si'

const MotionBox = motion(Box)

const AboutSection = () => {
  const textColor = 'gray.300'
  const cardBg = 'gray.800'

  const skills = [
    // Frontend
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
    { name: 'NestJS', icon: SiNestjs, color: '#E0234E', category: 'Backend' },
    { name: 'Express', icon: SiExpress, color: '#000000', category: 'Backend' },
    
    // Database
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', category: 'Database' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'DynamoDB', icon: SiAmazondynamodb, color: '#FF9900', category: 'Database' },
    
    // DevOps & Cloud
    { name: 'AWS', icon: SiAmazon, color: '#FF9900', category: 'DevOps & Cloud' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'DevOps & Cloud' },
    
    // Tools
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
    { name: 'Jest', icon: SiJest, color: '#C21325', category: 'Tools' },
  ]

  return (
    <Container maxW="container.xl" py={20} id="about">
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Heading as="h2" size="xl" mb={10} textAlign="center">
          About Me
        </Heading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <VStack align="flex-start" spacing={6}>
            <Text fontSize="lg" color={textColor} lineHeight="1.8">
              I&apos;m a Software Engineer and Technical Architect with 5+ years of experience building scalable 
              web applications and optimizing system architectures. Currently working at ONE Tech Stop Viet Nam, 
              where I design and maintain Design System architecture and lead technical initiatives.
            </Text>
            <Text fontSize="lg" color={textColor} lineHeight="1.8">
              My expertise spans full-stack development with React.js, Node.js, and cloud technologies. 
              I&apos;ve successfully reduced deployment times by 40%, improved test coverage to 90%, and mentored 
              teams to increase productivity by 50%. I&apos;m passionate about security, performance optimization, 
              and building robust systems.
            </Text>
            <Text fontSize="lg" color={textColor} lineHeight="1.8">
              I hold AWS certifications including Solutions Architect Associate and have experience with 
              blockchain technologies, microservices, and DevOps practices. I believe in continuous learning 
              and sharing knowledge with the developer community.
            </Text>
          </VStack>

          <Card bg={cardBg} shadow="xl" borderRadius="xl">
            <CardHeader>
              <Heading size="md" textAlign="center" color={textColor}>Tech Stack</Heading>
            </CardHeader>
            <CardBody>
              <VStack spacing={6}>
                {['Frontend', 'Backend', 'Database', 'DevOps & Cloud', 'Tools'].map((category) => (
                  <Box key={category} w="full">
                    <Heading size="sm" color="blue.300" mb={3} textAlign="center">
                      {category}
                    </Heading>
                    <SimpleGrid columns={3} spacing={4}>
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill, index) => (
                          <MotionBox
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            textAlign="center"
                          >
                            <Icon as={skill.icon} w={8} h={8} color={skill.color} mb={2} />
                            <Text fontSize="xs" fontWeight="medium" color={textColor}>{skill.name}</Text>
                          </MotionBox>
                        ))}
                    </SimpleGrid>
                  </Box>
                ))}
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </MotionBox>
    </Container>
  )
}

export default AboutSection
