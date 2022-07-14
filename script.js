
// console.log("Hello");
function computerPlay()
{
    let x = Math.floor((Math.random() * 10)+1);

    if (x % 2 == 0) {
        if (x % 4 == 0) {
            return "Rock";
        } else {
            return "Scissors";
        }
    }

    else {
        return "Paper";
    }
}




function printWinner(p,c,res)
{
    if(res ===1)
    {
        console.log("You Win!"+p+" beats "+c);
    }

    else if(res ===2)
    {
        console.log("Its a tie");   
    }

    else if(res ===0)
    {
        console.log("You lose! "+c+" beats "+p);
    }
}

function playRound()
{
    let computerSelection = computerPlay();
    let playerSelection = prompt("Enter Rock Paper or Scissors");
    let p = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let c = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    let res = 5;
    if(p==="Rock")
    {
        if(c==="Scissors")
        {
            res =1;
        }

        else if (c===p)
        {
           res = 2;
        }

        else
        {
           res = 0;
        }
    }

    if (p==="Scissors") 
    {
        if(c==="Paper")
        {
            res = 1;
        }    

        else if(c===p)
        {
            res =2;
        }

        else 
        {
            res = 0;
        }
    }

    if (p==="Paper") 
    {
        if(c==="Rock")
        {
            res = 1;
        }    

        else if(c===p)
        {
            res =2;
        }

        else 
        {
            res = 0;
        }
    }

    printWinner(p,c,res);
    return res;

}

function game()
{ 
    let countComWin = 0 ;
    let countPlayerWin = 0;
    let res = 6;
    for (let i = 0; i <5; i++) 
    {
        console.log("Round "+(i+1));
        res = playRound();

        if(res ===1)
        {
            countPlayerWin++;
        }

        else if(res === 0)
        {
            countComWin++;
        }
    }

    if(countComWin>countPlayerWin)
    {
        console.log("You Loose after 5 Rounds");
    }

    else if(countPlayerWin>countComWin)
    {
        console.log("You Win after 5 Rounds");
    }

    else{
        console.log("Its a tie");
    }

}

