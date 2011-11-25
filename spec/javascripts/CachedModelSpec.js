describe("Everything", function() {

  afterEach(function() {
    Backbone.CacheStore.reset();
  });
  

  describe("CacheStore", function() {

    it("should store an instance", function() {
      
      var user = {name : 'User'} 
      Backbone.CacheStore.set('key', user);
      expect(Backbone.CacheStore.get('key')).toBe(user);
      Backbone.CacheStore.reset();
      expect(Backbone.CacheStore.get('key')).toBe(undefined);

    });
    
  });  

  describe("Backbone.CachedModel", function() {
    
    describe("Caching", function() {
      
      it("should keep different copies if sync is false", function() {

        var user = new UnSyncedUser({id: 1});
        console.log(user);
        user.set({name: 'A User'});

        var userWithSameID = new UnSyncedUser({id: 1});
        expect(userWithSameID.get('name')).toEqual(undefined);
        
      });
      
      it("should keep same copies if sync is true", function() {

        var user = new User({id: 1});
        user.set({name: 'A User'});

        var userWithSameID = new User({id: 1});
        expect(userWithSameID.get('name')).toEqual('A User');

        userWithSameID.set({name: 'Changed'})
        expect(user.get('name')).toEqual('Changed');
        
      });

      it("should keep differnt copies for different ids", function() {

        var user = new User({id: 1});
        user.set({name: 'A User'});

        var userWithSameID = new User({id: 2});
        expect(userWithSameID.get('name')).toEqual(undefined);
        
      });
    });  
    

    
  });  
});  
