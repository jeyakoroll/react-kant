import React, { useState } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

function ArticleList(props) {
  const [articleId, setArticleId] = useState(null)

  const toggleOpenArticle = (articleId) => (ev) => {
    setArticleId(articleId)
  }

  const articleElements = props.articles.map((article) => (
    <li key={article.id}>
      <Article
        article={article}
        isOpen={articleId === article.id}
        toggleOpen={toggleOpenArticle(article.id)}
      />
    </li>
  ))

  return <ul>{articleElements}</ul>
}

export default ArticleList
