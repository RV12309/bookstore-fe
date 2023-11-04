import { ComponentRef, Injectable, Type } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { ModalNoticeComponent } from "./modal-notice.component";
import { IModalConfig, IModalOption } from "../../interfaces";
import { ModalConfirmComponent } from "src/app/components/modal-confirm/modal-confirm.component";
import { ModalAlertComponent } from "src/app/components/modal-alert/modal-alert.component";


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private onCloseSubject = new Subject<any>();
  private onClose = new Subject<any>;
  private ref: DynamicDialogRef | undefined;
  constructor(private dialogService: DialogService) { }

  open(
    component:Type<any>,
    config:Partial<IModalConfig> | DynamicDialogConfig<any>
  ):DynamicDialogRef{
    return this.dialogService.open(
      component,
      config
    )
  }

  confirm(data:Partial<IModalOption>, configData?:Object, width = '350px'){
    const paramsData:Partial<IModalOption> = {
      type: 'confirm',
      modalType: ModalType['confirm'],
      ...data
    }
    this.open(
      ModalConfirmComponent,
      {
        data: paramsData,
        width,
        ...configData
      }
    )
  }

  alert(data:Partial<IModalOption>, configData?:Object, width = '350px'){
    const paramsData:Partial<IModalOption> = {
      type: 'info',
      modalType: ModalType['info'],
      ...data
    }
    this.open(
      ModalAlertComponent,
      {
        data: paramsData,
        width,
        ...configData
      }
    )
  }


  // openT(component: any, options: any = {}): Observable<any> {
  //   const ref = this.dialogService.open(component, {
  //     header: options.header || 'Modal Dialog',
  //     width: options.width || '70%',
  //     contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
  //     closeOnEscape: options.closeOnEscape !== undefined ? options.closeOnEscape : true,
  //     baseZIndex: 10000
  //   });

  //   ref.onClose.subscribe(result => {
  //     this.onCloseSubject.next(result);
  //   });

  //   return this.onCloseSubject.asObservable();
  // }

  // alert(params: Partial<any> | string) {
  //   let modalParams: any = {}
  //   let type: any = 'error';
  //   if (typeof params === 'string') {
  //     modalParams = {
  //       message: params,
  //     }
  //   } else {
  //     modalParams = params;
  //     // type = params?.type;
  //   }

  //   return this.handleModal(ModalNoticeComponent, modalParams, type);
  // }

  // public handleModal<C>(modalComponent: Type<C>, params: any, type: 'delete' | 'success' | 'error' | 'verify' | 'confirm' | 'warning' | 'info', size?: string,) {
  //   const modalOptions = {
  //     heading: 'modal.thong_bao',
  //     btnOkName: 'modal.dong_y',
  //     btnCancleName: 'modal.dong',
  //     // modalType: ModalType[type],
  //     ...params
  //   }
  //   const sizeModal = size || 'xs';
  //   const className = "ant-modal-alert ant-modal-" + sizeModal;
  //   return this.openT({
  //     nzContent: modalComponent,
  //     nzFooter: null,
  //     nzCentered: true,
  //     nzClosable: false,
  //     nzComponentParams: modalOptions,
  //     nzClassName: className,
  //     nzMaskClosable: false
  //   })
  // }

  close(result?: any) {
    this.ref?.destroy();
    this.onCloseSubject.next(result);
  }
}

const MODAL_CONFIG_DEFAULT:Partial<IModalConfig> = {

}

export const ModalType = {
  'confirm': {
    type: '',
    iconUrl: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconClass: '',
    btnCancelClass: '',
    btnOkClass: 'primary',
    buttonWrapperClass: 'group-col-2 group-col-fill',
  },
  'success': {
    type: 'success',
    iconUrl: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconClass: '',
    btnCancelClass: '',
    btnOkClass: 'primary',
    buttonWrapperClass: ''
  },
  'info': {
    type: 'info',
    iconUrl: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconClass: '',
    btnCancelClass: '',
    btnOkClass: 'primary',
    buttonWrapperClass: ''
  },
  'warning': {
    type: 'warning',
    iconUrl: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconClass: '',
    btnCancelClass: '',
    btnOkClass: 'primary',
    buttonWrapperClass: ''
  },
  'error': {
    type: 'danger',
    iconUrl: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconClass: 'icm-default_24x24-delete icm-size-default',
    btnClassConfirm: 'ubg-danger',
    btnClassCancel: 'ubg-line-default',
    buttonWrapperClass: ''
  },
  'delete': {
    type: 'danger',
    iconUrl: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconClass: 'icm-default_24x24-delete icm-size-default',
    btnClassConfirm: 'ubg-danger',
    btnClassCancel: 'ubg-line-default',
    buttonWrapperClass: ''
  },
  'verify': {
    type: 'ubg-info',
    iconClass: 'assets/icons/color/ic-alert-circle-outline.svg',
    iconUrl: '',
    btnCancelClass: '',
    btnOkClass: 'primary',
    buttonWrapperClass: 'group-col-12 flex-column-reverse',
  },
}