import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components
<<<<<<< Updated upstream
const Home = { template: '<div>home<input/></div>',created: function(){console.log('home created');}, activated: function(){console.log('home activated');}, deactivated: function(){console.log('home deactivated');} }
const Foo = { template: '<div>foo<input/></div>', created: function(){console.log('Foo created');}, activated: function(){console.log('Foo activated');}, deactivated: function(){console.log('Foo deactivated');}}
const Bar = { template: '<div>bar<input/></div>', created: function(){console.log('Bar created');}, activated: function(){console.log('bar activated');}, deactivated: function(){console.log('Bar deactivated');}}
const Unicode = { template: '<div>unicode</div>', created: function(){console.log('Unicode created');}, activated: function(){console.log('Unicode activated');}, deactivated: function(){console.log('Unicode deactivated');}}
=======
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Unicode = { template: '<div>unicode</div>' }
>>>>>>> Stashed changes

// 3. Create the router
const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/', component: Home }, // all paths are defined without the hash.
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/é', component: Unicode }
  ]
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  router,
  template: `
    <div id="app">
      <h1>Basic</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <router-link tag="li" to="/bar">/bar</router-link>
        <li><router-link to="/é">/é</router-link></li>
      </ul>
      <router-views class="view"></router-views>
    </div>
  `
}).$mount('#app')
