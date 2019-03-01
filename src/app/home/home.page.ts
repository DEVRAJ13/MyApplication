import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public items = [{
    subtitle: "Topman's SS19 Denim",
    title: "Wider Legs",
    imageUrl: 'https://static.fashionbeans.com/wp-content/uploads/2019/02/topman-denim-19-2c.jpg',
    description: "The wide-leg cut that has risen in popularity over the last few seasons is all about turning heads and reclaiming circulation for your lower limbs.",
    price: 200,
    currency_symbol: '$'
  },{
    subtitle: "Topman's SS19 Denim",
    title: "Wider Legs",
    imageUrl: 'https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: "The wide-leg cut that has risen in popularity over the last few seasons is all about turning heads and reclaiming circulation for your lower limbs.",
    price: 200,
    currency_symbol: '$'
  },{
    subtitle: "Topman's SS19 Denim",
    title: "Wider Legs",
    imageUrl: 'https://images.unsplash.com/photo-1548454433-4a1812514573?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: "The wide-leg cut that has risen in popularity over the last few seasons is all about turning heads and reclaiming circulation for your lower limbs.",
    price: 200,
    currency_symbol: '$'
  },{
    subtitle: "Topman's SS19 Denim",
    title: "Wider Legs",
    imageUrl: 'https://images.unsplash.com/photo-1456553583670-f4242f36d0fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    description: "The wide-leg cut that has risen in popularity over the last few seasons is all about turning heads and reclaiming circulation for your lower limbs.",
    price: 200,
    currency_symbol: '$'
  }]



  constructor(public popoverController: PopoverController, public navCtrl: NavController) { }

  ngOnInit() { }

  async pressMoreButton() {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true
    });
    return await popover.present();
  }

  async openSearchPage() {
    this.navCtrl.navigateForward('/search');
  }

  async viewDetail() {
    this.navCtrl.navigateForward('/detail');
  }

}
