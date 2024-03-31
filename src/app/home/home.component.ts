import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: any[] = [];
  loading = true;
  selectedUser: any;
  private subscription: Subscription = new Subscription;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.subscription = this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        this.users = users;
        this.loading = false;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelectUser(user: any) {
    this.selectedUser = user;
    this.router.navigate(['/user-details', user.id], { state: { user } });
  }

  onUnsubscribe(userId: number) {
    this.users = this.users.filter(user => user.id !== userId);
  }
}
