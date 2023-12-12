const InfoSlip = () => {
    const RandomComponent = getRandomComponent();
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleCloseClick = () => {
      const coinCount = location?.search ? parseInt(new URLSearchParams(location.search).get('coins'), 10) : 0;
  
      // Navigate back to GalleryMachine with the updated coin count
      navigate(`/galleryMachine?coins=${coinCount}`);
    };
  
    // Get the updated coin count from the query parameter
    const updatedCoinCount = location?.search ? parseInt(new URLSearchParams(location.search).get('coins'), 10) : 0;
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Entrance Page</h1>
        <p>info slip</p>
        <RandomComponent />
  
        {/* Close button to navigate back to GalleryMachine */}
        <button onClick={handleCloseClick} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Close
        </button>
      </div>
    );
  };
  const InfoSlip = () => {
    const RandomComponent = getRandomComponent();
    const navigate = useNavigate();
    const location = useLocation();
  
    const handleCloseClick = () => {
      const coinCount = location?.search ? parseInt(new URLSearchParams(location.search).get('coins'), 10) : 0;
  
      // Navigate back to GalleryMachine with the updated coin count
      navigate(`/galleryMachine?coins=${coinCount}`);
    };
  
    // Get the updated coin count from the query parameter
    const updatedCoinCount = location?.search ? parseInt(new URLSearchParams(location.search).get('coins'), 10) : 0;
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Entrance Page</h1>
        <p>info slip</p>
        <RandomComponent />
  
        {/* Close button to navigate back to GalleryMachine */}
        <button onClick={handleCloseClick} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
          Close
        </button>
      </div>
    );
  };
    