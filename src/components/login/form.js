import './form.css'

export function FormLogin(){
return (
    <>
    <div className='formLogin'>
    <form className='form_box_login'>
    <label>Email:
    <input type='text' name='email' />
    </label><br></br>
    <label>Contraseña:
    <input type='password' name='password' />
    </label>
    <label><br></br>
    <button>Ingresar</button>
    </label>
    </form>
    </div>
    </>
)
}