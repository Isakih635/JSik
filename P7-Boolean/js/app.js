const birthYear =2010;
const currentyear =2024
let ageOfPerson =currentyear - birthYear;

let isChild = (ageOfPerson <= 0) && (ageOfPerson <=10);

let isTeenager = (ageOfPerson <= 11) && (ageOfPerson <= 17);

let isAdult = (ageOfPerson >= 18);

console.log(isChild);
console.log(isTeenager);
console.log(isAdult);

let playerTouchGround = false;
let playerHasJetPack = true;

if (playerTouchGround) {
  console.log("Player is on the ground.");
  console.log("Player can jump.");
}

else if (playerHasJetPack) {
  console.log("Player can Jet Away");
}

else {
console.log("Player is NOT on the ground!");
console.log("Player CANNOT jump!");
}



