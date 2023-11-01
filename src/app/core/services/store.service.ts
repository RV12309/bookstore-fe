import { Injectable } from '@angular/core';
import { StorageKey, TokenStorageKey } from "../enums";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() { }

  setSession(key: TokenStorageKey, value:string) {
    window.sessionStorage.setItem(key, value);
  }

  setLocal(key: TokenStorageKey, value:string) {
    window.localStorage.setItem(key, value);
  }

  getSession(key: TokenStorageKey) {
    return window.sessionStorage.getItem(key);
  }

  getLocal(key: TokenStorageKey) {
    return window.localStorage.getItem(key);
  }
}
