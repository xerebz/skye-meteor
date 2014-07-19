Meteor.startup(function() {

  //array of equippables
  var equippables_fixtures = [
	  {	"name": "Periwinkle Skye Citizen Uniform Blouse",
	  	"gender": "female",
	  	"layers": [
	  	  {
	  	  	"filename": "SkyeERCitizen-PeriwinkleNWhite-Blouse.png"
	  	  	"z-index": 100
	  	  }
	  	]
	  },
    { "name": "Navy Skye Citizen Uniform Dress Shirt",
    	"gender": "male",
    	"layers": [
	  	  {
	  	  	"filename": "SkyeERCitizenUniform-Navy-DressShirt.png"
	  	  	"z-index": 50
	  	  }
	  	]
	  },
	  { "name": "Navy Skye Citizen Uniform Dress Shirt",
    	"gender": "male",
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
				},
	  	]
	  }
	];
  
  //start fresh
	Equippables.remove({});

  //insert fixtures into db
	if ( Equippables.find().count() === 0 ) {
	  _.each(equippables_fixtures, function(fixture) {
	  	Equippables.insert(fixture);
	  });
	}

});