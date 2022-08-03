import React from 'react'
import type { IBoilerplateTemplate } from '@typings/boilerplate'
import { Template } from '@boilerplate/ui'

const MainTemplate: StorefrontFC<IBoilerplateTemplate> = ({
  children,
  name,
}) => <Template name={name}>{children}</Template>

export default MainTemplate
