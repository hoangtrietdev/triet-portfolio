import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  },
  colors: {
    // Keep Chakra's default colors (including blue)
    blue: {
      50: '#ebf8ff',
      100: '#bee3f8',
      200: '#90cdf4',
      300: '#63b3ed',
      400: '#4299e1',
      500: '#3182ce',
      600: '#2b77cb',
      700: '#2c5aa0',
      800: '#2a4365',
      900: '#1a365d',
    },
  },
  styles: {
    global: {
      body: {
        bg: '#0a0a0a',
        color: '#e2e8f0',
        fontSize: '16px',
        lineHeight: '1.6',
      },
      '*::placeholder': {
        color: 'gray.600',
      },
      '*, *::before, &::after': {
        borderColor: 'gray.700',
        wordWrap: 'break-word',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: '6px',
      },
      sizes: {
        sm: {
          fontSize: 'sm',
          px: 4,
          py: 3,
        },
        md: {
          fontSize: 'md',
          px: 6,
          py: 4,
        },
      },
      variants: {
        ghost: {
          color: 'blue.200',
          _hover: {
            bg: 'blue.900',
          },
        },
        solid: {
          bg: 'blue.200',
          color: 'gray.900',
          _hover: {
            bg: 'blue.300',
          },
        },
        outline: {
          color: 'blue.200',
          borderColor: 'blue.200',
          _hover: {
            bg: 'blue.900',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: 'blue.200',
        _hover: {
          textDecoration: 'none',
          color: 'blue.300',
        },
      },
    },
  },
})

export default theme
