Template.avatarDisplay.helpers({

});

Template.avatarDisplay.rendered = function() {

  //global stage should be file scoped
  stage = new createjs.Stage("avatar-canvas");

  //rerun the drawing process if equipment changes
  Deps.autorun(function () {
    drawItems(stage);
  });

};

var drawItem = function (equippedItem) {
  //draw each layer of the item
  _.each(equippedItem.item.layers, function(itemLayer) {
    if (stage.getChildByName)
    var img = new Image();
    img.src = "images/"+itemLayer.filename;
    var bitmap = new createjs.Bitmap(img);
    stage.removeChildAt(itemLayer.zindex);
    stage.addChild(bitmap);
    stage.setChildIndex(bitmap, itemLayer.zindex);
    console.log(itemLayer.zindex+itemLayer.filename);
    console.log(stage.getChildIndex(bitmap)+img.src);
    img.onload = function() {
      stage.update();
    };
  }); 
};

var drawItems = function() {

  //clear before redraw
  stage.removeAllChildren();

  //init 255 layers
  for (var _i=0; _i < 255; _i++) {
    stage.addChild(new createjs.Bitmap());
  }

  EquippedItems.find({ "user_id" : Meteor.userId() }).forEach( function(equippedItem) {
      drawItem(equippedItem);
  });

};