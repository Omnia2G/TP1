<template>
  <div class="hello">
    <h1>Tímový projekt 1</h1>
    <p>
      Webová stránka uvádza všetky informácie ohľadom 
      nášho tímu a projektu v rámci predmete TP1.
    </p>
   <h2><b>Názov projektu:</b></h2><br>
   <h2><b>Zadávateľ/ia témy:</b></h2><br>
   <h2><b>Členovia tímu:</b></h2><br>
   <ul>
     <li>Adam Hamra, Bc.</li>
     <li>Jakub Krajčík, Bc.</li>
     <li>Ján Mikulec, Bc.</li>
     <li>Marek Grežďo, Bc.</li>
     <li>Marián Choma, Bc.</li>
     <li>Peter Zigman, Bc.</li>
     <li>Zsombor Kálmán Orosz, Bc.</li>
     </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
