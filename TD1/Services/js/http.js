/**
 * Created by Léo on 03/02/2016.
 */
angular.module("servicesApp").
controller(["http",function(http){
    var self=this;

    http.get("promo.json").then(function(response){
        self.promos=response.data;
    });

    this.getRemise=function(){
        var remise = this.promos[this.codeR];
        if(angular.isUndefined(remise)){
            remise = "Code promo non valide";
        }
    }
}])