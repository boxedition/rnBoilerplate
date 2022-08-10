import React, { useCallback, useEffect, useState } from "react"
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Fonts from "./theme/Fonts";
import NavContainer from "./navigation/container";

const App = () => {
    const [appIsReady, setAppIsReady] = useState(false);
    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();
                // Pre-load fonts
                await Font.loadAsync(Fonts.localFonts);
            } catch (e) {
                console.warn(e)
            } finally {
                // Tell the application to render
                setAppIsReady(true)
            }
        }
        prepare()
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            // This tells the splash screen to hide immediately! If we call this after
            // `setAppIsReady`, then we may see a blank screen while the app is
            // loading its initial state and rendering its first pixels. So instead,
            // we hide the splash screen once we know the root view has already
            // performed layout.
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null
    }

    return (
        <NavContainer callback={onLayoutRootView} />
    )
}

export default App