import React, { memo } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  Icon,
  Badge,
  Link,
} from '@chakra-ui/react'
import { FiExternalLink, FiAward } from 'react-icons/fi'
import IntersectionAnimation from './IntersectionAnimation'


// Memoized card component to prevent unnecessary re-renders
interface Certification {
  title: string
  issuer: string
  description: string
  url: string
  type: string
  color: string
}

interface CertificationCardProps {
  cert: Certification
  cardBg: string
  textColor: string
  borderColor: string
}

interface Language {
  language: string
  proficiency: string
}

interface LanguageCardProps {
  lang: Language
  cardBg: string
  textColor: string
  borderColor: string
}

// Memoized card component to prevent unnecessary re-renders
const CertificationCard = memo(({ cert, cardBg, textColor, borderColor }: CertificationCardProps) => (
  <Card
    bg={cardBg}
    shadow="lg" 
    borderRadius="xl" 
    h="full"
    border="1px"
    borderColor={borderColor}
    _hover={{ 
      transform: 'translateY(-2px)',
      shadow: 'xl',
      transition: 'all 0.2s ease'
    }}
  >
    <CardBody p={6}>
      <VStack align="stretch" spacing={4} h="full">
        <HStack justify="space-between" align="flex-start">
          <Badge colorScheme={cert.color} variant="subtle" px={3} py={1}>
            {cert.type}
          </Badge>
          {cert.url !== '#' && (
            <Link href={cert.url} isExternal>
              <Icon as={FiExternalLink} color="blue.400" />
            </Link>
          )}
        </HStack>
        
        <VStack align="stretch" spacing={2} flex={1}>
          <Heading size="md" fontWeight="bold" lineHeight="1.2" textColor={"blue.300"}>
            {cert.title}
          </Heading>
          <Text color="blue.400" fontWeight="semibold" fontSize="sm">
            {cert.issuer}
          </Text>
          <Text color={textColor} fontSize="sm" lineHeight="1.5">
            {cert.description}
          </Text>
        </VStack>
      </VStack>
    </CardBody>
  </Card>
))

CertificationCard.displayName = 'CertificationCard'

// Memoized language card component
const LanguageCard = memo(({ lang, cardBg, textColor, borderColor }: LanguageCardProps) => (
  <Card bg={cardBg} shadow="md" borderRadius="lg" border="1px" borderColor={borderColor}>
    <CardBody p={5}>
      <VStack spacing={2}>
        <Text fontWeight="bold" fontSize="lg" textColor="blue.300">
          {lang.language}
        </Text>
        <Text color={textColor} fontSize="sm" textAlign="center">
          {lang.proficiency}
        </Text>
      </VStack>
    </CardBody>
  </Card>
))

LanguageCard.displayName = 'LanguageCard'

const CertificationsSection = memo(() => {
  const cardBg = 'gray.800'
  const textColor = 'gray.300'
  const borderColor = 'gray.700'

  return (
    <Container maxW="container.xl" py={20} id="certifications">
      <IntersectionAnimation animationType="fadeUp" duration={400}>
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Certifications & Qualifications
        </Heading>
        <Text fontSize="lg" color={textColor} textAlign="center" mb={10} maxW="600px" mx="auto">
          Professional certifications and language proficiencies
        </Text>

        {/* Certifications */}
        <VStack spacing={10} align="stretch">
          <Box>
            <Heading as="h3" size="lg" mb={6} textAlign="center" color="blue.400">
              <Icon as={FiAward} mr={2} />
              Technical Certifications
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {CERTIFICATIONS.map((cert, index) => (
                <IntersectionAnimation 
                  key={cert.title} 
                  animationType="fadeUp" 
                  delay={index * 50} 
                  duration={400}
                >
                  <CertificationCard
                    cert={cert}
                    cardBg={cardBg}
                    textColor={textColor}
                    borderColor={borderColor}
                  />
                </IntersectionAnimation>
              ))}
            </SimpleGrid>   
          </Box>

          {/* Language Proficiencies */}
          <Box>
            <Heading as="h3" size="lg" mb={6} textAlign="center" color="purple.200">
              Language Proficiencies
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} maxW="600px" mx="auto">
              {LANGUAGES.map((lang, index) => (
                <IntersectionAnimation 
                  key={lang.language} 
                  animationType={index % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                  delay={index * 100}
                  duration={400}
                >
                  <LanguageCard
                    lang={lang}
                    cardBg={cardBg}
                    textColor={textColor}
                    borderColor={borderColor}
                  />
                </IntersectionAnimation>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </IntersectionAnimation>
    </Container>
  )
})

CertificationsSection.displayName = 'CertificationsSection'

// Static data moved outside component to prevent recreation
const CERTIFICATIONS = [
  {
    title: 'Solutions Architect - Associate',
    issuer: 'AWS',
    description: 'AWS Solutions Architect certification demonstrating expertise in designing distributed systems on AWS.',
    url: 'https://www.credly.com/badges/7995f1eb-a60a-42c4-9933-0104de5d033c/public_url',
    type: 'Professional',
    color: 'orange',
  },
  {
    title: 'Technology Architect',
    issuer: 'AWS',
    description: 'Advanced AWS Technology Architect certification for enterprise-level cloud solutions.',
    url: 'https://www.credly.com/badges/126cb0f7-c582-4f2c-b267-b9848b7ee663',
    type: 'Professional',
    color: 'orange',
  },
  {
    title: 'Develop Generative AI solutions with Azure OpenAI Service',
    issuer: 'Microsoft',
    description: 'Microsoft certification for developing AI solutions using Azure OpenAI Service.',
    url: 'https://learn.microsoft.com/api/achievements/share/en-us/hoangtriet/W7FZ547N?sharingId=DEC6239F9D330146',
    type: 'Specialty',
    color: 'blue',
  },
  {
    title: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    description: 'Microsoft Azure AI Fundamentals certification covering AI concepts and Azure AI services.',
    url: 'https://learn.microsoft.com/api/achievements/share/en-us/hoangtriet/45B84H9K?sharingId=DEC6239F9D330146',
    type: 'Fundamentals',
    color: 'blue',
  },
  {
    title: 'Cloud Ambassador',
    issuer: 'AWS Education',
    description: 'AWS Education Cloud Ambassador program recognizing expertise in cloud education.',
    url: '#',
    type: 'Recognition',
    color: 'orange',
  },
]

const LANGUAGES = [
  {
    language: 'Vietnamese',
    proficiency: 'Native proficiency',
  },
  {
    language: 'English',
    proficiency: 'IELTS Academic (6.5) - Full professional proficiency',
  },
]

export default CertificationsSection
