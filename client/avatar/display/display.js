Template.avatarDisplay.rendered = function() {

  //remove 'select canvas on double click'
  var canvas = document.getElementById('avatar-canvas');
  canvas.onselectstart = function () { return false; }

  //global stage should be file scoped
  stage = new createjs.Stage('avatar-canvas');

  //rerun the drawing process if equipment changes

  Deps.autorun(function () {
    var equippedItems = EquippedItems.find({ 'userId' : Meteor.userId() });
    drawItems(equippedItems.fetch());
  });

  // autorun for briefs
  // Deps.autorun(function() {
  //  if (EquippedItems({'user-id': Meteor.userId(), 'item.category': 'pants'}).count() === 0) {
  //    UserItems({'user-id': Meteor.userId(), 'item.name': 'Disappearing Briefs'});
  //    Meteor.call('handleEquip', this.item);
  //  }
  // });

};

//layer type -> stacking order mapping
var defaultLayering = {
  'hair': 124,
  'makeup': 123,
  'tights': 122,
  'mouth': 121,
  'outerwear': 120,
  'background': 10,
  'eyebrows': 120,
  'eyes': 101,
  'bgitem': 50,
  'glasses': 131,
  'pants': 102,
  'shoes': 99,
  'shirt': 104,
  'skirt': 105,
  'briefs': 90,
  'pet': 200,
  'scarf': 106,
  'blouse': 107,
  'stockings': 98,
  'headphones': 109
}

var drawItem = function (equippedItem) {
  //draw each layer of the item
  _.each(equippedItem.item.layers, function(itemLayer) {
    if (stage.getChildByName)
    var img = new Image();
    img.src = 'images/'+itemLayer.filename;
    var bitmap = new createjs.Bitmap(img);

    var computedPriority = 0;

    //mock-up of layering logic, if it has a layer type, use that, otherwise, use the custom stacking priority 
    if (defaultLayering[equippedItem.category]) {
      computedPriority = defaultLayering[equippedItem.category];
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
