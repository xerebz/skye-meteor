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
    var img = new Image();
    img.src = "images/"+itemLayer.filename;
    var bitmap = new createjs.Bitmap(img);
    stage.addChild(bitmap);
    stage.setChildIndex(bitmap, itemLayer.zindex);
    img.onload = function() {
      stage.update();
    };
  }); 
};

var drawItems = function() {

  EquippedItems.find({ "user_id" : Meteor.userId() }).forEach( function(equippedItem) {
    drawItem(equippedItem);
  });

};