import React from "react";
import t from './AppB.module.css';
import MenuAdmin from "./MenuAdmin";
import Order from "./Order";

class AppB extends React.Component {
    render() {
        return (
            <div className={t.AppB}>
                <div className={t.shopblock}>
                    <h1>Магаз</h1>
                </div>

           <Order/>
           <MenuAdmin/>

            </div>
        )
    }
}

export default AppB;