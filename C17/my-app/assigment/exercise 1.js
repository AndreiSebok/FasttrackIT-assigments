import React from 'react';

import "./exercise1.css"

function Search() {

    const list = [
        'Banana',
        'Apple',
        'Orange',
        'Mango',
        'Pineapple',
        'Watermelon',
    ];

    const [filterList, setFilterList] = useState(list);

    const SearchBar = (event) => {

        if (event.value === "") {
    setFilterList(list);
    return;
        }
        const filteredValue = list.filter(
            (item) =>
                item.toLOwercase().indexOf(event.target.value.toLowerCase()) !== -1
        );
        setFilterList(filteredValue);
    };
    return (
        <div className={search.bar}>
            <div>
                Search: <input name={query} type={text} onChange={{handleSearch}} />
            </div>
            [filterList &&
            filterList.map((item, index) => (
            <div key={index}>{item}</div>
            ))}
        </div>

    );
}

export default App;