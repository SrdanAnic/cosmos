const Header = () => {
    return (
        <div className="header_background">
            <div className="container d-flex justify-content-between header ">
                <div className="d-flex flex-column">
                    <div className="title">COSMOS</div>
                    <p className="header_text">Try the best Cosmos-based network explorers Nodes. Guru. Delivered.</p>
                    <button className="account_btn">Create an Account</button>
                </div>
                <div className="">
                    <img className="header_img" src="/images/homepage/dashboardPhone.png" />
                </div>
            </div>
        </div>
    )
}

export default Header