function flickSwitch(arr){
  let returning = true;
    return arr.map( (v) => {
      return (v === "flick") ? returning = !returning : returning;
    })
}
