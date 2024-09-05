import React from 'react';
import * as FeatherIcons from 'react-feather';

const IFeather = ({ name, ...props }) => {
    const IconComponent = FeatherIcons[name];

    if (!IconComponent) {
        return null; //                                                                                                                                                               or a default icon
    }

    return <IconComponent {...props} />;
};

export default IFeather;
