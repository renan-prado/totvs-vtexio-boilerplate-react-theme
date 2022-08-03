import React from 'react'

import type { IBoilerplateTemplateProps } from '../../../typings'

const App = ({ name, children }: IBoilerplateTemplateProps) => (
  <section className={`app-${name}`}>{children}</section>
)

export default App
