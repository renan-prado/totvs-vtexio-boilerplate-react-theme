import React from 'react'

import SkuSelector from './SkuSelector.app'
import Context from './Context'
import { COMPONENT_NAME } from './Helper'

const main = () => (
  <Context.Provider value={{ componentName: COMPONENT_NAME }}>
    <div className={`app--${COMPONENT_NAME}`}>
      <SkuSelector />
    </div>
  </Context.Provider>
)

export default main
