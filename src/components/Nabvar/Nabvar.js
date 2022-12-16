import React, { useContext } from 'react'
import { WalletContext } from '../Providers/Wallet'

const Nabvar = () => {
  const { address, Provider, connectToWallet } = useContext(WalletContext)

  return (
    <div id="sticky-header" class="cryptobit_nav_manu">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="logo">
              <a class="logo_img upper1" href="index.html" title="cryptobit">
                <img src="assets/images/logo22.png" alt="" />
              </a>
              <a class="main_sticky upper1" href="index.html" title="cryptobit">
                <img src="assets/images/logo22.png" alt="astute" />
              </a>
            </div>
          </div>
          <div class="col-lg-8">
            <nav class="cryptobit_menu upper">
              <ul class="nav_scroll">
                {/* <li>
                  <a href="#">
                    Home <span>+</span>
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="index.html">Main Home</a>
                    </li>
                    <li>
                      <a href="index-2.html">Home Animation</a>
                    </li>
                    <li>
                      <a href="index-3.html">Home Particle</a>
                    </li>
                    <li>
                      <a href="index-4.html">Landing Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="#service">
                    Services <span>+</span>
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="service.html">Services</a>
                    </li>
                    <li>
                      <a href="service-details.html">Services Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Pages <span>+</span>
                  </a>
                  <ul class="sub-menu upper">
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="service.html">Services</a>
                    </li>
                    <li>
                      <a href="service-details.html">Services Details</a>
                    </li>
                    <li>
                      <a href="team.html">Team</a>
                    </li>
                    <li>
                      <a href="road-map.html">Roadmap</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Blog <span>+</span>
                  </a>
                  <ul class="sub-menu upper">
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li> */}
                <li>
                <a
                  href="#!"><br/></a>
                </li>
              </ul>
              <div class="header-button upper1">
                <a
                  href="#!"
                  onClick={() =>
                    address ? console.log(address) : connectToWallet()
                  }
                >
                  {address ? `Wallet conectada: ${address}` : 'Connect Wallet'}
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nabvar
