import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

export const MyTabs = ({ tabsList, style }) => {
    return <Tabs variant='enclosed' style={style}>
        <TabList>
            {tabsList.map((item, index) =>
                <Tab key={index}>{item}</Tab>
            )}
        </TabList>

        <TabPanels>
            <TabPanel>
                <p>one!</p>
            </TabPanel>
            <TabPanel>
                <p>two!</p>
            </TabPanel>
            <TabPanel>
                <p>three!</p>
            </TabPanel>
        </TabPanels>
    </Tabs>
}