Template.userInfoBar.foo = ->
  Avatars.findOne()

Template.buyMenu.events
  'click': ->
    console.log "Clicked"
    Avatars.update {"_id": "XBa5PDt46CFQ8Z6EH"}, { $inc: {"money": -5} }