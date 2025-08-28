import React, { useEffect, useRef, useState, ReactNode } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

interface AnimationProps extends BoxProps {
  children: ReactNode
  delay?: number
}

const SimpleAnimation = ({ children, delay = 0, ...props }: AnimationProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Box
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? 'translateY(0)' : 'translateY(20px)'}
      transition="all 0.6s ease"
      {...props}
    >
      {children}
    </Box>
  )
}

export default SimpleAnimation
