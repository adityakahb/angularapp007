export interface IImage {
  __URL: string;
  __ZOOMURL?: string;
};
export interface IVideo {
  __TYPE: string;
  __URL: string;
};
export interface ISeller {
  __NAME: string;
  __URL: string;
};
export interface IColor {
  __COLORHEX: string;
  __NAME: string;
  __URL: string;
};
export interface ICategory {
  __TYPE: string;
  __URL: string;
};
export interface IPrice {
  __MAJOR: string;
  __MINOR: string;
  __CURRENCY: string;
  __TYPE: string;
}
export interface IProduct {
  __CATEGORY: ICategory;
  __COLOR?: IColor;
  __IMAGES: IImage[];
  __NAME: string;
  __PRICE: IPrice[];
  __SELLER: ISeller;
  __SPECS: string;
  __URL: string;
  __VIDEO?: IVideo[];
  __QUANTITY: Number;
  __REVIEWS: String[];
  _id: string;
};
