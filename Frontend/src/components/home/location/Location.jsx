import React, { useState } from "react";
import Heading from "../../common/Heading";
import { location } from "../../data/Data";
import "./style.css";

const Location = () => {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="How it works"
            subtitle="We are making use of the following technologies to implement this project"
          />

          <div className="description">
            <div className="first">
              <h3>
                The model for breast cancer detection mainly works on the
                Logistic Regression:{" "}
              </h3>
              <li>
                This type of statistical model is often used for classification
                and predictive analytics Logistic regression estimates the
                probability of an event occurring, such as voting or didn't
                vote, based on a given dataset of independent variables. Since
                the outcome is a probability, the dependent variable is bounded
                between 0 and 1
              </li>
              <li>
                In logistic regression, a logit transformation is applied to the
                odds-that is, the probability of success divided by the
                probability of failure. This is also commonly known as the log
                odds or the natural logarithm of odds, and this logistic
                function is represented by the following formulae
              </li>
            </div>
            <div className="second">
              <h3>PCOS detection model works on the Random Forest algorithm</h3>
              <li>
                {" "}
                Random Forest is a popular machine learning algorithm that
                belongs to the supervised learning technique. It can be used for
                both Classification and Regression problems in ML It is based on
                the concept of ensemble learning, which is a process of
                combining multiple classifiers to solve a complex problem and to
                improve the performance of the model .
              </li>
              <li>
                As the name suggests, "Random Forestis a classifier that
                contains a number of decision trees on various subsets of the
                given dataset and takes the average to improve the predictive
                accuracy of that dataset. Instead of relying on one decision
                tree, the random forest takes the prediction from each tree and
                based on the majority votes of predictions, and it predicts the
                final output.
              </li>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
