import React from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// Critical components - load immediately
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

// Non-critical components - lazy load for performance
const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), {
  ssr: false,
  loading: () => null
})

const AboutSection = dynamic(() => import('../components/AboutSection'), {
  loading: () => null
})

const ExperienceSection = dynamic(() => import('../components/ExperienceSection'), {
  loading: () => null
})

const ProjectsSection = dynamic(() => import('../components/ProjectsSection'), {
  loading: () => null
})

const CertificationsSection = dynamic(() => import('../components/CertificationsSection'), {
  loading: () => null
})

const ContactSection = dynamic(() => import('../components/ContactSection'), {
  loading: () => null
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Triet Ngo - Software Engineer & Technical Architect</title>
        <meta name="description" content="Software Engineer and Technical Architect with 5+ years of experience building scalable web applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <ParticleBackground />
      <Navbar />
      
      <Box>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        
        <Box 
          as="footer" 
          py={8} 
          textAlign="center" 
          borderTop="1px solid" 
          borderColor="gray.200" 
          _dark={{ borderColor: 'gray.700' }}
        >
          <Box color="gray.500" fontSize="sm">
            © 2025 Triet Ngo Phu Hoang. Built with Next.js and Chakra UI.
          </Box>
        </Box>
      </Box>
    </>
  )
}
