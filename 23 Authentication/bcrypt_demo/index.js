import bcrypt from "bcrypt";

// const hashPassword = async (pwd) => {
//   const salt = await bcrypt.genSalt(12);
//   //this just generates the salt, works really quickly
//   //actually hashing the password is what takes time
//   const hashedPassword = await bcrypt.hash(pwd, salt);
//   console.log(salt);
//   console.log(hashedPassword);
// };

const hashPassword = async (pwd) => {
  const hash = await bcrypt.hash(pwd, 12);
  console.log(hash);
};

/**
    o/p: 
    $2b$10$6NBskzPutvepvhfKrG7i9O
    $2b$10$6NBskzPutvepvhfKrG7i9OpqSvQ9slCDBYv9gGVpbioPxxvRTY4Qm
 */

const login = async (pswd, hP) => {
  const result = await bcrypt.compare(pswd, hP);
  result ? console.log("Logged you in!") : console.log("incorrect");
};

hashPassword("hello123");
login(
  "hello123",
  "$2b$12$8UvV6iJfKsRl0jWggOSrw.o9M/YBlAXDGWI7VDn5KEuSg6UVnK0MS"
);
