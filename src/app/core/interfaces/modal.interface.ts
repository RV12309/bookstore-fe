import { PositionModal } from "../enums";

export interface IModalConfig {
  data:any;
  header: string;
  width: string;
  height:string;
  contentStyle: Object;
  baseZIndex: number; //Base zIndex value to use in layering
  ariaLabelledBy: string;
  footer:string;
  closeOnEscape: boolean;// default false; Chỉ định xem việc nhấn phím esc có close modal hay không.
  dismissableMask:boolean; //set việc click bên ngoài modal có ẩn modal hay không.
  rtl:boolean;
  style:Object; //Inline style of the comopnent
  styleClass:string; //Style class of the component
  transitionOptions:string; //Tùy chọn chuyển tiếp của hình ảnh động.
  closable:boolean; //Thêm icon close vào title để ẩn modal.
  showHeader:boolean;
  modal:boolean; //Xác định xem có nên chặn nền khi modal được hiển thị hay không;
  maskStyleClass:string; //Style class of the mask
  resizable:boolean;
  draggable:boolean; //Cho phép kéo để thay đổi vị trí bằng tiêu đề.
  keepInViewport:boolean;
  minX:number;
  minY:number;
  maximizable: boolean; //Liệu hộp thoại có thể được hiển thị toàn màn hình hay không.
  maximizeIcon:string; //Name of the maximize icon.
  minimizeIcon:string;  //Name of the minimize icon.
  position: PositionModal;
  closeAriaLabel:string;
  appendTo:any;
  duplicate:boolean;

}