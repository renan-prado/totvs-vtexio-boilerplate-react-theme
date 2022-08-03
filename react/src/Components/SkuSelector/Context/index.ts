import { createContext } from 'react'

import { COMPONENT_NAME } from '../Helper'

export interface IContext {
  componentName: string
}

export default createContext<IContext>({
  componentName: COMPONENT_NAME,
})
