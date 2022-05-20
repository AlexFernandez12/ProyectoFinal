import React from 'react';
import  "./login.css";
import reactDom from 'react-dom';
 

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"", valor : "", valor_password : ""}
 
    this.cambio=this.cambio.bind(this);
    this.insertar=this.insertar.bind(this);
    this.cambioPassword=this.cambioPassword.bind(this);
    this.iniciar=this.iniciar.bind(this);
  }
  cambio(event){
    this.setState({valor:event.target.value});
 
  }
  cambioPassword(event){
    this.setState({valor_password:event.target.value});
    //localStorage.setItem('nombrar',this.state.valor_usuario);
    //console.log(this.state.valor_usuario);
 
  }
  iniciar(){
    var datos = new FormData;
    datos.append('usuario', this.state.valor)
    datos.append('password', this.state.valor_password)
 
    fetch("http://localhost/chat/login.php",{
    method:'POST',
    body: datos
  })
  .then(res=>res.json())
  .then( (result)=>{
    if(result=='Funciona'){
      localStorage.setItem("usuario",this.state.valor);
      window.location.href="/Chat";
    }
  },
  (error)=>{
    console.log('No es correcto');
  }
  )
  }
  insertar(){
    var datos = new FormData;
    datos.append('usuario', this.state.valor)
    datos.append('password', this.state.valor_password)
    //datos.append('usuario',localStorage.getItem('nombrar') )
 
    fetch("http://localhost/chat/Insertar_login.php",{
    method:'POST',
    body: datos
  })
  .then(response =>
    console.log(response.ok)
    
    )
    .then(
      (result)=>{
        this.setState({valor : ""});
        this.setState({valor_password : ""});
        
 
      }
    )
 
  }
  render(){


   return(
       <div className='todo'>
           <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"></input>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="Usuario" required=""></input>
					<input type="email" name="email" placeholder="Correo electrónico" required="" value={this.state.valor} onChange={this.cambio}></input>
					<input type="password" name="pswd" placeholder="Contraseña" required="" value={this.state.valor_password} onChange={this.cambioPassword}></input>
					<button onClick={this.insertar} className="registro">Registrarse</button>
				</form>
			</div>
            <div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Correo electrónico" required="" value={this.state.valor} onChange={this.cambio}></input>
					<input type="password" name="pswd" placeholder="Contraseña" required="" value={this.state.valor_password} onChange={this.cambioPassword}></input>
					<button onClick={this.iniciar} className="registro">Iniciar</button>
				</form>
			</div>
            </div>
      </div>
    );

  }
  }
  export default Login;