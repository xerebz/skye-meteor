Meteor.startup(function() {

  //array of items
  var items_fixtures = [
	  {	"name": "Periwinkle Skye Citizen Uniform Blouse",
	  	"gender": "female",
	  	"itempack": "starter",
	  	"thumbnail": "SkyeERCitizen-PeriwinkleNWhite-Blouse.png",
	  	"category": "top",
	  	"type": "blouse",
	  	"layers": [
	  	  {
	  	  	"filename": "SkyeERCitizen-PeriwinkleNWhite-Blouse.png",
	  	  	"z-index": 100
	  	  }
	  	]
	  },
    { "name": "Navy Skye Citizen Uniform Dress Shirt",
    	"gender": "male",
    	"itempack": "starter",
	  	"thumbnail": "SkyeERCitizenUniform-Navy-DressShirt.png",
	  	"category": "top",
	  	"type": "dress shirt",
    	"layers": [
	  	  {
	  	  	"filename": "SkyeERCitizenUniform-Navy-DressShirt.png",
	  	  	"z-index": 50
	  	  }
	  	]
	  },
	  { "name": "Male A Body",
    	"gender": "male",
    	"category": "body",
    	"layers": [
				{
					"filename": "MaleA_Arm_Back.png",
					"z-index": 51
				},
				{
					"filename": "MaleA_Arm_Front.png",
					"z-index": 52
				},
				{
					"filename": "MaleA_Feet.png",
					"z-index": 53
				},
				{
					"filename": "MaleA_Hand_Back.png",
					"z-index": 54
				},
				{
					"filename": "MaleA_Hand_Front.png",
					"z-index": 55
				},
				{
					"filename": "MaleA_Head.png",
					"z-index": 56
				},
				{
					"filename": "MaleA_Legs.png",
					"z-index": 57
				},
				{
					"filename": "MaleA_Torso.png",
					"z-index": 58
				}
	  	]
	  }
	];
  
  //start fresh
	Items.remove({});

  //insert fixtures into db
	if ( Items.find().count() === 0 ) {
	  _.each(items_fixtures, function(fixture) {
	  	Items.insert(fixture);
	  });
	}

});