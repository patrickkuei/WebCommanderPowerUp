import React from 'react'

function HomePage() {

    const handleClick = (e) => {
        e.preventDefault();
        alert("click");
    }

    return (
        <div class="container">
            <div class="row">
                <div class="col border">Hallo world</div>
                <div class="col border">Hallo world</div>
                <div class="col border">Hallo world</div>
                <div class="col border">Hallo world</div>
            </div>
        </div>
    )
}

export default HomePage
