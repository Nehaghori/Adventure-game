import inquirer from "inquirer";

class Hero{
    name : string;
    health: 100;

    constructor(name: string){
        this.name = name
    }
    decreaseHealth(){
        this.health -= 20
    }
    increaseHealth(){
        this.health = 100
    }
}

class Enemy {
    name : string;
    health: 100;

    constructor(name: string){
        this.name = name
    }
    decreaseHealth(){
        this.health -= 20
    }
    increaseHealth(){
        this.health = 100
    }
}
async function main(){
    const { heroName } = await inquirer.prompt([
        {
            type : "input",
            name: "heroName",
            message: " enter your Hero Name:"
        }
    ])
    }

async function main(){
    const { enemyType } = await inquirer.prompt([
        {
            type : "input",
            name: "enemyType",
            choices: ["alien","witch","zombie"],
            message: "select the enemy you fight with:"
        }
    ])
}

const hero = new Hero (heroName);
const enemy = new Enemy(enemyType);

console.log('${enemy.name} v/s ${hero.name}')
do {
    const {action} = await inquirer.prompt([
        {
            type : "list",
            name: "action",
            choices: ["attack","defend","range target","run"],
        }
    ])
}
switch(action) {
    case "Attack":
    const randomNum = Math.random();
    if (randomNum > 0.5){
        hero.decreaseHealth();
        console.log('${hero.name} health: ${hero.health}');
        console.log('${enemy.name} health: ${enemy.health}');
        if (hero.health <= 0) {
            console.log("you loss! try again")
            return
        }
    } else {
        enemy.decreaseHealth()
        hero.decreaseHealth();
        console.log('${hero.name} health: ${hero.health}');
        console.log('${enemy.name} health: ${enemy.health}');
        if (hero.health <= 0) {
            console.log("you loss! try again")
            return
        }
    }
    break;
}
while(true);
main();