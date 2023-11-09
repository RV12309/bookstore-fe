import { TablePageEvent } from "primeng/table";

export interface ITitleTable {
  title: string;
  classes?:string;
  sort?:boolean;
  key?:string;
}


export interface ITablePageChange extends TablePageEvent {
  pageNumber?: number;
  pageIndex?:number;
}