let listPage = [
  "homePage",
  "cvPage",
  "articlePage",
  "hobbyPage",
  "contactPage",
];
function changeMenuTo(span1) {
  for (let i = 0; i < listPage.length; i++) {
    if (listPage[i] == span1) {
      // show page
      let classPage = document.getElementById(span1).classList;
      classPage.remove("hide-page");
      continue;
    }

    // hide page
    let classPage = document.getElementById(listPage[i]).classList;
    classPage.add("hide-page");
  }
}

changeMenuTo("homePage");
