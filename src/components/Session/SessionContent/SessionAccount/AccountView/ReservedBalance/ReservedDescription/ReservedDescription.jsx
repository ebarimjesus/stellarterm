import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="reserved_description">
        <p>
            The Stellar network requires accounts to maintain a minimum balance. A 1 XLM minimum balance is required
             with an additional requirement 0.5 XLM for each entry in the account such as a trustline or offer.
             You can read more about this on the{' '}
            <a
                href="https://developers.stellar.org/docs/glossary/minimum-balance/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Stellar developer docs.
            </a>
        </p>
        <p>
            Each entry (asset accepted, offer, signer) increases your minimum balance by 0.5 XLM. Additionally,
            LifeTraderenforces a 0.5 XLM of extra minimum balance in an attempt to make sure your account can still
            make transactions without going below the network minimum balance requirements.
        </p>
        <p>
            <strong>To decrease your minimum balance</strong>, you can remove an existing offer or{' '}
            <Link to="/account/addTrust/">unaccept an asset</Link>. If you would like to close your Stellar account and withdraw assets somewhere else you can use{' '}
            <a href="https://merge.lobstr.co/" target="_blank" rel="noopener noreferrer">
                Account Merge tool
            </a>
            .
        </p>
    </div>
);
