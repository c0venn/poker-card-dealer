window.onload = () => {
    document.querySelector('.top').classList.add(genereateRandomSuit());
    document.querySelector('.bottom').classList.add(genereateRandomSuit());
    document.querySelector('.number').innerHTML = generateRandomNumber();
};
 let generateRandomNumber = () => {
     let numbers = ["A", "1", "2", "3","4","5","6","7","8","9","10","J","Q","K"];
     let indexnumbers = Math.floor(Math.random() * numbers.length);
     return number[indexnumbers]
 };
 let genereateRandomSuit = () => {
     let suit = ["diamond","spade","heart","club"];
     let indexsuit = Math.floor(Math.random() * suit.length);
     return suit[indexsuit];
 };
