import React from "react";
import axios from "axios";
import { useState } from "react";

const Table = () => {
    const thStyle = {
        minWidth: "200px",
    };

    const membersUrl = "http://localhost:8000/members";

    const [members, setMembers] = useState([]);

    const getData = () => {
        axios
            .get(membersUrl)
            .then(function (response) {
                setMembers(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div>
            <button onClick={() => getData()}>テーブル構築！</button>
            <br />
            <br />
            <br />
            <table
                border="1"
                style={{ borderCollapse: "collapse", textAlign: "center" }}
            >
                <thead>
                    <tr>
                        <th style={thStyle}>id</th>
                        <th style={thStyle}>名前</th>
                        <th style={thStyle}>年齢</th>
                        <th style={thStyle}>仕事</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((elm) => (
                        <tr>
                            <td>{elm.id}</td>
                            <td>{elm.name}</td>
                            <td>{elm.age}</td>
                            <td>{elm.job}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
