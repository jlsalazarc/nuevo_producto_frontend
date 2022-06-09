
export function FormLogin({email,password,handleChange,handleSubmit}){
return (
    <>
    <div className='formLogin'>
    <form className='form_box_login' onSubmit={handleSubmit}>
    <input type='text' name='email' placeholder='email' onChange={handleChange} value={email}/>
    <br></br>
    <input type='password' name='password' placeholder='password' onChange={handleChange} value={password}/>
    <br></br>
    <button>Ingresar</button>
    </form>
    </div>
    </>
)
}