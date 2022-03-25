<template>
        <div id="profile">
            <div id="picture">
                <img src="../assets/SALALILA.jpg">
            </div>
            <div id="desc">
                <h1 class="header">{{ msg1 }}</h1>
                <p>Currently pursuing a four-year course of study in Bachelor of Science in Information Technology-with Area of Specialization in Web Development, laying solid groundwork for eventual career in the I.T industry. </p><br />  

                <h1>Contact</h1>
                <p>+63 9166-506-324<br>
                    raskinsalalila2@gmail.com<br>
                    facebook.com/raskinx<br>
                    purok 4, Babo Pangulo
                    Porac, Pampanga</p>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'profile',
        data () {
            return {
                msg1: 'Raskin Charles Salalila'
            }
        }
    }
</script>
