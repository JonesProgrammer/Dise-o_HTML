var datosUsuario = {
  nombre: "Juan Esteban Jimenez",
  genero: "masculino",
  fechaNacimiento: "2002-12-07",
  celular: "3024569824",
  correo: "ejjuan@uninorte.edu.co",
  tipoDocumento: "Cedula",
  numeroDocumento: "1045938745"
};

document.getElementById('mostrar_nombre').textContent = datosUsuario.nombre;
document.getElementById('mostrar_genero').textContent = datosUsuario.genero;
document.getElementById('mostrar_fecha').textContent = datosUsuario.fechaNacimiento;
document.getElementById('mostrar_celular').textContent = datosUsuario.celular;
document.getElementById('mostrar_correo').textContent = datosUsuario.correo;
document.getElementById('mostrar_tipo_doc').textContent = datosUsuario.tipoDocumento;
document.getElementById('mostrar_num_doc').textContent = datosUsuario.numeroDocumento;
