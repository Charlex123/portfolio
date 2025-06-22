// eslint-disable-next-line no-unused-vars
import React from 'react'

const CloudCompute = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Cloud Compute Skills</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bxl-aws'></i>

                    <div>
                        <h3 className="skills__name"> AWS Cloud </h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bxl-google' ></i>

                    <div>
                        <h3 className="skills__name">Google Cloud</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className='bx bx-cloud' ></i>

                    <div>
                        <h3 className="skills__name">Azure Cloud</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className='bx bx-git-branch' ></i>

                    <div>
                        <h3 className="skills__name">CI/CD Deployment</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CloudCompute