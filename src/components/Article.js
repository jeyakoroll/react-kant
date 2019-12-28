import React from 'react'

function Article({ article, isOpen, toggleOpenItem }) {
  const handleBtnClick = (ev) => {
    if (ev.target.innerText === 'open') {
      toggleOpenItem(article.id)
    } else {
      toggleOpenItem(null)
    }
  }

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
