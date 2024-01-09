import React from "react";
import { Tabs, Tab, TabGroup, TabPanels, TabPanel} from "@strapi/design-system/Tabs";
import { Box } from "@strapi/design-system/Box";
import DashBoard from "../../pages/DashBoard";
import Report from "../../pages/Report";
import Setting from "../../pages/Setting";
import { getTrad } from "../../utils";
import { useIntl } from "react-intl";


export const TabBar = () => {
    const { formatMessage } = useIntl();

    return (
        <Box padding={2}>
            <TabGroup label={'tabs'}>
                <Tabs>
                    <Tab>
                        {formatMessage({
                            id: getTrad("TabBar.seo-plugin.label.Tab1"),
                            defaultMessage: "Tab1",
                        })}
                    </Tab>
                    <Tab>
                        {formatMessage({
                            id: getTrad("TabBar.seo-plugin.label.Tab2"),
                            defaultMessage: "Tab2",
                        })}
                    </Tab>
                    <Tab>
                        {formatMessage({
                            id: getTrad("TabBar.seo-plugin.label.Tab3"),
                            defaultMessage: "Tab3",
                        })}
                    </Tab>
                </Tabs>
                <TabPanels>
                    <TabPanel>
                        <Box padding={4} background="neutral0">
                            <DashBoard />
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box padding={4} background="neutral0">
                            <Report />
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box padding={4} background="neutral0">
                            <Setting />
                        </Box>
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </Box>
    );
};
export default TabBar;
