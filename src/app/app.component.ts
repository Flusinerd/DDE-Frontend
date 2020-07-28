import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';
import { SSHConfig } from './interfaces/sshconfig.interface';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dde';

  constructor(
    private readonly _socketService: SocketService,
    readonly _loadingService: LoadingService
  ){}

  ngOnInit(){
    // this._socketService.connectToServer(this.connectionData);
  }
}
