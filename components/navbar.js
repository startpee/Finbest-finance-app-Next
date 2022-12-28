import React from 'react'
import Link from 'next/link'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <nav className="navbar-navbar">
        <div className="navbar-desktop">
          <div className="navbar-main">
            <div className="navbar-branding">
              <Link href="/">
                <a className="navbar-link">
                  <img
                    alt={props.Branding_alt}
                    src={props.Branding_src}
                    className="navbar-finbest"
                  />
                </a>
              </Link>
            </div>
            <div className="navbar-links">
              <a
                href="https://blog.sabedoriajovem.site/"
                className="navbar-link01 link"
              >
                {props.Link_1}
              </a>
              <a
                href="https://open.spotify.com/show/4GLX3DpZCOgAHsV6SWwj7o?go=1&amp;sp_cid=1a2f9dc2c195ddf4646f77637a80f963&amp;utm_source=embed_player_p&amp;utm_medium=desktop&amp;nd=1"
                className="navbar-link02 link"
              >
                {props.Link_2}
              </a>
              <a
                href="https://chatting.page/u4sq7jfo91vvwmcnblgfvwwq9wshhxi1"
                className="navbar-link03 link"
              >
                {props.Link_4}
              </a>
            </div>
          </div>
          <div className="navbar-quick-actions">
            <a
              href="https://www.instagram.com/oprimojunior/"
              className="navbar-link04"
            >
              <div className="navbar-sign-up-btn">
                <span className="navbar-sign-up">Seguir</span>
              </div>
            </a>
            <img
              id="open-mobile-menu"
              alt={props.pastedImage_alt}
              src={props.pastedImage_src}
              className="navbar-hamburger-menu"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-mobile">
          <div className="navbar-top">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="navbar-image"
            />
            <svg
              id="close-mobile-menu"
              viewBox="0 0 1024 1024"
              className="navbar-icon"
            >
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
          <div className="navbar-links1">
            <Link href="/">
              <a className="navbar-link05">{props.text1}</a>
            </Link>
            <Link href="/">
              <a className="navbar-link06">{props.text11}</a>
            </Link>
            <Link href="/">
              <a className="navbar-link07">{props.text13}</a>
            </Link>
            <div className="navbar-buttons">
              <Link href="/">
                <a className="navbar-link08">
                  <div className="navbar-btn">
                    <span className="navbar-text">{props.text131}</span>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="navbar-link09">
                  <div className="navbar-btn1">
                    <span className="navbar-text1">{props.text1311}</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
          ></DangerousHTML>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navbar-desktop {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-main {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link {
            display: contents;
          }
          .navbar-finbest {
            width: 187px;
            height: 65px;
            text-decoration: none;
          }
          .navbar-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: 12px;
            border-radius: 6px;
            flex-direction: row;
            padding-bottom: 12px;
            justify-content: center;
          }
          .navbar-link01 {
            text-decoration: none;
          }
          .navbar-link02 {
            text-decoration: none;
          }
          .navbar-link03 {
            text-decoration: none;
          }
          .navbar-quick-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-link04 {
            display: contents;
          }
          .navbar-sign-up-btn {
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-black);
            border-width: 3px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
            text-decoration: none;
            background-color: #c7beb7;
          }
          .navbar-sign-up-btn:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .navbar-sign-up {
            font-style: normal;
            font-weight: 500;
          }
          .navbar-hamburger-menu {
            width: 20px;
            height: 12px;
            display: none;
          }
          .navbar-mobile {
            gap: var(--dl-space-space-fourunits);
            top: 0px;
            left: 0px;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            z-index: 200;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-image {
            width: 150px;
            object-fit: cover;
          }
          .navbar-icon {
            width: 28px;
            height: 28px;
          }
          .navbar-links1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .navbar-link05 {
            text-decoration: none;
          }
          .navbar-link06 {
            text-decoration: none;
          }
          .navbar-link07 {
            text-decoration: none;
          }
          .navbar-buttons {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .navbar-link08 {
            display: contents;
          }
          .navbar-btn {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-text {
            font-style: normal;
            font-weight: 500;
          }
          .navbar-link09 {
            display: contents;
          }
          .navbar-btn1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #ade2df;
          }
          .navbar-text1 {
            font-style: normal;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .navbar-navbar {
              align-items: center;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .navbar-links {
              display: none;
            }
            .navbar-sign-up-btn {
              display: none;
            }
            .navbar-hamburger-menu {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              align-items: center;
            }
            .navbar-mobile {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .navbar-mobile {
              width: 320px;
              height: 1000px;
              margin-right: 0px;
              padding-left: 28px;
              padding-right: 28px;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  text1: 'Seguir',
  Link_4: 'Contato',
  Branding_src: '/playground_assets/sabedoria-1500h.png',
  Link_1: 'Nosso blog',
  text131: 'Podcast',
  image_alt: 'image',
  pastedImage_src: '/playground_assets/pastedimage-8o98.svg',
  text1311: 'Blog',
  text13: 'Contato',
  Link_2: 'Podcast',
  pastedImage_alt: 'pastedImage',
  image_src: '/playground_assets/sabedoria-1500h.png',
  Branding_alt: 'pastedImage',
  text11: 'Conselhos para jovens',
}

Navbar.propTypes = {
  text1: PropTypes.string,
  Link_4: PropTypes.string,
  Branding_src: PropTypes.string,
  Link_1: PropTypes.string,
  text131: PropTypes.string,
  image_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  Link_2: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  image_src: PropTypes.string,
  Branding_alt: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
