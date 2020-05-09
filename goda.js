const fetch = require('node-fetch')

const getBooks = (books) => {
    books.forEach(book => console.log(book))
}

//Callback example
const createPost = (callback) => {
    setTimeout(() => {
        const books = [
            { title: 'thiruppavai', genre: 'vendata' },
            { title: 'naachiyaar thirumozhi', genre: 'poetry' },
        ]
        books.push({ title: 'sanskrit grammer', genre: 'grammer' })
        callback(books)
    }, 2000)
}


createPost(getBooks)

//Promises
const createPostPromises = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const books = [
                { title: 'thiruppavai 2', genre: 'vendata' },
                { title: 'naachiyaar thirumozhi 2', genre: 'poetry' },
            ]
            books.push({ name: 'sanskrit grammer 2', genre: 'grammer' })
            const error = false
            if (!error) {
                resolve(books)
            } else {
                reject(error)
            }
        }, 3000)
    })
}

const resolve = (books) => {
    console.log('calling the getBooks from resolve then method');
    getBooks(books);
}

const reject = error => {
    console.log(error);
}

const someRandomMethod1 = (values) => {
    console.log('Printng value in the resolve function', values);

}

const someRandomMethod2 = (values) => {
    console.log('Second method: Printng value in the resolve function', values);

}

// Two ways of doing it. Promise.all takes the longest amount of time to run 
createPostPromises().then(resolve).catch(reject)

//A promise which does not return anything
const createPostPromises2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const books = [
                { title: 'thiruppavai 2', genre: 'vendata' },
                { title: 'naachiyaar thirumozhi 2', genre: 'poetry' },
            ]
            books.push({ name: 'sanskrit grammer 2', genre: 'grammer' })
            const error = false
            if (!error) {
                resolve()
            } else {
                reject()
            }
        }, 3000)
    })
}

const promise1 = 10;
const promise2 = Promise.resolve('Hello Goda')
const fetchApiPromise1 = fetch('https://reqres.in/api/users?page=2')
const fetchApiPromise2 = fetch('https://reqres.in/api/users?page=2').then(res => res.json())

// first is the resolve method the second is a reject method
Promise.all([createPostPromises(), createPostPromises2(), promise1, promise2, fetchApiPromise1, fetchApiPromise2]).then(someRandomMethod1, someRandomMethod2)



const asyncFunction = async () => {
    const result = await createPostPromises()
    console.log(result);
}

asyncFunction()