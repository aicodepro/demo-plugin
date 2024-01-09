import React, { memo, useState, useEffect, useReducer } from "react";
import { getTrad } from "../../utils";
import { useIntl } from "react-intl";
import { Grid, GridItem } from "@strapi/design-system/Grid";
import {
    Layout, HeaderLayout,
    ContentLayout,
} from "@strapi/design-system/Layout";
import { Box } from "@strapi/design-system/Box";


const Report = () => {
    return (
        <Box>
            This is Report Page
        </Box>
    );
};

export default memo(Report);
