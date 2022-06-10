import { Parallax, ParallaxLayer } from "@react-spring/Parallax";
import "./commonstyles.css";
import pr from "./svgs/product.svg";
import DOP from "./images/DOPImage-resized.jpeg";
import INNOVATOR from "./images/INNOVATORImage.jpg";
import aboutus from "./svgs/aboutus.svg";
import advantages from "./svgs/advantages.svg";
import call from "./svgs/call.svg";
import mail from "./svgs/mail.svg";
import productFaqs from "./svgs/productFaqs.svg";
import warning from "./svgs/warning.svg";
import Navbar from "./components/navbar";
import Aboutus from "./components/aboutus";

function App() {
  return (
    <div>
      <Navbar />

      <Parallax pages={9}>
        <ParallaxLayer speed={3} offset={0}>
          <div className="cflex sec1" id="home">
            <h2 className="f1">CNG EDGE DUAL MIXING KIT</h2>
            <a href="#product" className="mp16 btn">
              LEARN MORE
            </a>
          </div>
        </ParallaxLayer>
        
        <ParallaxLayer offset={1} speed={0.4}>
          <div className="sec2 cflex">
            <div className="rflex">
              <h2 className="f2 mp8">PRODUCT</h2>
              <img src={pr} alt="" />
            </div>
            <div className="tleft">
              <p className="f3">
                DIESEL AND CNG MIX CONVERSIONS KIT FOR GLOBAL MARKET FROM USA
                FOR BUS AND TRUCKS
                <br />
                <br />
                Diesel engines operate differently than gasoline engines for
                that reason CNG conversions for diesel engines are different.
                All diesel/CNG systems are considered "duel fuel" or "Co-Fuel"
                systems. This is because diesel engines do not have spark
                Ignitions systems and require a portion of diesel fuel to ignite
                the natural gas in the combustion chamber. The engine is
                actually running on two fuels at the same time. Because natural
                gas is already in diesel form it can easily be mixed with the
                flow of air going into your engine through the intake manifold.
                This natural gas/air mixture is then delivered into the
                combustion chamber where the diesel fuel is injected into the
                combustion chamber at the same time and then ignited by the
                diesel fuel.
              </p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1.5}>
          <div className="sec3 cflex">
            <div className="rflex">
              <h2 className="f2 mp8">PRODUCT FAQs</h2>
              <img src={productFaqs} alt="" />
            </div>
            <div className="cardWrapper tleft">
              <div className="card1">
                <h2 className="f2 ">
                  How will adding CNG to my diesel engine save me money and
                  extend my Run-time?
                </h2>
                <p className="f3 ">
                  1. Your diesel engine will actually run on a portion of
                  natural gas and that natural gas will replace a portion of
                  diesel that is normally used to power your engine. Pipeline
                  natural gas averages 43 inr per kg, equivalent of diesel fuel
                  and compressed natural gas averages around . Compare that to
                  diesel at 73 inr per liter and it's easy to see the savings.
                  You save money because you are running on a less expensive
                  fuel. <br /> <br />
                  2. Natural gas is high octane with an octane rating of
                  120-130. When this high octane fuel is ignited it burns hotter
                  than diesel and actually helps to burn up any unused
                  diesel/oxygen that would normally be wasted out the exhaust
                  pipe. Less waste = better efficiency and better efficiency =
                  savings.
                  <br /> <br />
                  3. Because of the high octane rating of natural gas it adds
                  torque to your engine. This added power propels your engine
                  down the road with less effort. Less effort = less fuel used.
                  <br /> <br />
                  4. Running your any diesel engine on 50%-80% pipeline natural
                  gas you will extend your run-time by 50-80%. In a emergency
                  situation where diesel fuel could be limited or rationed that
                  is huge!
                </p>
              </div>
              <div className="cardRow2">
                <div className="card2 ">
                  <h2 className="f2 ">
                    Can I use CNG if I have a diesel particulate filter DPF
                    installed?
                  </h2>
                  <p className="f3">
                    YES! Running CNG will actually help keep your DPF clean and
                    clog free. Because you will be using a much cleaner fuel
                    there is less soot and ash to deposit in your DPF
                  </p>
                </div>
                <div className="card3 ">
                  <h2 className="f2">
                    Will adding natural gas to my diesel harm my engine?
                  </h2>
                  <p className="f3">
                    When adjusted properly running natural gas is actually
                    BETTER for your engine then running diesel alone. Natural
                    gas is a clean burning fuel, diesel is not. When you fuel on
                    natural gas you are running on a cleaner fuel and the result
                    is a cleaner engine. Natural gas helps to burn any unspent
                    fuel and soot that can clog up engine and exhaust
                    components.
                  </p>
                </div>
              </div>

              <div className="card4">
                <h2 className="f2">Is natural gas for vehicles safe?</h2>
                <p className="f3 ">
                  YES.Natural Gas vehicles are actually SAFER than traditional
                  gasoline or diesel vehicles.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={1} offset={3.5}>
          <div className="sec4 cflex">
            <div className="mp8">
              <div className="rflex">
                <h2 className="f2">ADVANTAGES</h2>
                <img src={advantages} class="mp8" alt="" />
              </div>
              <ul className="tleft">
                <li className="f3 mp8">
                  {" "}
                  Engine optimization, at reasonable price{" "}
                </li>
                <li className="f3 mp8"> Increase mileage by 2% </li>
                <li className="f3 mp8"> Decrease pollution by 70-80% </li>
                <li className="f3 mp8">Increase speed by 30% </li>
                <li className="f3 mp8">Increase engine speed by 30% </li>
                <li className="f3 mp8">
                  Fuel savings is greater depending on the mix ratio on diesel
                  to CNG
                </li>
              </ul>

              <div className="rflex">
                <h2 className="f2">CAUTION</h2>
                <img src={warning} class="mp8" alt="" />
              </div>
              <p className="f3">
                Minimum running distance is preferably 8kms so that the CNG and
                fuel mix evenly, to produce optimized mix
              </p>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4.5}>
          <div className="sec5 cflex">
            <div className="rflex">
              <h2 className="f2">VIDEOS</h2>
              <svg
                fill="var(--primary)"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
              >
                <path d="M16 37.85V9.85L38 23.85ZM19 23.85ZM19 32.4 32.45 23.85 19 15.3Z" />
              </svg>
            </div>
            <div className="rflex">
              <iframe
                className="mp8"
                width="400px"
                height="300px"
                src={`https://www.youtube.com/embed/BDknbBUzzVg`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
              <iframe
                className="mp8"
                width="400px"
                height="300px"
                src={`https://www.youtube.com/embed/IyIP532uCSo`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={6} speed={0.4}>
          <div id="about" className="sec6 cflex">
            <div className="rflex">
              <h2 className="f2 rflex">ABOUT US</h2>
              <img src={aboutus} class="mp8" alt="" />
            </div>
            <div className="aCard cflex">
              <h2 className="f3">TECH INNOVATOR</h2>

              <img src={INNOVATOR} className="imgSmall" alt="" />

              <div className="f3">
                <p>
                  JOEL EWELL
                  <br />
                  <br />
                  Owner of Enhanced Technology Installations. <br />
                  Inventor of the award winning Idle Free Heat system. <br />{" "}
                  <br />
                  Salt Lake City Metropolitan Area, Riverton, Utah USA
                </p>
              </div>
            </div>

            <div className="aCard cflex">
              <h2 className="f3">DIRECTOR OF OPERATIONS</h2>
              <img src={DOP} className="imgSmall" alt="" />

              <div className="f3">
                <p>
                  SUDAN KOLAR
                  <br />
                  <br />
                  Senior director, CNG Edge, CEO at Idle free heat
                  <br />
                  <br />
                  Kolar, Karnataka, India
                </p>
              </div>
            </div>
            <div className="rflex">
              <a href="tel:8508095535">
                <img src={call} className="mp8" alt="" />
              </a>

              <a href="mailto:kolarcngedge53@gmail.com">
                <img src={mail} className="mp8" alt="" />
              </a>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={8} speed={0.4}>
          <div id="contact" className="sec7 cflex">
            <div className="rflex">
              <h2 className="f2">CONTACT US</h2>
              <svg
                className="mp8"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
              >
                <path
                  d="M25.75 44 25.25 38.5H23.25Q16.1 38.5 11.05 33.45Q6 28.4 6 21.25Q6 14.1 11.075 9.05Q16.15 4 23.35 4Q26.9 4 29.925 5.275Q32.95 6.55 35.2 8.85Q37.45 11.15 38.725 14.275Q40 17.4 40 21.1Q40 27.8 36.225 34.025Q32.45 40.25 25.75 44ZM23.35 32.85Q24.15 32.85 24.7 32.3Q25.25 31.75 25.25 30.95Q25.25 30.15 24.7 29.6Q24.15 29.05 23.35 29.05Q22.55 29.05 22 29.6Q21.45 30.15 21.45 30.95Q21.45 31.75 22 32.3Q22.55 32.85 23.35 32.85ZM22 26.05H24.5Q24.5 24.8 24.925 23.975Q25.35 23.15 26.7 21.8Q28.05 20.45 28.6 19.325Q29.15 18.2 29.15 16.9Q29.15 14.65 27.625 13.2Q26.1 11.75 23.55 11.75Q21.45 11.75 19.8 12.85Q18.15 13.95 17.35 15.85L19.65 16.8Q20.2 15.5 21.175 14.875Q22.15 14.25 23.4 14.25Q24.9 14.25 25.75 14.975Q26.6 15.7 26.6 16.9Q26.6 17.85 26.05 18.825Q25.5 19.8 24.1 21.25Q22.75 22.65 22.375 23.5Q22 24.35 22 26.05ZM28.25 35.5V38.6Q32.35 35.15 34.675 30.475Q37 25.8 37 21.1Q37 14.9 33.125 10.95Q29.25 7 23.35 7Q17.35 7 13.175 11.175Q9 15.35 9 21.25Q9 27.15 13.175 31.325Q17.35 35.5 23.25 35.5ZM23 22.8Q23 22.8 23 22.8Q23 22.8 23 22.8Q23 22.8 23 22.8Q23 22.8 23 22.8Q23 22.8 23 22.8Q23 22.8 23 22.8Q23 22.8 23 22.8Q23 22.8 23 22.8Z"
                  fill="var(--primary)"
                />
              </svg>
            </div>

            <form onSubmit={"mailto:sri@blk.ink"}>
              <div className="cflex">
                <input
                  type="text"
                  placeholder="FULL NAME"
                  className="fInput mp8"
                />
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="fInput mp8"
                />
                <textarea placeholder="MESSAGE" className="fInput mp8" />
                <input type="submit" value={"SUBMIT"} className="mp8 btn" />
              </div>
            </form>
          </div>
        </ParallaxLayer>
        <Aboutus />
      </Parallax>
    </div>
  );
}

export default App;
