function crearFormularioDeRevalidabilidad() {
 
  var form = FormApp.create('Encuesta sobre el reconocimiento internacional de los estudios de Ingeniería Mecánica de la Universidad Simón Bolívar');
   
  form.setDescription ('Recurrimos a ti como egresado de la carrera de Ingeniería Mecánica de la USB con el objeto de solicitar tu colaboración en el suministro de algunos datos que permitan recopilar información testimonial sobre los resultados de las gestiones que puedas haber acometido para poder desempeñarte profesionalmente, realizar estudios de postgrado o convalidar, homologar, revalidar o equivaler tu título y tu plan de estudios en el exterior. \n \n El análisis de los resultados obtenidos a partir de la aplicación de dicho instrumento contribuirá a una investigación que se está llevando a cabo acerca de la revalidabilidad del plan de estudios de Ingeniería Mecánica de la USB a nivel internacional. \n \n Este estudio, además de permitirnos recolectar información acerca de la percepción internacional que tiene nuestro plan de estudios de la carrera, podría favorecer el intercambio académico de estudiantes, la movilidad de estudiantes, profesores y egresados y la ampliación de oportunidades de empleabilidad, emprendimiento y estudios de postgrado en el extranjero. \n \n Mucho te agradecemos que respondas todas las preguntas en el orden establecido y con la mayor sinceridad posible, ya que en base a tus respuestas la encuesta se irá personalizando en pro de ajustarse lo mejor posible a tu situación académica y/o laboral. Tu participación es completamente voluntaria, tu identidad permanecerá en reserva y tus respuestas serán empleadas sólo con fines investigativos. La encuesta puede tener de 27 a 44 preguntas dependiendo de las opciones de respuesta que elijas y la resolución de la misma te tomará 15 minutos, aproximadamente. \n \n ¡Muchas gracias de antemano por tu amabilidad y tu valiosa colaboración! \n \n Atentamente, \n Oscar González. Profesor y Decano de Extensión de la USB. \n Alba Leiziaga. Estudiante de Ingeniería Mecánica de la USB ');
 
    var img = UrlFetchApp.fetch('http://www.redfundamentos.com/Uploads/Imagenes/D5FB0B45-E0F3-4B8C-A90E-424D4208192C.png');
  var img_instrucciones = form.addImageItem()
  .setImage(img)
  .setAlignment(FormApp.Alignment.CENTER);
 
  form.setConfirmationMessage(
    '¡Muchas gracias por tu amabilidad y tu valiosa colaboración!'
  );
 
  var seccionInicio = form.addPageBreakItem().setTitle('Inicio');

 
  //==========================================================================
  //                            Egresado de Tipo A
  //==========================================================================
  var seccionEgresadoTipoA = form.addPageBreakItem().setTitle('Egresado Tipo A');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país realizaste la gestión de convalidación? A este país se le denominará "País de destino" de ahora en adelante.');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino al iniciar la gestión de convalidación? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste la gestión de convalidación de tus documentos académicos (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setRequired(true);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue la duración aproximada de la gestión de convalidación de tus documentos académicos en el país de destino (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setChoices([
    item.createChoice('Menos de 3 meses'),
    item.createChoice('De 3 meses a 6 meses'),
    item.createChoice('De 6 meses a 1 año'),
    item.createChoice('Más de 1 año'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué institución académica o Universidad estás cursando actualmente estudios de postgrado? A esta institución se le denominará "Universidad de destino" de ahora en adelante. (Ingresar nombre completo. Ejemplo: Universidad Simón Bolívar)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste estudios de postgrado en tu Universidad de destino?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tipo de estudios de postgrado estás cursando actualmente en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Maestría'),
    item.createChoice('Especialización'),
    item.createChoice('Doctorado'),
    item.createChoice('Otro'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addListItem();
  item.setTitle('¿En qué área o campo del conocimiento se fundamenta tu estudio de postgrado?')
  .setChoices([
    item.createChoice('Agricultura'),
    item.createChoice('Alimentos'),
    item.createChoice('Análisis Numérico'),
    item.createChoice('Arquitectura e Ingeniería Civil'),
    item.createChoice('Automotriz y Transporte'),
    item.createChoice('Biomecánica'),
    item.createChoice('Ciencias Administrativas'),
    item.createChoice('Ciencias Económicas'),
    item.createChoice('Ciencias Sociales'),
    item.createChoice('Ciencias de la Computación e Informática'),
    item.createChoice('Ciencias de los Materiales'),
    item.createChoice('Ciencias puras'),
    item.createChoice('Comunicaciones'),
    item.createChoice('Control e Instrumentación'),
    item.createChoice('Dinámica avanzada y Vibraciones Mecánicas'),
    item.createChoice('Diseño de máquinas y herramientas'),
    item.createChoice('Ecotecnologías, Sostenibilidad y Medio ambiente'),
    item.createChoice('Eléctricidad y/o Electrónica'),
    item.createChoice('Energía'),
    item.createChoice('Estadística y Probabilidades'),
    item.createChoice('Geología, Geofísica y Minas'),
    item.createChoice('Gerencia y Emprendimiento'),
    item.createChoice('Gestión de Investigación y Desarrollo'),
    item.createChoice('Humanidades'),
    item.createChoice('Ingeniería Mecánica'),
    item.createChoice('Mantenimiento'),
    item.createChoice('Manufactura'),
    item.createChoice('Mecánica de Fluidos e Hidráulica'),
    item.createChoice('Obras y Servicios'),
    item.createChoice('Pedagogía y Docencia'),
    item.createChoice('Petróleo'),
    item.createChoice('Producción y Procesos Industriales'),
    item.createChoice('Recursos Humanos'),
    item.createChoice('Relaciones Internacionales y Globales'),
    item.createChoice('Sistemas'),
    item.createChoice('Termodinámica y Transferencia de Calor'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿A qué institución del país de destino acudiste para poder realizar la gestión de convalidación con fines académicos?');
  item.setChoices([
    item.createChoice('Ministerio de Educación o equivalente'),
    item.createChoice('Embajada o Consulado'),
    item.createChoice('Universidad de destino académico'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción académica en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tuviste que realizar algún examen de admisión para cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es tu nivel de dominio del idioma en el que se imparten los estudios?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado de suficiencia del idioma para poder cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La institución a la que acudiste para la convalidación académica te homologó todas las materias del plan de estudios de Ingeniería Mecánica de la USB?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('Si tu respuesta anterior fue negativa, indica cuáles materias NO te fueron convalidadas del plan de estudios de Ingeniería Mecánica de la USB.');
 
 
  var item = form.addTextItem();
  item.setTitle('¿Cuáles materias NO contempladas en el plan de estudios de la carrera tuviste que cursar obligatoriamente para poder ingresar al postgrado de tu Universidad de destino?');
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tu Universidad de destino le otorgó especial valor a tu índice académico de pregrado para poder admitirte en el postgrado? ');
  item.setChoices([
    item.createChoice('Sí'),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te han ayudado los conocimientos, competencias y experiencias adquiridas en la USB a desenvolverte con éxito en el postgrado de tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
item.setRequired(true);
 
  //==========================================================================
  //                            Egresado de Tipo B
  //==========================================================================
 
  var seccionEgresadoTipoB = form.addPageBreakItem().setTitle('Egresado Tipo B');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país realizaste la gestión de convalidación? A este país se le denominará "País de destino" de ahora en adelante.');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino al iniciar la gestión de convalidación? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste la gestión de convalidación de tus documentos académicos (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue la duración aproximada de la gestión de convalidación de tus documentos académicos en el país de destino (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setChoices([
    item.createChoice('Menos de 3 meses'),
    item.createChoice('De 3 meses a 6 meses'),
    item.createChoice('De 6 meses a 1 año'),
    item.createChoice('Más de 1 año'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿En qué tipo de entidad trabajas actualmente?');
  item.setChoices([
    item.createChoice('Universidad'),
    item.createChoice('Empresa Privada'),
    item.createChoice('Emprendimiento propio'),
    item.createChoice('ONG'),
    item.createChoice('Ente gubernamental'),
    item.createChoice('Instituto de investigación'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año empezaste a trabajar en dicha entidad?');
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es la intensidad de relación existente entre tu profesión (Ingeniería Mecánica) y el área de trabajo en la que te desempeñas profesionalmente en la actualidad?');
  item.setChoices([
    item.createChoice('Totalmente relacionadas'),
    item.createChoice('Muy relacionadas'),
    item.createChoice('Algo relacionadas'),
    item.createChoice('Poco relacionadas'),
    item.createChoice('No existe ninguna relación'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿A qué institución del país de destino acudiste para poder realizar la gestión de convalidación con fines profesionales?');
  item.setChoices([
    item.createChoice('Ministerio de Educación o equivalente'),
    item.createChoice('Embajada o Consulado'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción laboral en el país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Habías sido contratado por la empresa del país de destino antes de desplazarte a éste?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es tu nivel de dominio del idioma empleado en la empresa en la que trabajas?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado o evidencia de suficiencia del idioma para poder desempeñarte profesionalmente en tu país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La empresa del país de destino para la que trabajas actualmente le otorgó especial valor a tu índice académico de pregrado para poder contratarte?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ha ayudado tener el título de Ingeniero Mecánico de la USB a insertarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te han ayudado los conocimientos, competencias y experiencias adquiridas en la USB a desempeñarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
item.setRequired(true);


 
  //==========================================================================
  //                            Egresado de Tipo C
  //==========================================================================
 
  var seccionEgresadoTipoC = form.addPageBreakItem().setTitle('Egresado Tipo C');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país realizaste la gestión de convalidación? A este país se le denominará "País de destino" de ahora en adelante.');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino al iniciar la gestión de convalidación? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste la gestión de convalidación de tus documentos académicos (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue la duración aproximada de la gestión de convalidación de tus documentos académicos en el país de destino (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setChoices([
    item.createChoice('Menos de 3 meses'),
    item.createChoice('De 3 meses a 6 meses'),
    item.createChoice('De 6 meses a 1 año'),
    item.createChoice('Más de 1 año'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué institución académica o Universidad estás cursando actualmente estudios de postgrado? A esta institución se le denominará "Universidad de destino" de ahora en adelante. (Ingresar nombre completo. Ejemplo: Universidad Simón Bolívar)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste estudios de postgrado en tu Universidad de destino?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tipo de estudios de postgrado estás cursando actualmente en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Maestría'),
    item.createChoice('Especialización'),
    item.createChoice('Doctorado'),
    item.createChoice('Otro'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addListItem();
  item.setTitle('¿En qué área o campo del conocimiento se fundamenta tu estudio de postgrado?')
  .setChoices([
    item.createChoice('Agricultura'),
    item.createChoice('Alimentos'),
    item.createChoice('Análisis Numérico'),
    item.createChoice('Arquitectura e Ingeniería Civil'),
    item.createChoice('Automotriz y Transporte'),
    item.createChoice('Biomecánica'),
    item.createChoice('Ciencias Administrativas'),
    item.createChoice('Ciencias Económicas'),
    item.createChoice('Ciencias Sociales'),
    item.createChoice('Ciencias de la Computación e Informática'),
    item.createChoice('Ciencias de los Materiales'),
    item.createChoice('Ciencias puras'),
    item.createChoice('Comunicaciones'),
    item.createChoice('Control e Instrumentación'),
    item.createChoice('Dinámica avanzada y Vibraciones Mecánicas'),
    item.createChoice('Diseño de máquinas y herramientas'),
    item.createChoice('Ecotecnologías, Sostenibilidad y Medio ambiente'),
    item.createChoice('Eléctricidad y/o Electrónica'),
    item.createChoice('Energía'),
    item.createChoice('Estadística y Probabilidades'),
    item.createChoice('Geología, Geofísica y Minas'),
    item.createChoice('Gerencia y Emprendimiento'),
    item.createChoice('Gestión de Investigación y Desarrollo'),
    item.createChoice('Humanidades'),
    item.createChoice('Ingeniería Mecánica'),
    item.createChoice('Mantenimiento'),
    item.createChoice('Manufactura'),
    item.createChoice('Mecánica de Fluidos e Hidráulica'),
    item.createChoice('Obras y Servicios'),
    item.createChoice('Pedagogía y Docencia'),
    item.createChoice('Petróleo'),
    item.createChoice('Producción y Procesos Industriales'),
    item.createChoice('Recursos Humanos'),
    item.createChoice('Relaciones Internacionales y Globales'),
    item.createChoice('Sistemas'),
    item.createChoice('Termodinámica y Transferencia de Calor'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿A qué institución del país de destino acudiste para poder realizar la gestión de convalidación con fines académicos?');
  item.setChoices([
    item.createChoice('Ministerio de Educación o equivalente'),
    item.createChoice('Embajada o Consulado'),
    item.createChoice('Universidad de destino académico'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción académica en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tuviste que realizar algún examen de admisión para cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es tu nivel de dominio del idioma en el que se imparten los estudios?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado de suficiencia del idioma para poder cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La institución a la que acudiste para la convalidación académica te homologó todas las materias del plan de estudios de Ingeniería Mecánica de la USB?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('Si tu respuesta anterior fue negativa, indica cuáles materias NO te fueron convalidadas del plan de estudios de Ingeniería Mecánica de la USB.');
 
 
  var item = form.addTextItem();
  item.setTitle('¿Cuáles materias NO contempladas en el plan de estudios de la carrera tuviste que cursar obligatoriamente para poder ingresar al postgrado de tu Universidad de destino?');
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tu Universidad de destino le otorgó especial valor a tu índice académico de pregrado para poder admitirte en el postgrado? ');
  item.setChoices([
    item.createChoice('Sí'),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿En qué tipo de entidad trabajas actualmente?');
  item.setChoices([
    item.createChoice('Universidad'),
    item.createChoice('Empresa Privada'),
    item.createChoice('Emprendimiento propio'),
    item.createChoice('ONG'),
    item.createChoice('Ente gubernamental'),
    item.createChoice('Instituto de investigación'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año empezaste a trabajar en dicha entidad?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es la intensidad de relación existente entre tu profesión (Ingeniería Mecánica) y el área de trabajo en la que te desempeñas profesionalmente en la actualidad?');
  item.setChoices([
    item.createChoice('Totalmente relacionadas'),
    item.createChoice('Muy relacionadas'),
    item.createChoice('Algo relacionadas'),
    item.createChoice('Poco relacionadas'),
    item.createChoice('No existe ninguna relación'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿A qué institución del país de destino acudiste para poder realizar la gestión de convalidación con fines profesionales?');
  item.setChoices([
    item.createChoice('Ministerio de Educación o equivalente'),
    item.createChoice('Embajada o Consulado'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción laboral en el país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Habías sido contratado por la empresa del país de destino antes de desplazarte a éste?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es tu nivel de dominio del idioma empleado en la empresa en la que trabajas?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado o evidencia de suficiencia del idioma para poder desempeñarte profesionalmente en tu país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La empresa del país de destino para la que trabajas actualmente le otorgó especial valor a tu índice académico de pregrado para poder contratarte?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);        
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te han ayudado los conocimientos, competencias y experiencias adquiridas en la USB a desenvolverte con éxito en el postgrado de tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ha ayudado tener el título de Ingeniero Mecánico de la USB a insertarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te han ayudado los conocimientos, competencias y experiencias adquiridas en la USB a desempeñarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);

 
  //==========================================================================
  //                            Egresado de Tipo D
  //==========================================================================
 
  var seccionEgresadoTipoD = form.addPageBreakItem().setTitle('Egresado Tipo D');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país realizaste la gestión de convalidación? A este país se le denominará "País de destino" de ahora en adelante.');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino al iniciar la gestión de convalidación? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste la gestión de convalidación de tus documentos académicos (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue la duración aproximada de la gestión de convalidación de tus documentos académicos en el país de destino (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setChoices([
    item.createChoice('Menos de 3 meses'),
    item.createChoice('De 3 meses a 6 meses'),
    item.createChoice('De 6 meses a 1 año'),
    item.createChoice('Más de 1 año'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué institución académica o Universidad cursaste estudios de postgrado? A esta institución se le denominará "Universidad de destino" de ahora en adelante. (Ingresar nombre completo. Ejemplo: Universidad Simón Bolívar)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste estudios de postgrado en tu Universidad de destino?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tipo de estudios de postgrado cursaste en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Maestría'),
    item.createChoice('Especialización'),
    item.createChoice('Doctorado'),
    item.createChoice('Otro'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addListItem();
  item.setTitle('¿En qué área o campo del conocimiento se fundamentaba tu estudio de postgrado?')
  .setChoices([
    item.createChoice('Agricultura'),
    item.createChoice('Alimentos'),
    item.createChoice('Análisis Numérico'),
    item.createChoice('Arquitectura e Ingeniería Civil'),
    item.createChoice('Automotriz y Transporte'),
    item.createChoice('Biomecánica'),
    item.createChoice('Ciencias Administrativas'),
    item.createChoice('Ciencias Económicas'),
    item.createChoice('Ciencias Sociales'),
    item.createChoice('Ciencias de la Computación e Informática'),
    item.createChoice('Ciencias de los Materiales'),
    item.createChoice('Ciencias puras'),
    item.createChoice('Comunicaciones'),
    item.createChoice('Control e Instrumentación'),
    item.createChoice('Dinámica avanzada y Vibraciones Mecánicas'),
    item.createChoice('Diseño de máquinas y herramientas'),
    item.createChoice('Ecotecnologías, Sostenibilidad y Medio ambiente'),
    item.createChoice('Eléctricidad y/o Electrónica'),
    item.createChoice('Energía'),
    item.createChoice('Estadística y Probabilidades'),
    item.createChoice('Geología, Geofísica y Minas'),
    item.createChoice('Gerencia y Emprendimiento'),
    item.createChoice('Gestión de Investigación y Desarrollo'),
    item.createChoice('Humanidades'),
    item.createChoice('Ingeniería Mecánica'),
    item.createChoice('Mantenimiento'),
    item.createChoice('Manufactura'),
    item.createChoice('Mecánica de Fluidos e Hidráulica'),
    item.createChoice('Obras y Servicios'),
    item.createChoice('Pedagogía y Docencia'),
    item.createChoice('Petróleo'),
    item.createChoice('Producción y Procesos Industriales'),
    item.createChoice('Recursos Humanos'),
    item.createChoice('Relaciones Internacionales y Globales'),
    item.createChoice('Sistemas'),
    item.createChoice('Termodinámica y Transferencia de Calor'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿A qué institución del país de destino acudiste para poder realizar la gestión de convalidación con fines académicos?');
  item.setChoices([
    item.createChoice('Ministerio de Educación o equivalente'),
    item.createChoice('Embajada o Consulado'),
    item.createChoice('Universidad de destino académico'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción académica en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tuviste que realizar algún examen de admisión para cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era tu nivel de dominio del idioma en el que se impartían los estudios?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado de suficiencia del idioma para poder cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La institución a la que acudiste para la convalidación académica te homologó todas las materias del plan de estudios de Ingeniería Mecánica de la USB?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('Si tu respuesta anterior fue negativa, indica cuáles materias NO te fueron convalidadas del plan de estudios de Ingeniería Mecánica de la USB.');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuáles materias NO contempladas en el plan de estudios de la carrera tuviste que cursar obligatoriamente para poder ingresar al postgrado de tu Universidad de destino?');
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tu Universidad de destino le otorgó especial valor a tu índice académico de pregrado para poder admitirte en el postgrado? ');
  item.setChoices([
    item.createChoice('Sí'),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudaron los conocimientos, competencias y experiencias adquiridas en la USB a desenvolverte con éxito en el postgrado de tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  //==========================================================================
  //                            Egresado de Tipo E
  //==========================================================================
 
  var seccionEgresadoTipoE = form.addPageBreakItem().setTitle('Egresado Tipo E');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país realizaste la gestión de convalidación? A este país se le denominará "País de destino" de ahora en adelante.');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino al iniciar la gestión de convalidación? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste la gestión de convalidación de tus documentos académicos (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue la duración aproximada de la gestión de convalidación de tus documentos académicos en el país de destino (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setChoices([
    item.createChoice('Menos de 3 meses'),
    item.createChoice('De 3 meses a 6 meses'),
    item.createChoice('De 6 meses a 1 año'),
    item.createChoice('Más de 1 año'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿En qué tipo de entidad del país de destino trabajabas?');
  item.setChoices([
    item.createChoice('Universidad'),
    item.createChoice('Empresa Privada'),
    item.createChoice('Emprendimiento propio'),
    item.createChoice('ONG'),
    item.createChoice('Ente gubernamental'),
    item.createChoice('Instituto de investigación'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año empezaste a trabajar en dicha entidad?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era la intensidad de relación existente entre tu profesión (Ingeniería Mecánica) y el área de trabajo en la que te desempeñabas profesionalmente en el país de destino?');
  item.setChoices([
    item.createChoice('Totalmente relacionadas'),
    item.createChoice('Muy relacionadas'),
    item.createChoice('Algo relacionadas'),
    item.createChoice('Poco relacionadas'),
    item.createChoice('No existe ninguna relación'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿A qué institución del país de destino acudiste para poder realizar la gestión de convalidación con fines profesionales?');
  item.setChoices([
    item.createChoice('Ministerio de Educación o equivalente'),
    item.createChoice('Embajada o Consulado'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción laboral en el país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Habías sido contratado por la empresa del país de destino antes de desplazarte a éste?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era tu nivel de dominio del idioma empleado en la empresa en la que trabajaste?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado o evidencia de suficiencia del idioma para poder desempeñarte profesionalmente en tu país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La empresa del país de destino para la que trabajaste le otorgó especial valor a tu índice académico de pregrado para poder contratarte?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudó tener el título de Ingeniero Mecánico de la USB a insertarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudaron los conocimientos, competencias y experiencias adquiridas en la USB a desempeñarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
 
  //==========================================================================
  //                            Egresado de Tipo F
  //==========================================================================
 
  var seccionEgresadoTipoF = form.addPageBreakItem().setTitle('Egresado Tipo F');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país realizaste la gestión de convalidación? A este país se le denominará "País de destino" de ahora en adelante.');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino al iniciar la gestión de convalidación? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste la gestión de convalidación de tus documentos académicos (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue la duración aproximada de la gestión de convalidación de tus documentos académicos en el país de destino (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setChoices([
    item.createChoice('Menos de 3 meses'),
    item.createChoice('De 3 meses a 6 meses'),
    item.createChoice('De 6 meses a 1 año'),
    item.createChoice('Más de 1 año'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué institución académica o Universidad cursaste estudios de postgrado? A esta institución se le denominará "Universidad de destino" de ahora en adelante. (Ingresar nombre completo. Ejemplo: Universidad Simón Bolívar)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste estudios de postgrado en tu Universidad de destino?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tipo de estudios de postgrado cursaste en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Maestría'),
    item.createChoice('Especialización'),
    item.createChoice('Doctorado'),
    item.createChoice('Otro'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addListItem();
  item.setTitle('¿En qué área o campo del conocimiento se fundamentaba tu estudio de postgrado?')
  .setChoices([
    item.createChoice('Agricultura'),
    item.createChoice('Alimentos'),
    item.createChoice('Análisis Numérico'),
    item.createChoice('Arquitectura e Ingeniería Civil'),
    item.createChoice('Automotriz y Transporte'),
    item.createChoice('Biomecánica'),
    item.createChoice('Ciencias Administrativas'),
    item.createChoice('Ciencias Económicas'),
    item.createChoice('Ciencias Sociales'),
    item.createChoice('Ciencias de la Computación e Informática'),
    item.createChoice('Ciencias de los Materiales'),
    item.createChoice('Ciencias puras'),
    item.createChoice('Comunicaciones'),
    item.createChoice('Control e Instrumentación'),
    item.createChoice('Dinámica avanzada y Vibraciones Mecánicas'),
    item.createChoice('Diseño de máquinas y herramientas'),
    item.createChoice('Ecotecnologías, Sostenibilidad y Medio ambiente'),
    item.createChoice('Eléctricidad y/o Electrónica'),
    item.createChoice('Energía'),
    item.createChoice('Estadística y Probabilidades'),
    item.createChoice('Geología, Geofísica y Minas'),
    item.createChoice('Gerencia y Emprendimiento'),
    item.createChoice('Gestión de Investigación y Desarrollo'),
    item.createChoice('Humanidades'),
    item.createChoice('Ingeniería Mecánica'),
    item.createChoice('Mantenimiento'),
    item.createChoice('Manufactura'),
    item.createChoice('Mecánica de Fluidos e Hidráulica'),
    item.createChoice('Obras y Servicios'),
    item.createChoice('Pedagogía y Docencia'),
    item.createChoice('Petróleo'),
    item.createChoice('Producción y Procesos Industriales'),
    item.createChoice('Recursos Humanos'),
    item.createChoice('Relaciones Internacionales y Globales'),
    item.createChoice('Sistemas'),
    item.createChoice('Termodinámica y Transferencia de Calor'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿A qué institución del país de destino acudiste para poder realizar la gestión de convalidación con fines académicos?');
  item.setChoices([
    item.createChoice('Ministerio de Educación o equivalente'),
    item.createChoice('Embajada o Consulado'),
    item.createChoice('Universidad de destino académico'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción académica en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tuviste que realizar algún examen de admisión para cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era tu nivel de dominio del idioma en el que se impartían los estudios?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado de suficiencia del idioma para poder cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La institución a la que acudiste para la convalidación académica te homologó todas las materias del plan de estudios de Ingeniería Mecánica de la USB?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('Si tu respuesta anterior fue negativa, indica cuáles materias NO te fueron convalidadas del plan de estudios de Ingeniería Mecánica de la USB.');
 
 
  var item = form.addTextItem();
  item.setTitle('¿Cuáles materias NO contempladas en el plan de estudios de la carrera tuviste que cursar obligatoriamente para poder ingresar al postgrado de tu Universidad de destino?');
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tu Universidad de destino le otorgó especial valor a tu índice académico de pregrado para poder admitirte en el postgrado? ');
  item.setChoices([
    item.createChoice('Sí'),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿En qué tipo de entidad del país de destino trabajabas?');
  item.setChoices([
    item.createChoice('Universidad'),
    item.createChoice('Empresa Privada'),
    item.createChoice('Emprendimiento propio'),
    item.createChoice('ONG'),
    item.createChoice('Ente gubernamental'),
    item.createChoice('Instituto de investigación'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año empezaste a trabajar en dicha entidad?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era la intensidad de relación existente entre tu profesión (Ingeniería Mecánica) y el área de trabajo en la que te desempeñabas profesionalmente en el país de destino?');
  item.setChoices([
    item.createChoice('Totalmente relacionadas'),
    item.createChoice('Muy relacionadas'),
    item.createChoice('Algo relacionadas'),
    item.createChoice('Poco relacionadas'),
    item.createChoice('No existe ninguna relación'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿A qué institución del país de destino acudiste para poder realizar la gestión de convalidación con fines profesionales?');
  item.setChoices([
    item.createChoice('Ministerio de Educación o equivalente'),
    item.createChoice('Embajada o Consulado'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción laboral en el país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Habías sido contratado por la empresa del país de destino antes de desplazarte a éste?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era tu nivel de dominio del idioma empleado en la empresa en la que trabajaste?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado o evidencia de suficiencia del idioma para poder desempeñarte profesionalmente en tu país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La empresa del país de destino para la que trabajaste le otorgó especial valor a tu índice académico de pregrado para poder contratarte?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);        
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudaron los conocimientos, competencias y experiencias adquiridas en la USB a desenvolverte con éxito en el postgrado de tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudó tener el título de Ingeniero Mecánico de la USB a insertarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudaron los conocimientos, competencias y experiencias adquiridas en la USB a desempeñarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  //==========================================================================
  //                            Egresado de Tipo G
  //==========================================================================
 
  var seccionEgresadoTipoG = form.addPageBreakItem().setTitle('Egresado Tipo G');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país realizaste la gestión de convalidación? A este país se le denominará "País de destino" de ahora en adelante.');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino al iniciar la gestión de convalidación? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste la gestión de convalidación de tus documentos académicos (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue la duración aproximada de la gestión de convalidación de tus documentos académicos en el país de destino (título, pensum académico, programas de estudios, notas certificadas, constancia de carga horaria) de la USB?');
  item.setChoices([
    item.createChoice('Menos de 3 meses'),
    item.createChoice('De 3 meses a 6 meses'),
    item.createChoice('De 6 meses a 1 año'),
    item.createChoice('Más de 1 año'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al iniciar la gestión de convalidación en el país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿A qué institución del país de destino acudiste para poder realizar la gestión de convalidación?');
  item.setChoices([
    item.createChoice('Ministerio de Educación o equivalente'),
    item.createChoice('Embajada o Consulado'),
    item.createChoice('Universidad de destino académico'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  //==========================================================================
  //                            Egresado de Tipo H
  //==========================================================================
 
  var seccionEgresadoTipoH = form.addPageBreakItem().setTitle('Egresado Tipo H');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de empezar el postgrado en tu Universidad de destino? (Entendiendo como "Universidad de destino" a la institución académica del país del extranjero que seleccionaste para cursar estudios de postgrado).');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de empezar el postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país estás cursando actualmente estudios de postgrado? A este país se le denominará "País de destino" de ahora en adelante.');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino antes de desplazarte a éste? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué institución académica o Universidad estás cursando actualmente estudios de postgrado? (Universidad de destino)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste estudios de postgrado en tu Universidad de destino?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tipo de estudios de postgrado estás cursando actualmente en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Maestría'),
    item.createChoice('Especialización'),
    item.createChoice('Doctorado'),
    item.createChoice('Otro'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addListItem();
  item.setTitle('¿En qué área o campo del conocimiento se fundamenta tu estudio de postgrado?')
  .setChoices([
    item.createChoice('Agricultura'),
    item.createChoice('Alimentos'),
    item.createChoice('Análisis Numérico'),
    item.createChoice('Arquitectura e Ingeniería Civil'),
    item.createChoice('Automotriz y Transporte'),
    item.createChoice('Biomecánica'),
    item.createChoice('Ciencias Administrativas'),
    item.createChoice('Ciencias Económicas'),
    item.createChoice('Ciencias Sociales'),
    item.createChoice('Ciencias de la Computación e Informática'),
    item.createChoice('Ciencias de los Materiales'),
    item.createChoice('Ciencias puras'),
    item.createChoice('Comunicaciones'),
    item.createChoice('Control e Instrumentación'),
    item.createChoice('Dinámica avanzada y Vibraciones Mecánicas'),
    item.createChoice('Diseño de máquinas y herramientas'),
    item.createChoice('Ecotecnologías, Sostenibilidad y Medio ambiente'),
    item.createChoice('Eléctricidad y/o Electrónica'),
    item.createChoice('Energía'),
    item.createChoice('Estadística y Probabilidades'),
    item.createChoice('Geología, Geofísica y Minas'),
    item.createChoice('Gerencia y Emprendimiento'),
    item.createChoice('Gestión de Investigación y Desarrollo'),
    item.createChoice('Humanidades'),
    item.createChoice('Ingeniería Mecánica'),
    item.createChoice('Mantenimiento'),
    item.createChoice('Manufactura'),
    item.createChoice('Mecánica de Fluidos e Hidráulica'),
    item.createChoice('Obras y Servicios'),
    item.createChoice('Pedagogía y Docencia'),
    item.createChoice('Petróleo'),
    item.createChoice('Producción y Procesos Industriales'),
    item.createChoice('Recursos Humanos'),
    item.createChoice('Relaciones Internacionales y Globales'),
    item.createChoice('Sistemas'),
    item.createChoice('Termodinámica y Transferencia de Calor'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción académica en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tuviste que realizar algún examen de admisión para cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es tu nivel de dominio del idioma en el que se imparten los estudios?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado de suficiencia del idioma para poder cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tu Universidad de destino le otorgó especial valor a tu índice académico de pregrado para poder admitirte en el postgrado? ');
  item.setChoices([
    item.createChoice('Sí'),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te han ayudado los conocimientos, competencias y experiencias adquiridas en la USB a desenvolverte con éxito en el postgrado de tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  //==========================================================================
  //                            Egresado de Tipo I
  //==========================================================================
 
  var seccionEgresadoTipoI = form.addPageBreakItem().setTitle('Egresado Tipo I');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de desempeñarte profesionalmente en el país de destino? (Entendiendo como "País de destino" al país del extranjero que seleccionaste para desempeñarte profesionalmente).');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de desempeñarte profesionalmente en el país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país te estás desempeñando profesionalmente en la actualidad? (País de destino) ');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino antes de desplazarte a éste? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿En qué tipo de entidad trabajas actualmente?');
  item.setChoices([
    item.createChoice('Universidad'),
    item.createChoice('Empresa Privada'),
    item.createChoice('Emprendimiento propio'),
    item.createChoice('ONG'),
    item.createChoice('Ente gubernamental'),
    item.createChoice('Instituto de investigación'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año empezaste a trabajar en dicha entidad?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es la intensidad de relación existente entre tu profesión (Ingeniería Mecánica) y el área de trabajo en la que te desempeñas profesionalmente en la actualidad?');
  item.setChoices([
    item.createChoice('Totalmente relacionadas'),
    item.createChoice('Muy relacionadas'),
    item.createChoice('Algo relacionadas'),
    item.createChoice('Poco relacionadas'),
    item.createChoice('No existe ninguna relación'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción laboral en el país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Habías sido contratado por la empresa del país de destino antes de desplazarte a éste?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
 var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es tu nivel de dominio del idioma empleado en la empresa en la que trabajas?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado o evidencia de suficiencia del idioma para poder desempeñarte profesionalmente en tu país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La empresa del país de destino para la que trabajas actualmente le otorgó especial valor a tu índice académico de pregrado para poder contratarte?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ha ayudado tener el título de Ingeniero Mecánico de la USB a insertarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te han ayudado los conocimientos, competencias y experiencias adquiridas en la USB a desempeñarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  //==========================================================================
  //                            Egresado de Tipo J
  //==========================================================================
 
  var seccionEgresadoTipoJ = form.addPageBreakItem().setTitle('Egresado Tipo J');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de desplazarte al país de destino? (Entendiendo como "País de destino" al país del extranjero que seleccionaste para cursar estudios de postgrado y desempeñarte profesionalmente).');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país estás cursando estudios de postgrado y te estás desempeñando profesionalmente en la actualidad? (País de destino) ');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino antes de desplazarte a éste? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué institución académica o Universidad estás cursando actualmente estudios de postgrado? A esta institución se le denominará "Universidad de destino" de ahora en adelante. (Ingresar nombre completo. Ejemplo: Universidad Simón Bolívar)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste estudios de postgrado en tu Universidad de destino?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tipo de estudios de postgrado estás cursando actualmente en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Maestría'),
    item.createChoice('Especialización'),
    item.createChoice('Doctorado'),
    item.createChoice('Otro'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addListItem();
  item.setTitle('¿En qué área o campo del conocimiento se fundamenta tu estudio de postgrado?')
  .setChoices([
    item.createChoice('Agricultura'),
    item.createChoice('Alimentos'),
    item.createChoice('Análisis Numérico'),
    item.createChoice('Arquitectura e Ingeniería Civil'),
    item.createChoice('Automotriz y Transporte'),
    item.createChoice('Biomecánica'),
    item.createChoice('Ciencias Administrativas'),
    item.createChoice('Ciencias Económicas'),
    item.createChoice('Ciencias Sociales'),
    item.createChoice('Ciencias de la Computación e Informática'),
    item.createChoice('Ciencias de los Materiales'),
    item.createChoice('Ciencias puras'),
    item.createChoice('Comunicaciones'),
    item.createChoice('Control e Instrumentación'),
    item.createChoice('Dinámica avanzada y Vibraciones Mecánicas'),
    item.createChoice('Diseño de máquinas y herramientas'),
    item.createChoice('Ecotecnologías, Sostenibilidad y Medio ambiente'),
    item.createChoice('Eléctricidad y/o Electrónica'),
    item.createChoice('Energía'),
    item.createChoice('Estadística y Probabilidades'),
    item.createChoice('Geología, Geofísica y Minas'),
    item.createChoice('Gerencia y Emprendimiento'),
    item.createChoice('Gestión de Investigación y Desarrollo'),
    item.createChoice('Humanidades'),
    item.createChoice('Ingeniería Mecánica'),
    item.createChoice('Mantenimiento'),
    item.createChoice('Manufactura'),
    item.createChoice('Mecánica de Fluidos e Hidráulica'),
    item.createChoice('Obras y Servicios'),
    item.createChoice('Pedagogía y Docencia'),
    item.createChoice('Petróleo'),
    item.createChoice('Producción y Procesos Industriales'),
    item.createChoice('Recursos Humanos'),
    item.createChoice('Relaciones Internacionales y Globales'),
    item.createChoice('Sistemas'),
    item.createChoice('Termodinámica y Transferencia de Calor'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción académica en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tuviste que realizar algún examen de admisión para cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
   var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es tu nivel de dominio del idioma en el que se imparten los estudios?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado de suficiencia del idioma para poder cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tu Universidad de destino le otorgó especial valor a tu índice académico de pregrado para poder admitirte en el postgrado? ');
  item.setChoices([
    item.createChoice('Sí'),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿En qué tipo de entidad trabajas actualmente?');
  item.setChoices([
    item.createChoice('Universidad'),
    item.createChoice('Empresa Privada'),
    item.createChoice('Emprendimiento propio'),
    item.createChoice('ONG'),
    item.createChoice('Ente gubernamental'),
    item.createChoice('Instituto de investigación'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año empezaste a trabajar en dicha entidad?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es la intensidad de relación existente entre tu profesión (Ingeniería Mecánica) y el área de trabajo en la que te desempeñas profesionalmente en la actualidad?');
  item.setChoices([
    item.createChoice('Totalmente relacionadas'),
    item.createChoice('Muy relacionadas'),
    item.createChoice('Algo relacionadas'),
    item.createChoice('Poco relacionadas'),
    item.createChoice('No existe ninguna relación'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción laboral en el país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Habías sido contratado por la empresa del país de destino antes de desplazarte a éste?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
   var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál es tu nivel de dominio del idioma empleado en la empresa en la que trabajas?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado o evidencia de suficiencia del idioma para poder desempeñarte profesionalmente en tu país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La empresa del país de destino para la que trabajas actualmente le otorgó especial valor a tu índice académico de pregrado para poder contratarte?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);        
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te han ayudado los conocimientos, competencias y experiencias adquiridas en la USB a desenvolverte con éxito en el postgrado de tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ha ayudado tener el título de Ingeniero Mecánico de la USB a insertarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te han ayudado los conocimientos, competencias y experiencias adquiridas en la USB a desempeñarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
 
  //==========================================================================
  //                            Egresado de Tipo K
  //==========================================================================
 
  var seccionEgresadoTipoK = form.addPageBreakItem().setTitle('Egresado Tipo K');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de empezar el postgrado en tu Universidad de destino? (Entendiendo como "Universidad de destino" a la institución académica del país del extranjero que seleccionaste para cursar estudios de postgrado).');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de empezar el postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país cursaste estudios de postgrado? A este país se le denominará "País de destino" de ahora en adelante.');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino antes de desplazarte a éste? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué institución académica o Universidad cursaste estudios de postgrado? (Universidad de destino) ');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste estudios de postgrado en tu Universidad de destino?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tipo de estudios de postgrado cursaste en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Maestría'),
    item.createChoice('Especialización'),
    item.createChoice('Doctorado'),
    item.createChoice('Otro'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addListItem();
  item.setTitle('¿En qué área o campo del conocimiento se fundamentaba tu estudio de postgrado?')
  .setChoices([
    item.createChoice('Agricultura'),
    item.createChoice('Alimentos'),
    item.createChoice('Análisis Numérico'),
    item.createChoice('Arquitectura e Ingeniería Civil'),
    item.createChoice('Automotriz y Transporte'),
    item.createChoice('Biomecánica'),
    item.createChoice('Ciencias Administrativas'),
    item.createChoice('Ciencias Económicas'),
    item.createChoice('Ciencias Sociales'),
    item.createChoice('Ciencias de la Computación e Informática'),
    item.createChoice('Ciencias de los Materiales'),
    item.createChoice('Ciencias puras'),
    item.createChoice('Comunicaciones'),
    item.createChoice('Control e Instrumentación'),
    item.createChoice('Dinámica avanzada y Vibraciones Mecánicas'),
    item.createChoice('Diseño de máquinas y herramientas'),
    item.createChoice('Ecotecnologías, Sostenibilidad y Medio ambiente'),
    item.createChoice('Eléctricidad y/o Electrónica'),
    item.createChoice('Energía'),
    item.createChoice('Estadística y Probabilidades'),
    item.createChoice('Geología, Geofísica y Minas'),
    item.createChoice('Gerencia y Emprendimiento'),
    item.createChoice('Gestión de Investigación y Desarrollo'),
    item.createChoice('Humanidades'),
    item.createChoice('Ingeniería Mecánica'),
    item.createChoice('Mantenimiento'),
    item.createChoice('Manufactura'),
    item.createChoice('Mecánica de Fluidos e Hidráulica'),
    item.createChoice('Obras y Servicios'),
    item.createChoice('Pedagogía y Docencia'),
    item.createChoice('Petróleo'),
    item.createChoice('Producción y Procesos Industriales'),
    item.createChoice('Recursos Humanos'),
    item.createChoice('Relaciones Internacionales y Globales'),
    item.createChoice('Sistemas'),
    item.createChoice('Termodinámica y Transferencia de Calor'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción académica en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tuviste que realizar algún examen de admisión para cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
   var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era tu nivel de dominio del idioma en el que se impartían los estudios?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado de suficiencia del idioma para poder cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tu Universidad de destino le otorgó especial valor a tu índice académico de pregrado para poder admitirte en el postgrado? ');
  item.setChoices([
    item.createChoice('Sí'),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudaron los conocimientos, competencias y experiencias adquiridas en la USB a desenvolverte con éxito en el postgrado de tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  //==========================================================================
  //                            Egresado de Tipo L
  //==========================================================================
 
  var seccionEgresadoTipoL = form.addPageBreakItem().setTitle('Egresado Tipo L');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de desempeñarte profesionalmente en el país de destino? (Entendiendo como "País de destino" al país del extranjero que seleccionaste para desempeñarte profesionalmente).');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de desempeñarte profesionalmente en el país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addTextItem();
  item.setTitle('¿En qué país te desempeñaste profesionalmente? (País de destino)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino antes de desplazarte a éste? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿En qué tipo de entidad del país de destino trabajabas?');
  item.setChoices([
    item.createChoice('Universidad'),
    item.createChoice('Empresa Privada'),
     item.createChoice('Emprendimiento propio'),
    item.createChoice('ONG'),
    item.createChoice('Ente gubernamental'),
    item.createChoice('Instituto de investigación'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año empezaste a trabajar en dicha entidad?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era la intensidad de relación existente entre tu profesión (Ingeniería Mecánica) y el área de trabajo en la que te desempeñabas profesionalmente en el país de destino?');
  item.setChoices([
    item.createChoice('Totalmente relacionadas'),
    item.createChoice('Muy relacionadas'),
    item.createChoice('Algo relacionadas'),
    item.createChoice('Poco relacionadas'),
    item.createChoice('No existe ninguna relación'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción laboral en el país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Habías sido contratado por la empresa del país de destino antes de desplazarte a éste?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
     var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era tu nivel de dominio del idioma empleado en la empresa en la que trabajaste?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado o evidencia de suficiencia del idioma para poder desempeñarte profesionalmente en tu país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La empresa del país de destino para la que trabajaste le otorgó especial valor a tu índice académico de pregrado para poder contratarte?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudó tener el título de Ingeniero Mecánico de la USB a insertarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudaron los conocimientos, competencias y experiencias adquiridas en la USB a desempeñarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  //==========================================================================
  //                            Egresado de Tipo M
  //==========================================================================
 
  var seccionEgresadoTipoM = form.addPageBreakItem().setTitle('Egresado Tipo M');
 
  var item = form.addTextItem();
  item.setTitle('¿Cuál es tu número de Carnet USB? (Ejemplo: 12-11455)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año culminaste el pregrado de Ingeniería Mecánica de la USB? (Introducir año completo. Ejemplo: 1990)');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál fue tu índice académico al culminar tus estudios de pregrado en la USB?');
  item.setChoices([
    item.createChoice('Entre 3,0000 y 3,4999 '),
    item.createChoice('Entre 3,5000 y 3,9999'),
    item.createChoice('Entre 4,0000 y 4,4999'),
    item.createChoice('Entre 4,5000 y 4,7999'),
    item.createChoice('Entre 4,8000 y 5,0000'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Iniciaste estudios de postgrado en Venezuela antes de desplazarte al país de destino? (Entendiendo como "País de destino" al país del extranjero que seleccionaste para cursar estudios de postgrado y desempeñarte profesionalmente).');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('Si la respuesta anterior fue afirmativa, indica en qué institución realizaste estos estudios.');
  item.setChoices([
    item.createChoice('USB '),
    item.createChoice('Otra institución'),
    item.createChoice('No Responder')
  ]);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Finalizaste estos estudios de postgrado en Venezuela antes de desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
 
   
  var item = form.addTextItem();
  item.setTitle('¿En qué país cursaste estudios de postgrado y te desempeñaste profesionalmente? (País de destino) ');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías la ciudadanía del país de destino o de la comunidad internacional a la que pertenece el país de destino antes de desplazarte a éste? Entendiendo "ciudadanía" como la cualidad de miembro activo de un Estado o de una comunidad de Estados cuyos acuerdos internacionales permiten a sus ciudadanos ser titulares de derechos políticos y estar sometidos a sus leyes.');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu título al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu pensum de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizado'),
    item.createChoice('Legalizado y apostillado'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus programas de estudios al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizados'),
    item.createChoice('Legalizados y apostillados'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tus notas certificadas de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizadas'),
    item.createChoice('Legalizadas y apostilladas'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era el estado legal de tu constancia de carga horaria de pregrado al desplazarte al país de destino?');
  item.setChoices([
    item.createChoice('Solo legalizada'),
    item.createChoice('Legalizada y apostillada'),
    item.createChoice('Sin legalizar ni apostillar'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué institución académica o Universidad cursaste estudios de postgrado? A esta institución se le denominará "Universidad de destino" de ahora en adelante. (Ingresar nombre completo. Ejemplo: Universidad Simón Bolívar)');
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año iniciaste estudios de postgrado en tu Universidad de destino?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tipo de estudios de postgrado cursaste en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Maestría'),
    item.createChoice('Especialización'),
    item.createChoice('Doctorado'),
    item.createChoice('Otro'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addListItem();
  item.setTitle('¿En qué área o campo del conocimiento se fundamentaba tu estudio de postgrado?')
  .setChoices([
    item.createChoice('Agricultura'),
    item.createChoice('Alimentos'),
    item.createChoice('Análisis Numérico'),
    item.createChoice('Arquitectura e Ingeniería Civil'),
    item.createChoice('Automotriz y Transporte'),
    item.createChoice('Biomecánica'),
    item.createChoice('Ciencias Administrativas'),
    item.createChoice('Ciencias Económicas'),
    item.createChoice('Ciencias Sociales'),
    item.createChoice('Ciencias de la Computación e Informática'),
    item.createChoice('Ciencias de los Materiales'),
    item.createChoice('Ciencias puras'),
    item.createChoice('Comunicaciones'),
    item.createChoice('Control e Instrumentación'),
    item.createChoice('Dinámica avanzada y Vibraciones Mecánicas'),
    item.createChoice('Diseño de máquinas y herramientas'),
    item.createChoice('Ecotecnologías, Sostenibilidad y Medio ambiente'),
    item.createChoice('Eléctricidad y/o Electrónica'),
    item.createChoice('Energía'),
    item.createChoice('Estadística y Probabilidades'),
    item.createChoice('Geología, Geofísica y Minas'),
    item.createChoice('Gerencia y Emprendimiento'),
    item.createChoice('Gestión de Investigación y Desarrollo'),
    item.createChoice('Humanidades'),
    item.createChoice('Ingeniería Mecánica'),
    item.createChoice('Mantenimiento'),
    item.createChoice('Manufactura'),
    item.createChoice('Mecánica de Fluidos e Hidráulica'),
    item.createChoice('Obras y Servicios'),
    item.createChoice('Pedagogía y Docencia'),
    item.createChoice('Petróleo'),
    item.createChoice('Producción y Procesos Industriales'),
    item.createChoice('Recursos Humanos'),
    item.createChoice('Relaciones Internacionales y Globales'),
    item.createChoice('Sistemas'),
    item.createChoice('Termodinámica y Transferencia de Calor'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción académica en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tuviste que realizar algún examen de admisión para cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era tu nivel de dominio del idioma en el que se impartían los estudios?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado de suficiencia del idioma para poder cursar estudios de postgrado en tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Tu Universidad de destino le otorgó especial valor a tu índice académico de pregrado para poder admitirte en el postgrado? ');
  item.setChoices([
    item.createChoice('Sí'),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿En qué tipo de entidad del país de destino trabajabas?');
  item.setChoices([
    item.createChoice('Universidad'),
    item.createChoice('Empresa Privada'),
    item.createChoice('Emprendimiento propio'),
    item.createChoice('ONG'),
    item.createChoice('Ente gubernamental'),
    item.createChoice('Instituto de investigación'),
    item.createChoice('Otra'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addTextItem();
  item.setTitle('¿En qué año empezaste a trabajar en dicha entidad?');
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era la intensidad de relación existente entre tu profesión (Ingeniería Mecánica) y el área de trabajo en la que te desempeñabas profesionalmente en el país de destino?');
  item.setChoices([
    item.createChoice('Totalmente relacionadas'),
    item.createChoice('Muy relacionadas'),
    item.createChoice('Algo relacionadas'),
    item.createChoice('Poco relacionadas'),
    item.createChoice('No existe ninguna relación'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Poseías alguna carta de recomendación o algún contacto que te facilitara la inserción laboral en el país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Habías sido contratado por la empresa del país de destino antes de desplazarte a éste?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
    var item = form.addMultipleChoiceItem();
  item.setTitle('¿Cuál era tu nivel de dominio del idioma empleado en la empresa en la que trabajaste?');
  item.setChoices([
    item.createChoice('Nativo'),
    item.createChoice('Avanzado'),
    item.createChoice('Intermedio'),
    item.createChoice('Básico'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Te solicitaron algún certificado o evidencia de suficiencia del idioma para poder desempeñarte profesionalmente en tu país de destino?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿La empresa del país de destino para la que trabajaste le otorgó especial valor a tu índice académico de pregrado para poder contratarte?');
  item.setChoices([
    item.createChoice('Sí '),
    item.createChoice('No'),
    item.createChoice('No Responder')
  ]);        
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudaron los conocimientos, competencias y experiencias adquiridas en la USB a desenvolverte con éxito en el postgrado de tu Universidad de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudó tener el título de Ingeniero Mecánico de la USB a insertarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué tanto te ayudaron los conocimientos, competencias y experiencias adquiridas en la USB a desempeñarte con éxito en el ámbito laboral del país de destino?');
  item.setChoices([
    item.createChoice('Totalmente '),
    item.createChoice('Mucho'),
    item.createChoice('Medianamente'),
    item.createChoice('Poco'),
    item.createChoice('Nada'),
    item.createChoice('No Responder')
  ]);
  item.setRequired(true);
 
  //==========================================================================
  //                            Preguntas Filtro
  //==========================================================================
 
  var seccionPreguntasFiltro6 = form.addPageBreakItem().setTitle('Preguntas Filtro');
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué actividad realizaste fuera de Venezuela?');
  item.setChoices([
    item.createChoice('Cursar estudios de postgrado', seccionEgresadoTipoD),
    item.createChoice('Trabajar', seccionEgresadoTipoE),
    item.createChoice('Cursar estudios de postgrado y trabajar', seccionEgresadoTipoF)
  ]);
  item.setRequired(true);
 
  var seccionPreguntasFiltro6HIJKLM = form.addPageBreakItem().setTitle('Preguntas Filtro');
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué actividad realizaste fuera de Venezuela?');
  item.setChoices([
    item.createChoice('Cursar estudios de postgrado', seccionEgresadoTipoK),
    item.createChoice('Trabajar', seccionEgresadoTipoL),
    item.createChoice('Cursar estudios de postgrado y trabajar', seccionEgresadoTipoM)
  ]);
  item.setRequired(true);
 
  var seccionPreguntasFiltro4HIJKLM = form.addPageBreakItem().setTitle('Preguntas Filtro');
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué actividad estás realizando actualmente fuera de Venezuela?');
                item.setChoices([
                item.createChoice('Cursar estudios de postgrado ', seccionEgresadoTipoH),
    item.createChoice(' Trabajar', seccionEgresadoTipoI),
      item.createChoice('Cursar estudios de postgrado y trabajar', seccionEgresadoTipoJ)
      ]);
  item.setRequired(true);
 
  var seccionPreguntasFiltro5HIJKLM = form.addPageBreakItem().setTitle('Preguntas Filtro');
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Previamente cursaste estudios de postgrado o te desempeñaste profesionalmente fuera de Venezuela?');
  item.setChoices([
    item.createChoice('Sí', seccionPreguntasFiltro6HIJKLM),
    item.createChoice('No', FormApp.PageNavigationType.SUBMIT)
  ]);
  item.setRequired(true);
 
  var seccionPreguntasFiltro3HIJKLM = form.addPageBreakItem().setTitle('Preguntas Filtro');
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Estás actualmente cursando estudios de postgrado o desempeñándote profesionalmente fuera de Venezuela?');
  item.setChoices([
    item.createChoice('Sí', seccionPreguntasFiltro4HIJKLM),
    item.createChoice('No', seccionPreguntasFiltro5HIJKLM)
  ]);
  item.setRequired(true);
 
  var seccionPreguntasFiltro4 = form.addPageBreakItem().setTitle('Preguntas Filtro');
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Qué actividad estás realizando actualmente fuera de Venezuela?');
                item.setChoices([
                item.createChoice('Cursar estudios de postgrado ', seccionEgresadoTipoA),
    item.createChoice('Trabajar', seccionEgresadoTipoB),
      item.createChoice('Cursar estudios de postgrado y trabajar', seccionEgresadoTipoC)
      ]);
  item.setRequired(true);
 
  var seccionPreguntasFiltro5 = form.addPageBreakItem().setTitle('Preguntas Filtro');
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Previamente cursaste estudios de postgrado o te desempeñaste profesionalmente fuera de Venezuela?');
  item.setChoices([
    item.createChoice('Sí', seccionPreguntasFiltro6),
    item.createChoice('No', seccionEgresadoTipoG)
  ]);
  item.setRequired(true);
 
  var seccionPreguntasFiltro3 = form.addPageBreakItem().setTitle('Preguntas Filtro');
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Estás actualmente cursando estudios de postgrado o desempeñándote profesionalmente fuera de Venezuela?');
  item.setChoices([
    item.createChoice('Sí', seccionPreguntasFiltro4),
    item.createChoice('No', seccionPreguntasFiltro5)
  ]);
  item.setRequired(true);
 
  var seccionPreguntasFiltro2 = form.addPageBreakItem().setTitle('Preguntas Filtro');
 
  var item = form.addMultipleChoiceItem();
  item.setTitle('¿Convalidaste tus documentos académicos de la USB para poder cursar estudios de postgrado o desempeñarte profesionalmente fuera de Venezuela? (entendiendo como convalidación al trámite formal de gestión del reconocimiento legal o académico de los documentos emitidos por la USB en otro país u otra institución).');
  item.setChoices([
    item.createChoice('Sí', seccionPreguntasFiltro3),
    item.createChoice('No', seccionPreguntasFiltro3HIJKLM)
  ]);
  item.setRequired(true);
 
 
 

 
 
  //==========================================================================
  //                            Observaciones del encuestado
  //==========================================================================
 
  var seccionObservaciones = form.addPageBreakItem().setTitle('Observaciones del encuestado');
 
  var item = form.addTextItem();
  item.setTitle('Opinión, comentarios o sugerencias');
 
  seccionInicio.setGoToPage(seccionPreguntasFiltro2);
  seccionObservaciones.setGoToPage(FormApp.PageNavigationType.SUBMIT);
  seccionEgresadoTipoA.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoB.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoC.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoD.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoE.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoF.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoG.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoH.setGoToPage(seccionObservaciones);  
  seccionEgresadoTipoI.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoJ.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoK.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoL.setGoToPage(seccionObservaciones);
  seccionEgresadoTipoM.setGoToPage(seccionObservaciones);
}
