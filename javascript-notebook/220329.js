// Case 01. Callback
// TODO: text me
function callbackFunc() {
  console.log(1)
  function innerFunc() {
    console.log(2)
  }
  innerFunc()
}

callbackFunc()
