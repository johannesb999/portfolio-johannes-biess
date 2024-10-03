<template>
  <main>
    <div id="resumeLinkHfg">
      <nuxt-link to="/de/resume" class="custom-link"
      >Curriculum vitae</nuxt-link
    >    </div>
    
   
    <div class="hfgText">
      <SplitFlapText
        :texts="[
          'HFG      KOMPETENZEN      ',
          'FIGMA   UX        UI    ',
          'PROTOTYPING  USABILITY  ',
          '     DESIGNMETHODEN         ',
          ' USER CENTERED  LEANDESIGN    ',
          'FULLSTACK DEVELOPMENT   ',
        ]"
      />
    </div>

    
   
  </main>
</template>

<script setup>
import SplitFlapText from "@/components/splitFlapText.vue";
</script>

<style scoped>
#resumeBar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
}

main {
  height: 100%;
  width: 100%;
}

#hfg {
  color: black;
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  margin-top: 50px;
  font-style: normal;
  line-height: normal;
}

#resumeLink {
  color: #171717;
  font-weight: 700;
  font-size: 2rem;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-style: normal;
  line-height: normal;
}

#resumeLinkHfg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  font-weight: 700;
}

#resumeLinkHfg {
  right: 0;
  padding-right: 20px;
}

.custom-link {
  color: black;
  text-decoration: none;
}

.custom-link:hover {
  color: black;
}

.hfgText {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 200;
  text-align: left;

  #line1 {
    font-weight: 700;
  }
  #line2 {
    font-weight: 300;
  }
  #line3 {
    font-weight: 300;
  }
  #line4 {
    font-weight: 300;
  }
  #line5 {
    font-weight: 300;
  }
  #line6 {
    font-weight: 300;
  }
}

.picture {
  position: absolute;
  top: 50%;
  left: 0;
  padding-left: 10rem;
  transform: translateY(-50%);
}
</style>
