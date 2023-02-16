import React from 'react'
import image1 from '../../image/logo2.png'

export default function Footer() {
  let year = new Date().getFullYear()
  return (
    <div className="container-fluid footer-main-div">
      <footer className="bd-footer py-4 py-md-5 mt-3 myfooter">
        <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <a className="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none" href="/" aria-label="Bootstrap">
                <img src={image1} alt="Bootstrap" width="70" height="60" />
                {/* <span className="fs-5">Bootstrap</span> */}
              </a>
              <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
              <div className='d-flex fs-2'>
                <a href="#"><i className="bi bi-facebook text-white mx-2"></i></a>
                <a href="#"><i className="bi bi-twitter text-white mx-2"></i></a>
                <a href="#"><i className="bi bi-quora text-white mx-2"></i></a>
              </div>
            </div>
            <div className="col-6 col-lg-2 offset-lg-1 mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/">Home</a></li>
                <li className="mb-2"><a href="/docs/5.3/">Docs</a></li>
                <li className="mb-2"><a href="/docs/5.3/examples/">Examples</a></li>
                <li className="mb-2"><a href="https://icons.getbootstrap.com/">Icons</a></li>
                <li className="mb-2"><a href="https://themes.getbootstrap.com/">Themes</a></li>
                <li className="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                <li className="mb-2"><a href="https://cottonbureau.com/people/bootstrap">Swag Store</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Guides</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
                <li className="mb-2"><a href="/docs/5.3/examples/starter-template/">Starter template</a></li>
                <li className="mb-2"><a href="/docs/5.3/getting-started/webpack/">Webpack</a></li>
                <li className="mb-2"><a href="/docs/5.3/getting-started/parcel/">Parcel</a></li>
                <li className="mb-2"><a href="/docs/5.3/getting-started/vite/">Vite</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Projects</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="https://github.com/twbs/bootstrap">Bootstrap 5</a></li>
                <li className="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev">Bootstrap 4</a></li>
                <li className="mb-2"><a href="https://github.com/twbs/icons">Icons</a></li>
                <li className="mb-2"><a href="https://github.com/twbs/rfs">RFS</a></li>
                <li className="mb-2"><a href="https://github.com/twbs/bootstrap-npm-starter">npm starter</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-2 mb-3">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="https://github.com/twbs/bootstrap/issues">Issues</a></li>
                <li className="mb-2"><a href="https://github.com/twbs/bootstrap/discussions">Discussions</a></li>
                <li className="mb-2"><a href="https://github.com/sponsors/twbs">Corporate sponsors</a></li>
                <li className="mb-2"><a href="https://opencollective.com/bootstrap">Open Collective</a></li>
                <li className="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5">Stack Overflow</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className='text-center'>Copyright ©2023 All rights reserved</p>
      </footer>
    </div>
  )
}
