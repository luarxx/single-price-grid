import "./home.css";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 sm:mt-20 mx-auto max-w-screen-sm">
      <div className="coluna_1 col-span-2 rounded-t-lg ">
        <div className="pl-10 pt-10">
          <h1 className="">Join our community</h1>
          <h2 className="pt-5">30-day, hassle-free money back guarantee</h2>
          <p className="pt-5">
            Gain access to our full library of tutorials along with expert code
            reviews.<br></br> Perfect for any developers who are serious about
            honing their skills.
          </p>
        </div>
      </div>
      <div className="coluna_2 row-start-2 sm:rounded-bl-lg">
        <div className="pl-10 pt-8 pb-10">
          <h3 className="text-white">Monthly Subscription</h3>
          <p className="pt-2 text-white flex items-center ">
            <span className="pr-2">$29</span>per month
          </p>
          <p className="pt-1 text-white">Full access for less than $1 a day</p>
          <button className="w-80 sm:w-60 text-white mt-10 px-5 py-3 rounded-md ">
            Sign Up
          </button>
        </div>
      </div>
      <div className="coluna_3 row-start-3 sm:row-start-2 sm:rounded-br-lg">
        <div className="pl-10 pt-8 pb-1">
          <h3>Why Us</h3>
          <p className="pt-2 text-white text-left">
            Tutorials by industry experts
            <br />
            Peer & expert code review
            <br />
            Coding exercises
            <br />
            Access to our GitHub repos
            <br />
            Community forum
            <br />
            Flashcard decks
            <br />
            New videos every week
          </p>
        </div>
      </div>
    </div>
  );
}
