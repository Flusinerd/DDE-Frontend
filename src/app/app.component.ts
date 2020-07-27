import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';
import { SSHConfig } from './interfaces/sshconfig.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dde';

  constructor(private readonly _socketService: SocketService){}

  ngOnInit(){
    // this._socketService.connectToServer(this.connectionData);
  }
}
