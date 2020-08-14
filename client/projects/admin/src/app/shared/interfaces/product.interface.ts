export interface IImage {
  url: string;
  zoomurl?: string;
};
interface IVideo {
  type: string;
  url: string;
};
interface ISeller {
  name: string;
  url: string;
};
interface IColor {
  colorhex: string;
  name: string;
  url: string;
};
interface ICategory {
  type: string;
  url: string;
};
interface IPrice {
  major: string;
  minor: string;
  currency: string;
  type: string;
}
export interface IProduct {
  _id: string;
  __NAME: string;
  __PRICE: IPrice[];
  __IMAGES: IImage[];
  __VIDEO?: IVideo[];
  __CATEGORY: ICategory;
  __COLOR?: IColor;
  __SELLER: ISeller;
  __SPECS: string[];
  __URL: string;
};
