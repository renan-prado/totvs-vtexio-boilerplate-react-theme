import type { ReactNode } from 'react'
import React from 'react'

const MainTemplate: StorefrontFC<{ children: ReactNode }> = ({ children }) => (
  <div className="t-main">{children}</div>
)

export default MainTemplate
