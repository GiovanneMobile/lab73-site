export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

// Importa dinamicamente todas as imagens do diretório (suporta jpg, jpeg, png, gif, webp)
// O Vite vai resolver as URLs no build e no dev server automaticamente.
const imageModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,gif,webp}', { 
  eager: true, 
  import: 'default' 
});

export const galleryImages: GalleryImage[] = Object.values(imageModules).map((modulePath) => {
  return {
    src: modulePath as string,
    alt: "Foto da galeria Lab 73",
    title: "",
    description: ""
  };
});
