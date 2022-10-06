import React from "react";

function Challenge4() {
  const [input, setInput] = React.useState<string>(
    "   The white space at the beginning of this string doesn't match the whitespace at the end. "
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const decode = (msg: string) => {

    return msg.split('').reverse().join('')
  };

  return (
    <section className="flex justify-center w-screen">
      <div className="block p-6 rounded-lg shadow-2xl bg-white w-4/5 mt-20 border border-slate-300">
        <h2 className="text-center text-3xl text-blue-600 mb-5">
          Challenge #4
        </h2>
        <p className="text-center text-2xl text-blue-600 mb-5">Side quest</p>

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
                  <strong>
                    This week we will be discovering hidden messages by
                    manipulating a given string. Your solutions should account
                    for any non-empty string. On Friday we'll combine our
                    functions to decode a message.
                  </strong>
                </p>
                <br />
                <p>
                  Today's challenge is minor to give you all a bit of a break
                  halfway through the challenge week, but there are a couple of
                  side quests I'm going to throw out for those with extra time
                  on their hands.
                </p>
                <br />
                <p>
                  So far we've swapped out calculator characters, cleaned up
                  after a cat and a preschooler, and placed some spaces. Today
                  is simple! <strong>Given a string, reverse it.</strong> Any
                  details like whitespace, letter casing, or punctuation should
                  be preserved and flipped along with the rest of the string.
                  For example:
                </p>
                <br />
                <pre className="overflow-x-auto bg-slate-800 text-yellow-300 text-sm py-5 px-3">
                  <code>
                    <span >
                      " The white space at the beginning of this string doesn't
                      match the whitespace at the end. "
                    </span>
                    <span className="">// reverse it</span>
                    <span className="">
                      " .dne eht ta ecapsetihw eht hctam t'nseod gnirts siht fo
                      gninnigeb eht ta ecaps etihw ehT "
                    </span>
                  </code>
                </pre>
                <br />
                <h3 id="heading-some-extra-work">🏅 Some extra work</h3>
                <br />
                <p>
                  By now you should have written a function for each day so far.
                  If not, go back and finish those up! Here are some things I'd
                  suggest doing to build a deeper understanding of Strings and
                  their manipulation:
                </p>
                <br />
                <ol>
                  <li>
                    Explain your functions. Practice talking through your code.
                  </li>
                  <br />
                  <li>
                    Check your function, parameter, and variable names. Good
                    code should be clear to follow and should document itself.{" "}
                  </li>
                  <br />
                  <li>
                    Rewrite your functions, taking a different approach. If you
                    used String methods, try looping, and vice versa. Solve the
                    problem via an alternate route and look for pros and cons of
                    each.
                  </li>
                  <br />
                  <li>
                    If you haven't yet, use the 4 functions you have so far (in
                    order, Calculator fix -&gt; Use the Day 2 key to add spaces
                    -&gt; Reverse the string), on our{" "}
                    <a
                      target="_blank"
                      href="https://twitter.com/huntoberTweets/status/1576251846603071488?s=20&amp;t=7DbIxmHG-tlCU98q_0qLhg"
                    >
                      secret message
                    </a>
                    . Compare your answer so far with others!{" "}
                  </li>
                </ol>

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
export default Challenge4;
