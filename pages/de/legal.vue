<template>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/de/contact" class="custom-link">KONTAKT</nuxt-link>
      </div>
      <div id="impressum">
        <h1>Impressum</h1>
        <h2 id="m46">Dienstanbieter</h2>
        <p>Johannes Biess</p>
        <p>Wehrleshalde 1</p>
        <p>73434 Aalen</p>
        <p>Germany</p>

        <h2 id="m56">Kontact Information</h2>
        <p>Email Addresse: contact@johannes-biess.com</p>
        <p>Telefonnummer: +49 176 41107111</p>
        <p>
          Kontaktmöglickeiten:
          <a href="https://johannes-biess.com/en/contact" target="_blank"
            >https://johannes-biess.com/en/contact</a
          >
        </p>
        <h2 id="m65">Haftungs- und Urheberrechtshinweise</h2>
        <div>
          Links zu externen Webseiten: Der Inhalt externer Webseiten, auf die wir
          direkt oder indirekt verweisen, liegt außerhalb unseres
          Verantwortungsbereichs und wir machen uns diesen nicht zu eigen. Wir
          übernehmen keine Verantwortung für Inhalte oder Nachteile, die aus der
          Nutzung der auf den verlinkten Webseiten zugänglichen Informationen
          entstehen.
        </div>
        <div>
          Urheber- und Markenrechte: Alle auf dieser Webseite dargestellten
          Inhalte wie Texte, Fotografien, Grafiken, Marken und Handelsnamen sind
          durch die jeweiligen geistigen Eigentumsrechte (Urheberrechte,
          Markenrechte) geschützt. Die Nutzung, Vervielfältigung usw. unterliegen
          unseren Rechten oder den Rechten der jeweiligen Autoren oder
          Rechteinhaber.
        </div>
        <div>
          Hinweise auf Rechtsverstöße: Sollten Sie innerhalb unseres
          Internetauftritts Rechtsverstöße bemerken, bitten wir Sie, uns darauf
          hinzuweisen. Wir werden rechtswidrige Inhalte und Links umgehend nach
          Kenntniserlangung entfernen.
        </div>

        <div class="seal">
          <a
            href="https://datenschutz-generator.de/"
            title="Legal text by Dr. Schwenke - for more information, please click."
            target="_blank"
            rel="noopener noreferrer nofollow"
            >Created with a free privacy generator from Dr. Thomas Schwenke</a
          >
        </div>
      </div>
    </main>
</template>

<script setup></script>

<style scoped>
#projectLinkStart {
  position: absolute;
  top: 0;
  padding-top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

#impressum {
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: 100;
  max-width: 560px;
  height: 80%;
  overflow-y: auto;
  text-align: center;
  padding: 20px;
}


</style>
