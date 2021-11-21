const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

// we can create a function to return a random / fake "Product"
const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: '$' + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};

const createUser = () => {
    const newFake = {
        name: faker.name.findName(),
        email: faker.internet.email(),
        username: faker.internet.userName()     
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        name: faker.company.companyName(),
        suffix: faker.company.companySuffix(),
        catchphrase: faker.company.catchPhrase()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);

app.get("/api/product", (req, res) => {
    //tell computer what to do when using this url
    res.json(createProduct());
})

app.get("/api/users/new", (req, res) => {
    //request response
    res.json(createUser());
})

app.get("/api/companies/new", (req, res) => {
    res.json(createCompany());
})

app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
})

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );