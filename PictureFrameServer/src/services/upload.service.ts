import * as fs from 'fs';
import * as jimp from 'jimp';
import { UploadDto } from '../dtos/upload.dto';
import HttpException from '../exceptions/HttpException';
import { Upload } from '../interfaces/upload.interface';
import { isEmptyObject } from '../utils/util';

class UploadService {
  public async upload(uploadData: UploadDto): Promise<Upload> {
    if (isEmptyObject(uploadData)) throw new HttpException(400, 'No upload data');

    const { base64image } = uploadData;
    const matches = base64image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);

    if (matches.length !== 3) {
      throw new HttpException(400, 'Invalid upload data');
    }

    const extension = 'jpg';
    const fileName = `image-${Date.now()}.${extension}`;
    const base64Data = base64image.replace(/^data:([A-Za-z-+/]+);base64,/, '');
    const filePath = `./public/images/${fileName}`;

    try {
      fs.writeFileSync(filePath, base64Data, { encoding: 'base64', flag: 'w+' });

      // merge images
      const image = await jimp.read('./public/images/gold-frame.png');
      const imageWidth = image.getWidth();
      const imageHeight = image.getHeight();
      const parrot = await jimp.read(filePath);
      const parrotWidth = parrot.getWidth();
      const parrotHeight = parrot.getHeight();
      if (parrotWidth >= imageWidth || parrotHeight >= imageHeight) {
        image.blit(parrot, 0, 0);
      } else {
        image.blit(parrot, (imageWidth - parrotWidth) / 2, (imageHeight - parrotHeight) / 2);
      }

      image.writeAsync(filePath);
    } catch (e) {
      console.log(e);
      throw new HttpException(400, 'File write failed');
    }

    const createdUploadData: Upload = {
      url: `${process.env.HOST}:${process.env.PORT}/images/${fileName}`,
    };

    return createdUploadData;
  }
}

export default UploadService;
