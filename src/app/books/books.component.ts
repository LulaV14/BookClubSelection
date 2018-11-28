import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'views', 'actions'];
  dataSource = new MatTableDataSource(BOOKS);
  selectedBook: Book = null;

  constructor() { }

  ngOnInit() {
  }

  filterBooks(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // TODO change to own details page
  showDetails(book: Book) {
    this.selectedBook = book;
  }

}
