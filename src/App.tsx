import Header from './components/Header';
import './styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUsers } from '@fortawesome/free-solid-svg-icons';
import getUser from './services/user-api';
import { useEffect, useState } from 'react';

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [level, setLevel] = useState(1)
  const [avatar, setAvatar] = useState("")
  const [user, setUser] = useState<any>(null)

  useEffect(()=>{
    async function fetchUser() {
      try{
        const userUpdate = await getUser()
        setUser(userUpdate)
      }catch(err: any){
        console.log(err)
      }
    }
    fetchUser()
  }, [])

  useEffect(()=>{
    if(user == null){
      console.log("Usuario nao definido")
    }else{

      setName(user.data.name)
      setEmail(user.data.email)
      setLevel(Number(user.data.level))
      setAvatar(user.data.avatar)

      console.log(user)
    }
    
  }, [user])


  return (
    <div className="App">
      <Header name={name} email={email} level={level} avatar={avatar} />
      <section className='recommended px-5'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2>RECOMENDADO PARA VOCÊ</h2>
            </div>{/* col-12 */}
          </div>{/* row */}

          <div className="row">
            <div className="col-12">
              <div className="list">

                <div className="row">
                  
                  <div className="col-3">
                    <div className="item px-2">
                      <div className="image-item" style={{backgroundImage: "url(https://my.alfred.edu/zoom/_images/foster-lake.jpg)"}}></div>{/* image-item */}
                      <div className="info-item">
                        <h3>Exercises with jumping Rope</h3>
                        <span><FontAwesomeIcon icon={faCalendarDays} style={{color: "#009966"}} /> 28/01/2025 8:00</span>
                        <span className='mx-3'> | </span>
                        <span> <FontAwesomeIcon icon={faUsers} style={{color: "#009966"}} /> 4</span>     
                      </div>{/* content-item */}
                    </div>{/* item */}
                  </div>{/* col-3 */}

                  <div className="col-3">
                    <div className="item px-2">
                      <div className="image-item" style={{backgroundImage: "url(https://my.alfred.edu/zoom/_images/foster-lake.jpg)"}}></div>{/* image-item */}
                      <div className="info-item">
                        <h3>Exercises with jumping Rope</h3>
                        <span><FontAwesomeIcon icon={faCalendarDays} style={{color: "#009966"}} /> 28/01/2025 8:00</span>
                        <span className='mx-3'> | </span>
                        <span> <FontAwesomeIcon icon={faUsers} style={{color: "#009966"}} /> 4</span>     
                      </div>{/* content-item */}
                    </div>{/* item */}
                  </div>{/* col-3 */}

                  <div className="col-3">
                    <div className="item px-2">
                      <div className="image-item" style={{backgroundImage: "url(https://my.alfred.edu/zoom/_images/foster-lake.jpg)"}}></div>{/* image-item */}
                      <div className="info-item">
                        <h3>Exercises with jumping Rope</h3>
                        <span><FontAwesomeIcon icon={faCalendarDays} style={{color: "#009966"}} /> 28/01/2025 8:00</span>
                        <span className='mx-3'> | </span>
                        <span> <FontAwesomeIcon icon={faUsers} style={{color: "#009966"}} /> 4</span>     
                      </div>{/* content-item */}
                    </div>{/* item */}
                  </div>{/* col-3 */}

                  <div className="col-3">
                    <div className="item px-2">
                      <div className="image-item" style={{backgroundImage: "url(https://my.alfred.edu/zoom/_images/foster-lake.jpg)"}}></div>{/* image-item */}
                      <div className="info-item">
                        <h3>Exercises with jumping Rope</h3>
                        <span><FontAwesomeIcon icon={faCalendarDays} style={{color: "#009966"}} /> 28/01/2025 8:00</span>
                        <span className='mx-3'> | </span>
                        <span> <FontAwesomeIcon icon={faUsers} style={{color: "#009966"}} /> 4</span>     
                      </div>{/* content-item */}
                    </div>{/* item */}
                  </div>{/* col-3 */}

                  <div className="col-3">
                    <div className="item px-2">
                      <div className="image-item" style={{backgroundImage: "url(https://my.alfred.edu/zoom/_images/foster-lake.jpg)"}}></div>{/* image-item */}
                      <div className="info-item">
                        <h3>Exercises with jumping Rope</h3>
                        <span><FontAwesomeIcon icon={faCalendarDays} style={{color: "#009966"}} /> 28/01/2025 8:00</span>
                        <span className='mx-3'> | </span>
                        <span> <FontAwesomeIcon icon={faUsers} style={{color: "#009966"}} /> 4</span>     
                      </div>{/* content-item */}
                    </div>{/* item */}
                  </div>{/* col-3 */}

                  <div className="col-3">
                    <div className="item px-2">
                      <div className="image-item" style={{backgroundImage: "url(https://my.alfred.edu/zoom/_images/foster-lake.jpg)"}}></div>{/* image-item */}
                      <div className="info-item">
                        <h3>Exercises with jumping Rope</h3>
                        <span><FontAwesomeIcon icon={faCalendarDays} style={{color: "#009966"}} /> 28/01/2025 8:00</span>
                        <span className='mx-3'> | </span>
                        <span> <FontAwesomeIcon icon={faUsers} style={{color: "#009966"}} /> 4</span>     
                      </div>{/* content-item */}
                    </div>{/* item */}
                  </div>{/* col-3 */}

                  <div className="col-3">
                    <div className="item px-2">
                      <div className="image-item" style={{backgroundImage: "url(https://my.alfred.edu/zoom/_images/foster-lake.jpg)"}}></div>{/* image-item */}
                      <div className="info-item">
                        <h3>Exercises with jumping Rope</h3>
                        <span><FontAwesomeIcon icon={faCalendarDays} style={{color: "#009966"}} /> 28/01/2025 8:00</span>
                        <span className='mx-3'> | </span>
                        <span> <FontAwesomeIcon icon={faUsers} style={{color: "#009966"}} /> 4</span>     
                      </div>{/* content-item */}
                    </div>{/* item */}
                  </div>{/* col-3 */}

                  <div className="col-3">
                    <div className="item px-2">
                      <div className="image-item" style={{backgroundImage: "url(https://my.alfred.edu/zoom/_images/foster-lake.jpg)"}}></div>{/* image-item */}
                      <div className="info-item">
                        <h3>Exercises with jumping Rope</h3>
                        <span><FontAwesomeIcon icon={faCalendarDays} style={{color: "#009966"}} /> 28/01/2025 8:00</span>
                        <span className='mx-3'> | </span>
                        <span> <FontAwesomeIcon icon={faUsers} style={{color: "#009966"}} /> 4</span>     
                      </div>{/* content-item */}
                    </div>{/* item */}
                  </div>{/* col-3 */}
                
                </div>{/*row*/}

              </div>{/* list */}
            </div>{/* col-12 */}
          </div>{/* row */}
        </div>{/* container */}
      </section>{/* recomended */}

      <section className='types px-5 my-5'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2>TIPOS DE ATIVIDADE</h2>
            </div>{/* col-12 */}
          </div>{/* row */}

          <div className="row">

            <div className="col-1 px-2">
              <div className="type">
                <div className="type-image" style={{ backgroundImage: "url(https://cdn.prod.website-files.com/63c83bcc0ba2e13003877238/6500b3205aa3e38cb7e7c0ac_Benefi%CC%81cios%20de%20praticar%20Yoga%20para%20o%20corpo%20e%20mente%20.jpg)" }}></div>
                <h3 className='text-center'>Yoga</h3>
              </div>{/* type */}
            </div>{/* col-1 */}

            <div className="col-1 px-2">
              <div className="type">
                <div className="type-image" style={{ backgroundImage: "url(https://cdn.prod.website-files.com/63c83bcc0ba2e13003877238/6500b3205aa3e38cb7e7c0ac_Benefi%CC%81cios%20de%20praticar%20Yoga%20para%20o%20corpo%20e%20mente%20.jpg)" }}></div>
                <h3 className='text-center'>Yoga</h3>
              </div>{/* type */}
            </div>{/* col-1 */}

            <div className="col-1 px-2">
              <div className="type">
                <div className="type-image" style={{ backgroundImage: "url(https://cdn.prod.website-files.com/63c83bcc0ba2e13003877238/6500b3205aa3e38cb7e7c0ac_Benefi%CC%81cios%20de%20praticar%20Yoga%20para%20o%20corpo%20e%20mente%20.jpg)" }}></div>
                <h3 className='text-center'>Yoga</h3>
              </div>{/* type */}
            </div>{/* col-1 */}

            <div className="col-1 px-2">
              <div className="type">
                <div className="type-image" style={{ backgroundImage: "url(https://cdn.prod.website-files.com/63c83bcc0ba2e13003877238/6500b3205aa3e38cb7e7c0ac_Benefi%CC%81cios%20de%20praticar%20Yoga%20para%20o%20corpo%20e%20mente%20.jpg)" }}></div>
                <h3 className='text-center'>Yoga</h3>
              </div>{/* type */}
            </div>{/* col-1 */}
            
          </div>{/* row */}
        </div>{/* container-fluid */}
      </section>{/* types */}

      <section className='categories'>
        <div className="container-fluid px-5">
          <div className="row">
            
            <div className="col-6 category">
              <h2>Corrida</h2>
              <div className="row">
                <div className="col-6">
                  <div className="image-activity" style={{backgroundImage: "url(https://img.odcdn.com.br/wp-content/uploads/2022/08/fotografo.jpg)"}}></div>
                  <div className="info-activity">
                  <h3>Exercises with Jumping Rope</h3>
                  <span><FontAwesomeIcon icon={faCalendarDays} style={{color: "#009966"}} /> 28/01/2025 8:00</span>
                  </div>
                </div>
              </div>{/* row */}
            </div>{/* col-6 */}

            <div className="col-6 category">

            </div>{/* col-6 */}
          </div>{/* row */}
        </div>{/* container-fluid */}
      </section>{/* categories */}
    </div>
  );
}

export default App;
