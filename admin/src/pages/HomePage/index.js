import React, { memo } from 'react';
import pluginId from '../../pluginId';
import TabBar from "../../components/TabBar";
import { Box } from "@strapi/design-system/Box";

const HomePage = () => {
  return (
    <Box>
      <TabBar />
    </Box>
  );
};

export default memo(HomePage);
