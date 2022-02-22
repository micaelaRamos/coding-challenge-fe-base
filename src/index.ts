function checkoutBook(books) {
    if (!books || books.length == 0) {
        return 0;
    }
    const allowList = [1,2,3,4,5];
    const basePrice = 8;
    const discounts = {
        1: 1,
        2: 0.95,
        3: 0.9,
        4: 0.8,
        5: 0.75,
    };
    
    let bookMap = {};

    for (let book of books) {
        if (allowList.indexOf(book) === -1) {
            return "You can't buy that book";
        }

        bookMap[book] = bookMap[book] + 1 || 1;
    }

    const differentBooks = Object.keys(bookMap).length;
    const repeatedBooks = books.length - differentBooks;
    
    const netPrice = differentBooks * basePrice;
    const finalPrice = netPrice * discounts[differentBooks] + (repeatedBooks * basePrice);
    
    return finalPrice;
};

console.log(checkoutBook([1]));

console.log(checkoutBook([1, 2]));

console.log(checkoutBook([1, 2, 3]));

console.log(checkoutBook([1, 2, 3, 4]));

console.log(checkoutBook([1, 2, 3, 4, 5]));

console.log(checkoutBook([1, 1]));

console.log(checkoutBook([1, 1, 1]));

console.log(checkoutBook([1, 1, 2]));

console.log(checkoutBook([]));

console.log(checkoutBook(null));

console.log(checkoutBook([6]));