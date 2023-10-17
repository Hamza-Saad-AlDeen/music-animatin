function TopSingers() {
   return (
      <div className="w-100 h-100 d-flex flex-wrap flex-row justify-content-evenly">
         {
            ["", "", "", "", "", ""].map(
               e =>
                  <div
                     className="
                                position-relative
                                text-center
                                my-3
                                "
                     style={{
                        width: "250px",
                        height: "250px",
                        margin: "1rem 5rem",
                        fontSize: "65px",
                        border: "10px rgb(51 65 85) solid",
                        borderRadius: "50%",
                        lineHeight: "190px",
                        backgroundColor: "white",
                        backgroundImage: "url(assets/Landing (web) - 1-image5.png)"
                     }}
                  >
                     {e}
                  </div>
            )
         }
      </div>
   );
}

export default TopSingers;