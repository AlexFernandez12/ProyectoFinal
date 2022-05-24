import React from 'react';
import "./login.css";
import reactDom from 'react-dom';
import Fondo from "../../images/login.jpg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", valor: "", valor_password: "", valor_email: "" }

    this.cambio = this.cambio.bind(this);
    this.insertar = this.insertar.bind(this);
    this.cambioPassword = this.cambioPassword.bind(this);
    this.iniciar = this.iniciar.bind(this);
  }
  cambio(event) {
    this.setState({ valor: event.target.value });

  }
  cambioPassword(event) {
    this.setState({ valor_password: event.target.value });
    //localStorage.setItem('nombrar',this.state.valor_usuario);
    //console.log(this.state.valor_usuario);

  }
  cambioEmail(event) {
    this.setState({ valor_email: event.target.value });

  }
  iniciar() {
    var datos = new FormData;
    datos.append('usuario', this.state.valor)
    datos.append('password', this.state.valor_password)
    datos.append('email', this.state.valor_email)

    fetch("http://localhost/chat/login.php", {
      method: 'POST',
      body: datos
    })
      .then(res => res.json())
      .then((result) => {
        if (result == 'Funciona') {
          localStorage.setItem("usuario", this.state.valor);
          window.location.href = "/Chat";
        }
      },
        (error) => {
          console.log('No es correcto');
        }
      )
  }
  insertar() {
    var datos = new FormData;
    datos.append('usuario', this.state.valor)
    datos.append('password', this.state.valor_password)
    datos.append('email', this.state.valor_email)
    //datos.append('usuario',localStorage.getItem('nombrar') )

    fetch('${Constantes.RUTA_API}/Insertar_login.php', {
      method: 'POST',
      body: datos
    })
      .then(response =>
        console.log(response.ok)

      )
      .then(
        (result) => {
          this.setState({ valor: "" });
          this.setState({ valor_password: "" });
          this.setState({ valor_email: "" });


        }
      )

  }
  render() {


    return (
        <div className='todo'>
          <div className='izq_log'>
            <img src={Fondo}></img>
          </div>
          <div className='der_log'>
            <div class="main">
              <input type="checkbox" id="chk" aria-hidden="true"></input>

                <div class="signup">
                  <form>
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="usuario" placeholder="Usuario" required="" value={this.state.valor} onChange={this.cambio}></input>
                    <input type="email" name="email" placeholder="Correo electrónico" required="" value={this.state.valor_email} onChange={this.cambioEmail}></input>
                    <input type="password" name="password" placeholder="Contraseña" required="" value={this.state.valor_password} onChange={this.cambioPassword}></input>
                    <button onClick={this.insertar} className="registro">Registrarse</button>
                  </form>
                </div>
                <div class="login">
                  <form>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" placeholder="Correo electrónico" required="" value={this.state.valor_email} onChange={this.cambioEmail}></input>
                    <input type="password" name="password" placeholder="Contraseña" required="" value={this.state.valor_password} onChange={this.cambioPassword}></input>
                    <button onClick={this.iniciar} className="registro">Iniciar</button>
                  </form>
                </div>

            </div>
          </div>
        </div>
    );

  }
}
export default Login;