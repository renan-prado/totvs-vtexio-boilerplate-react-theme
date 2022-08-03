import React from 'react'

import type { IBoilerplateTemplateProps } from '../../../typings'

const App = ({ name, children }: IBoilerplateTemplateProps) => (
  <div className={`a-${name}`}>{children}</div>
)

export default App
