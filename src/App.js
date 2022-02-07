import styled from 'styled-components'
import Header from './components/Header'
import Hero from './components/Hero'
import Blog from './components/Blog'
import Footer from './components/Footer'
import blogCards from './blogCards'

function App() {
  return (
    <Wrapper className='App'>
      <Header />
      <Hero />
      <BlogWrapper>
        {blogCards.map((item) => (
          <Blog
            key={item.id}
            title={item.title}
            body={item.body}
            image={item.image}
            authorImg={item.authorImg}
            author={item.author}
            authorTitle={item.authorTitle}
          />
        ))}
      </BlogWrapper>
      <Footer />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  max-width: min(90%, 1100px);
  margin: 0 auto;
`

const BlogWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-block: 6rem;
  gap: 3rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
