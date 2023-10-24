import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
    register();
  }
}
