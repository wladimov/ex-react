const Books = () => {

    const books = [
        { name: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { name: '1984', author: 'George Orwell' },
        { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
    ];


    return (
        <div>
            <h1>Books</h1>
            <ul>
                {
                    books.map((info) => {
                        console.log(info);
                        return (
                            <li>{info.name} <span>{info.author}</span></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Books