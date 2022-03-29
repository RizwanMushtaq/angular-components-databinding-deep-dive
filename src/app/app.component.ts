import { Component } from '@angular/core';
import { ServerElement } from './serverElement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'components-databinding-deep-dive';

  serverElements: ServerElement[] = [
    {
      type: 'server',
      name: 'test server',
      content: 'Just a test',
    },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintAdded(bluePrintData: {
    bluePrintName: string;
    bluePrintContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.bluePrintName,
      content: bluePrintData.bluePrintContent,
    });
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
