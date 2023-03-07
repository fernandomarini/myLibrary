import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeBooks'
})
export class PipeBooksPipe implements PipeTransform {

  transform(value: string ): string {

    return 'Ref-' + value ;
  }

}
