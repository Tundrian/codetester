import React from "react";

function Challenge3() {
  const [input, setInput] = React.useState<string>(
    "AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters"
  );
  const [keys, setKeys] = React.useState<string[]>([
    "A",
    "_",
    "K",
    "E",
    "Y",
    "!",
  ]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const decode = (msg: string) => {
    return msg;
  };

  return (
    <section className="flex justify-center w-screen">
      <div className="block p-6 rounded-lg shadow-2xl bg-white w-4/5 mt-20 border border-slate-300">
        <h2 className="text-center text-3xl text-blue-600 mb-5">
          Challenge #2
        </h2>
        <p className="text-center text-2xl text-blue-600 mb-5">
          A slight detour on the road to Friday
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
                  This week our challenges all deal with Strings! As one of
                  JavaScript's primitive data structures, Strings are critical
                  to understand and manipulate. Feel free to use JavaScript's
                  built-in{" "}
                  <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#instance_methods"
                  >
                    String methods
                  </a>
                  .
                </p>
                <br />
                <h2 id="heading-the-challenge-day-3">
                  🏆 The Challenge - Day 3
                </h2>
                <br />
                <p>
                  <strong>
                    This week we will be discovering hidden messages by
                    manipulating a given string. Your solutions should account
                    for any non-empty string. On Friday we'll combine our
                    functions to decode a message.
                  </strong>
                </p>
                <br />
                <p>
                  Yesterday you should have come up with a few specific
                  characters that we'll need today. Let's refer to those as our
                  key characters.
                </p>
                <br />
                <p>
                  We need to create a function that will{" "}
                  <strong>
                    replace any instances of any of the key characters in a
                    given string with an empty space (' ')
                  </strong>
                  . See below for an example with an example set of key
                  characters.{" "}
                </p>
                <br />
                <p>
                  <strong>
                    Remember to keep your code somewhere safe, as you'll need it
                    to decrypt this week's message!
                  </strong>
                </p>
                <br />
                <pre className="overflow-x-auto bg-slate-800 text-yellow-300 text-sm py-5 px-3">
                  <code>
                    example key characters -&gt;{" "}
                    <span className="">'A'</span>,
                    <span className="">'_'</span>,
                    <span className="">'K'</span>,
                    <span className="">'E'</span>,
                    <span className="">'Y'</span>,
                    <span className="">'!'</span>
                    <br /><br />
                    <span className="">
                      'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'
                    </span>
                    <br /><br />
                    <span className="hljs-comment">
                      // implement key replacement function
                    </span>
                    <br />
                    <span className="className">
                      ' you could think this is hard to read before replacing
                      the key characters'
                    </span>
                  </code>
                </pre>
                <br />
                <p>
                  <em>
                    You didn't think I'd just give you the key for the week and
                    let you skip{" "}
                    <a
                      target="_blank"
                      href="https://blog.barbaralaw.me/huntober-2022-day-1"
                    >
                      Day 2
                    </a>
                    , did you?
                  </em>
                </p>
                <br />
                <h2 id="heading-thank-you-for-playing-along">
                  🕵️ Thank You for playing along!
                </h2>
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
          </div>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Output
            </label>
            {/* <input type="password" className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
          placeholder="Password" /> */}
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
          {/* <button type="submit" className="
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Submit</button> */}
        </form>
      </div>
    </section>

    // <form action="#" className="flex justify-center align-middle bg-slate-400 w-full">
    //   <div className="flex justify-center w-full flex-wrap">
    //     <label htmlFor="strInput" className="text-gray-800 text-2xl pt-2 w-full text-center">Encrypted message</label>
    //     <input name="strInput"  id="strInput" className="border border-slate-600 w-3/4 h-10 mb-5 text-center" type="text" value={input} onChange={handleChange} />
    //   </div>
    // </form>
    // <h2 className="text-center text-3xl text-slate-700 my-5 w-full">Output</h2>
    // <p className="w-full h-10 bg-green-700 text-white text-center py-2">test</p>
  );
}
export default Challenge3;
