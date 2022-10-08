import React from "react";

function Challenge7() {
  const [input, setInput] = React.useState<string>(
    "'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const decode = (msg: string) => {
    console.log('A'.charCodeAt(0), 'Z'.charCodeAt(0), 'a'.charCodeAt(0), 'z'.charCodeAt(0))

    return msg.split('').map(x => !x.match(/[a-zA-Z]/i) ? x : x === x.toLowerCase() ? String.fromCharCode(90 - (x.charCodeAt(0) - 97)) : String.fromCharCode(122 - (x.charCodeAt(0) - 65))).join('')
  };

  return (
    <section className="flex justify-center w-screen">
      <div className="block p-6 rounded-lg shadow-2xl bg-white w-4/5 mt-20 border border-slate-300">
        <h2 className="text-center text-3xl text-blue-600 mb-5">
          Challenge #7
        </h2>
        <p className="text-center text-2xl text-blue-600 mb-5">
          Weekly Challenge
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
                  Oooh, yeah! Here it is, the final function you'll need in your
                  string-decoding arsenal this week. Today's challenge might not
                  be too trying after all the others, but you never know!{" "}
                </p>
                <br />
                <p>
                  Today you'll need to{" "}
                  <strong>
                    create a function that swaps each letter of the alphabet for
                    its opposite
                  </strong>
                  . A letter's opposite is one that, if the alphabet were
                  flipped Z-A, would be the same number of letters in, and which
                  would also have the opposite case.
                </p>
                <br />

                <p>Examples:</p>
                <pre  className="overflow-x-auto bg-slate-800 text-yellow-300 text-sm py-5 px-3">
                  <code>
                    <span className="hljs-string">'A'</span>{" "}
                    <span className="hljs-comment">
                      // first letter of the alphabet, uppercase
                    </span>
                    <br />
                    <span className="hljs-string">'z'</span>{" "}
                    <br />
                    <br />
                    <span className="hljs-comment">
                      // last letter of the alphabet, lowercase
                    </span>
                    <br />
                    <span className="hljs-string">'p'</span>{" "}
                    <br />
                    <br />
                    <span className="hljs-comment">
                      // 16th letter of the alphabet, lowercase
                    </span>
                    <br />
                    <span className="hljs-string">'K'</span>{" "}
                    <br />
                    <br />
                    <span className="hljs-comment">
                      // 16th letter from *end* of alphabet, uppercase
                    </span>
                    <br />
                    <span className="hljs-string">
                      'vCZNKOV: 0 MFNYVI LI KFMXGFZGRLM XSZMTVH'
                    </span>
                    <br />
                    <br />
                    <span className="hljs-comment">
                      // function replaces letters with opposites
                    </span>
                    <br />
                    <span className="hljs-string">
                      'Example: 0 number or punctuation changes'
                    </span>
                  </code>
                </pre>
                <br />

                <p>
                  <em>
                    Do me a favor and try to solve it a couple of different ways
                    to see which you preferred and why
                  </em>
                  .
                </p>
                <br />

                <h2 id="heading-put-it-all-together">🧩 Put it all Together</h2>
                <br />

                <p>
                  Finally! We have every function needed to decode the
                  gobbledygook I shared a week ago! Some of you already figured
                  it out yesterday (bravo!), but let's pretend you didn't.
                </p>
                <br />

                <p>
                  <strong>Please use the daily functions,</strong>{" "}
                  <strong>
                    <em>in order,</em>
                  </strong>{" "}
                  <strong>to decode the week's secret message</strong>.{" "}
                  <strong>
                    Then, when you feel good about your result, go ahead and
                    tweet the string with no explanation and #huntober2022, you
                    earned it.
                  </strong>
                </p>
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

                <p>Two things to note:</p>

                <br />
                <ol>
                  <li>
                    It's very important that the functions are called in the
                    order they were given (e.g. Day 1 first, Day 7 last), as any
                    deviation could throw things far out of whack
                  </li>
                  <li>
                    Day 2 and Day 5 weren't designed to be part of this overall
                    decoder. The <strong>answers</strong> you got on those days
                    should be used as inputs for Days 3 &amp; 6 respectively
                  </li>
                </ol>
                <h2 id="heading-what-now">👏 What now?</h2>
                <br />
                <p>
                  Please feel free to share your answers at each step, your
                  code, feelings about the challenges, etc. as you please! I
                  only ask that any spoilers have a little warning in case
                  anyone wants to come in fresh later.
                </p>
                <br />
                <p>
                  I'm torn on if I should share my code or not, as I went mostly
                  brute force with this and the code is that of the baddie that
                  I am.{" "}
                  <em>
                    Let me know in the comments what you think I should do.
                  </em>
                </p>
                <br />
                <p>
                  If you really want to go wild, see if you can reverse engineer
                  an <em>encoding</em> sequence. A solution that fits any given
                  string, key characters, and decoy sequence might not be as
                  easy as it appears...
                </p>
                <br />
                <h3 id="heading-come-back-tomorrow-for-week-2-day-1">
                  Come back tomorrow for Week 2 - Day 1!
                </h3>
                <br />
                <p>It's gonna be fun 🤓 </p>
                <br />

                <div className="embed-wrapper">
                  <div className="embed-loading">
                    <div className="loadingRow"></div>
                    <div className="loadingRow"></div>
                  </div>
                  <a
                    style={{color: "blue", textDecoration:"underline"}}
                    href="https://twitter.com/wo1vin/status/1577413631691853824"
                  >
                    https://twitter.com/wo1vin/status/1577413631691853824
                  </a>
                </div>
                <br />

                <p>
                  <strong>
                    Anyone want to hazard a guess at what the final message will
                    be?
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
export default Challenge7;
