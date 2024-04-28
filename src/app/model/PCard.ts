export interface PCard {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttons: {
    country: {
      imgUrl: string;
      para: string;
    };
    second: string;
    third: string;
  };
  imgUrl: string;
}
