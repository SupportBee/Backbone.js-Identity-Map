var UnSyncedUser = Backbone.Model.extend({



});

var User = Backbone.Model.extend({

  keepInSync: true,
  name: 'user'

});

// Collection of Cached Models
var UserList = Backbone.Collection.extend({

  model: User

});

