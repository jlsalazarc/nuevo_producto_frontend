import './form.css'
export function FormRegister(){
    return (
        <>
        <div className='formRegister'>
        <form className='form_box_login'>
        <label>Email:
        <input type='text' name='email' />
        </label><br></br>
        <label>Contraseña:
        <input type='password' name='password' />
        </label><br></br>
        <label>
        <button>Ingresar</button>
        </label>
        </form>
        </div>
        </>
    )
}