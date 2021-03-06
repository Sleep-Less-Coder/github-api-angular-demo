import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiUrl = 'https://api.github.com/users/Sleep-Less-Coder/repos';
  data : any = {};

  constructor (private http: Http) {
    console.log('Hello, it works!');
    this.getRepos();
    this.getData();
  }

  getRepos() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  getData() {
      return this.http.get(this.apiUrl).map((res : Response) => res.json())
  }

}
