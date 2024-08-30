<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/en/contact" class="custom-link">Contact</nuxt-link>
      </div>
      <div id="impressum">
        <h1>Imprint</h1>
        <h2 id="m46">Service Provider</h2>
        <p>Johannes Biess</p>
        <p>Wehrleshalde 1</p>
        <p>73434 Aalen</p>
        <p>Germany</p>

        <h2 id="m56">Contact Information</h2>
        <p>Email Address: contact@johannes-biess.com</p>
        <p>Phone: +49 176 41107111</p>
        <p>
          Contact Form:
          <a href="https://johannes-biess.com/en/contact" target="_blank"
            >https://johannes-biess.com/en/contact</a
          >
        </p>

        <h2 id="m65">Liability and Copyright Notices</h2>
        <p>
          Links to external websites: The content of external websites to which
          we refer directly or indirectly lies outside our area of
          responsibility, and we do not adopt it as our own. We assume no
          responsibility for any content or disadvantages arising from the use
          of the information accessible on the linked websites.
        </p>
        <p>
          Copyrights and Trademark Rights: All content presented on this
          website, such as texts, photographs, graphics, trademarks, and trade
          names, are protected by the respective intellectual property rights
          (copyrights, trademark rights). The use, reproduction, etc. are
          subject to our rights or the rights of the respective authors or
          rights holders.
        </p>
        <p>
          Notices of Legal Violations: If you notice any legal violations within
          our website, please inform us. We will remove illegal content and
          links immediately after becoming aware of them.
        </p>

        <p class="seal">
          <a
            href="https://datenschutz-generator.de/"
            title="Legal text by Dr. Schwenke - for more information, please click."
            target="_blank"
            rel="noopener noreferrer nofollow"
            >Created with a free privacy generator from Dr. Thomas Schwenke</a
          >
        </p>
      </div>
    </main>
  </html>
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
