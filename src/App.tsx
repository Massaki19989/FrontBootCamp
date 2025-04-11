import Header from './components/Header';
import './styles/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUsers } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Header />
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

                      <div className="image-item" style={{backgroundImage: "url(https://cdn-icons-png.flaticon.com/512/3135/3135768.png)"}}></div>{/* image-item */}

                      <div className="info-item">
                        <h3>Exercises with jumping Rope</h3>
                        <span><FontAwesomeIcon icon={faCalendarDays} style={{color: "#009966"}} /> 28/01/2025 8:00 |</span>
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
    </div>
  );
}

export default App;
