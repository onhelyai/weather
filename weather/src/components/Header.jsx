import '../styles/Header.css'

function Header(){
    return(
        <div className="header">
            <img src="/assets/images/logo.svg" alt="" />
            <button className='units-button'>
                <img className='imgs' src="/assets/images/icon-units.svg" alt="" />
                Units
                <img className='imgs' src="/public/assets/images/icon-dropdown.svg" alt="" />
            </button>
        </div>
    )
}

export default Header;