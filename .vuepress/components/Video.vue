<template>
<div class="item">
  <div  style="display: block; position: relative; max-width: 100%;">
        <div style="padding-top: 56.25%;">
            <iframe :src="'//players.brightcove.net/68290866001/' + source" 
            allowfullscreen 
            webkitallowfullscreen 
            mozallowfullscreen 
            style="width: 100%; height: 100%; position: absolute; top: 0px; bottom: 0px; right: 0px; left: 0px;"></iframe>
        </div>
    </div>
    <br>
    <div>{{description1}}</div>
    <div>{{description2}}</div>
</div>
</template>

<script>

 export default {
  name: 'Video',
  props: {
    description1: String,
    description2: String,
    source: String
  }
}

</script>

<style>
  .item { margin: 20px; }
</style>