import React from 'react'

import { useText } from './SkuSelector.state'

const SkuSelector: StorefrontFC = () => {
  const { text } = useText()

  return <span>{text}</span>
}

export default SkuSelector
