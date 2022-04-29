import { getManager, getRepository } from 'typeorm';
import Image from '../models/Images';
import Produtos from '../models/Produtos';

export type ObjectGeneric = { [x: string]: string | number | null };

const getImages = async (
  produtos_id: number
) => {
  const ImagesRepository = getRepository(Image)

  const query = ImagesRepository
  .createQueryBuilder()
  .where('produtos_id = :produtos_id', { produtos_id })

  const [images, totalDeImages] = await query.getManyAndCount();  

  return [images, totalDeImages];
}

// const updateImagePath = async (
//   produtos_id: number,
//   alteracoes: ObjectGeneric,
// ): Promise<void> => getManager()  
//   .transaction(async (transaction) => {
//     await transaction
//       .createQueryBuilder()
//       .update(Image)
//       .set(alteracoes)
//       .where('produtos_id = :produtos_id', { produtos_id })
//       .execute();
//   });

const updateImage = async (
  produtos_id: number,
  alteracoes: ObjectGeneric,
): Promise<void> => getManager()  
  .transaction(async (transaction) => {
    await transaction
      .createQueryBuilder()
      .update(Image)
      .set(alteracoes)
      .where('produtos_id = :produtos_id', { produtos_id })
      .execute();      

      return;
  });


const getProdutoImage = async (
  produtos_id: number,
) => {
  const ProdutoImageRepository = getRepository(Produtos)

  const ProdutoImage = await ProdutoImageRepository.findOne({
    where: { id: produtos_id },
    relations: ['images'],
  });

  return ProdutoImage;
}

export default {
  getImages,
  getProdutoImage,
  updateImage
}
