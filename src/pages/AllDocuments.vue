<template>
    <div>
        <Header/>
        <div class="content-container">
            <div class="delete-button">
                <base-button type="info" @click="reloadDocuments()">Обновить</base-button>
                <base-button type="warning" @click="deleteAllDocuments()">Удалить все документы</base-button>
            </div>
            <div v-if="documents.length != 0">
                <div v-for="document in documents" v-bind:key="document.documentId">
                    <div class="document-name"><h3>{{document.documentName}}</h3></div>
                    <div class="document-content"><p>{{document.documentContent}}</p></div>
                </div>
            </div>
            <div v-else>
                <div class="empty"><h3>Нет загруженных текстов</h3></div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                documents: ''
            }
        },

        mounted() {
            this.reloadDocuments();
        },

        methods: {
            deleteAllDocuments() {
                axios.delete(this.url + "/document/delete/all").then((response) => {
                    if (response.status === 200) {
                        this.documents = ''
                    }
                })
            },

            reloadDocuments() {
                axios.get(this.url + "/document/all").then((response) => {
                    this.documents = response.data
                })
            }
        }
    }
</script>

<style scoped>
    .document-name {
        float: left;
        text-align: left;
        margin-top: 1em;
    }

    .document-content {
        float: left;
        text-align: left;
        border-bottom: 1px solid cadetblue;
    }

    .delete-button {
        width: 100%;
        float: right;
        text-align: right;
        padding: 1em;
        border-bottom: 1px solid cadetblue;
    }
    .empty {
        padding-top: 6em;
    }
</style>