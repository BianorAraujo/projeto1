<template>
    <div id="cookie-lgpd" v-show="showPolicy === true">
            <div class="cookie-lgpd-container">
                <div>
                    Usamos cookies e tecnologias semelhantes de acordo com a nossa <RouterLink to="/politicas">Política de Privacidade</RouterLink>. Ao continuar navegando, você concorda com essas condições.
                </div>
                    
                <div>
                    <button class="button" type="submit" @click="saveCookies()">Entendi</button>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    setup() {
    },
    created() {
        this.isAcceptedCookies();
        
    },
    data() {
        return{
            showPolicy: Boolean
        }
    },
    methods: {
        getCookie: function(){
            const get = localStorage.getItem(import.meta.env.VITE_COOKIE) || false;
            return get;
        },
        isAcceptedCookies: function(){
            const status = this.getCookie();
            
            console.log(status);
            if(status){
                this.showPolicy = false;
            }
            else{
                this.showPolicy = true;
            }
        },
        saveCookies: function(){
            localStorage.setItem(import.meta.env.VITE_COOKIE, true);
            this.showPolicy = false;
        }
    }
}
</script>


<style scoped>

#cookie-lgpd {
    position: fixed;
    z-index: 2147483647;
    bottom: 16px;
    left: 16px;
    right: 16px;
    margin: auto;
    max-width: 1334px;
    min-height: 60px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.4);
    border: solid 1px #eeeeee;
    background-color: #fff;
    color: black;
    padding: 0px 20px;
    font-size: small;
}

.cookie-lgpd-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-height: inherit;
}

a {
    color: #ff6a13 !important;
    font-weight: bold;
}

button {
    font-size: 13px;
    background-color: #ff6a13;
    color: #ffffff;
}

</style>