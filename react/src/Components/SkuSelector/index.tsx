import React from 'react'
import { App } from '@boilerplate/ui'

import SkuSelector from './SkuSelector.app'
import { MainTemplate } from './Components/Templates'
import { componentName } from './Helper'

const main = () => (
  <App name={componentName()}>
    <MainTemplate name="name">
      <SkuSelector />
    </MainTemplate>
  </App>
)

export default main
