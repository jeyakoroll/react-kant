import React, { useRef, useEffect } from 'react'
import { Select } from 'antd'
import ArticleList from './components/ArticleList'
import ArticleChart from './components/ArticleChart'
import UserForm from './components/UserForm'

import articles from './api/fixtures'

function App() {
  const { Option } = Select

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  return (
    <div className="App">
      <UserForm />
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="select one country"
        defaultValue={['china']}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <Option value="china" label="China">
          <span role="img" aria-label="China">
            🇨🇳
          </span>
          China
        </Option>
        <Option value="usa" label="USA">
          <span role="img" aria-label="USA">
            🇺🇸
          </span>
          USA
        </Option>
        <Option value="japan" label="Japan">
          <span role="img" aria-label="Japan">
            🇯🇵
          </span>
          Japan
        </Option>
        <Option value="korea" label="Korea">
          <span role="img" aria-label="Korea">
            🇰🇷
          </span>
          Korea
        </Option>
      </Select>
      <ArticleList articles={articles} />
      <ArticleChart articles={articles} />
    </div>
  )
}

export default App
