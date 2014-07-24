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
	  	  	"zindex": 101
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
	  	  	"zindex": 100
	  	  }
	  	]
	  },
	  { "name": "Homecoming Trail Background",
    	"itempack": "starter",
	  	"thumbnail": "HomecomingTrail-Background.png",
	  	"category": "top",
	  	"type": "background",
    	"layers": [
	  	  {
	  	  	"filename": "HomecomingTrail-Background.png",
	  	  	"zindex": 10
	  	  }
	  	]
	  },
	  { "name": "Male A Body",
    	"gender": "male",
    	"category": "body",
    	"itempack": "starter",
    	"layers": [
				{
					"filename": "MaleA_Arm_Back.png",
					"zindex": 51
				},
				{
					"filename": "MaleA_Arm_Front.png",
					"zindex": 52
				},
				{
					"filename": "MaleA_Feet.png",
					"zindex": 53
				},
				{
					"filename": "MaleA_Hand_Back.png",
					"zindex": 54
				},
				{
					"filename": "MaleA_Hand_Front.png",
					"zindex": 55
				},
				{
					"filename": "MaleA_Head.png",
					"zindex": 56
				},
				{
					"filename": "MaleA_Legs.png",
					"zindex": 57
				},
				{
					"filename": "MaleA_Torso.png",
					"zindex": 58
				}
	  	]
	  }
	];

	Items.remove({});
  
  //insert fixtures into db
	if ( Items.find().count() === 0 ) {
	  _.each(items_fixtures, function(fixture) {
	  	Items.insert(fixture);
	  });
	}

});