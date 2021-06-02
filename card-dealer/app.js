window.onload = () => {
    let suit = generateRandomSuit();
    document.querySelector('.top').innerHTML = suit;
    document.querySelector('.bottom').innerHTML = suit;
    document.querySelector('.number').innerHTML = (generateRandomNumber());
};
 let generateRandomNumber = () => {
     let numbers = ["A", "1", "2", "3","4","5","6","7","8","9","10","J","Q","K"];
     let indexnumbers = Math.floor(Math.random() * numbers.length);
     return numbers[indexnumbers]
 };
 let generateRandomSuit = () => {
     let suit = ["&diams;","&spades;","&hearts;","&clubs;"];
     let indexsuit = Math.floor(Math.random() * suit.length);
     return suit[indexsuit];
 };
