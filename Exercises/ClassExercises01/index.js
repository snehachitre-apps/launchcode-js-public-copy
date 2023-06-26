// Define your Book class here:
class Book {
  constructor(title, author, copyright_date, isbn, num_pages, num_checked_out, isDiscarded) {
    this.title = title;
    this.author = author;
    this.copyright_date = copyright_date;
    this.isbn = isbn;
    this.num_pages = num_pages;
    this.num_checked_out = num_checked_out;
    this.isDiscarded = isDiscarded;

  }
  //method to update checked number when book is used
  check(use = 1) {
    this.num_checked_out += use;
  }
}

// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(title, author, copyright_date, isbn, num_pages, num_checked_out, isDiscarded, today_year=2023) {
    super(title, author, copyright_date, isbn, num_pages, num_checked_out, isDiscarded);
    
  }
  //manual shud be discarded if more than 5 years old
  discard(today_year) {
    if (today_year - this.copyright_date > 5)
      this.isDiscarded = "Yes";
  }
}

class Novel extends Book {
  constructor(title, author, copyright_date, isbn, num_pages, num_checked_out, isDiscarded) {
    super(title, author, copyright_date, isbn, num_pages, num_checked_out, isDiscarded);
  }
  //novel should be discarded if checked out more tha 500 times
  discard() {
    if (this.num_checked_out > 500)
      this.isDiscarded = "Yes";
  }
}

// Declare the objects for exercises 2 and 3 here:
let novel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");
let manual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

console.log(novel);
console.log(manual);
// Code exercises 4 & 5 here:
console.log("*****************************");
//deefault year is 2023 in constructor so its ok if not passed the year here.  
manual.discard(2023);
novel.check(5);


console.log(novel);
console.log(manual);