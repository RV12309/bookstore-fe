import { Injectable, Type } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ModalNoticeComponent } from "./modal-notice.component";


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private onCloseSubject = new Subject<any>();
  private ref: DynamicDialogRef | undefined;
  constructor(private dialogService: DialogService) { }

  open(component: any, options: any = {}): Observable<any> {
    const ref = this.dialogService.open(component, {
      header: options.header || 'Modal Dialog',
      width: options.width || '70%',
      contentStyle: { 'max-height': '500px', 'overflow': 'auto' },
      closeOnEscape: options.closeOnEscape !== undefined ? options.closeOnEscape : true,
      baseZIndex: 10000
    });

    ref.onClose.subscribe(result => {
      this.onCloseSubject.next(result);
    });

    return this.onCloseSubject.asObservable();
  }

  alert(params: Partial<any> | string) {
    let modalParams: any = {}
    let type: any = 'error';
    if (typeof params === 'string') {
      modalParams = {
        message: params,
      }
    } else {
      modalParams = params;
      // type = params?.type;
    }

    return this.handleModal(ModalNoticeComponent, modalParams, type);
  }

  public handleModal<C>(modalComponent: Type<C>, params: any, type: 'delete' | 'success' | 'error' | 'verify' | 'confirm' | 'warning' | 'info', size?: string,) {
    const modalOptions = {
      heading: 'modal.thong_bao',
      btnOkName: 'modal.dong_y',
      btnCancleName: 'modal.dong',
      // modalType: ModalType[type],
      ...params
    }
    const sizeModal = size || 'xs';
    const className = "ant-modal-alert ant-modal-" + sizeModal;
    return this.open({
      nzContent: modalComponent,
      nzFooter: null,
      nzCentered: true,
      nzClosable: false,
      nzComponentParams: modalOptions,
      nzClassName: className,
      nzMaskClosable: false
    })
  }

  close(result?: any) {
    this.ref?.destroy();
    this.onCloseSubject.next(result);
  }
}
