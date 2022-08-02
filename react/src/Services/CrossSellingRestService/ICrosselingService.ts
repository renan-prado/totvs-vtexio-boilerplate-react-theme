import type { Product } from '@typings/vtex/Product'

export interface IImages {
  imageId: string
  imageLabel: string
  imageTag: string
  imageUrl: string
}

export interface ICrossSellingService {
  similars(id: string): Promise<Product[]>
  suggestions(id: string): Promise<Product[]>
  accessories(id: string): Promise<Product[]>
}
