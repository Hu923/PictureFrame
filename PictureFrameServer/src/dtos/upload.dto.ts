import { IsString } from 'class-validator';

export class UploadDto {
  @IsString()
  public base64image: string;
}
