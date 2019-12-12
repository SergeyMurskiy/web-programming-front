<template>
    <div>
        <div>
            <div class="menu">
                <ul>
                    <li class="menu-item"><a href="/search">Поиск</a></li>
                    <li class="menu-item" @click="flag = !flag"><a href="#">Загрузить текст</a></li>
                    <li class="menu-item"><a href="../documents">Просмотр загруженных текстов</a></li>
                    <li class="menu-item"><a href="http://84.201.168.199:5601/app/kibana#/discover">Логи</a></li>
                </ul>
            </div>
        </div>
        <modal :show.sync="flag" body-classes="p-0" modal-classes="modal-dialog-centered modal-sm">
            <card
                    type="secondary"
                    shadow
                    header-classes="bg-white pb-5"
                    body-classes="px-lg-5 py-lg-5"
                    class="border-0"
            >
                <template>
                    <div class="text-center text-muted mb-4">
                        <h5>Загрузка нового текста</h5>
                        <form id="upload-form" name="upload-form" enctype="multipart/form-data">
                            <input type="file" name="file" accept=".txt"><br><br>
                            <base-button type="warning" @click="addDocument()">Сохранить</base-button>
                        </form>
                    </div>
                </template>
            </card>
        </modal>
        <div class="notification">
            <notification :show-notification="showNotification"> Документ сохранен!</notification>
        </div>
    </div>
</template>

<script>
    import Modal from "../base_components/Modal.vue";
    import Notification from '../../components/Notification';
    import axios from "axios";
    export default {
        name: "Header",
        components: {
            Modal,
            Notification
        },
        data() {
            return {
                flag: false,
                showNotification: false
            };
        },
        methods: {
            addDocument() {
                const data = new FormData(document.getElementById('upload-form'));

                axios.post(this.url + "/document/add", data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    this.flag = false;
                    if (response.status === 200) {
                        this.pushNotification();
                    }
                })
            },

            pushNotification() {
                this.showNotification = true;
                setTimeout(() => {
                    this.showNotification = false;
                }, 5000);
            }
        }
    };
</script>

<style>
    .menu {
        width: 100%;
        height: 30px;
        margin: 0 auto;
        text-align: center;
        border-bottom: 1px solid cadetblue;
    }
    .menu-item {
        list-style-type: none;
        float: left;
        margin-right: 1.2em;
    }

</style>
