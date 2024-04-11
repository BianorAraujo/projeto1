
<template>
    <div class="body">
        <Navbar />
        <RouterView />
        <Footer />
        <Cookie />
    </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Cookie from './components/Cookie.vue'
</script>

<style scoped>

.body{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;

    /* color: #ffffff; */
    /* background-color: #ff6a13; */
    /* #ff7226; */
    /* original do site : #fe5000 */
}

</style>
