/**
 * Created by Léo on 27/01/2016.
 */
//Ajout d'un controller sur le module myApp
angular.module("myApp").controller("myController",[function(){
    this.message="The ngOptions attribute can be used to dynamically generate a list of <option> element for the";
    this.info = "";
    this.count=function(){
        if(this.message.length >= 100){
            alert("Nombre de caractères dépassés");
            return 0;
        }
        else
            return 100-this.message.length;
    };
    this.save=function() {
        this.messageNote = this.message;
        this.info = "Message enregistré";
    }
    this.clear=function(){
        this.message="";
    }
    this.load=function(){
        this.message=this.messageNote;
        this.info="Message chargé";
    }
}]);