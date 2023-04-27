<template>
  <base-card>
  <div class="hello">
    <h1><b>Tímový projekt</b></h1>
    <p>
      Webová stránka uvádza všetky informácie ohľadom nášho tímu a projektu v
      rámci predmetov TP1 a TP2.
    </p>
    <br />
    <h2><b>Názov projektu:</b> Bezpečné úložisko pre kryptomeny</h2>
    <br />
    <h2><b>Zadávateľ témy:</b> Július Šiška</h2>
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
  </div>
  </base-card>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, p {
  text-align: center;
}
.box {
  text-align: left;
  margin-left: 2rem;
  margin-right: 2rem;
}
.container {
  text-align: center;
}
.members_list {
  display: inline-block;
  text-align: center;
}
.members_list li {
  padding: .5rem;
  list-style-type: none;
}

</style>
