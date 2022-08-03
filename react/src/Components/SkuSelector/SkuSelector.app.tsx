import React from 'react'

import { useText } from './SkuSelector.state'

const SkuSelector: StorefrontFC = () => {
  const { text } = useText()

  return <>{text}</>
}

export default SkuSelector
