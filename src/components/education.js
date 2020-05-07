import React from 'react';
import trinity from '../images/trinity.png'
import aws from '../images/aws.png'
import gcp from '../images/gcp.png'

const education = () => {
    return (
        <section id="education">
                    <h2>Education</h2>
                    <hr/>
                    <div>
                        <img src={gcp} className="img-circle img-thumbnail pull-right hidden-xs icon" alt="Trinity College Dublin" />
                        <h3>
                            GCP Certified Professional Cloud Developer <br/>
                            <small>Google Cloud Platform</small>
                        </h3>
                        <p><span class="badge">2019</span></p>
                    </div>

                    <div>
                        <img src={aws} className="img-circle img-thumbnail pull-right hidden-xs icon" alt="Trinity College Dublin" />
                        <h3>
                            AWS Certified Developer - Associate <br/>
                            <small>Amazon Web Services</small>
                        </h3>
                        <p><span class="badge">2017</span></p>
                    </div>

                    <div>
                        <img src={trinity} className="img-circle img-thumbnail pull-right hidden-xs icon" alt="Trinity College Dublin" />
                        <h3>
                            BA (Hons) Computer Science and Business <br/>
                            <small>Trinity College Dublin, Ireland</small>
                        </h3>
                        <p><span class="badge">2006 - 2010</span></p>
                    </div>
                </section>
    )
}

export default education;