'use strict';

(function () {

    var app = angular.module('fintex', ['ui.router']);

    app.run(function ($state, $rootScope) {
 //       var interval = setInterval(function () {
 //         if (doucment.readyState == "complete") {
 //               window.scrollTo(0, 0);
 //              clearInterval(interval);
 //          }
 //      }, 200);
        $rootScope.$on('$viewContentLoaded', function () { window.scrollTo(0, 0); });
        $rootScope.$state = $state;
    });

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");

        $stateProvider
		//HOME
		.state("home", {
		    url: "/home",
		    templateUrl: "./js/templates/homeTmpl.html"
		    // controller: "homeCtrl"
		})

		//MEMBERSHIP
		.state("membership", {
		    url: "/membership",
		    templateUrl: "./js/templates/membershipTmpl.html"
		    // controller: "membershipCtrl"
		})

		//MEMBERSHIP
		.state("member-application", {
		    url: "/member-application",
		    templateUrl: "./js/templates/membershipApplicationTmpl.html"
		    // controller: "applicationCtrl"
		})
		//FINTECH CHICAGO
		.state("fintech-chicago", {
		    url: "/fintech-chicago",
		    templateUrl: "./js/templates/fintechChicagoTmpl.html"
		    // controller: "fintechChicagoCtrl"
		})



		//Profile1
		.state("profile1", {
		    url: "/profile1",
		    templateUrl: "./js/templates/profile1Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})
                //Halo
		.state("HaloProfile", {
		    url: "/HaloProfile",
		    templateUrl: "./js/templates/HaloProfileTmpl.html"
		    // controller: "fintechChicagoCtrl"
		})

            //Rippleshot
		.state("RippleshotProfile", {
		    url: "/RippleshotProfile",
		    templateUrl: "./js/templates/RippleshotProfileTmpl.html"
		    // controller: "fintechChicagoCtrl"
		})

        //Glidera
		.state("GlideraProfile", {
		    url: "/GlideraProfile",
		    templateUrl: "./js/templates/GlideraProfileTmpl.html"
		    // controller: "fintechChicagoCtrl"
		})

 //CHX
		.state("CHXProfile", {
		    url: "/CHXProfile",
		    templateUrl: "./js/templates/CHXProfileTmpl.html"
		    // controller: "fintechChicagoCtrl"
		})

            //Dough
		.state("DoughProfile", {
		    url: "/DoughProfile",
		    templateUrl: "./js/templates/DoughProfileTmpl.html"
		    // controller: "fintechChicagoCtrl"
		})

            //Profile1
		.state("SpotProfile", {
		    url: "/SpotProfile",
		    templateUrl: "./js/templates/SpotProfileTmpl.html"
		    // controller: "fintechChicagoCtrl"
		})

  		//BarchartProfile
		.state("BarchartProfile", {
		    url: "/BarchartProfile",
		    templateUrl: "./js/templates/BarchartProfileTmpl.html"
		    // controller: "fintechChicagoCtrl"
		})



		//Profile2
		.state("profile2", {
		    url: "/profile2",
		    templateUrl: "./js/templates/profile2Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})
		//Profile3
		.state("profile3", {
		    url: "/profile3",
		    templateUrl: "./js/templates/profile3Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})
		//Profile4
		.state("profile4", {
		    url: "/profile4",
		    templateUrl: "./js/templates/profile4Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})
		//Profile5
		.state("profile5", {
		    url: "/profile5",
		    templateUrl: "./js/templates/profile5Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})
		//Profile6
		.state("profile6", {
		    url: "/profile6",
		    templateUrl: "./js/templates/profile6Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})
		//Profile7
		.state("profile7", {
		    url: "/profile7",
		    templateUrl: "./js/templates/profile7Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})
		//Profile1
		.state("profile8", {
		    url: "/profile8",
		    templateUrl: "./js/templates/profile8Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})
		//Profile1
		.state("profile9", {
		    url: "/profile9",
		    templateUrl: "./js/templates/profile9Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})
		//Profile1
		.state("profile10", {
		    url: "/profile10",
		    templateUrl: "./js/templates/profile10Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})
		//Pressrelease1
		.state("pressrelease1", {
		    url: "/pressrelease1",
		    templateUrl: "./js/templates/pressrelease1Tmpl.html"
		    // controller: "fintechChicagoCtrl"
		})

//FinTExSixThirtyPressRelease
		.state("FinTExSixThirtyPressRelease", {
		    url: "/FinTExSixThirtyPressRelease",
		    templateUrl: "./js/templates/FinTExSixThirtyPressReleaseTmpl.html"
		    // controller: "fintechChicagoCtrl"
		})



		//EVENTS
		.state("events", {
		    url: "/events",
		    templateUrl: "./js/templates/eventsTmpl.html"
		    // controller: "eventsCtrl"
		})
		//ABOUT
		.state("about", {
		    url: "/about",
		    templateUrl: "./js/templates/aboutTmpl.html"
		    // controller: "aboutCtrl"
		})
		//CONTACT
		.state("contact", {
		    url: "/contact",
		    templateUrl: "./js/templates/contactTmpl.html"
		    // controller: "contactCtrl"
		})
		//APPLICATION
		.state("application", {
		    url: "/application",
		    templateUrl: "./js/templates/applicationTmpl.html"
		    // controller: "applicationCtrl"
		});
    });

}());