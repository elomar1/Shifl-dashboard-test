<template>
    <div class="sideMenu">
        <div class="logo">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <ul class="links">

            <li>
                <router-link to="/dashboad">
                <img src="@/assets/images/dashboard.svg" alt="">
                Dashboad</router-link>
            </li>
            <li> 
               <router-link to="/Shipments">
               <img src="@/assets/images/shipments.svg" alt="">
               Shipments</router-link>
            </li>
            <li> 
               <router-link to="/pos">
               <img src="@/assets/images/POs.svg" alt="">
               POs</router-link>
            </li>
            <li> 
               <router-link to="/items">
               <img src="@/assets/images/Items.svg" alt="">
               Items</router-link>
            </li>
            <li> 
               <router-link to="/inventory">
               <img src="@/assets/images/Inventory.svg" alt="">
               Inventory</router-link>
            </li>
            <li> 
               <router-link to="/suppliers">
               <img src="@/assets/images/Suppliers.svg" alt="">
               Suppliers</router-link>
            </li>
            <li> 
               <router-link to="/reports">
               <img src="@/assets/images/Reports.svg" alt="">
               Reports</router-link>
            </li>
            <li> 
               <router-link to="/billing">
               <img src="@/assets/images/billing.svg" alt="">
               Billing</router-link>
            </li>
       
        </ul>
         <p class="footer">© 2021 Shifl. All rights reserved.</p>
    </div>
</template>

<script>
export default {
    name:'DrawerMenu',
}
</script>

<style scoped>
.sideMenu {
        background: #0171A1;
    height: 100%;
}
.sideMenu > .logo {
    padding: 28px 24px 33px 24px;
}
.sideMenu > .logo > img {
    width: 125px;
}
ul {
    padding-left: 0 !important;
}
ul > li a{
    display: flex;
    align-items: center;
    color: #fff;
    padding-left: 24px;
    text-decoration: none;
        height: 48px;
    border-left: 6px solid #0171a1;
    font-family: 'Montserrat-Regular';
}
ul > li a > img {
    margin-right: 17px;
}
.router-link-exact-active {
    background: #002f44b5; 
    border-left: 6px solid #039DDC;
}
.footer{
    position: absolute;
    bottom: 0;
    margin: 24px;
    font-size: 12px;
    color: #E1ECF0;
    font-weight: 500;
    line-height: 18px;
}
</style>
