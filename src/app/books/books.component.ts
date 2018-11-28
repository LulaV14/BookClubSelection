import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  displayedColumns: string[] = ['id', 'name', 'views', 'actions'];
  dataSource = null;
  selectedBook: Book = null;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
    this.dataSource = new MatTableDataSource(this.books);
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

  filterBooks(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // TODO change to own details page
  showDetails(book: Book) {
    this.selectedBook = book;
  }

}
