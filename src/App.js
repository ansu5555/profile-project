import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'material-design-icons/iconfont/material-icons.css'
import GitHubLogo from './logos/gh-icon.png'
import stackoverflowLogo from './logos/so-icon.png'
import TwitterLogo from './logos/tw-icon.png'
import LinkedInLogo from './logos/li-icon.png'
import InstragramLogo from './logos/ig-icon.png'

function App() {
    const [theme, setTheme] = useState(true)

    return (
        <div className='row center custom-container'>
            <div className='col-lg-6 left-section text-white'>
                <div className='left-overlay'>
                    <div className='name'>
                        <div className='py-5 px-3'>
                            <div className='h4 font-weight-bold d-inline-block'>Ansuman Ghosh</div>
                            <div className='h6 font-weight-light d-inline-block'>
                                &nbsp; &ndash; Fullstack Developer
                            </div>
                        </div>
                    </div>
                    <div className='picture picture-dimention'></div>
                    <div className='about py-5 px-3 text-justify'>
                        <p className='mb-5'>
                            Fullstack Developer with 8 years of experience who loves to work with Python, JavaScript and
                            Go.
                        </p>
                    </div>
                    <div className='contact py-5 px-3 text-justify'>
                        <div className='mb-3 d-block'>
                            <span className='material-icons align-middle contact-icon'>location_city</span>
                            <span className='ml-2 align-middle contact-text'>Bangalore, Karnataka, India</span>
                        </div>
                        <div className='mr-4 d-inline-block'>
                            <span className='material-icons align-middle contact-icon'>mail_outline</span>
                            <span className='ml-2 align-middle contact-text contact-color'>ansuman5555@gmail.com</span>
                        </div>
                        <div className='d-inline-block'>
                            <span className='material-icons align-middle contact-icon'>smartphone</span>
                            <span className='ml-2 align-middle contact-text contact-color'>+91 9739761446</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={theme ? 'col-lg-6 right-section theme-light' : 'col-lg-6 right-section theme-dark'}>
                <span className='material-icons theme-switch' onClick={() => setTheme(!theme)}>
                    brightness_6
                </span>
                <div className='container my-5'>
                    <div className='section'>
                        <p className='section-heading'>Skills</p>
                        <blockquote className='blockquote section-text'>
                            <p className='mx-3 pb-2 border-bottom'>
                                Python, Javascript(Node.js), Go, React, sql, HTML, css
                            </p>
                        </blockquote>
                    </div>
                    <div className='section'>
                        <p className='section-heading'>Experience</p>
                        <blockquote className='blockquote section-text'>
                            <p className='mx-3 pb-2 border-bottom'>
                                Sr. Software Engineer in{' '}
                                <a href='https://infrrd.ai/' target='_blank' rel='noopener noreferrer'>
                                    Infrrd
                                </a>{' '}
                                from May-2019
                            </p>
                        </blockquote>
                        <blockquote className='blockquote section-text'>
                            <p className='mx-3 pb-2 border-bottom'>
                                ASE in{' '}
                                <a href='https://www.tcs.com/' target='_blank' rel='noopener noreferrer'>
                                    TCS
                                </a>{' '}
                                from Sep-2012 to Mar-2019
                            </p>
                        </blockquote>
                    </div>
                    <div className='section'>
                        <p className='section-heading'>Education</p>
                        <blockquote className='blockquote section-text'>
                            <p className='mx-3 pb-2 border-bottom'>
                                B.Tech (EE) in Asansol Engineering College (WBUT) from 2008 to 2012
                            </p>
                        </blockquote>
                    </div>
                    <div className='section'>
                        <p className='section-heading'>Resume</p>
                        <blockquote className='blockquote section-text'>
                            <p className='mx-3 pb-2 border-bottom'>
                                <a
                                    href='https://drive.google.com/file/d/1nu3HpuUiJPTFsZsMkMYvK7dEa4iOFUkB/view?usp=sharing'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Click here
                                </a>{' '}
                                to view the resume
                            </p>
                        </blockquote>
                    </div>
                    <div className='follow row p-0 m-0'>
                        <div className='col m-0 p-0'>
                            <a href='https://github.com/ansu5555/' target='_blank' rel='noopener noreferrer'>
                                <img src={GitHubLogo} alt='GitHub' className='social-icon' />
                            </a>
                        </div>
                        <div className='col m-0 p-0'>
                            <a
                                href='https://stackoverflow.com/users/story/3673981'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <img src={stackoverflowLogo} alt='stackoverflow' className='social-icon' />
                            </a>
                        </div>
                        <div className='col m-0 p-0'>
                            <a href='https://twitter.com/ansu5555' target='_blank' rel='noopener noreferrer'>
                                <img src={TwitterLogo} alt='Twitter' className='social-icon' />
                            </a>
                        </div>
                        <div className='col m-0 p-0'>
                            <a
                                href='https://www.linkedin.com/in/ansuman-ghosh/'
                                target='_blank'
                                rel='noopener noreferrer'>
                                <img src={LinkedInLogo} alt='Linkedin' className='social-icon' />
                            </a>
                        </div>
                        <div className='col m-0 p-0'>
                            <a href='https://www.instagram.com/ansumanghosh/' target='_blank' rel='noopener noreferrer'>
                                <img src={InstragramLogo} alt='Instragram' className='social-icon' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
