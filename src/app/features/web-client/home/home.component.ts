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

  public booksTrend = [
    'https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg',
    'https://marketplace.canva.com/EAFciO2A4mQ/2/0/566w/canva-beige-brown-minimalist-aesthetic-floral-lineart-diary-book-cover-AFho7J5HZGk.jpg',
    'https://www.adobe.com/express/create/cover/media_19d5e212dbe8553614c3a9fbabd4d7f219ab01c85.png?width=750&format=png&optimize=medium',
    'https://images.template.net/121075/back-to-school-textbook-template-f7xrv.png'
  ]

  constructor(

  ) {

  }
  ngOnInit(): void {

  }
}
