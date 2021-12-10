import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
showClick=false;

allowNewServer=true;
serverStatus:string='offline';
serverValue:'TestServer';
username:'';
log=[];
  constructor() {
    // setTimeout(()=>{this.allowNewServer},200
    this.serverStatus=Math.random() >0.5?'online':'offline'
   }

  ngOnInit(): void {
  }
  
  onCreateServer(){
    this.serverStatus='Server is created Name'+this.serverValue;
  }

  onUpdateServer(event:any){
this.serverValue=event.target.value

}


getColour(){
 return  this.serverStatus==='online'?'green':'red'
}

createToggle(){
  this.showClick=!this.showClick;
  this.log.push(this.log.length+1)

}
}