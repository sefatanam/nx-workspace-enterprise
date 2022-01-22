import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '@enterprise-angular/api-interfaces';

@Component({
  selector: 'enterprise-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  members: Member[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Member[]>('/api/members').subscribe((members: Member[]) => {
      this.members = members;
    });
  }
}
