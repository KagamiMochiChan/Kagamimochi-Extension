var list = location.pathname.split("/");
list.shift();
if (list[0] != "ja") {
  list.shift();
  var path = "/ja";
  list.forEach(element => {
    path += "/" + element;
  });
  location.pathname = path;
}