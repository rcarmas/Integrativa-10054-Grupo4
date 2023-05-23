Vue.component('portfolio-item', {
    props: ['name', 'description', 'image'],
    template: `
      <div class="col-lg-6">
        <a class="portfolio-item" href="#!">
          <div class="caption">
            <div class="caption-content">
              <div class="h2">{{ name }}</div>
              <p class="mb-0">{{ description }}</p>
            </div>
          </div>
          <img class="img-fluid" :src="image" alt="..." />
        </a>
      </div>
    `
  });

  new Vue({
    el: '#app',
    // data: {
    //   portfolioItems: [
    //     {
    //       name: 'Dilan Zurita',
    //       description: 'Joven estudiante universitario de sexto semestre en la carrera de tecnologías de la información.',
    //       image: 'assets/img/dilan.JPG'
    //     },
    //     // Agrega más elementos del portafolio aquí si es necesario
    //   ]
    // }
  });