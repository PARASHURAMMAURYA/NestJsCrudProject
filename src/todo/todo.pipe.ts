import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TodoPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
        value.id= value.id + " arrrrrr";
    return value
  }
}
