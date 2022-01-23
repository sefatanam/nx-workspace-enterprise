import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Member} from '@enterprise-angular/api-interfaces';
import {delay} from "rxjs";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'enterprise-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  memberForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required])
  })
  members: Member[] = [];

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {


    this.http.get<Member[]>('/api/members')
      .pipe(
        delay(2000)
      )
      .subscribe((members: Member[]) => {
        this.members = members;
      });
  }

  async submit() {
    await this.http.post<Member>('/api/members', this.memberForm.value)
      .subscribe((member: Member) => {
        this.members.push(member);
      });
  }
}
