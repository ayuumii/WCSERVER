<template>
         <div id="education">
            <div id="desc">
                <h1 class="header">{{ msg2 }}</h1>
                <hr/>
                <div class="school">
                    <h4><b>• Elementary School</b></h4><br>
                        <p> Babo Pangulo Elementary School </p>
                        <p> 2008 - 2014 </p>

                   <h4> <b>• Junior High School</b></h4><br>
                        <p>Saint Catherine's Academy</p>
                        <p> 2014-2018</p> <br />

                    <h4> <b>• Senior High School</b></h4><br>
                        <p>Holy Angel University</p>
                        <p> 2018 - 2020</p> <br />

                    <h4><b>• College</b></h4><br>
                        <p>Holy Angel University</p>
                        <p> 2020 - Present</p> <br />
                
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'education',
        data () {
            return {
                msg2: 'Background'
            }
        }
    }
</script>
