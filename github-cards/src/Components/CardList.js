import React from "react";
import Card from "./Card";
const testData = [
    {name: "Jimmy Tran", company: "Facebook"},
    {name: "DJ Herier", company: "Speedway"},
    {name: "David Williams", company: "KMK Law"}    
]

const CardList = () => {
    return(
        <div>
            {testData.map(profile => <Card {...profile}/>)}
        </div>
    )
}

export default CardList;