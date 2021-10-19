




class Cars {

    constructor(make, model, color, image, registrationNumber, price) {

        this.make = make
        this.model = model
        this.color = color
        this.image = image
        this.registrationNumber = registrationNumber
        this.price = price
    }newPrice(NPrice){

        return  `the NewPrice${this.price = NPrice}`

    }showAll(){


        return `the name:${this.make} the model:${this.model} the color:${this.color} image: ${this.image} registrationNumber: ${this.registrationNumber}`


    }








}


car1 =new Cars('corela','2000','red','linkImage','204386','13000$')
car2 =new Cars('nissan','1995','red','linkImage','204386','54000$')
car3 =new Cars('honda','2010','red','linkImage','204386','60000$')
car4 =new Cars('mazda','2005','red','linkImage','204386','6500$')
car5 =new Cars('BMW','2020','red','linkImage','204386','35000$')


console.log(car1)
console.log(car1.newPrice(4444000))

console.log(car2.showAll())




