export type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  duration: string;
  image: string;
};

export type Package = {
  id: string;
  name: string;
  description: string;
  price: string;
  items: string[];
  featured?: boolean;
};