// decorator === HOC === Highter Order Component
import React, { useState } from 'react'

export default (OriginalComponents) => (DC) => {
  const [openItemId, setOpenItemId] = useState(null)

  const toggleOpenItem = (openItemId) => {
    setOpenItemId(openItemId)
  }

  return (
    <OriginalComponents
      articles={DC.articles}
      toggleOpenItem={toggleOpenItem}
      openItemId={openItemId}
    />
  )
}
