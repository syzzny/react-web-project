import { createContext, useState } from "react";

// const DataContext = React.createContext();
// React 안에있는 createContext 함수를 따로 불러와서 사용
const DataContext = createContext();

const Dataprovider = ({children})=>{
    const [artlist, setArtlist] = useState(
        [
            {
                title: "[기획전] 마우리치오 카텔란",
                start_date: new Date(2023, 0, 30),
                finsh_date: new Date(2023, 6, 16),
                place: "국립 현대미술관",
                img: `${process.env.PUBLIC_URL}/assets/img/artwork01.jpg`,
            },
            {
                title: "[기획전] 조선의 백자, 군자지향",
                start_date: new Date(2023, 1, 28),
                finsh_date: new Date(2023, 3, 15),
                place: "서울 시립미술관",
                img: `${process.env.PUBLIC_URL}/assets/img/artwork02.jpg`,
            },
            {
                title: "[기획전] 마우리치오 카텔란",
                start_date: new Date(2023, 2, 30),
                finsh_date: new Date(2023, 7, 20),
                place: "리움 미술관",
                img: `${process.env.PUBLIC_URL}/assets/img/artwork03.jpg`,
            },
            {
                title: "[기획전] 조선의 백자, 군자지향",
                start_date: new Date(2023, 3, 5),
                finsh_date: new Date(2023, 9, 6),
                place: "국립 현대미술관",
                img: `${process.env.PUBLIC_URL}/assets/img/artwork04.jpg`,
            },
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