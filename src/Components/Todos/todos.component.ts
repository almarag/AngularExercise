import controller from './todos.controller';
import template from './todos.template.html';

const todosComponent = {
    bindings: {},
    controller,
    restrict: 'E',
    template
};

export default todosComponent;
