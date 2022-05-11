import React from 'react';
import './inicio.css';

function inicio() {
  return (
    <div>
        <div className='camisetas'>
            <div className='imgcamiseta'>gg</div>
            <button>Camisetas</button>
        </div>
        <div className='sudaderas'>
            <div className='imgsudadera'>
                <img src="https://m.media-amazon.com/images/I/61KzaXp2T9L._AC_UX385_.jpg" />
            </div>
            <button>Sudaderas</button>
        </div>
        <div className='pantalones'>
            <div className='imgcamiseta'></div>
            <button>Pantalones</button>
        </div>
        <div className='camisetas'>
            <div className='imgcamiseta'></div>
            <button>Zapaatos</button>
        </div>
    </div>
  )
}

export default inicio
