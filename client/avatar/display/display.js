Template.avatarDisplay.helpers({

});

Template.avatarDisplay.rendered = function() {
	
  var stage = new Kinetic.Stage({
        container: "avatar-display",
        width: 625,
        height: 680
      });

  var layer = new Kinetic.Layer();

  stage.add(layer);

  //subscribe the layer with equipment updates
  Deps.autorun(function () {
    drawItems(layer);
  });

};

var drawItem = function (equippedItem, layer) {
  _.each(equippedItem.item.layers, function(itemLayer) {
    var img = new Image();
    img.src = "images/"+itemLayer.filename;
    img.onload = function() {
      var kImg = new Kinetic.Image({
        image: img
      });
      layer.add(kImg);
      console.log(itemLayer.zindex);
      kImg.setZIndex(50);
      console.log(kImg.getZIndex());
    };
  }); 
};

var drawItems = function(layer) {
  // clear the canvas before a redraw
  if (layer) {
    layer.removeChildren();
    layer.clear();
  }

  EquippedItems.find({ "user_id" : Meteor.userId() }).forEach( function(equippedItem) {
    drawItem(equippedItem, layer);
    layer.draw();
  });

};