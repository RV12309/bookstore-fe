import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public covers1:string[] = [
    'https://wallpaperswide.com/download/flat_design_illustration-wallpaper-1920x1080.jpg',
    'https://wallpapercave.com/uwp/uwp1306494.png',
    'https://cutewallpaper.org/26/beautiful-adventure-wallpaper-for-desktop-hd/1219012381.jpg',
    'https://cutewallpaper.org/26/beautiful-adventure-wallpaper-for-desktop-hd/1219012381.jpg',
    'https://wallpaperswide.com/download/rick_and_morty_season_7-wallpaper-1920x1080.jpg'
  ]

  constructor(

  ) {

  }
  ngOnInit(): void {

  }
}
