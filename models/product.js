const products = [];

const path = require('path');

const fs = require('fs');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    async save() {
        const p = path.join(
            path.dirname(process.mainModule.filename), 
                'data',
                'product.json'
        );
        let product = [];
        fs.readFile(p, (err,fileContent)=>{
            if(!err) {
                product = JSON.parse(fileContent);
            }
            product.push(this);
            fs.writeFile(p, JSON.stringify(product), (err)=>{
                console.log(err);
            });
        });
        
        
    }

    static fetchAll() {
        const p = path.join(
            path.dirname(process.mainModule.filename), 
                'data',
                'product.json'
        );
        return fs.readFile(p, {encoding: 'utf-8'}, (err,data)=>{
            return data;
        });
    }

}