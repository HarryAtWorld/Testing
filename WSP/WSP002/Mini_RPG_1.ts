// Declaration of Class and its methods
class Player{
    private strength:number;
    private name:string;
    constructor(strength:number,name:string){
        this.strength  = strength;
        this.name = name;
    }


    attack(monster:Monster){
        let isCritical:number = Math.round(Math.random())
        let damage:number 

        if(isCritical===0){
            damage = this.strength
        } else{
            damage = this.strength*2
        }
        
        monster.injure(damage)
        console.log(`Player ${this.name} attacked a monster (HP: ${monster.hp})`)

    }



    gainExperience(exp:number){

    }

}


class Monster{
    // Think of how to write injure
    hp = 100;

    injure(strength:number):void{
        this.hp =this.hp - strength
    }
}


// Invocations of the class and its methods
const player = new Player(10,'Peter');
const monster = new Monster();
player.attack(monster);
player.attack(monster);
player.attack(monster);
player.attack(monster);
player.attack(monster);
player.attack(monster);
player.attack(monster);
player.attack(monster);
player.attack(monster);
player.attack(monster);

// English counterpart: Player attacks monster