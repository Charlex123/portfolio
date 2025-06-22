// eslint-disable-next-line no-unused-vars
import React from 'react'

const DataBase = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">DataBase Skills</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-data'></i>

                    <div>
                        <h3 className="skills__name">MYSQL</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-firebase' ></i>

                    <div>
                        <h3 className="skills__name">FireBase</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-server' ></i>

                    <div>
                        <h3 className="skills__name">Blockchain</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-data' ></i>

                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                
                <div className="skills__data">
                    <i className='bx bxl-mongodb' ></i>

                    <div>
                        <h3 className="skills__name">Mongo DB</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataBase