window.PORTFOLIO = {
 email: 'jgeoffreyartist@gmail.com',
 clients: [],
 bogotaVisits: [],
 series: [
  {id:'cajas',name:'Cajas',subtitle:'La figura encuentra su lugar.',text:'Personas que leen, esperan o se detienen. Figuras absortas en sus propios gestos habitan vacíos construidos con planos de color, sombras y profundidad. La pintura se acerca al objeto y cambia con nuestra posición frente a ella.',image:'caja-rayas',note:'Cajas es una denominación de trabajo. La clasificación definitiva se precisará con el artista.'},
  {id:'ser-y-parecer',name:'Ser y parecer',subtitle:'Mirar de nuevo lo que creemos ver.',text:'La apariencia de un muro fracturado abre una pregunta sobre lo que hay detrás de su superficie. Pintura, soporte y entorno se relacionan en obras que acercan la imagen a la arquitectura y hacen de la percepción parte de la experiencia.',image:'ser-parecer',wall:true,groups:[{name:'Aleación',id:'aleacion',heading:'Aleación',text:'Aleación es una evolución de Ser y parecer: la obra pictórica se incorpora a esferas de metal, donde las fracturas pintadas dialogan con los reflejos del entorno.'}]},
  {id:'a-cielo-abierto',name:'A cielo abierto',subtitle:'La figura, el horizonte y el territorio.',text:'Figuras pequeñas habitan horizontes y planos de metal, acrílico y color. Reflejos, movimientos y gestos suspendidos relacionan la vida cotidiana con el espacio de la pintura. La serie se prolonga en las bateas de Minería legal, su vertiente escultórica.',image:'cielo-horizonte-verde-frontal',groups:[{name:'Minería legal',id:'mineria-legal',heading:'Minería legal · Obra escultórica',text:'Las bateas constituyen la vertiente escultórica de A cielo abierto. Las figuras de los mineros recorren sus superficies y bordes, acercando el oficio y el territorio a la escala del objeto.'}]},
  {id:'juego-de-sombras',name:'Juego de sombras',subtitle:'El gesto y su otra imagen.',text:'Manos y cuerpos dialogan con las sombras que proyectan. En paneles acrílicos y cajas de metal, la figura pintada, la luz y el fondo construyen una segunda imagen: animales, formas y asociaciones que aparecen entre el gesto y su proyección.',image:'sombras-flores'}
 ],
 works: [
 {id:'caja-rayas',series:'cajas',label:'Figura ante un fondo de franjas',images:['caja-rayas','caja-rayas-documental','caja-rayas-frontal','caja-rayas-detalle'],exhibition:'Entre raíces y memoria: lo que permanece · Borboleta Gallery · septiembre de 2026',description:'Una figura se detiene ante planos curvos de franjas turquesa y negras. El marco, la imagen y la profundidad de la caja proponen distintas lecturas al cambiar de posición.'},
 {id:'caja-hombre',series:'cajas',label:'Figura con un zapato amarillo',images:['caja-hombre-frontal','caja-hombre'],exhibition:'Entre raíces y memoria: lo que permanece · Borboleta Gallery · septiembre de 2026'},
 {id:'caja-vestido',series:'cajas',label:'Figura ante planos violeta y amarillo',images:['caja-vestido-frontal','caja-vestido','cajas-dos'],exhibition:'Entre raíces y memoria: lo que permanece · Borboleta Gallery · septiembre de 2026'},
 {id:'caja-lectura',series:'cajas',label:'Figura reclinada con un libro',images:['caja-lectura-frontal','caja-lectura','cajas-dos'],exhibition:'Entre raíces y memoria: lo que permanece · Borboleta Gallery · septiembre de 2026'},
 {id:'batea',series:'a-cielo-abierto',group:'Minería legal',label:'Batea con figuras de mineros',images:['batea','batea-documental','mineria-montaje'],description:'Las figuras de los mineros recorren el borde de una batea. Esta obra pertenece a la vertiente escultórica de A cielo abierto, Minería legal. La vista de montaje documenta otras obras de la serie.'},
 {id:'ser-parecer',series:'ser-y-parecer',title:'Ser y parecer',year:'2016',images:['ser-parecer','ser-proceso'],description:'Registro de la obra instalada y de su proceso. La apariencia de una excavación atraviesa visualmente el muro y se relaciona con los fragmentos dispuestos en el suelo.',exhibition:'Nuevos Territorios · Galería Casa Cuadrada · Bogotá · 2016'},
 {id:'aleacion-2024',series:'ser-y-parecer',title:'Aleación',year:'2024',medium:'Óleo sobre esfera de acero inoxidable',dimensions:'45 cm de diámetro',images:['aleacion-2024'],exhibition:'Participación en la semana de Art Miami · 2024',group:'Aleación'},
 {id:'aleacion-2025',series:'ser-y-parecer',title:'Aleación',year:'2025',medium:'Óleo sobre esfera de acero',dimensions:'35 cm de diámetro',images:['aleacion-2025'],group:'Aleación'},
 {id:'aleacion-franja',series:'ser-y-parecer',title:'Aleación',images:['aleacion-franja'],group:'Aleación'},
 {id:'cielo-horizonte-verde',series:'a-cielo-abierto',label:'Figuras sobre planos de metal y verde',images:['cielo-horizonte-verde-frontal']},
 {id:'cielo-reflejos-amarillo',series:'a-cielo-abierto',label:'Figuras y reflejos sobre amarillo',images:['cielo-reflejos-amarillo-frontal']},
 {id:'cielo-reflejos-rosa',series:'a-cielo-abierto',label:'Figuras y reflejos sobre rosa',images:['cielo-reflejos-rosa-frontal']},
 {id:'cielo-horizonte-metal',series:'a-cielo-abierto',label:'Figuras y reflejos sobre metal',images:['cielo-horizonte-metal-frontal']},
 {id:'cielo-horizonte-azul-magenta',series:'a-cielo-abierto',label:'Figuras sobre un horizonte azul y magenta',images:['cielo-horizonte-azul-magenta-frontal']},
 {id:'cielo-horizonte-ocre',series:'a-cielo-abierto',label:'Figuras sobre metal y ocre',images:['cielo-horizonte-ocre-frontal'],description:'Vista recuperada de una fotografía de montaje. Se conserva la resolución documental disponible.'},
 {id:'cielo-horizonte-naranja',series:'a-cielo-abierto',label:'Figuras sobre metal y naranja',images:['cielo-horizonte-naranja-frontal'],description:'Vista recuperada de una fotografía de montaje. Se conserva la resolución documental disponible.'},
 {id:'cielo-danza',series:'a-cielo-abierto',label:'Figura en movimiento sobre fondo azul',medium:'Óleo sobre panel acrílico y metal',dimensions:'80 cm de diámetro',images:['cielo-danza','cielo-danza-documental']},
 {id:'cielo-globos',series:'a-cielo-abierto',label:'Figura en salto con globos dorados',medium:'Óleo sobre panel acrílico y metal',images:['cielo-globos','cielo-globos-documental'],description:'La documentación aportada refiere una versión de 120 cm de diámetro anunciada para CONTEXT Art Miami 2021. Datarte registra una imagen similar como A cielo abierto2, de 2022 y 80 × 80 × 12 cm. La ficha de esta fotografía se confirmará con el artista.'},
 {id:'sombras-amarillo',series:'juego-de-sombras',label:'Figura con camisa azul y naranja',year:'2022',medium:'Óleo sobre panel acrílico y caja de metal',dimensions:'80 cm de diámetro',images:['sombras-amarillo','sombras-amarillo-documental','sombras-amarillo-lateral'],exhibition:'CONTEXT Art Miami · 2022',description:'La vista principal presenta la caja con fondo transparente. Las fotografías documentales adicionales permiten apreciar su profundidad y la relación entre las manos y su sombra.'},
 {id:'sombras-flores',series:'juego-de-sombras',label:'Figura con vestido floral',images:['sombras-flores','sombras-flores-documental','sombras-flores-lateral'],description:'Vista principal con fondo transparente y fotografías documentales de una obra incorporada al portafolio. El título, la técnica, las medidas y el año se confirmarán con el artista.'},
 {id:'sombras-naranja',series:'juego-de-sombras',label:'Figura sobre fondo naranja',year:'2022',medium:'Óleo sobre panel acrílico y caja de metal',dimensions:'85 cm de diámetro',images:['sombras-naranja','sombras-naranja-documental']},
 {id:'sombras-rosa',series:'juego-de-sombras',label:'Figura con vestido azul sobre fondo rosa',medium:'Óleo sobre panel acrílico y caja de metal',dimensions:'85 cm de diámetro',images:['sombras-rosa','sombras-rosa-documental'],exhibition:'CONTEXT Art Miami · Galería Casa Cuadrada'},
 {id:'sombras-pinceles',series:'juego-de-sombras',title:'Entre sombras',images:['sombras-pinceles','sombras-pinceles-documental'],description:'Datarte registra Entre sombras, de 2023, óleo sobre panel acrílico y metal, 80 × 80 × 12 cm. La ficha aportada inicialmente menciona 85 cm de diámetro para una imagen similar. Las medidas y la versión se confirmarán con el artista.'},
 {id:'sombras-eli',series:'juego-de-sombras',label:'Figura sobre fondo violeta',year:'2022',medium:'Óleo sobre panel acrílico y caja de metal',dimensions:'100 cm de diámetro',images:['sombras-eli','sombras-eli-documental'],exhibition:'CONTEXT Art Miami · 2022',description:'Modelo identificada por el artista como «Mi Bella Eli».'},
 {id:'sombras-verde',series:'juego-de-sombras',title:'Super plástica',images:['sombras-verde','sombras-verde-documental']},
 {id:'sombras-hombre',series:'juego-de-sombras',label:'Figura masculina sobre fondo rosa',images:['sombras-hombre','sombras-hombre-documental']}
 ],
 events: [
 {year:'2026',title:'Entre raíces y memoria: lo que permanece',place:'Borboleta Gallery',type:'Exposición',date:'Septiembre de 2026',image:'cajas-exposicion'},
 {year:'2024',title:'Art Miami',place:'Miami, Estados Unidos',type:'Feria',date:'2024 · participación comunicada por el artista'},
 {year:'2022',title:'CONTEXT Art Miami',place:'Miami, Estados Unidos · Galería Casa Cuadrada',type:'Feria',date:'2022'},
 {year:'2021',title:'CONTEXT Art Miami',place:'Miami, Estados Unidos',type:'Feria',date:'2021 · obra anunciada para esta edición'},
 {year:'2020',title:'Art Miami / CONTEXT · Special Online Edition',place:'Artsy · Galería Casa Cuadrada',type:'Feria',date:'2–20 de diciembre de 2020',image:'feria-context2020'},
 {year:'2020',title:'BARCÚ',place:'Bogotá, Colombia',type:'Feria',date:'2020',image:'feria-barcu2020'},
 {year:'2017',title:'Art Wynwood',place:'Miami, Estados Unidos · Galería Casa Cuadrada',type:'Feria',date:'16–20 de febrero de 2017'},
 {year:'2016',title:'CONTEXT New York',place:'Pier 94, Nueva York · Galería Casa Cuadrada',type:'Feria',date:'3–8 de mayo de 2016',image:'feria-contextny2016'},
 {year:'2016',title:'ArtLima',place:'Lima, Perú · Galería Casa Cuadrada',type:'Feria',date:'2016',image:'feria-artlima2016'},
 {year:'2016',title:'Nuevos Territorios',place:'Bogotá · Galería Casa Cuadrada',type:'Exposición',date:'Actividad Bogotá Art Circuitos · 28 de mayo de 2016',image:'feria-territorios'},
 {year:'2015',title:'ArtLima',place:'Lima, Perú · Galería Casa Cuadrada',type:'Feria',date:'23–26 de abril de 2015',image:'feria-artlima2015'},
 {year:'2015',title:'BARCÚ · Segunda edición',place:'Bogotá, Colombia',type:'Feria',date:'30 de septiembre–5 de octubre de 2015',image:'feria-barcu2015'},
 {year:'Por confirmar',title:'Afuera · Arte contemporáneo en Tabio',place:'Poliedro Arts · Tabio, Colombia',type:'Exposición',date:'23 de abril–30 de mayo · año por confirmar',image:'feria-afuera'}
 ],
 sources:[
 {title:'Galería Casa Cuadrada · perfil y trayectoria',url:'https://galeriacasacuadrada.com/?galleries=john-geoffrey-sanchez'},
 {title:'Datarte · colección general',url:'https://app.datarte.art/portafolio/john-geoffreysanchez-coleccion-general'},
 {title:'Artelista · obras tempranas',url:'https://www.artelista.com/@johngeoffrey'}
 ]
};
