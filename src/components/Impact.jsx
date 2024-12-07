//Section about the impact we have made as well as with the assistance of collie lovers
const Impact = () => {
  return (
    <main className="w-full h-full bg-color2 mb-40">
      <h1 className="text-4xl  text-light text-center font-bold py-10">
        Thank you for helping us <span className="text-color1">save</span>{" "}
        lives!
      </h1>
      <div className="flex items-center justify-around">
        <div className="flex flex-col justify-center items-center pb-12">
          <img
            src="https://nateshonoranimalrescue.org/wp-content/uploads/2021/01/White-Adopt-Paw.svg"
            alt=""
            width={100}
          />
          <h1 className="text-4xl  text-light text-center font-bold py-2">69,420</h1>
          <p className="text-light text-xl font-bold">Total Collies Saved</p>
        </div>
        <div className="flex flex-col justify-center items-center pb-12">
          <img
            src="https://nateshonoranimalrescue.org/wp-content/uploads/2021/01/White-Adopt-Paw.svg"
            alt=""
            width={100}
          />
          <h1 className="text-4xl  text-light text-center font-bold py-2">9,001</h1>
          <p className="text-light text-xl font-bold">Animals Saved this Year</p>
        </div>
      </div>
    </main>
  );
};

export default Impact;
