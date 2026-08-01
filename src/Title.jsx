function Title() {
    const isOpen = true;
    
    return (
        <>
            <h1>Library</h1>
            
            {/* ternary expression */}
            <p>Status: {isOpen ? "Open Now" : "Closed"}</p>
        </>
    )
}

export default Title;