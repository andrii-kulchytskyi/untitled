import React, {useState} from 'react';
import './App.css';
import {Body} from './Body';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {NewComponent} from "./NewComponent";
import {Cars} from "./Cars";
import {Button} from './components/Button';
import {NoviyComponent} from './NoviyComponent';

const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


function App() {
    const myFirstSubscriber = (subscriber: string) => {
        return console.log(subscriber)
    }
    const mySecondSubscriber = (subscriber: string) => {
        return console.log(subscriber)
    }

    const onClickHandler = (name: string) => console.log(name)
    const foo1 = (name: number) => console.log(name)

    let [a, setA] = useState(1)
    const plustOnClick = () => {
        setA(++a)
        console.log(a)
    }
    const zeroOnClick = () => {
        setA(a = 0);
    }

    const [filter, setFilter] = useState("All");

    const onClickHandlerMine = (name: string) => {
        setFilter(name);

    }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    if (filter === "Dollars") {
        currentMoney = money.filter((f) =>
            f.banknots === "Dollars"
        )
    }
    if (filter === "RUBLS") {
        currentMoney = money.filter((f) =>
            f.banknots === "RUBLS"
        )
    }
    if (filter === "All") {
        currentMoney = money;
    }

    return (
        <div>
            {currentMoney.map((obj, index) => {
                return (
                    <li key={index}>
                        <span>{obj.number} </span>
                        <span>{obj.value} </span>
                        <span>{obj.banknots} </span>
                    </li>
                )
            })}
            <button onClick={() => onClickHandlerMine("All")}>all</button>
            <button onClick={() => onClickHandlerMine("RUBLS")}>rubles</button>
            <button onClick={() => onClickHandlerMine("Dollars")}>dollars</button>
        </div>
    );
}

export default App;
