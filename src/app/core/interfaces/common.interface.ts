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