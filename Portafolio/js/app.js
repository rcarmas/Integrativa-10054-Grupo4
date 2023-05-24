Vue.component('portfolio-item', {
    props: ['name', 'description', 'image'],
    template: `
      <div class="col-lg-6">
        <a class="portfolio-item" href="#!">
          <div class="caption">
            <div class="caption-content">
              <div class="h2" style="padding-left: 215px;">{{ name }}
              <p></p>
              <p class="mb-0">{{ description }}</p>
              </div>
            </div>
          </div>
          <img class="img-fluid" :src="image" alt="..." />
        </a>
      </div>
    `
  });

  new Vue({
    el: '#app',
     data: {
       portfolioItems: [
        {
            name: 'Christopher Armas',
            description: 'Estudiante de Ingeniería en Tecnologías de la Información, actualmente estoy cursando sexto semestre de la carrera en la Universadad de las Fuerzas Armadas ESPE. Tengo conocimientos previos en Desarollo Web, Gestión de Base de Datos, Infraestructura, Soporte, Cyberseguridad e IA. Actualmente ejerzo como Desarollador Freelancer Jr. para la creación de diversas páginas y aplicaciones web - moviles con experiencia previa de las mismas en el ámbito del Frond End.',
            image: 'assets/img/chris.JPG'
          },
        {
            name: 'Sebastián Cárdenas',
            description: 'Soy un estudiante de ingeniería en TI cursando sexto semestre, con enfoque en el desarrollo web. Actualmente trabajo en Bou Company, en el equipo de desarrolladores y operaciones, donde he desarrollado habilidades en solución de problemas y trabajo en equipo. Busco una posición donde pueda continuar aprendiendo y creciendo profesionalmente en el campo de la ingeniería en TI.',
            image: 'assets/img/sebas.JPG'
          },
        {
            name: 'Rafael Fonseca',
            description: 'Estudiante de Ingeniería en Tecnologías de la Información. Me considero una persona responsable, proactiva, organizada, capaz que ayuda a los demás en caso que lo necesiten.',
            image: 'assets/img/rafa.JPG'
          },
         {
           name: 'Dilan Zurita',
           description: 'Joven estudiante universitario de sexto semestre en la carrera de tecnologías de la información, amable, extrovertido, responsable y polifacético. Poseo habilidades computacionales diversas las cuales abarcan las necesidades básicas de las ramas de la tecnología como: la gestion de base de datos desarrollo front y back end manejo de distintos lenguajes de programación redes computacionales Habilidades que se adaptarán dependiendo de las necesidades que se presenten en mi lugar laboral.',
           image: 'assets/img/dilan.JPG'
         },
         
       ]
    }
  });