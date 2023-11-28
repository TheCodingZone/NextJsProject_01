import { MdOutlineYoutubeSearchedFor } from "react-icons/md"

const Navbar = () => {
  return (
   
      <div className="navContainer">
       
        <div className="title">
            <h3>NEXT JS TUTORIAL</h3>
        </div>

        <div className="rightSection">
        <div className='movies'>Home</div>
        <div className='tvShows'>About Us</div>
        <div className='contactus'>Contact Us</div>
        {/* <div className='search'><MdOutlineYoutubeSearchedFor size='1.3rem'/></div> */}
        </div>
       
      </div>
   
  )
}

export default Navbar
