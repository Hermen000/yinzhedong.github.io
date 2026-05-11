import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Internship from './components/sections/Internship/Internship';
import Extracurricular from './components/sections/Extracurricular/Extracurricular';
import Portfolio from './components/sections/Portfolio/Portfolio';
import ScrollReveal from './components/ui/ScrollReveal/ScrollReveal';

function App() {
  return (
    <Layout>
      <Hero />
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Internship /></ScrollReveal>
      <ScrollReveal><Extracurricular /></ScrollReveal>
      <ScrollReveal><Portfolio /></ScrollReveal>
    </Layout>
  );
}

export default App;
