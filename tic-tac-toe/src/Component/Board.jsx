import { useState } from "react";

function Board(){

    const winnerArr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const [inputs, setInputs] = useState(Array(9).fill(""));
    const [player, setPlayer] = useState(true);

    const winner = calculateWinner();
    let status = ""; 
    if(winner) {
        status = "Winner is " + (player ? "O" : "X");
    } else {
        status = "Next Player is " + (player ? "X" : "O");
    }

    function calculateWinner() {
        for(let i = 0; i < winnerArr.length; i++) {
            const [x, y, z] = winnerArr[i];

            if(inputs[x] && inputs[x] === inputs[y] && inputs[x] === inputs[z]){
                return true;
            } 
        }
        return null;
    }



    const handleInput = (event) => {
        
        if (event.target.className.includes('input-box') === false)
            return;

        if (inputs[event.target.dataset.index] !== "")
           return;

        const copiedArray = inputs.map((input, index) => {
            if(index == event.target.dataset.index) {
                return player ? "X" : "O";
            }

            return input;
        })

        setInputs(copiedArray);
        setPlayer(!player);
    }

    return (
        //flex justify-center pt-40
        <section onClick={handleInput} className="grid grid-cols-3 w-[295px] h-[290px] bg-fuchsia-300 rounded-md">
            {
                inputs.map((input, index) => {
                return <div key={index} data-index={index} className=" input-box w-24 h-24 border border-black rounded-md">{input}</div>})
            }

            <p className ="font-bold ">{status}</p>
        </section>
    )
}

export default Board