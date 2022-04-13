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
// reference to 'scripts' select list 
// used throughout the examples below


// display value property of select list (from selected option)

// reference to selected option
// const opt = sel.options[sel.selectedIndex];
// display value and text property values
// console.log( opt.value );
// console.log( opt.text );
 const sel = document.getElementById('Agent-select');
 
//  const opt = sel.options[sel.selectedIndex];
// 

function getSelectedOption(sel) {
    let opt;
    for ( let i = 0, len = sel.options.length; i < len; i++ ) {
        opt = sel.options[i];
        if ( opt.selected === true ) {
            break;
        }
    }
    return opt;
}
 const opt = getSelectedOption(sel);
console.log( opt.value);
// console.log( opt.text);

document.getElementById("submit-name").addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  let itemTwo = document.createElement("li");
  let textInputTwo = opt.value;
  itemTwo.innerText = textInputTwo;
  // To insure the input field isn't empty
  if (textInputTwo === "") {
    return;
  } else {
    // To insert the text entered in the input field into the comments on the right
    document.getElementById("todo-list").appendChild(itemTwo);

    // To add the class "new-item" so the CSS Animation takes place
    item.classList.add("new-itemTwo");

    // To remove the class "new-item" once the CSS Animation is over
    // setTimeout(function () {
    //   item.classList.remove("new-item");
    // }, 2000);
  }
});