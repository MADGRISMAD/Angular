

function addNumbers(a:number,b:number){
    return a+b;


}

const addNumbersArrow=(a:number,b:number):string => {
    return `${a+b}`;

}

function multiply(firstNumber:number, secondNumber?:number,base:number=2){
    return firstNumber*base;

}

// const result: number= addNumbers(1,2)
// const result2: string= addNumbersArrow(1,2)
// const result3: number= multiply(5)

// console.log({result,result2,result3});

interface Character {
    name: string;
    hp: number;
    showHp:()=>void;
   


}

const healCharacter =(character:Character,amount:number)=>{
    character.hp+=amount;
    


}

const strider ={
    name: "Strider",
    hp: 100,
    showHp(){
        console.log(`HP: ${this.hp}`);
        
    }
}
healCharacter(strider,20)
strider.showHp();


export {}