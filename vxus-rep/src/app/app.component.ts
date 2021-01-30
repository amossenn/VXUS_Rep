import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vxus-rep';
  loading: boolean = true;
  public loaded = () => {
    setInterval(()=>{this.loading = false;}, 5000);
  }
}
