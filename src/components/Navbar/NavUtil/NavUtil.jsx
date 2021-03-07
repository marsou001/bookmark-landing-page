import LogoBookmark from '../LogoBookmark/LogoBookmark';

function NavUtil({ isNavActive, icon, handleClick }) {
    return (
        <>
            <div className='logo'>
                <LogoBookmark isNavActive={isNavActive} />
            </div>
            <div className='hamburger-menu'  onClick={handleClick}>
                <img src={icon} alt='' />
            </div> 
        </>
    )
} 

export default NavUtil;