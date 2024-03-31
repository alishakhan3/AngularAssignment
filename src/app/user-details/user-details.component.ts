import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: any;
  @Output() unsubscribeUser: EventEmitter<number> = new EventEmitter<number>();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.user = history.state.user;
  }

  unsubscribe() {
    this.unsubscribeUser.emit(this.user.id);
    this.router.navigate(['/']);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
