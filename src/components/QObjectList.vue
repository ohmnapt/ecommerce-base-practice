<template>
  <div class="objectlist">
    <br>
    <div class="row">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
    <div class="panel panel-info" >
      <div class="panel-heading">
        <h3 class="panel-title">List of Objects</h3>
      </div>
      <div class="panel-body">
        <div class="row">
      <div class="col-sm-6 col-md-6" v-for="(list,key) in qobjects" :key="key">
        <div class="thumbnail">
          <img :src="`./src/assets/${list.objtype}.png`" width="150">
          <div class="caption">
            <p><b>{{list._id}}</b></p>
            <p>{{list.objtype}}</p>
            <p>WxHxD : {{list.width}}x{{list.height}}x{{list.depth}}</p>
            <router-link :to="{ path: 'detail' ,name: 'Detail', params:{objid: list._id, objtype: list.objtype, height: list.height, width: list.width,depth: list.depth}}">
            <button class="btn btn-success" role="button">Detail</button>
            </router-link>
          </div>
        </div>
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
      qobject: null,
      qobjects: {},
    }
  },
  created () {
    var url = 'http://localhost:5000/objects'
    console.log(url)
    axios
      .get(url)
      .then((response)=>{
        console.log(response.data);
        this.qobjects = response.data;
      })
      .catch((error)=>{
        console.log(error);
      })


  },
  methods: {
    
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