// import Vue from 'vue'
// import Vuetify from 'vuetify'
let lines;
let p_name=[];
let lines_fr=[];
let lines_EN;
let color=[];
fetch('data/lines.json')
  .then(response => response.json())
  .then(data => {
      lines= data;
    data.forEach(d => {
        p_name.push(d.product);
        lines_fr.push(d.FR);
        color.push(d.Color);
    });
    console.log(p_name,lines_fr,color);
  }
  );

  
  



  
