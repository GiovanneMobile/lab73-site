export interface GalleryImage {
  src: string; // The preview image source
  fullSrc: string; // The original full-size image source
  alt: string;
  title?: string;
  description?: string;
}

// Importa dinamicamente as imagens originais e os previews
const imageModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,gif,webp}', { 
  eager: true, 
  import: 'default' 
});

const previewModules = import.meta.glob('../assets/gallery/previews/*.{jpg,jpeg,png,gif,webp}', {
  eager: true,
  import: 'default'
});

export const galleryImages: GalleryImage[] = Object.keys(imageModules).map((modulePath) => {
  const filename = modulePath.split('/').pop();
  const previewPath = `../assets/gallery/previews/${filename}`;
  
  // Se o preview existir, usa ele. Se não, faz o fallback pra imagem original
  const previewSrc = previewModules[previewPath] 
    ? previewModules[previewPath] as string 
    : imageModules[modulePath] as string;

  return {
    src: previewSrc,
    fullSrc: imageModules[modulePath] as string,
    alt: "Foto da galeria Lab 73",
    title: "",
    description: ""
  };
});
