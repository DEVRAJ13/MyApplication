import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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

}
