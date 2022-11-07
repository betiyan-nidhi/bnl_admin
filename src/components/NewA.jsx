import React from "react";
import './account.css';
function NewAccount() {
  return (
    
      <div className="Account_container h-100 ">
        <div className="Section-name ms-2 pt-2">
          <h1 className="Topic">New Bank Account</h1>
          <p className="Subtopic"> Bank Accounts &gt; New</p>
        </div>
        <div className="Main-container bg-white text-center h-auto d-flex flex-column mx-3 p-4 mb-4 rounded-4">
          <div className="Top-container">
            <div className="Top-container-left">
              <div className="Top-container-left-vertical ">
                <div className="Top-container-left-vertical-left">
                  {/* Label */}
                  <label for="BankName" className="form-label ">
                    Bank Name<span className="red">*</span>
                  </label>
                </div>
                <div className="Top-container-left-vertical-right">
                  {/*Dropdown list*/}
                  <button
                    className="btn  dropdown_button dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Bank
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Action
                      </navLink>
                    </li>
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Another action
                      </navLink>
                    </li>
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Something else here
                      </navLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Top-container-left-vertical">
                <div className="Top-container-left-vertical-left">
                  {/*Label */}
                  <label for="BankNumber" className="form-label ">
                    Account Number<span className="red">*</span>
                  </label>
                </div>
                <div className="Top-container-left-vertical-right">
                  {/*Text-field*/}
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter Account Number"
                    aria-describedby="accountNumber"
                  ></input>
                </div>
              </div>
              <div className="Top-container-left-vertical">
                <div className="Top-container-left-vertical-left">
                  {/* Label*/}
                  <label for="AccountType" className="form-label ">
                    Account Type<span className="red">*</span>
                  </label>
                </div>
                <div className="Top-container-left-vertical-right">
                  {/*Dropdown list*/}
                  <button
                    className="btn  dropdown_button dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Account Type
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Action
                      </navLink>
                    </li>
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Another action
                      </navLink>
                    </li>
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Something else here
                      </navLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Top-container-left-vertical">
                <div className="Top-container-left-vertical-left">
                  {/* Label */}
                  <label for="AccountActive" className="form-label ">
                    Account Active
                  </label>
                </div>
                <div className="Top-container-left-vertical-right">
                  {/*Radio button*/}
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Yes
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="Top-container-right">
              <div className="Top-container-right-vertical ">
                <div className="Top-container-right-vertical-left">
                  {/* Label */}
                  <label for="AccountOpenDate" className="form-label ">
                    Account Open Date<span className="red">*</span>
                  </label>
                </div>
                <div className="Top-container-right-vertical-right">
                  {/*Text-field*/}
                  <input
                    type="date"
                    className="form-control"
                    id="inputDate"
                    aria-describedby="dateofAccountOpening"
                  />
                </div>
              </div>
              <div className="Top-container-right-vertical">
                <div className="Top-container-right-vertical-left">
                  {/* Label */}
                  <label for="IFSCCode" className="form-label ">
                    IFSC Code<span className="red">*</span>
                  </label>
                </div>
                <div className="Top-container-right-vertical-right">
                  {/*Text-field*/}
                  <input
                    type="text"
                    className="form-control"
                    id="inpuIFSCCode"
                    placeholder="Enter IFSC Code"
                    aria-describedby="IFSCCode"
                  />
                </div>
              </div>
              <div className="Top-container-right-vertical">
                <div className="Top-container-right-vertical-left">
                  {/* Label */}
                  <label for="address" className="form-label ">
                    Address
                  </label>
                </div>
                <div className="Top-container-right-vertical-right">
                  <textarea
                    className="form-control"
                    placeholder="Enter Branch Address"
                    id="floatingTextarea"
                  ></textarea>
                </div>
              </div>
              <div className="Top-container-right-vertical mb-2">
                <div className="Top-container-right-vertical-left">
                  {/* Label */}
                  <label for="useForPrinting" className="form-label ">
                    Use for printing
                  </label>
                </div>
                <div className="Top-container-right-vertical-right">
                  {/*Radio button*/}
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions2"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    Yes
                  </label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions2"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="Bottom-container">
            <div className="Bottom-container-top mb-3">
              <h1 className="LWS">
                <u>Link With Software</u>
              </h1>
            </div>
            <div className="Bottom-container-middle">
              <div className="Bottom-container-middle-left">
                <div className="Bottom-container-middle-left-left">
                  {/* Label */}
                  <label for="companyBranch" className="form-label ">
                    Company Branch
                  </label>
                </div>
                <div className="Bottom-container-middle-left-right">
                  {/*Dropdown list*/}
                  <button
                    className="btn  dropdown_button dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Company Branch
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Action
                      </navLink>
                    </li>
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Another action
                      </navLink>
                    </li>
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Something else here
                      </navLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Bottom-container-middle-right">
                <div className="Bottom-container-middle-right-left">
                  {/* Label */}
                  <label for="accountingBranch" className="form-label ">
                    Accounting Branch<span className="red">*</span>
                  </label>
                </div>
                <div className="Bottom-container-middle-right-right">
                  {/*Dropdown list*/}
                  <button
                    className="btn  dropdown_button dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Accounting Bank Account
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Action
                      </navLink>
                    </li>
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Another action
                      </navLink>
                    </li>
                    <li>
                      <navLink className="dropdown-item" href="#">
                        Something else here
                      </navLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="Bottom-container-bottom">
              <button type="button" className="btn btn-success">
                Save
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default NewAccount;