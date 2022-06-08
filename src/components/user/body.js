import './body.css'
import crea from '../img/crear.png'
import modifica from '../img/Modificar.png'
export function Body(){
    return (
<div className="destinosCard-container">
    <div className="destinosCard-container_img">
        <img src={crea} alt="crear" width="240" height="192"/>
        <h3>Crear Nuevo Producto</h3>
    </div>
    <div className="destinosCard-container_img">
        <img src={modifica} alt="modifica" width="240" height="192"/>
        <h3>Modificar Nuevo Producto</h3>
    </div>
</div>
  )
  }