function search() {
    //get input value
    const input = document.getElementById('filter').value.toUpperCase();
    const cardContainer = document.getElementById('card-lists');
    //console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('card');
    //console.log(cards);


    for(let i = 0; i < cards.length; i++){
        let title = cards[i].querySelector(".card-body p.card-title");
        //console.log(title);
        //Check if input is similar to paragraph in the card
        if(title.innerText.toUpperCase().indexOf(input) > -1){
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}