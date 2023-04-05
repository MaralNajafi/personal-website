function getMyAge() {
  const now = new Date().getUTCFullYear();
  const myBirthday = new Date("1999 July 1").getUTCFullYear();
  const myAge = now - myBirthday;
  return myAge;
}

const MY_AGE = getMyAge();
export default MY_AGE;
