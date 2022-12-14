import type { Dispatch } from 'react'
import type { Actions } from './ProductContextProvider'

export declare const ProductDispatchContext: import('react').Context<Dispatch<Actions> | null>
declare function useProductDispatch(): Dispatch<Actions> | null
declare const _default: {
  ProductDispatchContext: import('react').Context<Dispatch<Actions> | null>
  useProductDispatch: typeof useProductDispatch
}
export default _default
