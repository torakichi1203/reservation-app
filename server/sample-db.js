const Product = require('./model/product')

class SampleDb {
    constructor() {
        this.products = [
            {
              coverImage: './assets/img/phone-cover.jpg',
              name: 'Phone XL',
              price: 799,
              description: 'A large phone with one of the best screens',
              heading1: 'hoge',
              heading2: 'fuga',
              heading3: 'hogefuga',
              headingtext1: 'hogehoge',
              headingtext2: 'fugafuga',
              headingtext3: 'hogefugahogefuga',
            },
            {
              coverImage: './assets/img/phone-cover.jpg',
              name: 'Phone Mini',
              price: 699,
              description: 'A great phone with one of the best cameras',
              heading1: 'hoge',
              heading2: 'fuga',
              heading3: 'hogefuga',
              headingtext1: 'hogehoge',
              headingtext2: 'fugafuga',
              headingtext3: 'hogefugahogefuga',
            },
            {
              coverImage: './assets/img/phone-cover.jpg',
              name: 'Phone Standard',
              price: 299,
              description: '',
              heading1: 'hoge',
              heading2: 'fuga',
              heading3: 'hogefuga',
              headingtext1: 'hogehoge',
              headingtext2: 'fugafuga',
              headingtext3: 'hogefugahogefuga',
            },
            {
              coverImage: './assets/img/phone-cover.jpg',
              name: 'Phone Special',
              price: 99,
              description: '',
              heading1: 'hoge',
              heading2: 'fuga',
              heading3: 'hogefuga',
              headingtext1: 'hogehoge',
              headingtext2: 'fugafuga',
              headingtext3: 'hogefugahogefuga',
            }
        ]
    }
    
    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }
}

module.exports = SampleDb