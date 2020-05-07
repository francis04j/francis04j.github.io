import React from "react";

const skills = () => {
    return (
        <section id="skills">
                    <h2>Skills &amp; Technologies</h2>
                    <hr />
                    <div className="badge-list">
                        <a className="badge" href="https://docs.microsoft.com/en-us/dotnet/csharp/">C#</a>
                        <a className="badge" href="https://dotnet.microsoft.com/download">.NET Core</a>
                        <a className="badge" href="https://nodejs.org/en/">NodeJS</a>
                        <a className="badge" href="https://aws.amazon.com/lambda/">AWS Lambda</a>
                        <a className="badge" href="https://www.typescriptlang.org/">TypeScript</a>
                        <a className="badge" href="https://docker.com/">Docker</a>
                        <a className="badge" href="https://en.wikipedia.org/wiki/Test-driven_development">TDD</a>
                        <a className="badge" href="https://agilemanifesto.org/">Agile</a>
                        <a className="badge" href="https://www.scrum.org/resources/what-is-scrum/">Scrum</a>
                        <a className="badge" href="https://www.atlassian.com/agile/kanban/">Kanban</a>
                        <a className="badge" href="https://aws.amazon.com/">AWS</a>
                        <a className="badge" href="https://cloud.google.com/">Google cloud platform (GCP)</a>
                        <a className="badge" href="https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment">CI/CD</a>
                        <a className="badge" href="https://serverless.com/">Serverless</a>
                        <a className="badge" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets">CSS</a>
                        <a className="badge" href="https://reactjs.org/">ReactJS</a>
                        <a className="badge" href="https://loopback.io/">Loopback</a>
                        <a className="badge" href="https://www.gnu.org/software/bash/">Bash</a>
                        <a className="badge" href="https://python.org/">Python</a>
                        <a className="badge" href="https://linux.org/">Linux</a>
                    </div>

                    <h3>Used in current role</h3>

                    <div className="row">
                        <div className="card">
                            <h4>NodeJS</h4>
                            <p>Experience, 3+ years</p>
                        </div>
                        <div className="card">
                            <h4>TypeScript</h4>
                            <p>Experience, 2+ years</p>
                        </div>
                        <div className="card">
                            <h4>Loopback</h4>
                            <p>Experience, 1+ years</p>
                        </div>
                        <div className="card">
                            <h4>GCP</h4>
                            <p>Experience, 3+ months</p>
                        </div>
                    </div>
                </section>
    )
}

export default skills;