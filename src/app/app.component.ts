import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { Subject, Subscription, fromEvent, map, merge, of, takeUntil } from "rxjs";
import { StoreService } from "./core/services";
import { StorageKey } from "./core/enums";
import { Cloudinary } from "@cloudinary/url-gen";
import { ToastService } from "./core/services/toast.service";
import { IToastProperty } from "./core/interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [MessageService],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private networkStatus: boolean = false;
  private isOnline:any;
  private networkStatus$: Subscription = Subscription.EMPTY;
  private destroy$ = new Subject();

  public visible: boolean = false;
  constructor(
    private messageService: MessageService,
    private storeService: StoreService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const cld = new Cloudinary({cloud: {cloudName: 'dobuq8yjd'}});
  }

  ngAfterViewInit(): void {
    this.checkNetworkStatus();
    this.alertSystem();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
  }

  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, "online"),
      fromEvent(window, "offline"),
    )
      .pipe(
        map(() => navigator.onLine),
        takeUntil(this.destroy$)
      )
      .subscribe((status: any) => {
        if(''+status !== this.storeService.getSession(StorageKey.isOnl)){
          this.messageService.clear();
          if (status) {
            this.onlineReload();
          } else {
            this.showOffline();
          }
        }
        this.storeService.setSession(StorageKey.isOnl, ''+status);
      });
  }

  showOffline(): void {
    this.messageService.add({
      key: "bc",
      severity: "error",
      summary: "Thông báo",
      detail: "Bạn đang offline",
      sticky: true,
    });
  }

  onlineReload() {
    if (!this.visible) {
      this.messageService.add({
        key: "confirm",
        sticky: true,
        severity: "success",
        summary: "Thông báo",
        detail: "Đã kết nối được internet",
      });
      this.visible = true;
    }
  }

  acceptReload() {
    this.messageService.clear("confirm");
    this.visible = false;
    window.location.reload();
  }

  onReject() {
    this.messageService.clear("confirm");
    this.visible = false;
  }

  alertSystem(): void {
    this.toastService.toastObs()
    .pipe(
      takeUntil(this.destroy$)
    )
    .subscribe({
      next: (response:IToastProperty) => {
        this.messageService.add(response);
      }
    })

  }
}
