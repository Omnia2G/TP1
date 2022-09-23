<template>
  <div class="hello">
    <h1>Tímový projekt 1</h1>
    <p>
      Webová stránka uvádza všetky informácie ohľadom nášho tímu a projektu v
      rámci predmete TP1.
    </p>
    <br />
    <h2><b>Názov projektu:</b> Bezpečné úložisko pre kryptomeny</h2>
    <br />
    <h2><b>Zadávateľ/ia témy:</b> Július Šiška</h2>
    <br />
    <h2><b>Zadanie</b></h2>
    <p class="box">
      "Napriek kolísaniu hodnoty kryptomien, obchodovaný objem je signifikantný
      a úložiská (peňaženky) s veľkým objemom kryptomien sú cieľom útokov
      hackerov. Zároveň riešenia pre bezpečné obchodovanie v objeme transakcií
      vo výške niekoľko miliónov euro nie sú verejne zdokumentované a sú
      potrebné k vytvoreniu bezpečného ekosystému kryptomien. Cieľom tímovej
      práce je navrhnúť riešenie na úrovni bankovej bezpečnosti na obchodovanie
      a uloženie veľkého množstva kryptomeny (Ethereum, Solana, Cosmos)
      umožňujúce flexibilné obchodovanie a vysokú úroveň bezpečnosti použitím HW
      prostriedkov a zároveň zdieľania kľúčov k úložisku medzi viaceré osoby.
      Cieľom je prepojiť možnosť robenia presunov aktív alebo interakcie so
      smart kontraktami, ale tak, aby ich nemohla vykonať jediná osoba a ich
      uloženia v HW high-security zariadeniach. Ako výstup sa očakáva návrh
      riešenia a naprogramovanie základných častí aplikácie po API zvoleného
      HSM."
    </p>
    <br />
    <h2><b>Členovia tímu:</b></h2>
    <div class="list_container">
      <ul class="list">
        <li>Adam Hamra, Bc.</li>
        <li>Jakub Krajčík, Bc.</li>
        <li>Ján Mikulec, Bc.</li>
        <li>Marek Grežďo, Bc.</li>
        <li>Marián Choma, Bc.</li>
        <li>Peter Zigman, Bc.</li>
        <li>Zsombor Kálmán Orosz, Bc.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, p{
  text-align: center;
}
.box {
  text-align: left;
  margin-left: 15rem;
  margin-right: 15rem;
}
.list_container {
  text-align: center;
}
.list {
  display: inline-block;
  text-align: left;
}
li {
  display: inline-block;
  text-align: left;
  margin: 0 10px;
}
</style>
