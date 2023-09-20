import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Driver from '../../lib/driver/Driver';
import AssetList from '../Common/AssetList/AssetList';
import Sep7Handler from './Sep7Handler/Sep7Handler';
import { SESSION_STATE } from '../../lib/constants/sessionConstants';
import images from '../../images';

const tokenData = [
  {
    name: 'AFRO',
    imageSrc: 'https://res.cloudinary.com/dp7civtid/image/upload/v1692079822/AFRO_TOKEN_ndqlai.png', // Replace with the actual image source
    url: 'https://zingypay.com/zingypay/payment-form/', // Replace with the actual URL
  },
  {
    name: 'LIFE',
    imageSrc: 'https://res.cloudinary.com/dp7civtid/image/upload/v1691841326/life-800x600_m22ylm.png', // Replace with the actual image source
    url: 'https://zingypay.com/zingypay/payment-form/', // Replace with the actual URL
  },
  {
    name: 'NATURE',
    imageSrc: 'https://res.cloudinary.com/dp7civtid/image/upload/v1690650612/nature_pzqdla.png', // Replace with the actual image source
    url: 'https://zingypay.com/zingypay/payment-form/', // Replace with the actual URL
  },
  {
    name: 'OSO',
    imageSrc: 'https://res.cloudinary.com/dp7civtid/image/upload/v1695206993/oso_nwnm4h.png', // Replace with the actual image source
    url: 'https://zingypay.com/zingypay/payment-form/', // Replace with the actual URL
  },
];

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.unsub = this.props.driver.session.event.sub(() => {
      this.forceUpdate();
    });
  }

  componentDidMount() {
    Sep7Handler(this.props.driver);
  }

  componentWillUnmount() {
    this.unsub();
  }

  renderHomePageActions() {
    const state = this.props.driver.session.state;
    if (state !== SESSION_STATE.OUT) {
      return '';
    }

    const signUpLinkClass = 'HomePage__lead__actions__sign-up-button HomePage__lead__actions__button s-button';
    return (
      <div className="HomePage__lead__actions">
        <Link className={signUpLinkClass} to="/signup/">New account</Link>
        &nbsp;
        <Link className="s-button HomePage__lead__actions__button" to="/account/">Log in</Link>
      </div>
    );
  }

  renderTokenCards() {
    return tokenData.map((token, index) => (
      <div className="token-card" key={index}>
        <img src={token.imageSrc} alt={`${token.name} Token`} />
        <p>{`Buy ${token.name}`}</p>
        <a href={token.url}>Buy</a>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="HomePage__black">
          <div className="so-back">
            <div className="HomePage__lead">

              <h2 className="HomePage__lead__title">
                Trade on the <Link to="/exchange/">Stellar Decentralized Exchange</Link>
              </h2>

              <p className="HomePage__lead__summary">
                ZingyTrader is an <a href="https://github.com/zingypay/stellarterm" target="_blank" rel="nofollow noopener noreferrer">
                open source</a> client for the <a href="https://www.stellar.org/" target="_blank" rel="nofollow noopener noreferrer">
                Stellar network</a>.
                <br />
                Send, receive, and <Link to="/exchange/">trade</Link> assets on the Stellar
                network easily with ZingyTrader.
              </p>
              {this.renderHomePageActions()}
            </div>
          </div>
        </div>

        <div className="so-back islandBack HomePage__assetList">
          <div className="island">
            <AssetList d={this.props.driver} limit={6} />
            <Link to="/markets/" className="AssetListFooterAsLink">
              View more assets on the Markets page
              <img src={images['icon-arrow-right-green']} alt="" />
            </Link>
          </div>
        </div>

        <div className="so-back islandBack">
          <div className="island">
            <div className="island__sub">

              <div className="island__sub__division">
                <div className="HomePage__sideBlurb">
                  <p>
                    ZingyTrader is just a client that can be used to
                    access the Stellar Decentralized Exchange. Neither
                    ZingyTrader nor the developers of it are involved with
                    operating the Stellar network.
                  </p>
                  <p>
                    Zingy Trader is developed by Zingypay.com, LLC, the same
                    company that developed the Zingy Ai, Zingy Mart, Etc. The project is 
                    independent of the Stellar Development Foundation.
                  </p>
                </div>
              </div>

              <div className="island__sub__division">
                <div className="HomePage__sideBlurb">
                  <p>
                    ZingyTrader is open source software.
                    To support the project, please{' '}
                    <a href="https://github.com/zingypay" target="_blank" rel="nofollow noopener noreferrer">
                      star the project on GitHub
                    </a>.
                  </p>
                  <p>
                    The project is released under the
                    Apache-2.0 license and is released as is
                    without warranty.
                  </p>
                  <p>
                    ZingyTrader is not a custodian of your assets.{' '}
                    We do not store any tokens, cryptoassets
                    or private keys on your behalf.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="so-back islandBack">
          <div className="island">
            <div className="island__sub">
              {this.renderTokenCards()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  driver: PropTypes.instanceOf(Driver).isRequired,
};


