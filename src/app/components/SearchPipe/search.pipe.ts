import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform{
    transform(value: Array<any>, args: any): any{
        let searchArray:any=[];
        if(args.length>3){
            for(let val of value){
                    if(val.category.match(args)|| val.name.match(args) ){
                    searchArray.push(val)
                }
            }
            return searchArray;
        }else return value;
    }
}