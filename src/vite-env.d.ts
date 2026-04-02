/// <reference types="vite/client" />

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "swiper/css" {
  const content: string;
  export default content;
}

declare module "swiper/css/navigation" {
  const content: string;
  export default content;
}

declare module "swiper/css/pagination" {
  const content: string;
  export default content;
}

declare module "yet-another-react-lightbox/plugins/captions" {
  const plugin: any;
  export default plugin;
}

declare module "yet-another-react-lightbox/plugins/thumbnails" {
  const plugin: any;
  export default plugin;
}

declare module "yet-another-react-lightbox/plugins/zoom" {
  const plugin: any;
  export default plugin;
}

declare module "yet-another-react-lightbox/plugins/fullscreen" {
  const plugin: any;
  export default plugin;
}

declare module "yet-another-react-lightbox/plugins/captions.css" {
  const content: string;
  export default content;
}

declare module "yet-another-react-lightbox/plugins/thumbnails.css" {
  const content: string;
  export default content;
}
