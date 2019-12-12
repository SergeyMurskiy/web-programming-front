<template>
    <div>
        <Header/>
        <div class="content-container">
            <div class="document-name"><h3>{{document.documentName}}</h3></div>
            <div class="document-content"><p>{{document.documentContent}}</p></div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Document",
        data() {
            return {
                document: ''
            }
        },

        mounted() {
            axios.get(this.url + "/document/" + this.$route.params.id, {
            }).then((response) => {
                this.document = response.data
            });
        }
    }
</script>

<style scoped>
    .document-name {
        float: left;
        margin-top: 50px;
    }
    .document-content {
        float: left;
        text-align: left;
    }
</style>