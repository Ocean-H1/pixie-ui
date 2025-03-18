import { useOutlet } from 'dumi'
import React from 'react'
import { ThemeProvider } from '@pixie-ui/theme'

const GlobalLayout: React.FC = () => { 
  const outlet = useOutlet()
  return (
    <ThemeProvider>
      {outlet}
    </ThemeProvider>
  )
}

export default GlobalLayout
