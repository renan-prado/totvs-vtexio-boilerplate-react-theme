import { useState, useEffect } from 'react'
import { CrossSellingRestService as CrossSellingService } from '@services'
import type { Product } from '@typings/vtex/Product'
import type { ICrossSellingService } from '@services/CrossSellingRestService/ICrosselingService'

const crossSellingService: ICrossSellingService = new CrossSellingService()

type CrossSellingTypes = 'accessories' | 'similars' | 'suggestions'

export default function useCrossSelling(
  type: CrossSellingTypes,
  productId: string
): [Product[], boolean] {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getSimilars() {
      setLoading(true)
      let items = []

      switch (type) {
        case 'accessories':
          items = await crossSellingService.accessories(productId)
          if (items && items.length > 0) setProducts(items)
          break

        case 'similars':
          items = await crossSellingService.similars(productId)
          if (items && items.length > 0) setProducts(items)
          break

        case 'suggestions':
          items = await crossSellingService.suggestions(productId)
          if (items && items.length > 0) setProducts(items)
          break

        default:
          items = await crossSellingService.similars(productId)
          if (items && items.length > 0) setProducts(items)
          break
      }

      setLoading(false)
    }

    getSimilars()
  }, [crossSellingService])

  return [products, loading]
}
