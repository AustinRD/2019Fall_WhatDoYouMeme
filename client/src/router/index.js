import Vue from 'vue';
import VueRouter from 'vue-router';
import { User } from '../models/my-fetch';
import Home from '../views/Home.vue';
import Game from '../views/Game.vue';
import Login from '../views/Login.vue';
import JoinGame from '../views/JoinGame';


Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/game', name: 'game', component: Game,
    beforeEnter: ( to, from, next ) => {
      if(User.User_id == null)
      {
        next( { name: "login" } )
      }
      else
      {
        next();
      }
    }},
  { path: '/login', name: 'login', component: Login},
  { path: '/join', name: 'join-game', component: JoinGame},
  { path: '/about', name: 'about', component: () => import('../views/About.vue')},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;