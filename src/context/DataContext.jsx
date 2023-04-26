import { createContext, useState } from "react";

// const DataContext = React.createContext();
// React 안에있는 createContext 함수를 따로 불러와서 사용
const DataContext = createContext();

const Dataprovider = ({children})=>{
    const [artlist, setArtlist] = useState(
        [
            {
                title : "[기획전] 마우리치오 카텔란",
                date : "2023.01.30 - 2023.07.16",
                place : "M1",
                img : `${process.env.PUBLIC_URL}/assets/img/artwork01.jpg`
            },
            {
                title : "[기획전] 조선의 백자, 군자지향",
                date : "2023.01.30 - 2023.07.16",
                place : "아동교육문화센터",
                img : `${process.env.PUBLIC_URL}/assets/img/artwork01.jpg`
            },
            {
                title : "[기획전] 마우리치오 카텔란",
                date : "2023.01.30 - 2023.07.16",
                place : "아동교육문화센터",
                img : `${process.env.PUBLIC_URL}/assets/img/artwork01.jpg`
            },
            {
                title : "[기획전] 조선의 백자, 군자지향",
                date : "2023.01.30 - 2023.07.16",
                place : "아동교육문화센터",
                img : `${process.env.PUBLIC_URL}/assets/img/artwork01.jpg`
            }
        ]
    );

    const value = {
        state : {artlist},
        action : {setArtlist}
    }

    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}

export {Dataprovider}
export default DataContext