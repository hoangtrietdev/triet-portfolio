import { Box } from '@chakra-ui/react'
import { memo, useEffect, useRef } from 'react'

// Interactive starry background with mouse hover effects
const ParticleBackground = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      
      containerRef.current.style.setProperty('--mouse-x', `${x}%`)
      containerRef.current.style.setProperty('--mouse-y', `${y}%`)
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <Box
      ref={containerRef}
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      pointerEvents="none"
      zIndex={-1}
      overflow="hidden"
      background="linear-gradient(135deg, #2d3748 0%, #1a202c 50%, #0a0a0a 100%)"
      css={{
        '--mouse-x': '50%',
        '--mouse-y': '50%',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(320px circle at var(--mouse-x) var(--mouse-y), rgba(80, 80, 120, 0.6) 0%, rgba(45, 50, 65, 0.3) 40%, transparent 70%),
          radial-gradient(circle at 20% 80%, rgba(45, 45, 45, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(60, 60, 60, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(80, 80, 80, 0.1) 0%, transparent 50%)
        `,
        opacity: 1,
        transition: 'all 0.3s ease',
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          radial-gradient(4px 4px at 20px 30px, rgba(220,220,255,1), transparent),
          radial-gradient(3px 3px at 40px 70px, rgba(255,255,255,0.9), transparent),
          radial-gradient(5px 5px at 90px 40px, rgba(220,220,255,0.8), transparent),
          radial-gradient(3px 3px at 130px 80px, rgba(255,255,255,0.9), transparent),
          radial-gradient(4px 4px at 160px 30px, rgba(220,220,255,0.7), transparent),
          radial-gradient(6px 6px at 200px 60px, rgba(255,255,255,1), transparent),
          radial-gradient(3px 3px at 250px 90px, rgba(220,220,255,0.8), transparent),
          radial-gradient(5px 5px at 300px 20px, rgba(255,255,255,0.9), transparent),
          radial-gradient(4px 4px at 350px 120px, rgba(220,220,255,0.8), transparent),
          radial-gradient(6px 6px at 400px 50px, rgba(255,255,255,1), transparent),
          radial-gradient(3px 3px at 450px 100px, rgba(220,220,255,0.7), transparent),
          radial-gradient(4px 4px at 500px 25px, rgba(255,255,255,0.8), transparent),
          radial-gradient(5px 5px at 550px 80px, rgba(220,220,255,0.9), transparent),
          radial-gradient(3px 3px at 600px 110px, rgba(255,255,255,0.8), transparent),
          radial-gradient(4px 4px at 50px 150px, rgba(220,220,255,0.8), transparent),
          radial-gradient(6px 6px at 150px 200px, rgba(255,255,255,0.9), transparent),
          radial-gradient(3px 3px at 320px 180px, rgba(220,220,255,0.8), transparent),
          radial-gradient(5px 5px at 480px 220px, rgba(255,255,255,1), transparent),
          radial-gradient(4px 4px at 680px 160px, rgba(220,220,255,0.7), transparent),
          radial-gradient(3px 3px at 750px 200px, rgba(255,255,255,0.8), transparent),
          radial-gradient(5px 5px at 100px 300px, rgba(220,220,255,0.9), transparent),
          radial-gradient(4px 4px at 380px 350px, rgba(255,255,255,0.8), transparent),
          radial-gradient(6px 6px at 650px 300px, rgba(220,220,255,1), transparent),
          radial-gradient(3px 3px at 80px 400px, rgba(255,255,255,0.7), transparent),
          radial-gradient(4px 4px at 420px 450px, rgba(220,220,255,0.8), transparent)
        `,
        backgroundSize: '800px 600px',
        animation: 'sparkle 20s linear infinite, twinkle 3s ease-in-out infinite alternate',
      }}
      sx={{
        '@keyframes sparkle': {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(10px, -10px) rotate(120deg)' },
          '66%': { transform: 'translate(-5px, 15px) rotate(240deg)' },
          '100%': { transform: 'translate(0px, 0px) rotate(360deg)' }
        },
        '@keyframes twinkle': {
          '0%': { opacity: 0.6 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.6 }
        }
      }}
    />
  )
})

ParticleBackground.displayName = 'ParticleBackground'

export default ParticleBackground
