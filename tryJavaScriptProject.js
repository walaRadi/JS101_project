// // let books = [ 
// //     [01, 02, 03, 04],
// //     [one, tow, three, four], 
// //     [abdullah, ahmed, khaled, faisal] 
// //     [50, 48, 50, 50], 
// //     [20, 7, 15, 3] 
// // ];  


// // let bookId= books[0];
// // let bookTitle= books[1];
// // let bookAuthor= books[2];
// // let bookQuantity= books[3];


// // function enquiry(idBook, titleBook, autherBook){
// //     for (i=0 ; i<books.length ; i++){
// //         if( books.includes(idBook)  || books.includes(titleBook) || books.includes(autherBook) ){
// //             return bookTitle;
// //         } else{
// //             return "sorry it's not here";
// //         }
// //     };
// // };



// // class Books {
// //     constructor(bookId, bookTitle, bookAuthor, bookQuantity){
// //         this.bookId = bookId,
// //         this.bookTitle = bookTitle,
// //         this.bookAuthor = bookAuthor,
// //         this.bookQuantity = bookQuantity
// //     }
// // // };

// // const book1 = new Books(01 , 'The secret', 'Rhonda Byrne', 50);
// // const book2 = new Books(02 , 'The secret', 'Rhonda Byrne', 50);
// // const book3 = new Books(03 , 'The secret', 'Rhonda Byrne', 50);
// // const book4 = new Books(04 , 'The secret', 'Rhonda Byrne', 50);
// // const book5 = new Books(05 , 'The secret', 'Rhonda Byrne', 50);



// // let result = books[1].findIndex(function(element)){
// //     return element = str;
// // }
// // find index method

// // let result = books[1].indexOf(str)
// // find index method





// // -------------------------------------------------------
// // // 2D array = 
// // [id's], 
// // [title books], 
// // [authors], 
// // [prices], 
// // [quantity].
// // -------------------------------------------------------


// const books = [
//     [1, 2, 3, 4, 5],
//     ['Start with why', 'But how do it know', 'Clean Code', 'Zero to One', 'You don\'t know JS'],
//     ['Simon Sinek', 'J. Clark Scott', 'Robert Cecil Martin', 'Peter Thiel', 'Kyle Simpson'],
//     [80.0, 59.9, 50.0, 45.0, 39.9],
//     [13, 22, 5, 12, 9]
// ];



// function a (string, str2 ) {
//     if( string == 'id'){
//         var i = 0;
//     } else if (string == 'title'){
//         var i = 1;
//     } else if( string == 'author'){
//         var i = 2;
//     } else {
//         return 'sorrryyyyy'
//     }
//     var book = books[i];
//     for (let j=0 ; j < book.length ; j++){
//         if(book.includes(str2) === true){
//             console.log(book[j]);
//         } else {
//             return 'ooopsss'
//         }
//     }
// };

// let string= 'id'
// console.log(a(string, 3));





// // let x = books.indexOf(45.0);
// // console.log(x);

// //here we input what we want seach about? 'id or title or author'.
// // function searchAboutWhat(string){
// //     switch(string){
// //         case 'id':
// //             return 0;
// //             break;
// //         case 'title':
// //             return 1;
// //             break;
// //         case 'author':
// //             return 2;
// //             break;
// //     }
// // }

// // //here we input what the title we seaching about? 'in case we search about title book'
// // //and the result from the previous function >> to search in the correct index
// // function seaching (str, anyIndex){
// //     for( let i=0 ; i<books.length ; i++ ){
// //         if(anyIndex==0){
// //             let result = books[0][i].includes(str)
// //             return result;
// //         } else if(anyIndex==1){
// //             let result = books[1][i].includes(str)
// //             return result;
// //         } else if (anyIndex==2){
// //             let result = books[2][i].includes(str)
// //             return result;
// //         } else {
// //             return 'Sorry we didn\' found what you seaching about, please try again';
// //         }
// //     }
// // };


// // function sh( string , searchAboutWhat ){
// //     for( let i = 0 ; i<books[searchAboutWhat][i].length; i++){
// //         if(books[searchAboutWhat][i] == string){
// //             return i;
// //         } else{
// //             return 'Sorry we didn\' found what you seaching about, please try again';
// //         }
// //     }
// // };

// // console.log(sh(2, searchAboutWhat('id')));




// trrrrruuuuuueeeeee 'هذا الجزء اللي اضفته بدل الكود المحذوف اللي تحته'
// let idFind = 4
// let searchById = books.find( ({id}) => {
//     return id === idFind
// })
// console.log(searchById);

// let titleFind = 'You don\'t know JS'
// let searchByTitle = books.find( ({title}) => {
//     return title === titleFind
// })
// console.log(searchByTitle);

// let authorFind = 'J. Clark Scott'
// let searchByAuthor = books.find( ({author}) => {
//     return author === authorFind
// })
// console.log(searchByAuthor);



// 'هذا الجزء اللي حذفته من الكود'
// function searchById (array, value){
//     for( let i=0 ; i<array.length ; i++ ){
//         if ( array[i].id == value ){
//             return array[i];
//         }
//     }
// };
// let idSearch = searchById(books,05)
// console.log(idSearch)

// function searchByTitle (array, value){
//     for( let i=0 ; i<array.length ; i++ ){
//         if ( array[i].title == value ){
//             return array[i];
//         }
//     }
// };
// let titleSearch = searchByTitle(books,'But how do it know')
// console.log(titleSearch)

// function searchByAuthor (array, value){
//     for( let i=0 ; i<array.length ; i++ ){
//         if ( array[i].author == value ){
//             return array[i];
//         }
//     }
// };
// let authorSearch = searchByAuthor(books,'Peter Thiel')
// console.log(authorSearch)



const books = [
    { id:01, title:'Start with why', author: 'Simon Sinek', price: 80.0, quantity: 13 },
    { id:02, title:'But how do it know', author: 'J. Clark Scott', price: 59.9, quantity: 22 },
    { id:03, title:'Clean Code', author: 'Robert Cecil Martin', price: 50.0, quantity: 5 },
    { id:04, title:'Zero to One', author: 'Peter Thiel', price: 45.0, quantity: 12 },
    { id:05, title:'You don\'t know JS', author: 'Kyle Simpson', price: 39.9, quantity: 9 }
];



function addBook(id, title, author, price, quantity){
    books.push(id,title, author, price, quantity)
    return books;
}
console.log(addBook(06 , 'The secret', 'Rhonda Byrne', 75.9,50));
