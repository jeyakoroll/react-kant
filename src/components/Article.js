import React from 'react'

function Article({ article, isOpen, toggleOpenItem }) {
  console.log('---', 'rendering')

  const handleBtnClick = () => toggleOpenItem(article.id)

  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <button onClick={handleBtnClick}>{isOpen ? 'close' : 'open'}</button>
      </div>
      {isOpen && <section>{article.text}</section>}
    </div>
  )
}

export default Article
