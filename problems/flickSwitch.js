function flickSwitch(arr) {
  let newarray = [];
  let switchM = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      switchM = !switchM;
      newarray.push(!switchM);
    } else {
      newarray.push(!switchM);
    }
  }
  return newarray;
}
console.log(flickSwitch(arr));
