import { Component, OnInit } from '@angular/core';
import { DataSourceUser } from './data-source';
import { CdkTableModule } from '@angular/cdk/table';
import { NgClass } from '@angular/common';
import { UsersService } from '@services/users.service';
import { AuthService } from '@services/auth.service';
import { User } from '@models/user.model';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [ NgClass, CdkTableModule],
  templateUrl: './users-table.component.html'
})
export default class UsersTableComponent implements OnInit {
  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];
  user: User | null = null;

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.usersService.getUsers()
      .subscribe(users => {
        this.dataSource.init(users);
      })
    this.authService.getProfile()
      .subscribe(user => {
        this.user = user;
      })
  }
}
