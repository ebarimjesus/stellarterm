/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import isElectron from 'is-electron';
import images from '../../images';
import { getCurrentYear } from '../../lib/helpers/Format';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExchangePage: this.props.location.pathname.includes('exchange'),
        };
    }

    componentDidUpdate(prevProps) {
        const currentPath = this.props.location.pathname;

        if (currentPath !== prevProps.location.pathname) {
            this.setState({ isExchangePage: currentPath.includes('exchange') });
        }
    }

    render() {
        const { isExchangePage } = this.state;

        return (
            <div className="so-back Footer">
                <div className="so-chunk Footer_chunk">
                    <div className="Footer_links">
                        <div className="Footer_social_links">
                            <a
                                className="Footer_link"
                                href="https://twitter.com/El-Fort"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={images['icon-twitter']} alt="twitter" />
                                @El-Fort
                            </a>
                            <a href="mailto:support@el-fort.xyz" className="Footer_link">
                                <img src={images['icon-email']} alt="email" />
                                support@el-fort.xyz
                            </a>
                            <a href="mailto:partners@el-fort.xyz" className="Footer_link">
                                <img src={images['icon-email']} alt="email" />
                                partners@el-fort.xyz
                            </a>
                        </div>

                        <div className="Footer_social_links">

                            {!isElectron() && <Link
                                className="Footer_link"
                                to="/download/"
                            >
                                <img src={images['icon-download']} alt="support" />
                            Download
                            </Link>}

                            <a
                                className="Footer_link"
                                href="https://web.yanhub.xyz/ping/ELFORT/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={images['icon-support']} alt="support" />
                            Support Center
                            </a>
                        </div>
                    </div>
                    <div className="Footer_disclaimer_block">
                        <div className="Footer_disclaimer_column">
                            <div className="Footer_disclaimer">
                                Cryptocurrency assets are subject to high market risks and volatility. Past performance
                                is not indicative of future results. Investments in blockchain assets may result in loss
                                of part or all of your investment. LifeTrader does NOT endorse ANY asset on the Stellar
                                network. Please do your own research and use caution.
                            </div>

                            {isExchangePage ? (
                                <div className="Footer_disclaimer">
                                    This product includes software developed at EL-FORT GLOBAL SERVICES LTD. El-Fort Charts Copyright (с) {getCurrentYear()}{' '}
                                    <a href="https://web.yanhub.xyz/" target="_blank" rel="noopener noreferrer">
                                        El-Fort
                                    </a>
                                    , Inc.
                                </div>
                            ) : null}
                        </div>
                        <div className="Footer_disclaimer_column">
                            <span className="Footer_version">v{window.stBuildInfo.version}</span>
                            <div className="Footer_privacy_links">
                                <Link to="/privacy/" className="Footer_link">
                                    Privacy Policy
                                </Link>
                                <Link to="/terms-of-use/" className="Footer_link">
                                    Terms of use
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {
    location: PropTypes.objectOf(PropTypes.any),
};

export default withRouter(props => <Footer {...props} />);
