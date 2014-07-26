Template.avatarDisplay.rendered = function() {

  //remove 'select on double click' bug
  var canvas = document.getElementById('avatar-canvas');
  canvas.onselectstart = function () { return false; }

  //global stage should be file scoped
  stage = new createjs.Stage("avatar-canvas");

  //rerun the drawing process if equipment changes

  Deps.autorun(function () {
    var equippedItems = EquippedItems.find({ "userId" : Meteor.userId() });
    drawItems(equippedItems.fetch());
  });

  // autorun for briefs
  // Deps.autorun(function() {
  //  if (EquippedItems({"user-id": Meteor.userId(), "item.category": "pants"}).count() === 0) {
  //    UserItems({"user-id": Meteor.userId(), "item.name": "Disappearing Briefs"});
  //    Meteor.call('handleEquip', this.item);
  //  }
  // });

};

var drawItem = function (equippedItem) {
  //draw each layer of the item
  _.each(equippedItem.item.layers, function(itemLayer) {
    if (stage.getChildByName)
    var img = new Image();
    img.src = "images/"+itemLayer.filename;
    var bitmap = new createjs.Bitmap(img);
    stage.addChild(bitmap);
    stage.swapChildrenAt(256, itemLayer.zindex);
    stage.removeChildAt(256);
    img.onload = function() {
      stage.update();
    };
  }); 
};

var drawItems = function(equippedItems) {

  //clear before redraw
  stage.removeAllChildren();
  
  //init 255 layers
  for (var _i=0; _i < 256; _i++) {
    stage.addChild(new createjs.Bitmap());
  }

  _.each(equippedItems, function(equippedItem) {
    drawItem(equippedItem);
  });

};
