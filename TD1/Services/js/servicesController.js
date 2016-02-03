/**
 * Created by Léo on 27/01/2016.
 */
//Ajout d'un controller sur le module servicesApp
angular.module("servicesApp").controller("servicesController",[function(){
    this.services =
        [
            {name: 'Web Development', price: 300, active:true},
            {name: 'Design', price: 400, active:false},
            {name: 'Integration', price: 250, active:false},
            {name: 'Formation', price: 220, active:false}
        ];
    this.toggleActive=function(service){
        service.active=!service.active;
    };

    this.total=function(service){
        this.servicesCount=0;
        this.montant=0;
        angular.forEach(this.service,function(service){
            if(service.active==true){
                this.servicesCount++;
                this.montant = service.price;
            }
        });

        return this.montant;
    }

    this.active=function(service){
        this.servicesCount=0;
        angular.forEach(this.service,function(service){
            if(service.active==true){
                this.servicesCount++;
            }
        });

        return this.servicesCount;
    }
}]);