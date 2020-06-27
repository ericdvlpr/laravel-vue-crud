<template>
    <main>
        <Header />
       
       <div id="layoutSidenav">
            <Sidebar />
            <div id="layoutSidenav_content">
                <router-view></router-view>  
            </div>
       </div>

    </main>
</template>

<script>
    import Header from './components/Header.vue';
    import Sidebar from './components/Sidebar.vue';
    export default {
        components:{
            Header,
            Sidebar
        }
    }
</script>

<style lang="scss" scoped>

</style>