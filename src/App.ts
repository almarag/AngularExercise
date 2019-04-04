import angular from 'angular';
import ngRoute from 'angular-route';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/jquery/dist/jquery.min';
import routing from './config/Routing';
import HomeController from './Controllers/HomeController';
import HelloWorldDirective from './Directives/HelloWorld';
import MessageService from './Services/MessageService';

angular.module('app', [ngRoute])
.config(routing)
.factory('MessageService', MessageService)
.controller('HomeController', HomeController)
.directive('helloWorld', HelloWorldDirective);
