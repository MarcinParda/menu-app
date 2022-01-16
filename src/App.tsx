import React, {useEffect, useState} from 'react';
import './App.scss';
import Menu from "components/Menu";
import {DishData} from "interfaces/globalInterfaces";

export enum PageState {
    Loading = "loading",
    FetchingData = "fetchingData",
    FetchedData = "fetchedData"
}

const App = (): JSX.Element => {

    const [menuItems, setMenuItems] = useState<DishData[] | null>(null);
    const [pageState, setPageState] = useState(PageState.Loading);

    useEffect(() => {
        (async () => {
            setPageState(PageState.FetchingData);
            const data = await fetch('https://pair-programming-test.s3.eu-west-2.amazonaws.com/cuisine.json').then(
                (res) => res.json()
            );
            setMenuItems(data);
            setPageState(PageState.FetchedData);
        })();
    }, []);

    if (pageState !== PageState.FetchedData) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <>
            {menuItems && menuItems.length > 0 ? <Menu menuItems={menuItems} /> : <div>Brak dań</div>}
        </>
    );
}

export default App;
