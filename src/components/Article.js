import React, { useRef, useEffect } from 'react'

function Article({ article, isOpen, toggleOpenItem }) {
  const titleRef = useRef()

  useEffect(() => {
    console.log('---', 'rendering', titleRef.current)
  })

  const handleBtnClick = () => toggleOpenItem(article.id)

  return (
    <div>
      <div>
        <h3 ref={titleRef}>{article.title}</h3>
        <button onClick={handleBtnClick}>{isOpen ? 'close' : 'open'}</button>
      </div>
      {isOpen && <section>{article.text}</section>}
    </div>
  )
}

export default Article
