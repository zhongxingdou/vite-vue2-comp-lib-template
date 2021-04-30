import MyComponent from './MyComponent.vue'
MyComponent.install = (vue) => vue.component('MyComponent', MyComponent)
export default MyComponent