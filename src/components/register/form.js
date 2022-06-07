
export function FormRegister({handleSubmit,hanldeChange}){
    return (
        <>
        <div className='formRegister'>
        <form className='form_box_login' onSubmit={handleSubmit}>
        <input type='text' name='email' placeholder='email' onChange={hanldeChange}/>
        <br></br>
        <input type='password' name='password'  placeholder='password' onChange={hanldeChange}/>
        <br></br>
        <button>Ingresar</button>
        </form>
        </div>
        </>
    )
}