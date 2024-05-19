import "./service.css";
import { BiSolidCaretRightCircle } from "react-icons/bi";

export default function Service() {
  return (
    <div className="services">
      <div className="q-header">
        <h1 className="first-header"> About our </h1>
        <h1 className="header-2">Service & Charging</h1>
      </div>
      <div className="service-content">
        <div className="b-color">
          <div className="s-1">
            <div className="s-image">
              <img
                src="https://www.echannelling.com/images/quickAccess/homecare.svg"
                alt=""
                className="s-image"
              />
              <p className="s-tt">Homecare</p>
            </div>
            <div className="s-details">
              <p className="s-paragraph">
                This service is for assistance in monitoring COVID 19 positive
                asymptomatic and mildly symptomatic patients, who have been
                deemed fit for home quarantine by the government healthcare
                services.
              </p>
            </div>
          </div>
        </div>

        <div className="b-color">
          <div className="s-3">
            <div className="s-image">
              <img
                src="	https://www.echannelling.com/images/quickAccess/orderMedicine.svg"
                alt=""
                className="s-image"
              />
              <p className="s-tt">Medicine</p>
            </div>
            <div className="s-details">
              <p className="s-paragraph">
                Select your preferred pharmacy, order your prescription medicine
                online and have it delivered straight to your home.
              </p>
            </div>
          </div>
        </div>

        <div className="b-color">
          <div className="s4">
            <div className="s-image">
              <img
                src="	https://www.echannelling.com/images/quickAccess/labTest.svg"
                alt=""
                className="s-image"
              />
              <p className="s-tt">Lab Test</p>
            </div>
            <div className="s-details">
              <p className="s-paragraph">
                eChanneling now enables you to get all your laboratory tests
                done from home and have the reports delivered right to your
                doorstep!
              </p>
            </div>
          </div>
        </div>

        <div className="b-color">
          <div className="s5">
            <div className="s-image">
              <img
                src="https://www.echannelling.com/images/quickAccess/claim_refund.svg"
                alt=""
                className="s-image"
              />
              <p className="s-tt">Claim Fund</p>
            </div>
            <div className="s-details">
              <p className="s-paragraph">
                Couldn't utilize the service of the professional you channeled?
                Don't fret, your money will be transferred back to you!
              </p>
            </div>
          </div>
        </div>

        <div className="b-color">
          <div className="s-6">
            <div className="s-image">
              <img
                src="https://www.echannelling.com/images/quickAccess/concierge_service.svg"
                alt=""
                className="s-image"
              />
              <p className="s-tt">Concierge Service</p>
            </div>
            <div className="s-details"></div>
            <p className="s-paragraph">
              Give your loved ones the best health care with no waiting time and
              cashless pay. The concierge provides personalized healthcare at a
              premium price.
            </p>
          </div>
        </div>

        <div className="b-color">
          <div className="s-2">
            <div className="s-image">
              <img
                src="https://www.echannelling.com/images/quickAccess/eco_delivery.svg"
                alt=""
                className="s-image"
              />
              <p className="s-tt">Echo Channeling</p>
            </div>
            <div className="s-details">
              <p className="s-paragraph">
                Eco Channelling provides doorstep delivery in an eco-friendly
                manner.
              </p>
            </div>
          </div>
        </div>

        <div className="s7">
          <div className="s-image">
            see more
            <BiSolidCaretRightCircle />
          </div>
          <div className="s-details"></div>
        </div>
      </div>
    </div>
  );
}
