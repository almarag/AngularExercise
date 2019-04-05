import angular from 'angular';
import ngRoute from 'angular-route';
import ngRedux from 'ng-redux';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/jquery/dist/jquery.min';
import TodosComponent from './Components/Todos/todos.component';
import reduxConfig from './config/Redux';
import routing from './config/Routing';
import AboutController from './Controllers/AboutController';
import HomeController from './Controllers/HomeController';
import ServicesController from './Controllers/ServicesController';
import HelloWorldDirective from './Directives/HelloWorld';
import MessageService from './Services/MessageService';

angular.module('app', [ngRoute, ngRedux])
.config(routing)
.config(reduxConfig)
.factory('MessageService', MessageService)
.controller('HomeController', HomeController)
.controller('AboutController', AboutController)
.controller('ServicesController', ServicesController)
.component('todosComponent', TodosComponent)
.directive('helloWorld', HelloWorldDirective);
