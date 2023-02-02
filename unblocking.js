function nonblocking(name, callback) {
  ////☁️
  setTimeout(() => {
    console.log("Hello " + name);
    callback(name + " is done");
  }, 2000);
}
// function nonblocking(name) {
//   //🍉
//   setTimeout(() => {
//     console.log("Hello " + name);
//   }, 2000);
// }

const name = "John";
nonblocking(name, name => console.log(name)); ////☁️
// const result = nonblocking(name); //🍉
// console.log("I am done", result); //🍉
