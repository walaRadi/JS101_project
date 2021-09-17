// JavaScript 101 project. satr.codes By:wala radi.

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
console.log(addBook(06 , 'The secret', 'Rhonda Byrne', 75.9, 50));


let idFind = 1
let searchById = books.find( ({id}) => {
    return id === idFind
})
console.log(searchById);


let titleFind = 'But how do it know'
let searchByTitle = books.find( ({title}) => {
    return title === titleFind
})
console.log(searchByTitle);


let authorFind = 'Robert Cecil Martin'
let searchByAuthor = books.find( ({author}) => {
    return author === authorFind
})
console.log(searchByAuthor);


function selling ( array, bookTitle, bookQuantity, balance ) {
    for( let i=0 ; i<array.length ; i++ ){
        if ( array[i].title == bookTitle && array[i].quantity >= bookQuantity ){
            let totalPrice = bookQuantity * array[i].price
                if(totalPrice <= balance){
                    array[i].quantity -= bookQuantity;
                    if(bookQuantity >= 2){
                        return `sale invoice: 
Your books: '${array[i].title}', it is ${totalPrice}SR, 
Was purchased ${bookQuantity} pieces`;
                    } else{
                        return `sale invoice: 
Your book: '${array[i].title}', it is ${totalPrice}SR, 
Was purchased ${bookQuantity} piece`;
                    }
                } else{
                    return 'Your balance it\'s not enough'
                }
        } else if(array[i].title !== bookTitle) {
                return 'Sorry, We didn\'t found it. Please sure your book title'
        } else if(array[i].quantity < bookQuantity){
                return 'Sorry, We don\'t have quantity enough'
            }
}};

let balance = 200;
console.log(selling(books, 'Start with why', 1, balance));