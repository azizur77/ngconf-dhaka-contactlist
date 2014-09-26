'use strict';

describe('Contact Service', function() {

  var ContactService, $rootScope;

  beforeEach(module('contact.services'));

  beforeEach(inject(function (_ContactService_, _$rootScope_) {
    ContactService = _ContactService_;
    $rootScope = _$rootScope_;

    spyOn($rootScope, '$broadcast');
  }));

  describe('Select Contact', function () {

    it('should broadcast contact:selected', function () {
      ContactService.selectContact({});
      expect($rootScope.$broadcast).toHaveBeenCalledWith('contact.selected', {});
    });

  });

  describe('Toggle Favorite', function () {
    var contact;

    beforeEach(function () {
      contact = {};
    });

    it('should change true to false', function () {
      contact.favorite = true;
      ContactService.toggleFavorite(contact);
      expect(contact.favorite).toBeFalsy();
    });

    it('should change false to true', function () {
      contact.favorite = false;
      ContactService.toggleFavorite(contact);
      expect(contact.favorite).toBeTruthy();
    });

    it('should change null to true', function () {
      contact.favorite = null;
      ContactService.toggleFavorite(contact);
      expect(contact.favorite).toBeTruthy();
    });

    it('should change 0 to true', function () {
      contact.favorite = 0;
      ContactService.toggleFavorite(contact);
      expect(contact.favorite).toBeTruthy();
    });

    it('should change undefined to true', function () {
      ContactService.toggleFavorite(contact);
      expect(contact.favorite).toBeTruthy();
    });

  });

});
