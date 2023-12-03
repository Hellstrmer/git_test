const path = require('path');
const fs = require('fs');
const input = fs
	.readFileSync(path.join(__dirname, 'example.txt'), 'utf8')
	.toString()
	.trim();

let data = input.split('\n');

const meRPS = {
    rock: 'X',
    papper: 'Y',
    scissors: 'Z'
}

const oppRPS = {
    rock: 'A',
    papper: 'B',
    scissors: 'C'
}
// 3 = Rock
//2 = Scissor
//1 = paper
const score = {
    3: 1,
    1: 2,
    2: 3,
    loose: 0,
    draw: 3,
    win: 6
}
//console.log(Object.keys(score)[0])


const SortToObject = (input) => {
    const obj = {
        me: [],
        opp: [],   
    }
    for (let i = 0; i < input.length; i++) {
        obj.me[i] = input[i][0]
        obj.opp[i] = input[i][2]
    } return obj;
}


const pointsExp = (input) => {
    output = ''
    switch(input) {
        case 'X' :
            output = '3';
            break;
        case 'A' :
            output = '3';
            break;
        case 'Y' :
            output = '1';
            break;
        case 'B' :
            output = '1'; 
            break;
        case 'Z' :
            output = '2';
            break;
        case 'C' :
            output = '2';     
            break;
    } return output;
} 

const game = (input, score) => {
    let pointsMe = 0;
    let pointsOpp = 0;    
    rounds = input.me.length;
    //console.log(input)
    console.log(Object.keys(meRPS))
    for (let i=0; i< input.me.length;i++) {

        
        if(pointsExp(input.me[i]) === pointsExp(input.opp[i])) {
            // console.log(pointsExp(input.me[i]))
            // console.log(input.opp[i])
            
            console.log(score.draw)
        pointsMe += score.draw;
        console.log(`game 1 + ${pointsMe}` );
        pointsOpp += score.draw;
        } else if (pointsExp(input.me[i]) > pointsExp(input.opp[i])) {
            //console.log(Object.keys(score)[Number(i)])
            pointsMe = (pointsMe + score.win) + Number(Object.keys(score)[i+1]);
            console.log(`game 1 + ${pointsMe}` );
        } else if (pointsExp(input.me[i]) < pointsExp(input.opp[i])) {
            //console.log(i)
            //console.log(Object.keys(score)[i])
            pointsMe = (pointsMe + score.loose) + Number(Object.keys(score)[i+1]);
            console.log(`game 1 + ${pointsMe}` );
        }
    }
    console.log(pointsMe)
    //console.log(pointsOpp)
}   

const sort = SortToObject(data);

//console.log(sort)
//console.log(sort.length)
const game1 = game(SortToObject(data), score)

