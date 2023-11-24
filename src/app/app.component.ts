import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { Store, createFeatureSelector, select } from '@ngrx/store';
import { UserState } from './user/user.state';
import { loadUsers } from './user/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  page = 1;
  items: any[] = [];
  displayedItems: any[] = []; // Danh sách hiển thị trên mỗi trang
  pageSize = 10; // Số mục trên mỗi trang
  users$!: Observable<User[]>;

  constructor(private store: Store<UserState>) {
    for (let i = 1; i <= 100; i++) {
      this.items.push({ title: 'Brycen ' + i });
    }

    this.updateDisplayedItems();
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
    const userStateSelector = createFeatureSelector<UserState>('users');
    this.store.select(userStateSelector).subscribe(userState => {
      console.log(userState.entities);
    });
  }

  onPageChange(page: number) {
    this.page = page;
    this.updateDisplayedItems();
  }

  updateDisplayedItems() {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems = this.items.slice(startIndex, endIndex);
  }
}