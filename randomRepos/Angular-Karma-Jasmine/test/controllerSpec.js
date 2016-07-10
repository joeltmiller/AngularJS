describe('Controller: SimpleController', function(){

  var cut; //Controller Under Test

  beforeEach(function(){
    module('basicApp');
  });

  beforeEach(inject(function($controller){
    cut = $controller('SimpleController');
  }))

  it('should have user data available on load', function(){
    expect(cut.userInfo).toEqual([{username: 'joel_miller', admin: true, id:123}, {username:'mulchitron3000', admin: false, id: 456}]);
  })

  it('should return a user length', function(){
    expect(cut.getNumUsers()).toEqual(2);
  })
})

describe('Service: Generic Service', function(){

  var sut; //Service Under Test
  var mockBackend;

  beforeEach(module('basicApp'));
  beforeEach(inject(function(GenericFactory, $httpBackend){
    mockBackend = $httpBackend;

    mockBackend.expectGET('/dataRoute')
      .respond({id:3000, name:'Millie'});

    sut = GenericFactory;
  }))

  it('should return greeting message', function(){
    expect(sut.message()).toEqual('\'Ello, I\'m a Service');
  })

  it('should return cohort name', function(){
    expect(sut.name).toEqual('Lambda');
  })

  it('should fetch user from the server', function(){

    expect(sut.data).toEqual({});

    sut.makeCall();

    //mock server response
    mockBackend.flush();

    expect(sut.data.info).toEqual({id: 3000, name: 'Millie'});
    //make sure all expects set on back end will be called
    mockBackend.verifyNoOutstandingExpectation();


    //make sure all requires to server have responded
    mockBackend.verifyNoOutstandingRequest();
  })

  afterEach(function(){

  })


})
