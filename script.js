function checker() {
  var body = document.querySelector("body");
  //Each tile should be a div
  //Each tile's width is 11.1%
  //Set each tile's float property to left
  //Each tile's paddingBottom is 11.1%
  for (var row = 1; row <= 8; row++) {
    for (var col = 1; col <= 8; col++) {
      var tile = document.createElement("div");
      tile.style.width = "12.5%";
      tile.style.float = "left";
      tile.style.paddingBottom = "12.5%";
      if (row % 2 === 0 && col % 2 === 0) {
        tile.style.background = "black";
      } else if (row % 2 === 1 && col % 2 === 1) {
        tile.style.background = "black";
      } else {
        tile.style.background = "red";
      }
      body.append(tile);
    }
  }
}

checker();
