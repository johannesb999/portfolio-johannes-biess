<template>
  <html>
    <main>
      <div id="projectLinkStart">
        <nuxt-link to="/en/project/projects" class="custom-link"
          >PROJECTS</nuxt-link
        >
      </div>

      <div class="project-details">
        <div class="project-section">
          <div class="project-video">
            <iframe
              src="https://www.youtube.com/embed/bKC-N5-m5u0?si=MtuP-8-eV4YISTo9=hd1080&rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="project-header">
          <h1 class="project-title">PLANTMONIT</h1>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <h2>Problem / Idea</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Arcu nec morbi elementum
                blandit sapien amet vulputate quis pharetra. Ut id fringilla
                orci diam. Diam consequat elementum in laoreet fringilla etiam
                eget id felis. Adipiscing sagittis aenean non id diam volutpat.
                Bibendum ultrices tortor ac ut vitae. Scelerisque risus enim
                mattis sit etiam tellus volutpat. Eget malesuada magna id ac
                eget. Laoreet convallis volutpat nunc feugiat. Risus elit auctor
                sed quam consequat. Vitae nisl ut tortor sit ligula elementum.
                Integer ut cursus bibendum at. Vestibulum massa non pharetra
                enim cras erat. Scelerisque sit nisl ut scelerisque egestas
                lorem. Dui nunc vel tempus purus. Egestas turpis mattis volutpat
                risus ut ultrices ultrices tellus. Nunc viverra eleifend eget
                augue vulputate scelerisque elit.
              </p>
            </div>
            <div class="image">
              <img src="https://via.placeholder.com/450x350" alt="plantmonit" />
            </div>
          </div>
        </div>

        <div class="project-section-reverse">
          <div class="project-content">
            <div class="image">
              <img src="https://via.placeholder.com/450x350" alt="plantmonit" />
            </div>
            <div class="text">
              <h2>Process</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Arcu nec morbi elementum
                blandit sapien amet vulputate quis pharetra. Ut id fringilla
                orci diam. Diam consequat elementum in laoreet fringilla etiam
                eget id felis. Adipiscing sagittis aenean non id diam volutpat.
                Bibendum ultrices tortor ac ut vitae. Scelerisque risus enim
                mattis sit etiam tellus volutpat. Eget malesuada magna id ac
                eget. Laoreet convallis volutpat nunc feugiat. Risus elit auctor
                sed quam consequat. Vitae nisl ut tortor sit ligula elementum.
                Integer ut cursus bibendum at. Vestibulum massa non pharetra
                enim cras erat. Scelerisque sit nisl ut scelerisque egestas
                lorem. Dui nunc vel tempus purus. Egestas turpis mattis volutpat
                risus ut ultrices ultrices tellus. Nunc viverra eleifend eget
                augue vulputate scelerisque elit.
              </p>
            </div>
          </div>
        </div>

        <div class="project-section">
          <div class="project-content">
            <div class="text">
              <h2>Solution / Implementation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Arcu nec morbi elementum
                blandit sapien amet vulputate quis pharetra. Ut id fringilla
                orci diam. Diam consequat elementum in laoreet fringilla etiam
                eget id felis. Adipiscing sagittis aenean non id diam volutpat.
                Bibendum ultrices tortor ac ut vitae. Scelerisque risus enim
                mattis sit etiam tellus volutpat. Eget malesuada magna id ac
                eget. Laoreet convallis volutpat nunc feugiat. Risus elit auctor
                sed quam consequat. Vitae nisl ut tortor sit ligula elementum.
                Integer ut cursus bibendum at. Vestibulum massa non pharetra
                enim cras erat. Scelerisque sit nisl ut scelerisque egestas
                lorem. Dui nunc vel tempus purus. Egestas turpis mattis volutpat
                risus ut ultrices ultrices tellus. Nunc viverra eleifend eget
                augue vulputate scelerisque elit.
              </p>
            </div>
            <div class="image">
              <img src="https://via.placeholder.com/450x350" alt="plantmonit" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </html>
</template>

<script setup></script>

<style scoped>
html {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow-y: auto;
}

#projectLinkStart {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
}

.custom-link {
  color: black;
  text-decoration: none;
}

.custom-link:hover {
  color: black;
  text-decoration: underline;
}

.project-details {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 8rem;
  letter-spacing: 2px;
}

.project-header {
  text-align: center;
  margin-bottom: 20px;
}

.project-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  padding-top: 3rem;
}

.project-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.project-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.project-section.reverse .project-content {
  flex-direction: row-reverse;
}

.text {
  flex: 1;
  padding: 20px;
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.5;
}

.image {
  flex: 1;
  padding: 20px;
}

.project-video iframe {
  border: 1px solid black;
  border-radius: 10px;
  width: 83rem;
  height: 40rem;
}

.project-image img,
.image img {
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
}

.project-image {
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
}

.project-section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}
</style>
