import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Modal from "react-modal";
import "../home/featured/Featured.css";
import BreastCancer from "../images/breast-cancer.gif"
import Ovary from "../images/ovary.gif"

const Services1 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Select a test", "Breast Cancer", "PCOS"];
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [bsData, setBsData] = useState({});
  const [pcosData, setPcosData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showInputs, setShowInputs] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === "Breast Cancer") {
      setShowInputs(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowModal(true);
      }, 0);
    } else {
      setShowInputs(false);
    }
    setFormData({});
    setErrors({});
    setBsData({});
    setPcosData({});
  };
  useEffect(() => {
    if (showModal && selectedOption === "Breast Cancer" && showInputs && !bsData.prediction) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal, selectedOption, showInputs, bsData.prediction]);

  console.log(bsData, "let us see the bug")
  const handleSubmit = async (e) => {
    console.log(formData, "testing")
    e.preventDefault();
    let error = {};
    if (selectedOption === "Breast Cancer") {

      for (let i = 0; i < 6; i++) {
        let value = formData[`input${i}`];
        if (!value) {
          error[`input${i}`] = "This field is required";
        } else if (isNaN(parseFloat(value))) {
          error[`input${i}`] = "Invalid input. Please enter a number.";
        }
      }

    } else if (selectedOption === "PCOS") {
      for (let i = 0; i < 10; i++) {
        let value = formData[`input${i}`];
        if (!value) {
          error[`input${i}`] = "This field is required";
        } else if (isNaN(parseFloat(value))) {
          error[`input${i}`] = "Invalid input. Please enter a number.";
        }
      }
    } else {
      error["form"] = "Please select an option";
    }
    setErrors(error);
    if (!Object.keys(error).length) {
      setIsLoading(true);
      let Values = Object.values(formData);
      if (selectedOption === "Breast Cancer") {
        axios
          .post("/breastcancer", {
            Values,
          })
          .then((res) => {
            setBsData(res.data);
            setTimeout(() => {
              setIsLoading(false);
              setShowModal(true);
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (selectedOption === "PCOS") {
        axios
          .post("/pcos", {
            Values,
          })
          .then((res) => {
            setPcosData(res.data);
            setTimeout(() => {
              setIsLoading(false);
              setShowModal(true);
            }, 2000);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      setFormData({
        input0: "",
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        ...(selectedOption === "PCOS" && {

          input6: "",
          input7: "",
          input8: "",
          input9: "",
        }),
      });

    }
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div>
      <div className="ImgBox">
        {selectedOption === "Breast Cancer" &&
          <div className="TestImg">
            <img src={BreastCancer} alt="" srcset="" className="BreastCancerImg" />
          </div>
        }
        {selectedOption === "PCOS" &&
          <div className="TestImg">
            <img src={Ovary} alt="" srcset="" className="OvaryImg" />
          </div>
        }
      </div>
      <div className="FormDiv">
        <form onSubmit={handleSubmit} >
          <select
            value={selectedOption}
            onChange={(e) => handleOptionChange(e.target.value)}
            style={{
              backgroundColor: '#fff',
              color: '#333',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              width: '100%',
              maxWidth: '200px',
              fontSize: '1rem',
              marginBottom: '20px',
              marginRight: "10px"
            }}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {selectedOption === "Breast Cancer" &&
            showInputs &&
            [...Array(6)].map((_, i) => (
              <div key={i}>
                <label htmlFor={`input${i}`} title={`Enter mean ${["Radius (5-25)", "Texture (5-35)", "Perimeter (5-155)", "Area (0-1400)", "Smoothness (0-1)", "Compactness (0-1)"][i]} - ${["Numeric", "Numeric", "Numeric", "Numeric", "Numeric", "Numeric"][i]}`}
                  style={{ marginRight: "10px" }}>
                  {`Mean ${["Radius", "Texture", "Perimeter", "Area", "Smoothness", "Compactness"][i]}`}
                </label>
                <input
                  type="text"
                  name={`input${i}`}
                  value={formData[`input${i}`]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))
          }
          {selectedOption === "PCOS" &&
            [...Array(10)].map((_, i) => (
              <div key={i}>
                <label
                  style={{ marginRight: "10px" }}
                  htmlFor={`input${i}`}
                  title={`Enter ${["Age (18-45)", "Weight (in kg)", "Height (in cm)", "Blood Group", "Pulse Rate (30-120 bpm)", "Breaths/Min (12-22)", "Cycle Length (in days)", "Marital status in Years (0 indicating single)", "Pregnancy status (0- indicates 'NO', 1- indicates 'YES')", "Number of Abortions (0-8)"][i]} - ${["Numeric", "Numeric", "Numeric", "Blood Group", "Numeric", "Numeric", "Numeric", "Numeric", "Numeric", "Numeric"][i]}`}
                >
                  {`${["Age", "Weight", "Height", "Blood Group", "Pulse Rate", "Breaths/Min", "Cycle Length", "Marital status", "Pregnancy status", "Number of Abortions"][i]}`}
                </label>
                {i === 3 ? (
                  <select
                    name={`input${i}`}
                    value={formData[`input${i}`]}
                    onChange={handleChange}
                    style={{
                      backgroundColor: '#fff',
                      color: '#333',
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                      width: '100%',
                      maxWidth: '200px',
                      fontSize: '1rem',
                      marginBottom: '20px',
                      marginRight: "10px"
                    }}
                  >
                    <option value="">Select a blood group</option>
                    <option value="11">A+</option>
                    <option value="12">A-</option>
                    <option value="13">B+</option>
                    <option value="14">B-</option>
                    <option value="15">O+</option>
                    <option value="16">O-</option>
                    <option value="17">AB+</option>
                    <option value="18">AB-</option>
                  </select>
                ) : (
                  <input
                    type="text"
                    name={`input${i}`}
                    value={formData[`input${i}`]}
                    onChange={handleChange}
                    required
                  />
                )}
                {errors[`input${i}`] && (
                  <div className="error">{errors[`input${i}`]}</div>
                )}
              </div>
            ))}

          {/* {errors["form"] && <div className="error">{errors["form"]}</div>} */}
          <button type="submit" >Submit</button>
        </form>
      </div>
      {isLoading && <div className={isLoading ? "loading" : ""}></div>}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={customStyles}
      >
        {selectedOption === "Breast Cancer" && showInputs && !bsData.prediction && (
          <div>
            <h4>You can opt for this test only if you are a medical professional for better results</h4>
            <p></p>
          </div>
        )}
        {selectedOption === "Breast Cancer" && bsData.prediction && (
          <div>
            <h2>Breast Cancer Prediction</h2>
            <p>Prediction: {bsData.prediction === "Benign" ? "You are non-cancerous. No further action is needed, but please continue with regular check-ups." : "You have a malignant tumor. It is important to get further tests and treatment as soon as possible."}</p>
          </div>
        )}
        {selectedOption === "PCOS" && pcosData.prediction && (
          <div>
            <h2>PCOS Prediction</h2>
            <p>Prediction: {pcosData.prediction === "Yes" ? "You have PCOS. It is important to consult with your doctor to manage your symptoms and prevent long-term health complications." : "You do not have PCOS. However, if you experience symptoms in the future, it is important to consult with your doctor."}</p>
          </div>
        )}
        {((selectedOption === "Breast Cancer" && bsData.prediction) || (selectedOption === "PCOS" && pcosData.prediction)) && (
          <button onClick={() => setShowModal(false)}>Ok</button>
        )}
      </Modal>


    </div>
  );
};
export default Services1;
