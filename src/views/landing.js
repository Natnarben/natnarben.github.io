export function landingPage() {
  const htmlLanding = `
    <div class="divLanding">
      <img src="../src/images/meowBoxMarcaBlanca.png" alt="logo" width="15%" >
      <h1>Personas con un gusto en común</h1>
      <br> 
      <h2 class="gatitos">g a t i t o s </h2>
      <img src="../src/images/meowBoxCabeza.png" alt="gatito" width="17%">
      <h2>Haz parte de nuestra comunidad</h2>
      <br>
      <h3> Crea tu cuenta fácil y rápido <br> <a href="#/signUp" style="color:#a78de4"> Aquí</a></h3>
      <p>ó</p>
      <h3>Si ya tienes cuenta<a href= "#/logIn" style="color:#a78de4"><br>Ingresa con tu usuario</a></h3>
    </div>`;

  const landingView = document.createElement('section');
  landingView.className = 'landingClass';
  landingView.innerHTML = htmlLanding;
  return landingView;
}
