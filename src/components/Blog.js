import React from 'react'
import styled from 'styled-components'

function Blog({ id, title, body, image, authorImg, author, authorTitle }) {
  return (
    <BlogArticle>
      <img src={image} alt='' />
      <h2>{title}</h2>
      <p>{body}</p>
      <BlogAuthor>
        <img src={authorImg} alt='Spencer' />
        <BlogAuthorTitle>
          <p>{author}</p>
          <small>{authorTitle}</small>
        </BlogAuthorTitle>
      </BlogAuthor>
    </BlogArticle>
  )
}

export default Blog

const BlogArticle = styled.article`
  h2 {
    margin-block: 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    color: #777;
    line-height: 1.7;
  }
`
const BlogAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  img {
    width: 3rem;
  }
`
const BlogAuthorTitle = styled.div`
  p:nth-child(1) {
    font-size: 14px;
    color: black;
    font-weight: 600;
    line-height: 1.3;
  }

  small {
    color: #777;
  }
`
