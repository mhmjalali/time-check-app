import React from 'react';
import {Stack} from "expo-router";
import {StatusBar} from "expo-status-bar";
import "../global.css"

const RootLayout: React.FC = () => {
    return (
        <>
            <StatusBar style="light"/>
            <Stack>
                <Stack.Screen name="index" options={{headerShown: false}}/>
            </Stack>
        </>
    );
};

export default RootLayout;