import {useState, useEffect} from 'react'
import {v1 as uuid} from "uuid";
import axios from "axios";

function useFlip(initial = true) {
    const [isFacingUp, setIsFacingUp] = useState(initial);
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard ]
  }

function useAxios(url) {
    const [cards, setCards] = useState([]);

    async function addCard(name=null) {
        if (typeof(name) == 'string') {
            url = `${url}${name}`
        }
        console.log(url)
        const response = await axios.get(url);
        setCards(cards => [...cards, {...response.data, id: uuid() }]);
    }

    return [cards, addCard]
}

export { useFlip, useAxios }