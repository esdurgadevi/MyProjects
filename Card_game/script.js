
class MixOrMatch{
    constructor(totalTime,cards){
        this.cardsArray = cards;//all cards
        this.totalTime = totalTime;//50
        this.timeRemaining = totalTime;//starting total time is remaning time
        this.timer = document.getElementById('time-re');//select the html timer
        this.ticker = document.getElementById('flips-re');//select the html flips
    }
    startGame(){
        this.cardTocheck = null;
        this.totalClicks = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(()=>{
            this.shuffleCards(this.cardsArray);
            this.countdown = this.startCountDown();
            this.busy = false;
        },500);
        this.hideCards();
        this.timer.innerText = this.timeRemaining;
        this.ticker.innerText = this.totalClicks;
    }
    hideCards(){
        this.cardsArray.forEach(card=>{
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    }
    flipCard(card)
    {
        if(this.canFlipCard(card))
        {
            this.totalClicks++;
            this.ticker.innerText = this.totalClicks;
            card.classList.add('visible');
            if(this.cardTocheck)
            {
                this.checkForCardMatch(card);
            }
            else
            {
                this.cardTocheck=card;
            }
        }
    }
    checkForCardMatch(card)
    {
        if(this.getCardType(card)===this.getCardType(this.cardTocheck))
        {
            this.cardMatch(card,this.cardTocheck);
        }
        else
        {
            this.cardMisMatch(card,this.cardTocheck);
        }
        this.cardTocheck = null;
    }
    cardMatch(card1,card2)
    {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        if(this.matchedCards.length === this.cardsArray.length)
        {
            this.victory();
        }
    }
    cardMisMatch(card1,card2)
    {
        this.busy = true;
        setTimeout(()=>{
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        },2000);
    }
    getCardType(card)
    {
        return card.getElementsByClassName('card-value')[0].src;
    }
    startCountDown(){
        return setInterval(()=>{
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if(this.timeRemaining===0)
            {
                this.gameOver();
            }
        },1000);
    }
    gameOver()
    {
        clearInterval(this.countdown);
        document.getElementById('game-over-text').classList.add('visible');
    }
    victory(){
        clearInterval(this.countdown);
        document.getElementById('victory-text').classList.add('visible');
    }
    shuffleCards(cardsArray){
        for(let i=this.cardsArray.length - 1;i>0;i--){
            let randomIndex = Math.floor(Math.random()*(i+1));
            this.cardsArray[randomIndex].style.order = i;
            this.cardsArray[i].style.order = randomIndex;
        }
    }
    canFlipCard(card){
        return (!this.busy && !this.matchedCards.includes(card) && card !== this.cardTocheck);
    }
}

if(document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded',ready);
}
else{
    ready();
}
    

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MixOrMatch(50,cards);
    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });
    
    cards.forEach(card=>{
        card.addEventListener('click',()=>{
            game.flipCard(card)
        });
    });

}

