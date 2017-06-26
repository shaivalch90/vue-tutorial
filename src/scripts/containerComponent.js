import Vue from 'shaival';
require('./sampleComponent');

Vue.component('container-component', {
    template: `<div class="panel panel-default">
                    <h3>Container Component</h3>
                    <div class="panel panel-default">
                        <h3>{{title}} Component</h3>
                            <input type="text" 
                            v-model="itemToAdd"
                            v-on:keyup.enter="addNewItem"/>
                            <sample-component
                                    v-for="(listItem, index) in listItems" 
                                    :key="index"
                                    v-bind:list-index="index"
                                    v-bind:list-item = "listItem">
                            </sample-component>
                    </div> 
                </div>`,
    data: function () {
        return {
            title: 'Sample Component',
            itemToAdd: '',
            listItems: [
                'Item a',
                'Item b',
                'Item c',
                'Item d'
            ]
        }
    },
    methods: {
        addNewItem: function () {
            this.listItems.push(this.itemToAdd);
            this.itemToAdd = ''
        },
        removeItem: function(index) {
            this.listItems.splice(index, 1);
        }
    }
})