document.getElementById("submitBtn").addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  let item = document.createElement("li");
  let textInput = document.getElementById("input-field").value;
  item.innerText = textInput;

  // To insure the input field isn't empty
  if (textInput === "") {
    return;
  } else {
    // To insert the text entered in the input field into the comments on the right
    document.getElementById("list").appendChild(item);

    // To reset the input field to empty
    document.getElementById("input-field").value = "";

    // To add the class "new-item" so the CSS Animation takes place
    item.classList.add("new-item");

    // To remove the class "new-item" once the CSS Animation is over
    // setTimeout(function () {
    //   item.classList.remove("new-item");
    // }, 2000);
  }
});
// document.getElementById("submit-name").addEventListener("click", (event) => {
// console.log(event);
    
// });
