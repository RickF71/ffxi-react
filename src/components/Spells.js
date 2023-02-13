import React from "react";
import { Card, Badge } from "react-bootstrap";
import allSpells from "../data/allSpells";

function Spell({ spell }) {
    return (
        <>
            <Badge pill className=" badge-spell">
            <span style={{fontWeight:"bold"}}>{spell.name} </span>
            <span >{spell.cost} </span>
            <span>{spell.type.charAt(0).toUpperCase()} </span>
            <span>{spell.element.charAt(0).toUpperCase()} </span>
            </Badge>
        </>
    );
}

function Spells(props) {
    const filteredSpells = allSpells.filter(spell => 
        spell.jobs.some(job => job.job1 === props.name)
      );
    console.log(`Spells for ${props.name}`)
    console.log(filteredSpells);
    return (
        <>
            {filteredSpells.map((spell) => (    
                <Spell spell={spell} />
            ))}
        </>
    )
}

export default Spells;