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
    description: 'One Africa Currency',
    imageSrc: 'https://res.cloudinary.com/dp7civtid/image/upload/v1692079822/AFRO_TOKEN_ndqlai.png', // Replace with the actual image source
    url: 'https://zingypay.com/zingypay/payment-form/', // Replace with the actual URL
  },
  {
    name: 'ÇNB',
    description: 'Çannabis',
    imageSrc: 'https://res.cloudinary.com/dp7civtid/image/upload/v1695474886/CNB_bvlwjy.png', // Replace with the actual image source
    url: 'https://zingypay.com/zingypay/payment-form/', // Replace with the actual URL
  },
  {
    name: 'LIFE',
    description: 'Life Support Token',
    imageSrc: 'https://res.cloudinary.com/dp7civtid/image/upload/v1691841326/life-800x600_m22ylm.png', // Replace with the actual image source
    url: 'https://zingypay.com/zingypay/payment-form/', // Replace with the actual URL
  },
  {
    name: 'NATURE',
    description: 'Replenish The Earth',
    imageSrc: 'https://res.cloudinary.com/dp7civtid/image/upload/v1690650612/nature_pzqdla.png', // Replace with the actual image source
    url: 'https://zingypay.com/zingypay/payment-form/', // Replace with the actual URL
  },
  {
    name: 'OSO',
    description: 'Osomba Token',
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

  renderBankTransferCard() {
    return (
      <div className="bank-transfer-card">
        <h1>Limited Time Offer For 1,000 People.</h1>
        
        <p>
          We're raising funds to develop and launch the mobile versions of our apps, and to facilitate the eventful launch of the Afro Smartchain on the 1st of January.
          <br /><br />
          <strong>Investment Opportunity:</strong> As a special offer, you can double or tripple your investment in the US Cannabis industry. Another company is launching a Cannabis sauce company. Invest today.
          <br /><br />
          You can also test our app at <a href="https://test-app.zingypay.com" target="_blank" rel="noopener noreferrer">https://test-app.zingypay.com</a>.
          </p>
        
          <h3>Double or Tripple your Money within Time.</h3>
        <h4>Payment Details</h4>
        <p>Invest to earn 30% within 30 days, or 100% within 90 days, or 200% within 150 days, or 300% within 180 days.</p>
        <p>
          Reference: Payment for CNB
          <br />
          Amount: ₦10,000.00 for ₦20,000.00/90days, or   ₦13,000.00/30days.
          <br />
          Amount: ₦15,000.00 for ₦30,000.00/90days, or  ₦19,500.00/30days.
          <br />
          Amount: ₦20,000.00 for ₦40,000.00/90days, or  ₦26,000.00/30days.
          <br />
          Amount: ₦25,000.00 for ₦50,000.00/90days, or  ₦30,000.00/30days.
          <br />
          Amount: ₦30,000.00 for ₦60,000.00/90days or ₦9,000.00/30days. 
          <br />
          Chat with us using the widget if you intend to invest more than ₦30,000.00
        </p>
        <p>Invest at least ₦5,000.00 to get ₦7,500.00 within 30 days, or ₦10,000.00 within 90 days if you're one of the persons who will like to invest in the US Cannabis Supply Chain; make payments via the following details.</p>
        <h4>Pay Online</h4>
        <a
          href="https://paystack.com/pay/zingypay"
          className="pay-online-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pay Online
        </a>

        <h4>Account 01 Details</h4>
        <p>
          Bank Name: Moniepoint MfB
          <br />
          Account Name: ZINGYPAY.COM
          <br />
          Account Number: 6349360169
        </p>

        <h4>Account 02 Details</h4>
        <p>
          Bank Name: Wema Bank PLC
          <br />
          Account Name: CHEAPBUY MARKETPLACE FLWFLW
          <br />
          Account Number: 7812154849
        </p>

        <p>
          After making the payment, please use the chat widget at the bottom-right corner of the page, or send an email to admin@zingypay.com with proof of payment and your public key, and our team will process your AFRO Token purchase.
        </p>
      </div>
    );
  }

  renderTokenCards() {
    return tokenData.map((token, index) => (
      <div className="token-card" key={index}>
        <a href={token.url} target="_blank" rel="noopener noreferrer">
          <img src={token.imageSrc} alt={`${token.name} Token`} width="150" height="150" />
        </a>
        <p>{`Buy ${token.name}`}</p>
        <p>{token.description}</p> {/* Render the description */}
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="so-back islandBack">
          <div className="island">
            <div className="island__sub">
              <div className="token-cards-container">
                {this.renderTokenCards()}
              </div>
            </div>
          </div>
        </div>

        {/* Embedded YouTube Video */}
        <div className="video-card">
          <iframe
            width="640"
            height="360"
            src="https://www.youtube.com/embed/Xq5dGBvOB6g"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>

        {/* Announcement */}
        <div className="announcement">
          <p>
            
          </p>
        </div>

         {/* Bank Transfer Card */}
        <div className="so-back islandBack">
          <div className="island">
            <div className="island__sub">
              {this.renderBankTransferCard()}
            </div>
          </div>
        </div>

        <div className="HomePage__black">
          <div className="so-back">
            <div className="HomePage__lead">

              <h2 className="HomePage__lead__title">
                Trade on the <Link to="/exchange/">Stellar Decentralized Exchange</Link>
              </h2>

              <p className="HomePage__lead__summary">
                Afro Smartchain will be launching on the 1st of January, 2024.
                Get ready for an exciting journey!
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
            <AssetList d={this.props.driver} limit={10} />
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
      </div>
    );
  }
}

HomePage.propTypes = {
  driver: PropTypes.instanceOf(Driver).isRequired,
};


