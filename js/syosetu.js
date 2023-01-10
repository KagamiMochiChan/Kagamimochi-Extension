document.addEventListener("mouseup", event => {
  if (event.button === 4) {
    var list = location.pathname.split("/");
    if (list.length > 3) {
      location.pathname = `/${list[1]}/${Number(list[2]) + 1}/`;
    }
  }
});