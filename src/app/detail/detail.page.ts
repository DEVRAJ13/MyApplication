import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  @ViewChild('slider') slider: IonSlides;
  public currentIndex:any = 0;
  public slides: any = [
    'https://static.fashionbeans.com/wp-content/uploads/2019/02/topman-denim-19-2c.jpg',
    'https://static.fashionbeans.com/wp-content/uploads/2019/02/topman-denim-19-2c.jpg',
    'https://static.fashionbeans.com/wp-content/uploads/2019/02/topman-denim-19-2c.jpg',
    'https://static.fashionbeans.com/wp-content/uploads/2019/02/topman-denim-19-2c.jpg'
  ];

  constructor() { }

  async ngOnInit() {
  }

  async nextSlide() {
    this.slider.slideNext();
  }

  async previousSlide() {
    this.slider.slidePrev();
  }

  async onSlideChanged() {
    this.currentIndex = this.slider.getActiveIndex();
    console.log(this.currentIndex);
  }


}
