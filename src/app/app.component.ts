import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat';
  toggled: boolean = false;
  chatText=""
  chatArray: any= []

  handleSelection(event:any) {
    this.chatText += event.char;
  }

  saveChat() {
    if(this.chatText) {
      this.chatArray.push({
        time: new Date(),
        content: this.chatText
      })
      this.chatText = ''
    }
  }
}
