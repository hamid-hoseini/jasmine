/**
 * Created by Hamid on 7/9/2015.
 */
function User(){
}
User.prototype.sayHello= function(name){
    this.greeting = "Hello "+name;
};
User.prototype.score= function (name) {
     this.list={
        'hamid': 20,
         'bp':30,
         'Rohit': 40
    };
    if (this.list[name])
        return this.list[name];
    else
        return 0;
}