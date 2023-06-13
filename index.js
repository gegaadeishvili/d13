let countdown = 10;

function countdownTimer() {
  if (countdown > 0) {
    console.log(countdown);
    countdown--;
  } else {
    console.log("Happy New Year!");
    clearInterval(timer);
  }
}

const timer = setInterval(countdownTimer, 1000);

function calculateYearsUntilRetirement(name, age, retirementAge) {
    const yearsLeft = retirementAge - age;
  
    if (yearsLeft > 0) {
      console.log(`${name} has ${yearsLeft} years left until retirement.`);
    } else if (yearsLeft === 0) {
      console.log(`${name} can retire this year!`);
    } else {
      console.log(`${name} is already retired.`);
    }
  } 
  git push --set-upstream origin d13

  calculateYearsUntilRetirement("gega", 35, 65);
  calculateYearsUntilRetirement("nika", 50, 60);
  calculateYearsUntilRetirement("gocha", 70, 65);