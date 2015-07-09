/**
 * Created by Hamid on 7/9/2015.
 */
describe('this is thie first test', function () {
    var user;

    beforeEach(function () {
        user = new User();
    });
   it('testing say hello function', function () {
      // var user = new User();
       user.sayHello('Hamid');
       expect(user.greeting).toBe('Hello Hamid');
   });
    it('testing say hello function', function () {
        //var user = new User();
        user.sayHello('Hamid');
        expect(user.greeting).toContain('Hello');
    });
    it('testing say hello function check score ', function () {
        var sc= user.score('hamid');
        expect(sc).toEqual(20);
        expect(user.list['Mary']).toBeUndefined();
    });

});