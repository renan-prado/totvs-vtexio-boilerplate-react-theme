import type { FC } from 'react'
import type { MaybeProduct, Item } from './ProductTypes'

export interface ProductAndQuery {
  query: Record<string, any>
  product: MaybeProduct
}
declare type GroupId = string
export interface AssemblyOptionItem {
  id: string
  quantity: number
  seller: string
  initialQuantity: number
  choiceType: string
  name: string
  price: number
  children: Record<string, AssemblyOptionItem[]> | null
}
export interface BuyButtonContextState {
  clicked: boolean
}
export interface SkuSelectorContextState {
  selectedImageVariationSKU: string | null
  isVisible: boolean
  areAllVariationsSelected: boolean
}
export interface ProductContextState {
  loadingItem: boolean
  selectedItem?: Item | null
  product: MaybeProduct
  selectedQuantity: number
  skuSelector: SkuSelectorContextState
  buyButton: BuyButtonContextState
  assemblyOptions: {
    items: Record<GroupId, AssemblyOptionItem[]>
    inputValues: Record<GroupId, InputValues>
    areGroupsValid: Record<GroupId, boolean>
  }
}
declare type InputValues = Record<string, string>
declare type Action<K, V = void> = V extends void
  ? {
      type: K
    }
  : {
      type: K
    } & V
export declare type Actions =
  | Action<
      'SELECT_IMAGE_VARIATION',
      {
        args: {
          selectedImageVariationSKU: string | null
        }
      }
    >
  | Action<
      'SET_QUANTITY',
      {
        args: {
          quantity: number
        }
      }
    >
  | Action<
      'SKU_SELECTOR_SET_VARIATIONS_SELECTED',
      {
        args: {
          allSelected: boolean
        }
      }
    >
  | Action<
      'SET_BUY_BUTTON_CLICKED',
      {
        args: {
          clicked: boolean
        }
      }
    >
  | Action<
      'SKU_SELECTOR_SET_IS_VISIBLE',
      {
        args: {
          isVisible: boolean
        }
      }
    >
  | Action<
      'SET_SELECTED_ITEM',
      {
        args: {
          item: Item | undefined | null
        }
      }
    >
  | Action<
      'SET_ASSEMBLY_OPTIONS',
      {
        args: {
          groupId: string
          groupItems: AssemblyOptionItem[]
          groupInputValues: InputValues
          isValid: boolean
        }
      }
    >
  | Action<
      'SET_PRODUCT',
      {
        args: {
          product: MaybeProduct
        }
      }
    >
  | Action<
      'SET_LOADING_ITEM',
      {
        args: {
          loadingItem: boolean
        }
      }
    >
declare const ProductContextProvider: FC<ProductAndQuery>
export default ProductContextProvider
