import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approvalPipe'
})
export class ApprovalPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch(value){
      case 1:
      return 'Approved'
    break
    case 0:
      return 'Not Approved'
    break
    }
    return null;
  }

}
