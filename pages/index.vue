<template>
  <div>
    <div id="start">START</div>
    <div id="aboutLink">
      <nuxt-link to="about" class="custom-link">About Me</nuxt-link>
    </div>
    <div id="contactLink">
      <nuxt-link to="contact" class="custom-link">Contact</nuxt-link>
    </div>
    <div class="center"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      speed: 0.07, // seconds
      beginStr: "BZBUVJCIHHDFGSTHBIVHICIJGIUZTGHNBVCFGHJIUZTGHBGVFGHHJBGTHJUUZGH"
        .toUpperCase()
        .split(""),
      endStr: "HI MY NAME IS JOHANNES I AM FULL STACK DEVELOPER AND DESIGNER"
        .toUpperCase()
        .split(""),
      char: [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
        "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2",
        "3", "4", "5", "6", "7", "8", "9", "0", " ",
      ],
      strCount: [],
      flag: [],
      flag2: true,
    };
  },
  mounted() {
    this.initializeFlaps();
  },
  methods: {
    initializeFlaps() {
      const amountOfFlaps =
        this.beginStr.length >= this.endStr.length ? this.beginStr.length : this.endStr.length;

      let html = "";
      for (let x = 0; x < amountOfFlaps; x++) {
        html += '<div class="splitflap"><div class="top"></div><div class="bottom"></div><div class="nextHalf"></div><div class="nextFull"></div></div>';
      }
      
      this.$el.querySelector(".center").innerHTML = html;

      this.adjustStrArrays(amountOfFlaps);
      this.initAnimation(amountOfFlaps);
    },
    adjustStrArrays(amountOfFlaps) {
      if (this.beginStr.length !== amountOfFlaps) {
        for (let x = 0; x < amountOfFlaps - this.beginStr.length; x++) {
          this.beginStr.push(" ");
        }
      }
      if (this.endStr.length !== amountOfFlaps) {
        for (let x = 0; x < amountOfFlaps - this.endStr.length; x++) {
          this.endStr.push(" ");
        }
      }
      for (let x = 0; x < amountOfFlaps; x++) {
        this.strCount[x] = this.char.indexOf(this.beginStr[x]);
        this.flag[x] = false;
      }
    },
    initAnimation(amountOfFlaps) {
      setInterval(() => {
        for (let x = 0; x < amountOfFlaps; x++) {
          const b1 = this.$el.querySelectorAll(".nextFull")[x];
          if (b1.innerHTML === this.endStr[x]) {
            this.dontFlipIt(x);
          } else {
            this.flipIt(x);
          }
        }

        if (this.flag.every(e => e) && this.flag2) {
          this.flag2 = false;
          this.changeDestination();
        }
      }, this.speed * 1000);
    },
    flipIt(x) {
      const a1 = this.$el.querySelectorAll(".top")[x];
      const a2 = this.$el.querySelectorAll(".bottom")[x];
      const b1 = this.$el.querySelectorAll(".nextFull")[x];
      const b2 = this.$el.querySelectorAll(".nextHalf")[x];

      a1.innerHTML = this.char[this.strCount[x] === 0 ? this.char.length - 1 : this.strCount[x] - 1];
      a2.innerHTML = this.char[this.strCount[x] === 0 ? this.char.length - 1 : this.strCount[x] - 1];
      b1.innerHTML = this.char[this.strCount[x]];
      b2.innerHTML = this.char[this.strCount[x]];

      a2.classList.remove("flip1");
      a2.offsetWidth; // Trigger reflow
      a2.classList.add("flip1");
      b2.classList.remove("flip2");
      b2.offsetWidth; // Trigger reflow
      b2.classList.add("flip2");

      if (this.strCount[x] > this.char.length - 2) this.strCount[x] = 0;
      else this.strCount[x]++;
    },
    dontFlipIt(x) {
      const a1 = this.$el.querySelectorAll(".top")[x];
      const a2 = this.$el.querySelectorAll(".bottom")[x];
      const b2 = this.$el.querySelectorAll(".nextHalf")[x];

      this.flag[x] = true;
      a2.classList.remove("flip2");
      a2.style.backgroundColor = "#fff";
      b2.style.backgroundColor = "#fff";
      a1.innerHTML = this.char[this.strCount[x] === 0 ? this.char.length - 1 : this.strCount[x] - 1];
      a2.innerHTML = this.char[this.strCount[x] === 0 ? this.char.length - 1 : this.strCount[x] - 1];
    },
    changeDestination() {
      setTimeout(() => {
        this.flag.fill(false);
        this.flag2 = true;

        const tempArr = this.endStr.slice();
        this.endStr = this.beginStr.slice();
        this.beginStr = tempArr.slice();
      }, 3000);
    },
  },
};
</script> 

<style>
#start {
  color: black;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  margin-top: 50px;
  font-style: normal;
  line-height: normal;
}

#aboutLink,
#contactLink {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 32px;
  font-weight: 700;
}

#aboutLink {
  left: 0;
  padding-left: 20px;
}

#contactLink {
  right: 0;
  padding-right: 20px;
}

.custom-link {
  color: black;
  text-decoration: none;
}

.custom-link:hover {
  color: black;
  text-decoration: underline;
}

  
  .splitflap {
  position: relative;
  min-width: 10px;
  height: 10px;
  margin: 2px;
  line-height: 10px;
  font-size: 10px;
  font-family: "Geologica", sans-serif;
  font-weight: 300;
  text-align: center;
  color: black;
}

.center {
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -50px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.top {
  position: relative;
  height: 50%;
  width: 100%;
  background-color: #fff;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  z-index: 0;
}

div {
  perspective: 500px;
}

.bottom {
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: -50%;
  border-radius: 10px 10px 10px 10px;
  z-index: -1;
  background-color: black;
  background-image: linear-gradient(rgba(10, 50, 0, 0), #fff);
  transform-origin: center;
}

.nextHalf {
  position: relative;
  height: 50%;
  width: 100%;
  margin-top: -100%;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  z-index: 2;
  background-color: black;
  background-image: linear-gradient(#fff, rgba(40, 6, 10, 0));
  transform-origin: bottom;
}

.nextFull {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #fff;
  margin-top: -50%;
  border-radius: 10px 10px 10px 10px;
  z-index: -3;
}

.flip1 {
  animation: flip1 ease-in 1;
  animation-duration: 1s;
}

.flip2 {
  animation: flip2 ease-out 1;
  animation-duration: 1s;
}

@keyframes flip1 {
  0% {
    transform: rotateX(0deg);
    background-color: #fff;
  }
  50% {
    transform: rotateX(90deg);
    background-color: black;
  }
  100% {
    transform: rotateX(90deg);
  }
}

@keyframes flip2 {
  0% {
    transform: rotateX(-90deg);
  }
  50% {
    transform: rotateX(-90deg);
  }
  100% {
    transform: rotateX(0deg);
    background-color: #fff;
  }
}
</style>
