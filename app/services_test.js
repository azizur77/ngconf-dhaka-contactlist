'use strict';

describe('Contact Service', function() {

  var ContactService;

  beforeEach(module('contact.services'));

  beforeEach(inject(function (_ContactService_) {
    ContactService = _ContactService_;
  }));


  describe('Toggle Favorite', function() {
    var contact = {};

    it('should toggle favorite from true to false', function () {
      contact.favorite = true;
      ContactService.toggleFavorite(contact);
      expect(contact.favorite).toBeFalsy();
    });

    it('should toggle favorite from true to false', function () {
      contact.favorite = false;
      ContactService.toggleFavorite(contact);
      expect(contact.favorite).toBeTruthy();
    });

  });

});
