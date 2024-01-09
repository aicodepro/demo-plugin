import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { LoadingIndicatorPage, useNotification } from '@strapi/helper-plugin';
import { Box } from '@strapi/design-system/Box';
import { HeaderLayout, ContentLayout } from '@strapi/design-system/Layout';
import { getTrad } from '../../utils';


function Settings() {
  const { formatMessage } = useIntl();
  const [isLoading, setIsLoading] = ("");

  return (
    <>
      <HeaderLayout
        id='title'
        title={formatMessage({
          id: getTrad("view.settings.title"),
          defaultMessage: "Setting Section",
        })}
      />
      {isLoading ? (
        <LoadingIndicatorPage />
      ) : (
        <ContentLayout>
          <Box
            background='neutral0'
            hasRadius
            shadow='filterShadow'
            paddingTop={6}
            paddingBottom={6}
            paddingLeft={6}
            paddingRight={6}
          >
            This is demo setting page.
          </Box>
        </ContentLayout>
      )}
    </>
  );
}

export default Settings;
