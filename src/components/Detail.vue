<template>
  <div class="objectlist">
    <br>
    <div class="row">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
    <div class="panel panel-info" >
      <div class="panel-heading">
        <h3 class="panel-title">Object Detail</h3>
      </div>
      <div class="panel-body">
        <div class="row">
      <div class="col-sm-6 col-md-6" style="text-align: left" v-if="detailobj">
        <p>Object ID: {{oid}}</p>
        <p>Object Type: {{detailobj.objtype}}</p>
        <p>WxHxD: 10x20x10</p>
        <p>Area: {{detailobj.area}}</p>
        <p>Volume: {{detailobj.volume}}</p>
      </div>
    </div>
      </div>
    </div>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    </div>
    <br>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'QObjectList',
  data () {
    return {
      msg: 'EGCI427 LabQuiz',
      calobject: null,
      detailobj: {},
      oid: ""
    }
  },
  created () {
    this.oid = this.$route.params.objid
    var objtype = this.$route.params.objtype
    var width = this.$route.params.width
    var height = this.$route.params.height
    var depth = this.$route.params.depth
    

    var url = 'http://localhost:5000/calculate/' + objtype + '/'+ height + '/' + width + '/' + depth
    console.log(url)

    axios
      .get(url)
      .then((response)=>{
        console.log(response.data);
        this.detailobj = response.data;
      })
      .catch((error)=>{
        console.log(error);
      })
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #ffffff;
}
p.citydetail{
  text-align: justify;
}
</style>