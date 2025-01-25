import About from '@/components/about'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Specials from '@/components/specials'
import Testimonials from '@/components/testimonials'
import { Box } from '@mui/joy'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Box>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </Box>
  )
}
