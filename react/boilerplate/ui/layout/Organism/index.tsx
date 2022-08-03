import React from 'react'

import type { IBoilerplateTemplateProps } from '../../../typings'

const App = ({ name, children }: IBoilerplateTemplateProps) => (
  <div className={`o-${name}`}>{children}</div>
)

export default App
