
interface Product{
    description: string;
    price: number;
}

const phone:Product={
    description: 'Samsung Galaxy S21',
    price: 1000
}
const tablet:Product={
    description: 'iPad Pro',
    price: 1200
}

interface taxCalculatorOptions{
    products: Product[];
    tax: number;
}

function taxCalculator(options:taxCalculatorOptions):number[]{

    let total=0;
    options.products.forEach((product:Product)=>{
        total+=product.price;
    });
    return [total,total*options.tax];

}

const shoppingCart=[phone,tablet];
const tax=0.16;

const result = taxCalculator({products:shoppingCart,tax});

console.log('Total:',result[0]);
console.log('Tax:',result[1]);
export{}