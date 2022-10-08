import React from "react";

function Challenge6() {
  const [input, setInput] = React.useState<string>(
    "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
  );

  const [num, setNum] = React.useState<number>(4);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(+e.target.value);
  };

  const decode = (msg: string) => {
    return msg
      .split("")
      .filter((x, i) => (i + 1) % num !== 0)
      .join("");
  };

  return (
    <section className="flex justify-center w-screen">
      <div className="block p-6 rounded-lg shadow-2xl bg-white w-4/5 mt-20 border border-slate-300">
        <h2 className="text-center text-3xl text-blue-600 mb-5">
          Challenge #6
        </h2>
        <p className="text-center text-2xl text-blue-600 mb-5">
          Start Putting it Together
        </p>

        <div className="accordion mb-5" id="accordionExample">
          <div className="accordion-item bg-white border border-gray-200">
            <h2 className="accordion-header mb-0" id="headingOne">
              <button
                className="
            accordion-button
            relative
            flex
            items-center
            w-full
            py-4
            px-5
            text-base text-gray-800 text-left
            bg-white
            border-0
            rounded-none
            transition
            focus:outline-none
          "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Description
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body py-4 px-5">
                <p>
                  Thanks for all your help yesterday, you guys are cool cats!
                  Today's challenge will have you removing decoy characters from
                  a string.
                </p>
                <br />
                <p>
                  <strong>
                    Write a function that, when given a non-empty string, and
                    positive integer X, removes every Xth character from the
                    string
                  </strong>
                  . Counting should begin from the first element in the string
                  and should continue in that pattern until the end of the
                  string.{" "}
                </p>
                <br />

                <p>For example:</p>
                <br />

                <pre  className="overflow-x-auto bg-slate-800 text-yellow-300 text-sm py-5 px-3">
                  <code>
                    <span className="hljs-comment">
                      // For the string below and 4
                    </span>
                    <span className="hljs-string">
                      "Thies its H alltowe!en!? Th#is Tis GHalolowmeen$!"
                    </span>
                    <span className="hljs-comment">// remove decoy strings</span>
                    <span className="hljs-string">
                      "This is Halloween! This is Halloween!"
                    </span>

                    <span className="hljs-comment">
                      // For the string below and 5
                    </span>
                    <span className="hljs-string">
                      "The LBachyelor^ is ma tehrrib le tpelev!isioOn sh8ow."
                    </span>
                    <span className="hljs-comment">
                      // remove decoy strings and preach 🙌
                    </span>
                    <span className="hljs-string">
                      "The Bachelor is a terrible television show."
                    </span>
                  </code>
                </pre>
                <br />

                <h2 id="heading-start-putting-it-together">
                  🧩 Start Putting it Together
                </h2>
                <br />

                <p>
                  Tomorrow is day 7 of 7, and you'll be receiving a final
                  function assignment as well as the task of putting all of your
                  other functions from the week together in sequence.
                </p>
                <br />

                <p>
                  If you like, you can get started on piecing together your
                  functions today. Please remember that the functions must be
                  performed on the provided string <strong>in order</strong>. If
                  you do things out of order it will get messy very fast.
                </p>
                <br />

                <p>
                  It is totally up to you how you want to organize your code.
                  Some may choose to create a master decoding function that
                  calls each helper function as needed, while others may prefer
                  to chain the function calls separately. Up to you.
                </p>
                <br />

                <p>
                  <em>
                    Note: Day 2 and Day 5 were side-projects, and their real
                    purpose was to provide you with inputs for this final
                    decoding. Day 2's key characters and Day 5's final count
                    will be used as arguments for Day 3 and Day 6's functions,
                    respectively.
                  </em>
                </p>
                <br />

                <p>Here's the encrypted string for the week, enjoy!</p>
                <br />

                <pre  className="overflow-x-auto bg-slate-800 text-yellow-300 text-sm py-5 px-3">
                  <code>
                    <span className="hljs-keyword">const</span> encryptedMsg ={" "}
                    <span className="hljs-string">
                      "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50iv#ylhgmQfs"
                    </span>
                  </code>
                </pre>
                <br />

                <p>
                  <strong>
                    Do any of you have any guesses about what the message could
                    be? I think it'll stay unsolved until tomorrow, but who
                    knows?
                  </strong>
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
        <form>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Encrypted message
            </label>
            <input
              name="strInput"
              id="strInput"
              type="textarea"
              className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-gray-200 bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp"
              value={input}
              onChange={handleChange}
            />
            <label
              htmlFor="numberInput"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Input Number
            </label>
            <input
              name="numberInput"
              id="numberInput"
              type="number"
              className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-gray-200 bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp"
              value={num}
              onChange={handleNumChange}
            />
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Output
            </label>
            <p
              className="form-control block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-lime-500 bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
bg-opacity-20
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              {decode(input)}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Challenge6;
