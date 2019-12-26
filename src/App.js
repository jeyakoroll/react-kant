import React from 'react'
import ArticleList from './components/ArticleList'
import articles from './fixtures'

function App() {
  return (
    <div className="App">
      <ArticleList articles={articles} />
    </div>
  )
}

export default App
