import { createRouter, createWebHistory} from 'vue-router'
import AdminDashboard from './pages/AdminDashboard.vue'
import ManageReviews from './pages/ManageReviews.vue'
import ManageProducts from './pages/ManageProducts.vue';

const routes = [
    {
        path: '/',
        component:AdminDashboard,
        children: [
            {path:'', component: ManageProducts},
            {path: 'reviews', compopnent: ManageReviews},
        ], 
        
    },
   {
    path: '/admin',
    component: AdminDashboard,
    children: [
        { path: 'products', component: ManageProducts },
        { path: 'products', component: ManageReviews},
    ], 
   },  
];

const router = createRouter({
    history: createWebHistory('/my-shop/'),
    routes,
});

export default router;