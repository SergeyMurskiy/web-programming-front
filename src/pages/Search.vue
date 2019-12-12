<template>
    <div>
        <Header></Header>
        <div class="content-container">
            <img class="logo" src="../assets/images/logo.gif">
            <form @submit="getResult">
                <input type="search" placeholder="Введите фразу для поиска" class="search-input" v-model="searchQuery">
                <base-button type="warning" @click="getResult">Поиск</base-button>
            </form>

            <div v-for="document in documents" v-bind:key="document.documentId">
                    <div class="doc-content">
                        <div class="doc-name"><h5><a
                                :href="/document/ + document.documentId">{{document.documentName}}</a></h5></div>
                        <br><br>
                        {{getContent(document.documentContent)}}
                    </div>
                </div>
            <div v-show="isEmpty" class="empty-result"><p>По запросу <i><b>{{emptyMessage}}</b></i> ничего не найдено</p></div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    import VueFrame from "vue-frame"

    export default {
        components: {
            VueFrame
        },
        data() {
            return {
                documents: [],
                searchQuery: this.$route.params.query,
                isEmpty: true,
                emptyMessage: ''
            }
        },

        mounted() {
            if (this.$route.params.query === '') {
                this.isEmpty = false
            }
            this.isEmpty = false;
            this.search()
        },

        methods: {
            search() {
                axios.get(this.url + "/search/", {
                    params: {
                        query: this.$route.params.query,
                    }
                }).then((response) => {
                    this.documents = response.data;
                    if(this.documents.length === 0) {
                        this.isEmpty = true;
                        this.emptyMessage = this.$route.params.query
                    }
                });
            },

            getContent(documentContent) {
                return documentContent.slice(0, 500) + '...';
            },

            getResult() {
                if (this.searchQuery !== '') {
                    this.$router.push("/search/" + this.searchQuery)
                    location.reload()
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

    .empty-result {
        margin-top: 1em;
    }
</style>