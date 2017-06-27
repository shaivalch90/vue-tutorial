import Vue from 'shaival';
// require('./sampleComponent');

Vue.component('container-component', {
    template: `<div class="panel panel-default">
                    <h3>Container Component</h3>
                    <label>Enter Item to add to TODO list:</label>
                    <input type="text" 
                        v-model="itemToAdd"
                        v-on:keyup.enter="addNewItem"/>
                    <div class="panel panel-default">
                        <h3>{{title}} Component</h3>
                            <sample-component
                                    v-for="(listItem, index) in listItems" 
                                    :key="index"
                                    @remove="removeItem(index, listItem)"
                                    v-bind:list-index="index"
                                    v-bind:list-item = "listItem">
                            </sample-component>
                    </div>
                    <label>Content in custom-input: </label> {{myinput}}
                    <custom-input-component v-model="myinput"></custom-input-component>
                </div>`,
    data: function () {
        return {
            myinput: 'defaultValue',
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
        removeItem: function (index, itemName) {
            this.listItems.splice(index, 1);
        }
    }
})