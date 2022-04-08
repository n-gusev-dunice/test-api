import { IsNumber,} from 'class-validator';

export class PostBadDto {
  @IsNumber()
  status: number;
}
