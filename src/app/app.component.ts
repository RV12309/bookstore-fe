import { AfterViewInit, Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { Subscription, fromEvent, map, merge, of } from "rxjs";
import { StoreService } from "./core/services";
import { StorageKey } from "./core/enums";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [MessageService],
})
export class AppComponent implements OnInit, AfterViewInit {
  private networkStatus: boolean = false;
  private isOnline:any;
  private networkStatus$: Subscription = Subscription.EMPTY;
  public visible: boolean = false;
  constructor(
    private messageService: MessageService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.isOnline = this.storeService.getSession(StorageKey.isOnl);
  }

  ngAfterViewInit(): void {
    this.checkNetworkStatus();
  }

  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, "online"),
      fromEvent(window, "offline"),
    )
      .pipe(map(() => navigator.onLine))
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
}
