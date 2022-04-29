import mapper from '../mapper/images';

export type ObjectGeneric = { [x: string]: string | number | null };

const getImages = async (
  produtos_id: number
) => {
  const [images, totalDeImages] = await mapper.getImages(produtos_id)

  return [images, totalDeImages];
}

// const updateImagePath = async (
//   produtos_id: number,
//   alteracoes: ObjectGeneric,
// ) => {
//   await mapper.updateImagePath(produtos_id, alteracoes);

//   const image = await mapper.getProdutoImage(produtos_id);

//   return image;
// }

const updateImage = async (
  produtos_id: number,   
  images: { path: string; },
) => {  
  const [Array, totalDeImages] = await mapper.getImages(produtos_id);

  if(totalDeImages === 0 ) {
    console.log(0);
    return;
  }

  const sucesso = await mapper.updateImage(produtos_id, images);

  return sucesso;
}

export default {
  getImages,  
  updateImage
}