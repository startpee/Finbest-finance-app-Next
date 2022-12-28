import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Announcement from '../components/announcement'
import Navbar from '../components/navbar'
import Check from '../components/check'
import Quote from '../components/quote'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Finbest</title>
          <meta name="description" content="Description of the website" />
          <meta property="og:title" content="Finbest" />
          <meta
            property="og:description"
            content="Description of the website"
          />
        </Head>
        <div className="home-header">
          <div className="home-heading">
            <div id="notifcation" className="home-notification">
              <Link href="/">
                <a>
                  <Announcement
                    rootClassName="announcement-root-class-name"
                    className="home-component"
                  ></Announcement>
                </a>
              </Link>
            </div>
            <Navbar></Navbar>
          </div>
          <div className="home-hero">
            <div className="home-content">
              <h1 className="home-title">
                Sabedoria jovem conteúdos para te ajudar despertar a sabedoria.
              </h1>
              <span className="home-caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
              <div className="home-hero-buttons">
                <div className="home-i-o-s-btn">
                  <Image
                    alt="pastedImage"
                    src="/playground_assets/pastedimage-zmzg.svg"
                    className="home-apple"
                    width={16}
                    height={20}
                  />
                  <span className="home-caption1">Podcast</span>
                </div>
                <div className="home-android-btn">
                  <Image
                    alt="pastedImage"
                    src="/playground_assets/pastedimage-ld65.svg"
                    className="home-android"
                    width={18}
                    height={20}
                  />
                  <span className="home-caption2">nosso app</span>
                </div>
              </div>
            </div>
            <div className="home-images">
              <div className="home-column">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-oy26-1500h.png"
                  className="home-pasted-image"
                />
              </div>
              <div className="home-column1">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-5cga-1500h.png"
                  className="home-pasted-image1"
                />
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-c39.svg"
                  className="home-pasted-image2"
                />
              </div>
              <div className="home-column2">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-iqnj.svg"
                  className="home-pasted-image3"
                />
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-06e.svg"
                  className="home-pasted-image4"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home-video">
          <div className="home-content1">
            <div className="home-header1">
              <h2 className="home-text">
                Conteúdos para te dar um direção na sua vida.
              </h2>
            </div>
            <div className="home-video-container">
              <video
                id="QJJqm5cClxk"
                src="https://www.youtube.com/watch?v=bMGz1xP2hYUh?v=MRQ69XeDxVk"
                loop
                muted
                poster="/playground_assets/pastedimage-09r-900w.png"
                autoPlay
                className="home-video1"
              ></video>
              <div className="home-heading-container">
                <div className="home-heading1"></div>
                <div className="home-explore">
                  <span className="home-text01">
                    Acompanhar no youtube-&gt;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-stats">
          <div className="home-stat">
            <span className="home-caption3">200k</span>
            <span className="home-description">
              Lorem ipsum dolor sit ametconsectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-stat1">
            <span className="home-caption4">$3,5 billions</span>
            <span className="home-description1">
              Lorem ipsum dolor sit ametconsectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
          <div className="home-stat2">
            <span className="home-caption5">10.000 +</span>
            <span className="home-description2">
              Lorem ipsum dolor sit ametconsectetur adipiscing
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className="home-sections"></div>
        <div className="home-banner-container"></div>
        <div className="home-pricing">
          <div className="home-content2">
            <div className="home-plans">
              <div className="home-plan">
                <div className="home-top">
                  <div className="home-heading2">
                    <span className="home-text02">Standard</span>
                    <span className="home-text03">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost">
                    <span className="home-text04">Free</span>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-check-list">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button">
                    <span className="home-text05">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-top1">
                  <div className="home-heading3">
                    <span className="home-text06">Plus</span>
                    <span className="home-text07">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost1">
                    <span className="home-text08">$8</span>
                    <span className="home-text09">/month</span>
                  </div>
                </div>
                <div className="home-bottom1">
                  <div className="home-check-list1">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button1">
                    <span className="home-text10">Get Plus</span>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-top2">
                  <div className="home-heading4">
                    <span className="home-text11">Premium</span>
                    <span className="home-text12">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost2">
                    <span className="home-text13">$16</span>
                    <span className="home-text14">/month</span>
                  </div>
                </div>
                <div className="home-bottom2">
                  <div className="home-check-list2">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button2">
                    <span className="home-text15">Get Plus</span>
                  </div>
                </div>
              </div>
              <div className="home-expand">
                <div className="home-overlay">
                  <div className="home-header2">
                    <div className="home-heading5">
                      <span className="home-text16">Expand</span>
                      <span className="home-text17">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.
                      </span>
                    </div>
                    <div className="home-check-list3">
                      <div className="home-check">
                        <svg viewBox="0 0 1024 1024" className="home-icon">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text18">
                          Sed ut perspiciatis unde
                        </span>
                      </div>
                      <div className="home-check1">
                        <svg viewBox="0 0 1024 1024" className="home-icon02">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text19">
                          Quis nostrud exercitation ulla
                        </span>
                      </div>
                      <div className="home-check2">
                        <svg viewBox="0 0 1024 1024" className="home-icon04">
                          <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                        </svg>
                        <span className="home-text20">
                          Duis aute irure dolor intuit
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="home-button3">
                    <span className="home-text21">
                      <span>Contact us</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-help">
            <span className="home-text24">Need any help?</span>
            <div className="home-explore1">
              <span className="home-text25">
                Get in touch with us right away -&gt;
              </span>
            </div>
          </div>
        </div>
        <div className="home-testimonials">
          <div className="home-logo-container">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-idcu.svg"
              className="home-logo"
            />
          </div>
          <div className="home-content3">
            <div id="quotes" className="home-quotes">
              <div className="quote active-quote">
                <Quote rootClassName="quote-root-class-name"></Quote>
              </div>
              <div className="quote">
                <Quote
                  Quote='"Testing these templates is a pleasure."'
                  Title="Developer @ Vista La Vista"
                  Author="Author 2"
                  rootClassName="quote-root-class-name"
                ></Quote>
              </div>
              <div className="quote">
                <Quote
                  Quote='"Wow, awesome works!'
                  Title="Designer @ OhBoy"
                  rootClassName="quote-root-class-name"
                ></Quote>
              </div>
            </div>
            <div className="home-buttons">
              <div id="quote-before" className="home-left">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                </svg>
              </div>
              <div id="quote-next" className="home-right">
                <svg viewBox="0 0 1024 1024" className="home-icon08">
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </div>
            </div>
            <div>
              <DangerousHTML
                html={`<script>
  /*
              Quote Slider - Code Embed
              */

              let current = 1;

              const nextButton = document.querySelector("#quote-next");
              const previousButton = document.querySelector("#quote-before");
              const quotes = document.querySelectorAll(".quote");

              nextButton.addEventListener("click", () => {
              quotes.forEach((quote) => {
              quote.classList.remove("active-quote");
              });
              
              current == quotes.length ? current = 1 : current++
              quotes[current-1].classList.add("active-quote")
              });

              previousButton.addEventListener("click", () => {
              quotes.forEach((quote) => {
              quote.classList.remove("active-quote");
              });

              current == 1 ? current = quotes.length : current--
              quotes[current-1].classList.add("active-quote")
              });
</script>
`}
              ></DangerousHTML>
            </div>
          </div>
        </div>
        <div className="home-f-a-q">
          <div className="home-content4">
            <div className="home-header3">
              <div className="home-tag">
                <span className="home-text26">
                  <span>FAQ</span>
                  <br></br>
                </span>
              </div>
              <div className="home-heading6">
                <h2 className="home-text29">Perguntas frequentes</h2>
              </div>
            </div>
            <div className="home-rows">
              <div className="home-column3">
                <div className="Question">
                  <span className="home-title1">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="Question">
                  <span className="home-title2">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description4">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      tempor incididunt ut labore et dolore magna aliqua.
                      Excepteur sint occaecat
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="home-question2 Question">
                  <span className="home-title3">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
              </div>
              <div className="home-column4">
                <div className="home-question3 Question">
                  <span className="home-title4">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="home-question4 Question">
                  <span className="home-title5">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description7">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </span>
                </div>
                <div className="home-question5 Question">
                  <span className="home-title6">
                    What is sit amet, consectetur adipiscing elit, sed do?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-description8">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>
                      tempor incididunt ut labore et dolore magna aliqua.
                      Excepteur sint occaecat
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-get-started">
          <div className="home-content5">
            <div className="home-heading7">
              <h2 className="home-text36">Nos acompanhe!</h2>
              <span className="home-text37">conselhos para jovens </span>
            </div>
            <div className="home-hero-buttons1">
              <div className="home-i-o-s-btn1">
                <Image
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-zmzg.svg"
                  className="home-apple1"
                  width={16}
                  height={20}
                />
                <span className="home-caption6">Podcast</span>
              </div>
              <div className="home-android-btn1">
                <Image
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ld65.svg"
                  className="home-android1"
                  width={18}
                  height={20}
                />
                <span className="home-caption7">Nosso app</span>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-notification {
            width: 100%;
          }
          .home-component {
            text-decoration: none;
          }
          .home-hero {
            flex: 1;
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0.5;
            display: flex;
            z-index: 20;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .home-title {
            font-size: 44px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 76px;
          }
          .home-caption {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 400;
            line-height: 27px;
          }
          .home-hero-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            z-index: 15;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-i-o-s-btn {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-i-o-s-btn:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-apple {
            width: 16px;
            height: 20px;
          }
          .home-caption1 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-android-btn {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-android-btn:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-android {
            width: 18px;
            height: 20px;
          }
          .home-caption2 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-images {
            gap: var(--dl-space-space-oneandhalfunits);
            right: -210px;
            bottom: -300px;
            margin: auto;
            display: flex;
            overflow: hidden;
            position: absolute;
            transform: rotate(-30deg);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-column {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image {
            width: 240px;
          }
          .home-column1 {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image1 {
            width: 240px;
          }
          .home-pasted-image2 {
            width: 240px;
          }
          .home-column2 {
            gap: var(--dl-space-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-pasted-image3 {
            width: 240px;
          }
          .home-pasted-image4 {
            width: 240px;
          }
          .home-video {
            color: white;
            width: 100%;
            display: flex;
            z-index: 10;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #000000;
          }
          .home-content1 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            width: 640px;
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-video-container {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-video1 {
            width: 100%;
            cursor: pointer;
            overflow: hidden;
            transition: 0.3s;
            border-color: rgba(0, 0, 0, 0);
            border-width: 2px;
          }
          .home-video1:hover {
            opacity: 0.5;
            border-color: #ade2df;
            border-width: 2px;
            border-radius: 8px;
          }
          .home-heading-container {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-explore {
            color: #fff;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-color: #ffffff;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore:hover {
            color: rgba(255, 255, 255, 0.5);
            border-color: rgba(255, 255, 255, 0.3);
          }
          .home-text01 {
            width: Size-XSmall;
          }
          .home-stats {
            width: 100%;
            display: none;
            z-index: 10;
            max-width: 1200px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-stat {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-right-width: 1px;
            border-bottom-width: 1px;
          }
          .home-caption3 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-stat1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-caption4 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description1 {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-stat2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            border-left-width: 1px;
            border-bottom-width: 1px;
          }
          .home-caption5 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-description2 {
            width: 100%;
            font-size: 18px;
            max-width: 350px;
            text-align: center;
            font-family: Poppins;
            line-height: 27px;
          }
          .home-sections {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            max-width: 1200px;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-banner-container {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .home-pricing {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-content2 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-plans {
            width: 100%;
            height: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
          }
          .home-plan {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            border-right-width: 1px;
          }
          .home-top {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text02 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text03 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text04 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-bottom {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .home-button {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text05 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan1 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text06 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text07 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text08 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text09 {
            font-family: Poppins;
          }
          .home-bottom1 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list1 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .home-button1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button1:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text10 {
            font-style: normal;
            font-weight: 500;
          }
          .home-plan2 {
            width: 100%;
            height: 100%;
            display: flex;
            max-width: 300px;
            align-items: flex-start;
            border-color: #dbdbdb;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
            border-right-width: 1px;
          }
          .home-top2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            border-color: #dbdbdb;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text11 {
            font-size: 20px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text12 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-cost2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text13 {
            font-size: 40px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
            line-height: 40px;
          }
          .home-text14 {
            font-family: Poppins;
          }
          .home-bottom2 {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .home-check-list2 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .home-button2 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #ade2df;
          }
          .home-button2:hover {
            background-color: rgba(173, 226, 223, 0.5);
          }
          .home-text15 {
            font-style: normal;
            font-weight: 500;
          }
          .home-expand {
            flex: 0.3;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-overlay {
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: space-between;
            background-image: url('/playground_assets/planbackground.svg');
          }
          .home-header2 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading5 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 256px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text16 {
            color: #ffffff;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text17 {
            color: #c1fffc;
            font-size: 24px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 31px;
          }
          .home-check-list3 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-check {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text18 {
            color: #ffffff;
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon02 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text19 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-check2 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon04 {
            fill: #ffffff;
            width: 18px;
            height: 18px;
          }
          .home-text20 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            font-family: Poppins;
            line-height: 24px;
          }
          .home-button3 {
            width: 100%;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-button3:hover {
            background-color: rgba(0, 0, 0, 0.5);
          }
          .home-text21 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 500;
          }
          .home-help {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: row;
          }
          .home-text24 {
            font-family: Poppins;
          }
          .home-explore1 {
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: flex-start;
            border-width: 0px;
            flex-direction: column;
            padding-bottom: 4px;
            border-bottom-width: 1px;
          }
          .home-explore1:hover {
            color: rgba(0, 0, 0, 0.5);
            border-color: rgba(0, 0, 0, 0.3);
          }
          .home-text25 {
            font-style: normal;
            font-weight: 600;
          }
          .home-testimonials {
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: stretch;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-logo-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            background-color: #375ee0;
          }
          .home-logo {
            width: 25px;
            height: 24px;
          }
          .home-content3 {
            display: flex;
            position: relative;
            align-items: stretch;
            flex-direction: column;
          }
          .home-quotes {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-buttons {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 500px;
            align-self: center;
            margin-top: -55px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left {
            fill: #dbdbdb;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: center;
            border-color: #dbdbdb;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
          }
          .home-left:hover {
            fill: #000;
            border-color: #000;
          }
          .home-icon06 {
            width: 19px;
            height: 19px;
          }
          .home-right {
            fill: #dbdbdb;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: center;
            border-color: #dbdbdb;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
          }
          .home-right:hover {
            fill: #000;
            border-color: #000;
          }
          .home-icon08 {
            width: 19px;
            height: 19px;
          }
          .home-f-a-q {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 16px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #f3f5fa;
          }
          .home-content4 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
          }
          .home-header3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-tag {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: #d6f1f0;
          }
          .home-text26 {
            font-style: normal;
            font-weight: 500;
          }
          .home-heading6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text29 {
            width: 100%;
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
            line-height: 56px;
          }
          .home-rows {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-column3 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-title1 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description3 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-title2 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description4 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question2 {
            border-bottom-width: 0px;
          }
          .home-title3 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description5 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-column4 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-question3 {
            border-right-width: 0px;
          }
          .home-title4 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description6 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question4 {
            border-right-width: 0px;
          }
          .home-title5 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description7 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-question5 {
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-title6 {
            font-size: 18px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-description8 {
            font-family: Poppins;
            line-height: 24px;
          }
          .home-get-started {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            background-color: #c97707;
          }
          .home-content5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
          }
          .home-heading7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text36 {
            color: rgb(193, 255, 252);
            font-size: 64px;
            font-style: normal;
            text-align: center;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-text37 {
            color: rgb(255, 255, 255);
            font-size: 20px;
            text-align: center;
            font-family: Poppins;
            line-height: 30px;
          }
          .home-hero-buttons1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            z-index: 15;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-i-o-s-btn1 {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-i-o-s-btn1:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-apple1 {
            width: 16px;
            height: 20px;
          }
          .home-caption6 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          .home-android-btn1 {
            gap: var(--dl-space-space-halfunit);
            fill: white;
            color: white;
            cursor: pointer;
            display: flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            background-color: #000000;
          }
          .home-android-btn1:hover {
            background-color: rgba(0, 0, 0, 0.75);
          }
          .home-android1 {
            width: 18px;
            height: 20px;
          }
          .home-caption7 {
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex-direction: column;
            }
            .home-content {
              gap: var(--dl-space-space-unit);
              flex: 0 0 auto;
              padding-top: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-title {
              font-size: 50px;
              text-align: left;
              line-height: 58px;
            }
            .home-caption {
              font-size: 16px;
            }
            .home-hero-buttons {
              width: 100%;
            }
            .home-i-o-s-btn {
              flex: 1;
            }
            .home-android-btn {
              flex: 1;
            }
            .home-images {
              left: 0px;
              right: -100px;
              bottom: -325px;
              margin: auto;
            }
            .home-pasted-image {
              width: 200px;
            }
            .home-pasted-image1 {
              width: 200px;
            }
            .home-pasted-image2 {
              width: 200px;
            }
            .home-pasted-image3 {
              width: 200px;
            }
            .home-pasted-image4 {
              width: 200px;
            }
            .home-content1 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-stats {
              padding-top: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-stat {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-bottom: var(--dl-space-space-threeunits);
              border-right-width: 0px;
            }
            .home-caption3 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat1 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-caption4 {
              text-align: center;
              line-height: 32px;
            }
            .home-stat2 {
              gap: var(--dl-space-space-halfunit);
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
              border-left-width: 0px;
            }
            .home-caption5 {
              text-align: center;
              line-height: 32px;
            }
            .home-pricing {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content2 {
              gap: var(--dl-space-space-threeunits);
            }
            .home-overlay {
              width: 100%;
              justify-content: space-between;
            }
            .home-header2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading5 {
              gap: var(--dl-space-space-halfunit);
              max-width: 600px;
            }
            .home-text16 {
              font-size: 18px;
            }
            .home-text17 {
              font-size: 20px;
              line-height: 26px;
            }
            .home-text18 {
              line-height: 21px;
            }
            .home-text19 {
              line-height: 21px;
            }
            .home-text20 {
              line-height: 21px;
            }
            .home-button3 {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-get-started {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content5 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading7 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text36 {
              font-size: 40px;
            }
            .home-text37 {
              font-size: 18px;
            }
          }
          @media (max-width: 767px) {
            .home-title {
              font-size: 40px;
              line-height: 48px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-images {
              bottom: -250px;
            }
            .home-text {
              width: 100%;
              font-size: 32px;
              max-width: 640px;
            }
            .home-video-container {
              gap: var(--dl-space-space-threeunits);
            }
            .home-heading1 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-caption3 {
              font-size: 32px;
            }
            .home-description {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption4 {
              font-size: 32px;
            }
            .home-description1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-caption5 {
              font-size: 32px;
            }
            .home-description2 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-plans {
              gap: var(--dl-space-space-oneandhalfunits);
              display: flex;
            }
            .home-plan {
              max-width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: #ffffff;
            }
            .home-top {
              width: 100%;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading2 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text02 {
              font-size: 18px;
            }
            .home-text04 {
              font-size: 32px;
              line-height: 32px;
            }
            .home-plan1 {
              max-width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: #ffffff;
              border-right-width: 1px;
            }
            .home-top1 {
              width: 100%;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading3 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text06 {
              font-size: 18px;
            }
            .home-text08 {
              font-size: 32px;
              line-height: 32px;
            }
            .home-text10 {
              font-weight: 500;
            }
            .home-plan2 {
              max-width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              border-width: 1px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              border-radius: 16px;
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
              background-color: #ffffff;
              border-right-width: 1px;
            }
            .home-top2 {
              width: 100%;
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading4 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text11 {
              font-size: 18px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
            }
            .home-text13 {
              font-size: 32px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 32px;
            }
            .home-text15 {
              font-weight: 500;
            }
            .home-expand {
              flex: 0 0 auto;
              width: 100%;
              border-radius: 16px;
              background-color: #375ee0;
            }
            .home-overlay {
              align-items: center;
              background-size: contain;
              justify-content: center;
              background-repeat: no-repeat;
              background-position: top right;
            }
            .home-testimonials {
              width: 100%;
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-logo-container {
              padding: 12px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-logo {
              width: 16px;
              height: 16px;
            }
            .home-left {
              display: flex;
            }
            .home-right {
              display: flex;
            }
            .home-f-a-q {
              width: 100%;
            }
            .home-content4 {
              gap: var(--dl-space-space-twounits);
            }
            .home-text26 {
              font-size: 14px;
            }
            .home-text29 {
              font-size: 32px;
              line-height: 44px;
            }
            .home-rows {
              flex-direction: column;
            }
            .home-title1 {
              font-size: 16px;
            }
            .home-get-started {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-title {
              font-size: 33px;
              font-style: normal;
              font-family: Poppins;
              font-weight: 600;
              line-height: 55px;
            }
            .home-hero-buttons {
              width: 100%;
              flex-direction: column;
            }
            .home-i-o-s-btn {
              width: 100%;
            }
            .home-android-btn {
              width: 100%;
            }
            .home-images {
              bottom: -300px;
            }
            .home-pasted-image {
              width: 150px;
            }
            .home-pasted-image1 {
              width: 150px;
            }
            .home-pasted-image2 {
              width: 150px;
            }
            .home-pasted-image3 {
              width: 150px;
            }
            .home-pasted-image4 {
              width: 150px;
            }
            .home-help {
              align-items: center;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-buttons {
              margin-top: -40px;
            }
            .home-left {
              padding: var(--dl-space-space-halfunit);
            }
            .home-right {
              padding: var(--dl-space-space-halfunit);
            }
            .home-hero-buttons1 {
              width: 100%;
              flex-direction: column;
            }
            .home-i-o-s-btn1 {
              width: 100%;
            }
            .home-android-btn1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
