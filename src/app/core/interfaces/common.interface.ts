export interface IMenuSidebar {
  icon?: string;
  label?: string;
  route?: string;
  children?: IMenuSidebarChild[];
}

export interface IMenuSidebarChild {
  icon?: string;
  title?: string;
  key?: string;
  route?: string;
}

export interface ISelectItem {
  name: string;
  code: string;
}


export interface IToastProperty {
  key?: string;
  severity?: string;
  summary?: string;
  detail: string;
  sticky?: boolean;
}

export interface ILoading {
  isLoading:boolean;
  time?:number
}