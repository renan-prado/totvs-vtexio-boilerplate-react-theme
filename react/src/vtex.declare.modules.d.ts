declare module 'vtex.product-context/useProduct' {
  const model: () => import('./Typings/vtex.product-context/react/ProductContextProvider').ProductContextState

  export default model
}

declare module 'vtex.product-context/useProductDispatch' {
  const model: () =>
    | import('react').Dispatch<
        import('./Typings/vtex.product-context/react/ProductContextProvider').Actions
      >

  export default model
}
