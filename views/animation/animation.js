var input = document.querySelector("input");
var para = document.querySelector("p");
var text = para.innerHTML;
var words = text.split(" ");
var ids = [];
var index = 0;
function highlightSearch() {
  for (i = 0; i <= words.length; i++) {
    if (words[i] === input.value) {
      words[i] = "<span class='colors' id=" + i + ">" + input.value + "</span>";
      ids.push(i);
      para.innerHTML = words.join(" ");
    }
  }
  document.getElementById("result").innerHTML = `Search result : ${
    ids.length
  } `;
}
function next() {
  if (index != 0 || index > 0 || index < 0) {
    document.getElementById(ids[index - 1]).style.color = "white";
    document.getElementById(ids[index - 1]).style.background = "red";
  }
  document.getElementById(ids[index]).style.color = "white";
  document.getElementById(ids[index]).style.background = "orange";
  document.getElementById(ids[index]).scrollIntoView();
  if (ids.length - 1 == index) {
    index = 0;
  } else {
    index++;
  }
}
function prev() {
  if (index == 1) {
    return false;
  }
  if (ids[index - 1] == ids[index - 1]) {
    document.getElementById(ids[index - 1]).style.color = "white";
    document.getElementById(ids[index - 1]).style.background = "red";
    index--;
  }
  document.getElementById(ids[index]).scrollIntoView();
  document.getElementById(ids[index - 1]).style.color = "white";
  document.getElementById(ids[index - 1]).style.background = "orange";
}
