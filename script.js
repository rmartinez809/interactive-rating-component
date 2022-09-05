//record rating when value is clicked
//change appearance of rating value
//when submit button is hit:
    //check if rating has been selected.
      //if false: show popup
      //if true: set rating-state display to 'none'
    //show 'Thank you' state


let rating = 0;
let element;

let setRating = (value) => {
    if (!element) {
        element = document.getElementById(value);
        rating = value;
        element.classList.add("rating-active");
    }

    else {
        element.classList.remove("rating-active");
        element = document.getElementById(value);
        rating = value;
        element.classList.add("rating-active");
    }
}

let submitRating = () => {
    let stateRating = document.getElementById("state-rating");
    let stateThankYou = document.getElementById("state-thank-you");

    if (!rating) alert("Please select a rating");

    else {
        stateRating.style.display="none";

        stateThankYou.style.display="block";
    }
}
