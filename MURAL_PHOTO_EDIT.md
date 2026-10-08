Fotografía de portada de murales: original odiseo-registro-01.jpeg. Edición con herramienta integrada image_gen, eliminación localizada del mesero y continuidad del piso. El SVG conserva la fotografía original completa y superpone únicamente una esquina del piso; el mural, paredes, lámparas y mobiliario usan la fotografía original. La foto documental permanece intacta.
Prompt: remove cropped waiter at bottom left, reconstruct tiled floor only; preserve mural, walls, furniture, lighting and composition.
Salida: dist/assets/murales/odiseo-portada-sin-mesero.svg

Odiseo-02: mobiliario cubierto con plástico negro reconstruido como asiento azul, usando odiseo-registro-02 como referencia. Herramienta integrada image_gen. Prompt: remove black plastic and reveal teal upholstered banquette; preserve artwork and original composition. SVG superpone exclusivamente la zona del asiento y plástico; mural y entorno siguen siendo píxeles de la foto original. Salida: dist/assets/murales/odiseo-02-asiento-azul.svg.

Odiseo registro 03: inodoro eliminado mediante image_gen. Prompt: remove toilet only and continue beige stone floor/baseboard; preserve man and mural. El SVG conserva la fotografía original y limita la reconstrucción a la silueta del inodoro. Salida: dist/assets/murales/odiseo-artista-sin-inodoro.svg.

Tizones: versión adicional 16:9 recreada con image_gen a partir de tizones-04 y referencia enviada del comedor. Prompt: Fujifilm medium format wide-angle architectural photograph; expand dining room from reference, retain blue circular artwork then one mirror on left wall. Al cambiar punto de vista y completar mobiliario, es una recreación generativa, no un registro documental. Se conserva la original y se identifica la recreación en el pie de foto. Salida: dist/assets/murales/tizones-vista-amplia-ia.png.

Corrección Tizones: la recreación amplia anterior modificaba detalles del mural y se retiró de la galería. Nueva extensión a izquierda con espejo primero y cuadro azul después. SVG superpone la fotografía original de tizones-04 completa a partir de x=390, opacidad total desde x=412; cuadro empieza x=428 y mural x=776. Verificación: bytes JPEG embebidos idénticos al original (SHA256 68da7b87502b5ec3d01706e5a638c94e050f6b311825188aafbbf86438a739be). Solo escalado de presentación; sin redibujar ni recolorear la obra. Salida: tizones-amplia-mural-original.svg.

Unión Tizones: image_gen corrige exclusivamente discontinuidades de techo, pared lisa y mesa del lado izquierdo. Mural del fuego y cuadro azul se vuelven a superponer directamente desde tizones-04 original, verificado por igualdad de bytes. Salida: tizones-amplia-union-corregida.svg.

## Guardaescobas — 8 octubre 2026
Se amplió únicamente la máscara del montaje sobre el guardaescobas y el piso para eliminar el salto de la unión. Las dos fotografías incrustadas se mantienen sin cambios; el mural fuera del retoque anterior conserva la fotografía original. Asset: odiseo-artista-sin-inodoro-v2.svg.
