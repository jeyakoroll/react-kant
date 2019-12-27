import React from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

import accordion from '../decorators/accordion'

const ArticleList = ({ articles, toggleOpenItem, openItemId }) => {
  const articleElements = articles.map((article) => (
    <li key={article.id}>
      <Article
        article={article}
        isOpen={openItemId === article.id}
        toggleOpenItem={toggleOpenItem}
      />
    </li>
  ))

  return <ul>{articleElements}</ul>
}

export default accordion(ArticleList)
