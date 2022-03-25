<template>
        <div id="skills">
            <div id="desc">
                <h1 class="header">{{ msg3 }}</h1>
                <hr />

<h2>JAVA</h2>
                <div class="progress">
                    <div class="progress-bar" style="width: 60%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

<h2>PYTHON</h2>
                <div class="progress">
                    <div class="progress-bar" style="width: 70%" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

<h2>HTML</h2>
                <div class="progress">
                    <div class="progress-bar" style="width: 65%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

<h2>LINUX</h2>
                <div class="progress">
                    <div class="progress-bar" style="width: 35%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

<h2>JAVASCRIPT</h2>
                <div class="progress">
                    <div class="progress-bar" style="width: 20%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


<h2>C#</h2>
                <div class="progress">
                    <div class="progress-bar" style="width: 48%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


<h2>CSS</h2>
                <div class="progress">
                    <div class="progress-bar" style="width: 69%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


<h2>PHP</h2>
                <div class="progress">
                    <div class="progress-bar" style="width: 85%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>


<h2>SQL</h2>
                <div class="progress">
                    <div class="progress-bar" style="width: 78%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'skills',
        data () {
            return {
                msg3: 'SKILLS'
            }
        }
    }
</script>
