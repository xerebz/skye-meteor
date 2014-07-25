Meteor.startup(function() {

  //array of items
  var items_fixtures = [
		{
			"name": "BehindTheBlossoms-Pink-Hairstyle",
			"category": "hair",
			"gender": "neutral",
			"thumbnail": "BehindTheBlossoms-Pink-Hairstyle.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "BehindTheBlossoms-Pink-Hairstyle.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BehindTheBlossoms-Lavender-Hairstyle",
			"category": "hair",
			"gender": "neutral",
			"thumbnail": "BehindTheBlossoms-Lavender-Hairstyle.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "BehindTheBlossoms-Lavender-Hairstyle.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "WarmThermal-Snow-LongSleevedShirt",
			"category": "shirt",
			"gender": "male",
			"thumbnail": "WarmThermal-Snow-LongSleevedShirt.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "WarmThermal-Snow-LongSleevedShirt.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "FleepTheCloudsheep-HoveringPose",
			"category": "pet",
			"gender": "neutral",
			"thumbnail": "FleepTheCloudsheep-HoveringPose.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "FleepTheCloudsheep-HoveringPose.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "ChipperUpbeatNatural-ForestGreen-Eyes",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "ChipperUpbeatNatural-ForestGreen-Eyes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "ChipperUpbeatNatural-ForestGreen-Eyes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BehindTheBlossoms-Blush-Makeup",
			"category": "makeup",
			"gender": "neutral",
			"thumbnail": "BehindTheBlossoms-Blush-Makeup.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "BehindTheBlossoms-Blush-Makeup.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizenUniform-Navy-Jacket",
			"category": "outerwear",
			"gender": "male",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizenUniform-Navy-Jacket.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizenUniform-Navy-Jacket.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizenUniform-Navy-Slacks",
			"category": "pants",
			"gender": "male",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizenUniform-Navy-Slacks.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizenUniform-Navy-Slacks.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BehindTheBlossoms-Chestnut-Eyebrows",
			"category": "eyebrows",
			"gender": "neutral",
			"thumbnail": "BehindTheBlossoms-Chestnut-Eyebrows.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "BehindTheBlossoms-Chestnut-Eyebrows.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "Piqued-Mouth",
			"category": "mouth",
			"gender": "neutral",
			"thumbnail": "Piqued-Mouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "Piqued-Mouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizen-Navy-TracksuitJacket",
			"category": "outerwear",
			"gender": "male",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizen-Navy-TracksuitJacket.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "1of2SkyeERCitizen-Navy-TracksuitJacket.png",
			  	"zindex": 100
			  },
			  {
			  	"filename": "2of2SkyeERCitizen-Navy-TracksuitJacket.png",
			  	"zindex": 100
			  }
			]
		},
		{
			"name": "SpeakingContentedly-Mouth",
			"category": "mouth",
			"gender": "neutral",
			"thumbnail": "SpeakingContentedly-Mouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SpeakingContentedly-Mouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "CheckeredPuff-Purple-Scarf",
			"category": "scarf",
			"gender": "neutral",
			"thumbnail": "CheckeredPuff-Purple-Scarf.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "1of2CheckeredPuff-Purple-Scarf.png",
			  	"zindex": 100
			  },
			  {
			  	"filename": "2of2CheckeredPuff-Purple-Scarf.png",
			  	"zindex": 103
			  },
			]
		},
		{
			"name": "CheekyGrin-Mouth",
			"category": "mouth",
			"gender": "neutral",
			"thumbnail": "CheekyGrin-Mouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "CheekyGrin-Mouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "CalmingGaze-SiennaBrown-Eyebrows",
			"category": "eyebrows",
			"gender": "neutral",
			"thumbnail": "CalmingGaze-SiennaBrown-Eyebrows.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "CalmingGaze-SiennaBrown-Eyebrows.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizen-PinkNWhite-Skirt",
			"category": "skirt",
			"gender": "female",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizen-PinkNWhite-Skirt.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizen-PinkNWhite-Skirt.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizen-PinkNWhite-Blouse",
			"category": "blouse",
			"gender": "female",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizen-PinkNWhite-Blouse.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizen-PinkNWhite-Blouse.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "CheckeredPuff-Red-Scarf",
			"category": "scarf",
			"gender": "neutral",
			"thumbnail": "CheckeredPuff-Red-Scarf.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "1of2CheckeredPuff-Red-Scarf.png",
			  	"zindex": 100
			  },
			  {
			  	"filename": "2of2CheckeredPuff-Red-Scarf.png",
			  	"zindex": 105
			  }	  
			]
		},
		{
			"name": "SkyeERCitizenUniform-Navy-Loafers",
			"category": "shoes",
			"gender": "male",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizenUniform-Navy-Loafers.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizenUniform-Navy-Loafers.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "DraconianRule-Crimson-Eyebrows",
			"category": "eyebrows",
			"gender": "neutral",
			"thumbnail": "DraconianRule-Crimson-Eyebrows.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "DraconianRule-Crimson-Eyebrows.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizen-PinkNWhite-Stockings",
			"category": "stockings",
			"gender": "female",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizen-PinkNWhite-Stockings.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizen-PinkNWhite-Stockings.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BehindTheBlossomsFloppy-Pink-KnitSweater",
			"category": "outerwear",
			"gender": "female",
			"thumbnail": "BehindTheBlossomsFloppy-Pink-KnitSweater.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "BehindTheBlossomsFloppy-Pink-KnitSweater.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "GrumpySpectre-Indigo-Eyes",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "GrumpySpectre-Indigo-Eyes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "GrumpySpectre-Indigo-Eyes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BuddingBeat-White-Headphones",
			"category": "headphones",
			"gender": "neutral",
			"thumbnail": "BuddingBeat-White-Headphones.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "1of2BuddingBeat-White-Headphones.png",
			  	"zindex": 100
			  },
			  {
			  	"filename": "2of2BuddingBeat-White-Headphones.png",
			  	"zindex": 102
			  }
			]
		},
		{
			"name": "TrustingPeer-AgateGreen-Eyes",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "TrustingPeer-AgateGreen-Eyes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "TrustingPeer-AgateGreen-Eyes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizen-PeriwinkleNWhite-Loafers",
			"category": "shoes",
			"gender": "male",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizen-PeriwinkleNWhite-Loafers.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizen-PeriwinkleNWhite-Loafers.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "TrustingPeer-Gray-Eyebrows",
			"category": "eyebrows",
			"gender": "neutral",
			"thumbnail": "TrustingPeer-Gray-Eyebrows.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "TrustingPeer-Gray-Eyebrows.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "CalmingGaze-Eyes-GlassBlue",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "CalmingGaze-Eyes-GlassBlue.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "CalmingGaze-Eyes-GlassBlue.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BehindTheBlossoms-Auburn-Eyes",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "BehindTheBlossoms-Auburn-Eyes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "BehindTheBlossoms-Auburn-Eyes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizen-PeriwinkleNWhite-Stockings",
			"category": "stockings",
			"gender": "female",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizen-PeriwinkleNWhite-Stockings.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizen-PeriwinkleNWhite-Stockings.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SereneKindness-OceanBlue-Eyes",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "SereneKindness-OceanBlue-Eyes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SereneKindness-OceanBlue-Eyes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizenUniform-Navy-DressShirt",
			"category": "shirt",
			"gender": "male",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizenUniform-Navy-DressShirt.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizenUniform-Navy-DressShirt.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "PeppyPreppy-Raspberry-PonytailHairstyle",
			"category": "hair",
			"gender": "female",
			"thumbnail": "PeppyPreppy-Raspberry-PonytailHairstyle.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "PeppyPreppy-Raspberry-PonytailHairstyle.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SereneKindess-Flushed-EyeshdwNBlushMakeup",
			"category": "makeup",
			"gender": "neutral",
			"thumbnail": "SereneKindess-Flushed-EyeshdwNBlushMakeup.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SereneKindess-Flushed-EyeshdwNBlushMakeup.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SemiSheenLycra-Black-Tights",
			"category": "tights",
			"gender": "female",
			"thumbnail": "SemiSheenLycra-Black-Tights.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SemiSheenLycra-Black-Tights.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SemiSheenLycra-Silver-Tights",
			"category": "tights",
			"gender": "female",
			"thumbnail": "SemiSheenLycra-Silver-Tights.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SemiSheenLycra-Silver-Tights.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "DecidedlySatisfiedSmile-Mouth",
			"category": "mouth",
			"gender": "neutral",
			"thumbnail": "DecidedlySatisfiedSmile-Mouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "DecidedlySatisfiedSmile-Mouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BehindTheBlossomsFloppy-Lavender-KnitSweater",
			"category": "outerwear",
			"gender": "female",
			"thumbnail": "BehindTheBlossomsFloppy-Lavender-KnitSweater.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "BehindTheBlossomsFloppy-Lavender-KnitSweater.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "HomecomingTrail-Background",
			"category": "background",
			"gender": "neutral",
			"itemPack": "starter",
			"thumbnail": "HomecomingTrail-Background.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "HomecomingTrail-Background.png",
			  	"zindex": 10
			  }	  
			]
		},
		{
			"name": "MischeivousThought-AshBrown-Eyebrows",
			"category": "eyebrows",
			"gender": "neutral",
			"itemPack": "starter",
			"thumbnail": "MischeivousThought-AshBrown-Eyebrows.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "MischeivousThought-AshBrown-Eyebrows.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "UghNoMouth",
			"category": "mouth",
			"gender": "neutral",
			"thumbnail": "UghNoMouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "UghNoMouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BitOfABother-Mouth",
			"category": "mouth",
			"gender": "neutral",
			"thumbnail": "BitOfABother-Mouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "BitOfABother-Mouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "CheerfulGlint-AshBrown-Eyebrows",
			"category": "eyebrows",
			"gender": "neutral",
			"thumbnail": "CheerfulGlint-AshBrown-Eyebrows.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "CheerfulGlint-AshBrown-Eyebrows.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BuddingBeat-PeonyPink-Headphones",
			"category": "headphones",
			"gender": "neutral",
			"thumbnail": "BuddingBeat-PeonyPink-Headphones.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "1of2BuddingBeat-PeonyPink-Headphones.png",
			  	"zindex": 100
			  },
			  {
			  	"filename": "2of2BuddingBeat-PeonyPink-Headphones.png",
			  	"zindex": 101
			  },
			]
		},
		{
			"name": "Mischeivous-Mouth",
			"category": "mouth",
			"gender": "neutral",
			"thumbnail": "Mischeivous-Mouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "Mischeivous-Mouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SugarlessCandy-Lavender-PigtailsHairstyle",
			"category": "hair",
			"gender": "neutral",
			"thumbnail": "SugarlessCandy-Lavender-PigtailsHairstyle.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "1of2SugarlessCandy-Lavender-PigtailsHairstyle.png",
			  	"zindex": 100
			  },
			  {
			  	"filename": "2of2SugarlessCandy-Lavender-PigtailsHairstyle.png",
			  	"zindex": 100
			  }
			]
		},
		{
			"name": "SmilingToMyself-Mouth",
			"category": "mouth",
			"gender": "neutral",
			"itemPack": "starter",
			"thumbnail": "SmilingToMyself-Mouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SmilingToMyself-Mouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "TobiasHeroic-Brown-Hairstyle",
			"category": "hair",
			"gender": "neutral",
			"itemPack": "starter",
			"thumbnail": "TobiasHeroic-Brown-Hairstyle.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "TobiasHeroic-Brown-Hairstyle.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "PeppyPreppy-Auburn-PonytailHairstyle",
			"category": "hair",
			"gender": "neutral",
			"thumbnail": "PeppyPreppy-Auburn-PonytailHairstyle.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "PeppyPreppy-Auburn-PonytailHairstyle.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SereneKindess-SpokenGently-Mouth",
			"category": "mouth",
			"gender": "neutral",
			"thumbnail": "SereneKindess-SpokenGently-Mouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SereneKindess-SpokenGently-Mouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SugarlessCandy-LavenderDrop-HeartUGazeEyes",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "SugarlessCandy-LavenderDrop-HeartUGazeEyes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SugarlessCandy-LavenderDrop-HeartUGazeEyes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "TomasSmooth-HighlightedChestnut-Hairstyle",
			"category": "hair",
			"gender": "neutral",
			"thumbnail": "TomasSmooth-HighlightedChestnut-Hairstyle.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "TomasSmooth-HighlightedChestnut-Hairstyle.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "TrustingEyes-Gray-Eyebrows",
			"category": "eyebrows",
			"gender": "neutral",
			"thumbnail": "TrustingEyes-Gray-Eyebrows.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "TrustingEyes-Gray-Eyebrows.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "DraconianRule-Crimson-Eyes",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "DraconianRule-Crimson-Eyes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "DraconianRule-Crimson-Eyes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "WeddingConcerto-Ivory-BabyGrandPiano",
			"category": "bgitem",
			"gender": "neutral",
			"thumbnail": "WeddingConcerto-Ivory-BabyGrandPiano.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "WeddingConcerto-Ivory-BabyGrandPiano.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "CheerfulGlint-SkyBlue-Eyes",
			"category": "eyes",
			"gender": "neutral",
			"itemPack": "starter",
			"thumbnail": "CheerfulGlint-SkyBlue-Eyes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "CheerfulGlint-SkyBlue-Eyes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "ShyPeep-Mouth",
			"category": "mouth",
			"gender": "neutral",
			"thumbnail": "ShyPeep-Mouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "ShyPeep-Mouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "GrumpySpectre-Indigo-Face",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "GrumpySpectre-Indigo-Face.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "GrumpySpectre-Indigo-Face.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "MischeivousThought-AgateGreen-Eyes",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "MischeivousThought-AgateGreen-Eyes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "MischeivousThought-AgateGreen-Eyes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BehindTheBlues-SoftGray-Glasses",
			"category": "glasses",
			"gender": "neutral",
			"thumbnail": "BehindTheBlues-SoftGray-Glasses.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "BehindTheBlues-SoftGray-Glasses.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "ElissasTresses-OrangeCaramel-Hairstyle",
			"category": "hair",
			"gender": "neutral",
			"thumbnail": "ElissasTresses-OrangeCaramel-Hairstyle.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "1of2ElissasTresses-OrangeCaramel-Hairstyle.png",
			  	"zindex": 100
			  },
			  {
			  	"filename": "2of2ElissasTresses-OrangeCaramel-Hairstyle.png",
			  	"zindex": 100
			  }
			]
		},
		{
			"name": "RolledCuff-MedBlue-Jeans",
			"category": "pants",
			"gender": "male",
			"thumbnail": "RolledCuff-MedBlue-Jeans.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "RolledCuff-MedBlue-Jeans.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizen-PinkNWhite-Shoes",
			"category": "shoes",
			"gender": "female",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizen-PinkNWhite-Shoes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizen-PinkNWhite-Shoes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "BehindTheBlossoms-Red-Glasses",
			"category": "glasses",
			"gender": "neutral",
			"thumbnail": "BehindTheBlossoms-Red-Glasses.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "BehindTheBlossoms-Red-Glasses.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "WarmThermal-GrayBlue-LongSlvShirt",
			"category": "shirt",
			"gender": "male",
			"thumbnail": "WarmThermal-GrayBlue-LongSlvShirt.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "WarmThermal-GrayBlue-LongSlvShirt.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "GentlyCurious-Blush-Makeup",
			"category": "makeup",
			"gender": "neutral",
			"thumbnail": "GentlyCurious-Blush-Makeup.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "GentlyCurious-Blush-Makeup.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizen-PeriwinkleNWhite-Blouse",
			"category": "shirt",
			"gender": "female",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizen-PeriwinkleNWhite-Blouse.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizen-PeriwinkleNWhite-Blouse.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "GentlyCurious-Mouth",
			"category": "mouth",
			"gender": "neutral",
			"thumbnail": "GentlyCurious-Mouth.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "GentlyCurious-Mouth.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SkyeERCitizen-PeriwinkleNWhite-Skirt",
			"category": "skirt",
			"gender": "female",
			"itemPack": "starter",
			"thumbnail": "SkyeERCitizen-PeriwinkleNWhite-Skirt.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SkyeERCitizen-PeriwinkleNWhite-Skirt.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "GentlyCuriousGaze-LilypadGreen-Eyes",
			"category": "eyes",
			"gender": "neutral",
			"thumbnail": "GentlyCuriousGaze-LilypadGreen-Eyes.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "GentlyCuriousGaze-LilypadGreen-Eyes.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "ReubenStyledSporty-PaleFawn-Hairstyle",
			"category": "hair",
			"gender": "neutral",
			"thumbnail": "ReubenStyledSporty-PaleFawn-Hairstyle.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "ReubenStyledSporty-PaleFawn-Hairstyle.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "GentlyCuriousGaze-AshBrown-Eyebrows",
			"category": "eyebrows",
			"gender": "neutral",
			"thumbnail": "GentlyCuriousGaze-AshBrown-Eyebrows.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "GentlyCuriousGaze-AshBrown-Eyebrows.png",
			  	"zindex": 100
			  }	  
			]
		},
		{
			"name": "SereneKindness-RedBrown-Eyebrows",
			"category": "eyebrows",
			"gender": "neutral",
			"thumbnail": "SereneKindness-RedBrown-Eyebrows.png",
			"gemPrice": 88,
			"heartPrice": 9,
			"layers": [
			  {
			  	"filename": "SereneKindness-RedBrown-Eyebrows.png",
			  	"zindex": 100
			  }	  
			]
		},
	  { "name": "Male A Body",
    	"gender": "male",
    	"category": "body",
    	"itemPack": "starter",
    	"gemPrice": 88,
			"heartPrice": 9,
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

