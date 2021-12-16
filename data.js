const bcrypt = require ('bcryptjs');
const data = {
    users: [
        {
            name: 'Manel',
            email: 'manel.gueddari@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name: 'Fatma',
            email: 'fatma.farhat@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false,
        },
    ],
    products : [
        {
    
            name:'MODULE COMPTEUR ',
            category : 'Capteur',
            image:'/images/p1.jpg',
            price:5.850 ,
            rating:4.5,
            numReviews:10,
            countInStock:1,
            description:'high quality product',
        },
        {
         
            name:'MODULE CAPTEUR ULTRASON SRF05',
            category : 'Capteur',
            image:'/images/p2.jpg',
            price:9.200 ,
            rating:4.0,
            numReviews:15,
            countInStock:2,
            description:'high quality product',
        },
        {
         
            name:'DOUCHETTE BARCODE 1D LASER USB',
            category : 'Capteur',
            image:'/images/p3.jpg',
            price:112.000,
            rating:3.5,
            numReviews:20,
            countInStock:3,
            description:'high quality product',
        },
        {
          
            name:'DHT11 Module Capteur Temperature ',
            category : 'Capteur',
            image:'/images/p4.jpg',
            price:6.800 ,
            rating:5,
            numReviews:12,
            countInStock:4,
            description:'high quality product',
        },
        {
        
            name:'Capteur De Tension C11A063 ',
            category : 'Capteur',
            image:'/images/p5.jpg',
            price:7.000,
            rating:4.5,
            numReviews:13,
            countInStock:5,
            description:'high quality product',
        }
    ]
}
module.exports=data