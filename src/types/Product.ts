export interface ProductType {
    title: string;
    image?: ImageType;
    price: number;
    sale_price:number
}
export interface ImageType {
  name: string
  alternativeText: any
  caption: any
  width: number
  height: number
  formats: any
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
}