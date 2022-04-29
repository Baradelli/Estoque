import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Image from '../models/Images';
import service from '../service/images';
import * as Yup from 'yup';

interface Imagem {
  path: string
}

/*  _____________________________________
    | req.params = |  'url/:params'     |
    | req.query =  | 'url/?query&query' |
    | req.body =   | JSON               |
    |______________|____________________|
 */

const getImages = async (req: Request, res: Response) => {
  const imagesRepository = getRepository(Image);

  const images = await imagesRepository.find();

  return res.json(images);
}

const getImageByProdutoID = async (req: Request, res: Response) => {
  const { produtos_id } = req.params;

  const [image, totalDeImages] = await service.getImages(Number(produtos_id))

  return res.json({image, totalDeImages})
}

// const updateImage = async (req: Request, res: Response) => {
//   const { produtos_id } = req.params;

//   const imageAlterada = await service.updateImagePath(Number(produtos_id), req.body)
  
//   return res.json(imageAlterada)
// }

const updateImage = async (req: Request, res: Response) => {
  const { produtos_id } = req.params;    

  const requestImages = req.files as Express.Multer.File[];
  const images = requestImages.map(image => {
    return {path: image.filename};
  })

  const image = images.shift();

  const sucesso = await service.updateImage(Number(produtos_id), image as Imagem);
 
  return res.json(`${sucesso}Sucesso!`);
}

const postImage = async (req: Request, res: Response) => {
    const ImageRepository = getRepository(Image);
  
    const image = ImageRepository.create([{
      path: "1642622227501-image_0.jpg",
      produto: 64
    }]);
  
    await ImageRepository.save(image);

    return res.json(image);
  }

export default {
  getImages,
  getImageByProdutoID,
  updateImage,
  postImage
}