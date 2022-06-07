
export function FormLogin({handleSubmit,handleChange}){
return (
    <>
    <div className='formLogin'>
    <form className='form_box_login' onSubmit={handleSubmit}>
    <input type='text' name='email' placeholder='email' onChange={handleChange}/>
    <br></br>
    <input type='password' name='password' placeholder='password' onChange={handleChange}/>
    <br></br>
    <button>Ingresar</button>
    </form>
    </div>
    </>
)
}