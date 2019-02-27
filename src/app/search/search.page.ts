import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { Platform, IonSearchbar, ModalController } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild("searchbar") searchbar: IonSearchbar;
  public bgcolor: string;
  public name: string;

  constructor(private zone: NgZone, public modalController: ModalController, private speechRecognition: SpeechRecognition) { }

  async ionViewWillEnter() {
    this.searchbar.setFocus();
  }

  async ngOnInit() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }
      });
  }

  async start() {
    var self = this;
    self.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          var abc = matches[0];
          self.showText(abc);
        },
        (onerror) => console.log('error:', onerror)
      )
  }

  async showText(text) {
    this.zone.run(() => {
      this.bgcolor = text;
    });
  }

  async goBack() { }

}
