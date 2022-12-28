import React from 'react'

import PropTypes from 'prop-types'

import Social from './social'

const Footer = (props) => {
  return (
    <>
      <div className="footer-footer">
        <div className="footer-content">
          <div className="footer-information">
            <div className="footer-heading">
              <img
                alt={props.pastedImage_alt}
                src={props.pastedImage_src}
                className="footer-pasted-image"
              />
              <span className="footer-text">{props.text1}</span>
            </div>
            <div className="footer-socials">
              <Social rootClassName="social-root-class-name"></Social>
              <Social
                Insider_src="/playground_assets/pastedimage-k0l6.svg"
                rootClassName="social-root-class-name1"
              ></Social>
              <Social
                Insider_src="/playground_assets/pastedimage-ld65.svg"
                rootClassName="social-root-class-name2"
              ></Social>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <span className="footer-header">{props.Header}</span>
              <a
                href="https://open.spotify.com/show/4GLX3DpZCOgAHsV6SWwj7o?go=1&amp;sp_cid=1a2f9dc2c195ddf4646f77637a80f963&amp;utm_source=embed_player_p&amp;utm_medium=desktop"
                className="footer-link"
              >
                {props.Link}
              </a>
              <a
                href="https://blog.sabedoriajovem.site/"
                className="footer-link1"
              >
                {props.Link1}
              </a>
              <span className="footer-link2">{props.Link2}</span>
            </div>
            <div className="footer-column1">
              <span className="footer-header1">{props.Header1}</span>
              <span className="footer-link3">{props.Link5}</span>
              <span className="footer-link4">{props.Link6}</span>
              <span className="footer-link5">{props.Link7}</span>
            </div>
          </div>
        </div>
        <span className="footer-text1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .footer-footer {
            gap: var(--dl-space-space-threeunits);
            color: white;
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #000000;
          }
          .footer-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-information {
            gap: var(--dl-space-space-unit);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-heading {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-pasted-image {
            width: 150px;
          }
          .footer-text {
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          .footer-socials {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 265px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .footer-links {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            z-index: 15;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .footer-column {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-header {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 30px;
          }
          .footer-link {
            color: #c4c4c4;
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
            text-decoration: none;
          }
          .footer-link:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link1 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
            text-decoration: none;
          }
          .footer-link1:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link2 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link2:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-column1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .footer-header1 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 30px;
          }
          .footer-link3 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link3:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link4 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link4:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-link5 {
            color: rgb(196, 196, 196);
            cursor: pointer;
            font-size: 14px;
            transition: 0.3s;
            line-height: 21px;
          }
          .footer-link5:hover {
            color: rgba(196, 196, 196, 0.5);
          }
          .footer-text1 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            max-width: 1200px;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .footer-footer {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              gap: var(--dl-space-space-twounits);
            }
            .footer-content {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-information {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer-heading {
              gap: var(--dl-space-space-halfunit);
            }
            .footer-pasted-image {
              width: 100px;
            }
            .footer-text {
              font-size: 12px;
              line-height: 18px;
            }
            .footer-socials {
              gap: var(--dl-space-space-halfunit);
            }
            .footer-links {
              gap: var(--dl-space-space-oneandhalfunits);
              width: 100%;
              flex-direction: column;
            }
            .footer-header {
              font-size: 16px;
              line-height: 24px;
            }
            .footer-header1 {
              font-size: 16px;
              line-height: 24px;
            }
          }
          @media (max-width: 479px) {
            .footer-links {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  Link1: 'Nosso blog',
  Link: 'Podcast',
  text1: 'sabedoria para jovens mudar de vida',
  Header1: 'outros links',
  pastedImage_src: '/playground_assets/sabedoria%20%5B2%5D-200h.png',
  pastedImage_alt: 'pastedImage',
  Link7: 'E-book',
  Link2: 'instagram',
  Link5: 'Vida organizada',
  text: '© 2022 Sabedoria jovem. Todos os direitos reservado.',
  Header: 'Link importante',
  Link6: 'Mentoria',
}

Footer.propTypes = {
  Link1: PropTypes.string,
  Link: PropTypes.string,
  text1: PropTypes.string,
  Header1: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  Link7: PropTypes.string,
  Link2: PropTypes.string,
  Link5: PropTypes.string,
  text: PropTypes.string,
  Header: PropTypes.string,
  Link6: PropTypes.string,
}

export default Footer
