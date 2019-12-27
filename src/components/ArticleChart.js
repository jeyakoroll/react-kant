import React, { useRef, useEffect } from 'react'
// import d3 from 'd3'

const ArticleChart = (props) => {
  const chartUsesD3 = useRef()

  useEffect(() => {
    setContainerRef(chartUsesD3)
  }, [])

  const setContainerRef = (ref) => {
    if (ref) {
      console.log('use d3 chart')
      // do some chart uses d3
    } else {
      console.log('don t use d3')
    }
  }

  return <div ref={chartUsesD3}></div>
}

export default ArticleChart
