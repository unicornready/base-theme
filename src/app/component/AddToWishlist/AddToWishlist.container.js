/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AddToWishlist from './AddToWishlist.component';

export class AddToWishlistContainer extends PureComponent {
    containerFunctions = () => ({
        onClick: this.addToWishlist
    });

    addToWishlist = (id) => {
        console.log(id);
    };

    render() {
        return (
            <AddToWishlist
              { ...this.props }
              { ...this.containerFunctions() }
            />
        );
    }
}

export default AddToWishlistContainer;
