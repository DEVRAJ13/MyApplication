import { Component, OnInit, } from '@angular/core';
import { ToastController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})

export class PopoverComponent implements OnInit {

  constructor(public toastController: ToastController, public pop: PopoverController) { }

  ngOnInit() { }

  async goToMethod(button_name: string) {
    this.pop.dismiss();
    const toast = await this.toastController.create({
      message: 'You have clicked on' + ' ' + button_name,
      duration: 2000
    });
    toast.present();
  }

}
