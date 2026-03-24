import React from "react";
import { clients } from "../data/clients";

import "./Clients.css";

function Clients(){
    return(
        <section className="client-data">
            <ul>
                {clients.map((client) => (
                    <li key={client.id} className={!client.logo ? "empty" : ""}>
                    {client.numbering && <span>{client.numbering}</span>}
                    {client.logo && <img src={client.logo} alt="" />}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Clients;