import Vue from 'shaival';

Vue.component('notification-component', {
    props: ['message'],
    template: '<span><span>{{message}}</span><i class="btn btn-danger">X</i></span>'
})