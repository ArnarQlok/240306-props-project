const Garage = () => {
  const cars = [];

  return (
    <div>
      {cars.length > 0 && (
        <>
          <h2>Garage</h2>
          <p>You have {cars.length} cars in your garage</p>
        </>
      )}
    </div>
  );
};

export default Garage;
