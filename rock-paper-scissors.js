let result='';


      let score=JSON.parse(localStorage.getItem(`score`))|| {
          wins:0,
          loses:0,
          ties:0
        };

        if (!score || typeof score !== "object") {
        score = { wins: 0, loses: 0 ,ties:0}; // Initialize if null or not an object
      }

      localStorage.getItem(JSON.parse(localStorage.getItem(`score`)));


      updateScoreElement();


    function playGame(playerMove)
    {
      if(playerMove===`Scissors`)
      {
        if(computerMove===`Rock`)
        {
          result=`You lose.`;
        }else if(computerMove===`Paper`)
        {
          result=`You win.`;
        }else if(computerMove===`Scissors`)
        {
          result=`Tie.`;
        }
        
      }else if(playerMove===`Paper`)
      {
        if(computerMove==='Rock')
        {
          result='You win.';
        }else if(computerMove==='Paper')
        {
          result='Tie.';
        }else if(computerMove==='Scissors')
        {
          result='You lose.';
        }else if(playerMove===`Rock`)
        {
          if(computerMove==='Rock')
          {
            result='Tie.';
          }else if(computerMove==='Paper')
           {
            result='You lose.';
          }else if(computerMove==='Scissors')
          {
            result='You win.';
         }
        }  
      }

      if(result===`You win.`)
      {
        score.wins+=1;
      }else if(result===`You lose.`)
      {
        score.loses+=1;
      }else if(result===`Tie.`)
      {
        score.ties+=1;
      }

      localStorage.setItem(`score`,JSON.stringify(score));

      updateScoreElement();

      document.querySelector(`.result`)
      .innerText=`${result}`;
      document.querySelector(`.moves`)
      .innerHTML=`You <img src="${playerMove}-emoji.png">  <img src="${computerMove}-emoji.png"> Computer`;
      
      
    }

    function updateScoreElement()
    {
      document.querySelector(`.js-score`)
      .innerHTML=`Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`;
    }

    //function 
    
    function pickComputerMove()
    {
    const randomNumber=Math.random();
    
    let computerMove='';

     if(randomNumber>=0 && randomNumber<1/3)
      {
        computerMove=`Rock`;
      }else if(randomNumber>=1/3 && randomNumber<2/3)
      {
        computerMove=`Paper`;
      }else
      {
        computerMove=`Scissors`;
      }

     return computerMove;
    }