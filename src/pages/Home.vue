<template>
    <div>
        <Header></Header>
        <div class="content-container">
            <img class="logo" src="../assets/images/logo.gif">
            <form @submit="getResult">
                <input type="search" placeholder="Введите фразу для поиска" class="search-input" v-model="searchQuery">
                <base-button type="warning" @click="getResult">Поиск</base-button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                documents: [],
                searchQuery: ''
            }
        },

        mounted() {
            document.title = "Поиск";
        },

        methods: {
            getResult() {
                if(this.searchQuery !== '') {
                    this.$router.push("/search/" + this.searchQuery)
                }
            }
        }
    }
</script>

<style>
   .search-input {
       width: 550px;
       height: 41px;
       border: solid #414141 1px;
       border-bottom-left-radius: 5px;
       border-top-left-radius: 5px;
       padding: 5px;
   }
   .doc-name {
       float: left;
   }
    .doc-content {
        border: solid #414141 1px;
        border-radius: 5px;
        margin-top: 5px;
        margin-left: 30px;
        margin-right: 30px;
        text-align: left;
        padding: 15px;
    }
</style>