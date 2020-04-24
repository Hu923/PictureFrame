import { NextFunction, Request, Response } from 'express';
import { UploadDto } from '../dtos/upload.dto';
import { Upload } from '../interfaces/upload.interface';
import uploadService from '../services/upload.service';

class IndexController {
  public uploadService = new uploadService();

  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        message: 'this is working now',
      });
    } catch (error) {
      next(error);
    }
  }

  public upload = async (req: Request, res: Response, next: NextFunction) => {
    const uploadData: UploadDto = req.body;

    try {
      const uploadImageData: Upload = await this.uploadService.upload(uploadData);
      res.status(200).json({ url: uploadImageData.url, message: 'uploaded' });
    } catch (error) {
      next(error);
    }
  }
}

export default IndexController;
