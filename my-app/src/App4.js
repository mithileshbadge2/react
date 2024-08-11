import React, { useState } from "react";

function App4() {
    return (
        <div>
            <Counter />
        </div>
    )

}

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1)

    const date = new Date()
    date.setDate(date.getDate() + count)

    return (
        <div>
            <div>
                <button>-</button>
                <span>Step:{step}</span>
                <button>+</button>
            </div>
            <div>
                <button>-</button>
                <span>Count:{count}</span>
                <button>+</button>
            </div>

            <p>
                <span>
                    {
                        count === 0 ? "Today is" :
                            count > 0 ? `${count} days from today`
                                : `${count} days ago was`
                    }
                </span>
                <span>{date.toDateString()}</span>
            </p>
        </div>

    )
}

export default App4