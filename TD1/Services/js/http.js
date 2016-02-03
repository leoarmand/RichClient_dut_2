/**
 * Created by Léo on 03/02/2016.
 */
angular.module("servicesApp").
controller(["http",function(http){
    var self=this;

    http.get("promo.json").then(function(response){
        self.promos=response.data;
    });
    
    this.test= function(p){
        alert(p);
    }

    this.getRemise=function(){
        return this.promos[this.codeR];
    }
}])