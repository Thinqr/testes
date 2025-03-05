declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

interface Navigation {
  id: string;
  title: string;
  path: string;
}
