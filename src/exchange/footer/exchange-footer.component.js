// @flow
import React from "react";
import * as styles from "./exchange-footer.styles";

const ExchangeFooter = () => (
  <section className={styles.exchangeFooter}>
    <div className="columns">
      <div className="column">
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam
                  condimentum luctus turpis.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam
                  condimentum luctus turpis.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small>{" "}
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam
                  condimentum luctus turpis.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <strong>John Smith</strong>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Example"
                />
              </figure>
            </div>
            <div className="media-content">
              <figure className="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Example"
                />
              </figure>
            </div>
            <div className="media-right">
              <figure className="image is-64x64">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt="Example"
                />
              </figure>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default ExchangeFooter;
