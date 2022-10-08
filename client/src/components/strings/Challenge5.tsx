import React from "react";

function Challenge5() {
  const [input, setInput] = React.useState<string>(
    "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const decode = (msg: string) => {
    return msg.split(',').filter(x => x === x.trim() && !x.toLowerCase().includes('dog') && !x.toLowerCase().includes('bark') && !x.toLowerCase().includes('bone') && x.length % 5 !== 0 && (x.charCodeAt(0) + x.charCodeAt(x.length - 1) % 2 !== 0) && x.charAt(Math.floor(x.length / 2) + 1) !== 'e' && x.split('').filter(y => y.match(/[a-z]/g)).length % 2 === 0 && x.split('').filter(y => y.match(/[A-Z]/g)).length >= 2 && x.indexOf('S') > 0)
  };

  return (
    <section className="flex justify-center w-screen">
      <div className="block p-6 rounded-lg shadow-2xl bg-white w-4/5 mt-20 border border-slate-300">
        <h2 className="text-center text-3xl text-blue-600 mb-5">
          Challenge #5
        </h2>
        <p className="text-center text-2xl text-blue-600 mb-5">
          Best cat-themed pun of a TV show title ever award
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
                  So, I may have bitten off a bit more than I can chew this
                  week. Will you help me out?{" "}
                </p>
                <br />
                <p>
                  My friend has invented a 'Best Cat-Themed Pun of a TV Show
                  Title Ever' award and I promised I'd help her with the
                  submissions. The problem is, I didn't realize just how much
                  help she would need whittling down the submissions to the
                  finalists. Between work, family, and Huntober, I just don't
                  have time to get the final list over to her. Can you help?
                </p>
                <br />

                <p>Here is a comma-separated list of the submissions:</p>
                <br />

                <pre className="overflow-x-auto bg-slate-800 text-yellow-300 text-sm py-5 px-3">
                  <code>
                    <span >
                      "The Pawshank Redemption,Caturday Night Live,Only
                      Meworders in the Building,I Love Mewcy, Mewsummer
                      Meowders,The Golden Purrs, Purrlandia ,Meowpardy,
                      Meowstery Science Theater: Purrthousand, Amewican Idol,Dog
                      City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of
                      Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis
                      and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The
                      Catbert Purrport,The Pawffice,The Dogford Files,
                      Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD
                      Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder
                      She Wrote,Paw &amp; Order,30 Dog, Pawvatar: The Last
                      Meowbender,The Pawnight Show,Arrested
                      Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage
                      Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw
                      Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales,
                      Game of Bones, House of the Meowgon,The Purrlight
                      Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of
                      Meower, The KIT Crowd,Strangepaw Things ,Catman: The
                      Animeowted Series,Meowter Call Saul,Mewgerton
                      ,Obark,Mewphoria,La Casa de Pawpel,Rick &amp;
                      Meowty,Amewican Purror Story,
                      Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog
                      Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone
                      Mirror,Barks and Recreation,How to Get Away with
                      Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie
                      Meowse Doghouse,Mewster Rogers' Neighborhood"
                    </span>
                  </code>
                </pre>
                <br />

                <p>
                  There are some very strict rules that the pun submissions had
                  to follow. I need to know which of these cat puns made the
                  cut. I promise tomorrow we'll get back to decoding our secret
                  message, and coincidentally, I'm pretty sure{" "}
                  <strong>
                    the number of these puns that met the criteria
                  </strong>{" "}
                  will match a key sequence value we'll need tomorrow. Isn't
                  that lucky?
                </p>
                <br />

                <h5 id="heading-here-are-the-rules-these-submissions-had-to-follow">
                  Here are the rules these submissions had to follow:
                </h5>
                <br />

                <ul>
                  <li>
                    No empty spaces at the start or end of the submission{" "}
                    <em>
                      (my friend can't stand when people don't follow
                      directions)
                    </em>
                  </li>
                <br />

                  <li>
                    Cannot contain 'dog', 'bark', or 'bone' in any combination
                    of upper or lower case{" "}
                    <em>(canine trolling can't be stopped)</em>
                  </li>
                <br />

                  <li>
                    Total length of pun cannot be a multiple of 5{" "}
                    <em>(this includes spaces and punctuation)</em>
                  </li>
                <br />

                  <li>
                    The sum of the charCodes of the 1st and last characters must
                    be odd{" "}
                    <em>
                      (my friend's a bit of a character, but she's great once
                      you get to know her)
                    </em>
                  </li>
                <br />

                  <li>
                    Character directly after the middle of the string may not be
                    'e'{" "}
                    <em>
                      (For example the character to check in even-length string{" "}
                      <code>center</code> is <code>t</code>, for odd an example
                      would be <code>weird</code> -&gt; 'r')
                    </em>
                  </li>
                <br />

                  <li>
                    Must have an even number of lowercase letters (do not count
                    punctuation or spaces as letters)
                  </li>
                <br />

                  <li>
                    Must have at least 2 capital letters{" "}
                    <em>
                      (honestly, I'm a little worried these requirements are too
                      strict)
                    </em>
                  </li>
                <br />

                  <li>
                    Must not contain a capital 'S'{" "}
                    <em>
                      (definitely too strict. What does S even have to do with
                      cat puns?)
                    </em>
                  </li>
                </ul>
                <br />

                <p>
                  Send me a DM of the puns that made the cut{" "}
                  <a target="_blank" href="https://twitter.com/huntoberTweets">
                    on Twitter
                  </a>
                  , and go ahead and save the final count to use tomorrow.
                  Thanks!
                </p>
                <br />

                <h3 id="heading-it-still-looks-like-gibberish">
                  🕵️ It still looks like Gibberish
                </h3>
                <br />

                <p>
                  If you've started trying to decode this week's message you may
                  be wondering if you're on the right track. Chances are if it
                  still looks like someone mashed the keyboard, you're doing
                  A-OK! Feel free to compare notes!
                </p>
                <br />

                <div className="embed-wrapper">
                  <div className="embed-loading">
                    <div className="loadingRow"></div>
                    <div className="loadingRow"></div>
                  </div>
                  <a
                    className="embed-card"
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
            {decode(input).map(x => (
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
 {x}
</p>
            ))}
           
          </div>
        </form>
      </div>
    </section>
  );
}
export default Challenge5;
