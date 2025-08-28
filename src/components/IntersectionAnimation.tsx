import { useEffect, useRef, useState, ReactNode } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

interface IntersectionAnimationProps extends BoxProps {
  children: ReactNode
  animationType?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'fade'
  delay?: number
  duration?: number
}

// Lightweight alternative to Framer Motion for critical sections
const IntersectionAnimation = ({
  children,
  animationType = 'fadeUp',
  delay = 0,
  duration = 300,
  ...props
}: IntersectionAnimationProps) => {
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
      { threshold: 0.1, rootMargin: '-50px' }
    )

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [delay])

  const getAnimationStyle = () => {
    const baseStyle = {
      transition: `all ${duration}ms cubic-bezier(0.4, 0.0, 0.2, 1)`,
      willChange: 'transform, opacity',
    }

    if (!isVisible) {
      switch (animationType) {
        case 'fadeUp':
          return { ...baseStyle, opacity: 0, transform: 'translateY(20px)' }
        case 'fadeLeft':
          return { ...baseStyle, opacity: 0, transform: 'translateX(-20px)' }
        case 'fadeRight':
          return { ...baseStyle, opacity: 0, transform: 'translateX(20px)' }
        case 'fade':
          return { ...baseStyle, opacity: 0 }
        default:
          return { ...baseStyle, opacity: 0, transform: 'translateY(20px)' }
      }
    }

    return { ...baseStyle, opacity: 1, transform: 'translate(0, 0)' }
  }

  return (
    <Box ref={ref} style={getAnimationStyle()} {...props}>
      {children}
    </Box>
  )
}

export default IntersectionAnimation
