Template.avatarDisplay.rendered = function() {

  //remove 'select on double click' bug
  var canvas = document.getElementById('avatar-canvas');
  canvas.onselectstart = function () { return false; }

  //global stage should be file scoped
  stage = new createjs.Stage("avatar-canvas");

  //rerun the drawing process if equipment changes

  Deps.autorun(function () {
    var equippedItems = EquippedItems.find({ "userId" : Meteor.userId() });
    console.log(equippedItems);
    console.log("hey");
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

    //layer type -> stacking order mapping
    var defaultLayeringPriorityTable = {
      {layerType: 'hair_accessory', stackingPriority: 122},
      {layerType: 'hair_front', stackingPriority: 120},
      {layerType: 'shirt', stackingPriority: 114},
      {layerType: 'bralette', stackingPriority: 113}
    };

    var computedPriority = 0;

    //mock-up of layering logic, if it has a layer type, use that, otherwise, use the custom stacking priority 
    if (itemLayer.layerType) {
      computedPriority = _.where(defaultLayeringPriorityTable, {layerType:itemLayer.layerType};
    } else if (itemLayer.zindex) {
      computedPriority = itemLayer.zindex;
    }

    //fit the item into the computed (above) canvas
    stage.addChild(bitmap);
    stage.swapChildrenAt(256, computedPriority);
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
