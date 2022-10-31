import React from "react";
import axios from "axios";
import { useState } from "react";

const Table = () => {
    const membersUrl = "http://localhost:8000/members";

    const [members, setMembers] = useState([]);

    const getData = () => {
        axios
            .get(membersUrl)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>

            <button onClick={() => getData()}>テーブル構築！</button>
        </div>
    );
};

export default Table;
