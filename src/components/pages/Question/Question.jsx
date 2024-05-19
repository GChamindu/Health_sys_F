import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./question.css";

export default function Question() {
  return (
    <div className="question">
      <div className="q-up">
        <div className="q-up-content">
          <div className="q-header">
            <h1 className="first-header">Question about </h1>
            <h1 className="header-2">Booking & Charging</h1>
          </div>
          <div className="q-span">
            <span className="span-one">
              It is a log established fact that a reader will be distracted by
              the readable
            </span>
            <span className="span-two">
              Content of a page when looking at its layout
            </span>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="q-down">
        <div className="down-up">
          <div className="set-padding">
            <select
              class="form-select form-select-lg mb-3"
              aria-label="Large select example"
            >
              <option selected>Can i change my Appointment ?</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
<br />
        <div className="down-center">
          <div className="down-center-up">
          <div className="set-green">
              <select
                class="form-select form-select-lg mb-3"
                aria-label="Large select example"
                style={{
                  color: "#3b647e",
                }}
              >
                <option selected>
                  Do you offer refunds for unused subscription periods ?
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>

          <br />
          <div className="down-center-down">
            <div class="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
              <span>
                Once you have subscribed,there is no refund option. You can
                cancel your subscription to prevent
              </span>{" "}
              <br />
              <span>the plan from automatically renewing</span>
            </div>
          </div>
        </div>
        <div className="down-bottom">
          <select
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
          >
            <option selected>Do I have full access with any plan?</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
          >
            <option selected>Can I try it for free?</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <select
            class="form-select form-select-lg mb-3"
            aria-label="Large select example"
          >
            <option selected>What payment methods do you accept?</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
}
