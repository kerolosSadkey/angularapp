import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalPipe'
})
export class NationalPipePipe implements PipeTransform {

  transform(value: string): string {
    var Year:number =parseInt( value.substring(1, 3));
    var Month:string = value.substring(3, 5);
    var Day:string = value.substring(5, 7);
    
    var cc = (new Date()).getFullYear() - 2000;
    
    var db1 =    Month+ '/' + Day + '/'  +(Year > cc ? '19' : '20') + Year;
    var db2 =    Month+ '-' + Day + '-'  +(Year > cc ? '19' : '20') + Year;
    
      var st=`FullDate:  ${new Date(db1).toDateString()}    Brithdate : ${db2} `;
    return st;
  
  }

}
