import React from "react";

function Challenge2() {
  const [input, setInput] = React.useState<string>(
    "af)|Cz>:CGAHY1_2+(OHYYTM!2vka,&yAlWJ3.r&ZVs4F5&bEa<1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y $YD)q.VmLD-&P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM<Mr9zQ~fKJOBDF&Qjen=d ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&8L7oH, /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?>D5th&Ag/9)7%#uMN=J<h!#prB=:CI;U_.T5*#rb)9q<ht~W<BOmQlmy.<8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR U@4B>+A9Vh62@:&SNKVas5%&N6Oz!s/%7(Pd1xWy#Kv>uqyX=VEyHbe-64|ex^& 2W(gD=>FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^ 4az$?wqtWrRu+1aS9<%I=!xW.:ps f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7>Yr&8|md-X)U=%IpuY)9iymv~ _S^ ,&0|(22&(mIcux_4a196w^FN78kz2kX1k&Psc53d ctbl?Eek!kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&Psc53d ctbl?kX7Ii.QR~M11<T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=>%UH<%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS<Ntoav?m8<Q(1ur3Dpd)(XjY1pE)but>eG@QfEek!$Wx8NRZgmQ5t2 kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6! sVk~=Ts3T>j/ZAS)AKX3zOocGL icK#-x0Eek!yE+2*fz.4&%<>:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V' *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht tilpEek!S"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const decode = (msg: string) => {
    return msg
      .slice(msg.indexOf("c") + 1)
      .replace(/Eek!/g, "")
      .split("")
      .reverse()
      .join("")
      .split("v")
      .map((x) => x[0])
      .join("")
      .slice(1);
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
                  <strong>
                    This week we will be discovering hidden messages by
                    manipulating a given string. Your solutions should account
                    for any non-empty string. On Friday we'll combine our
                    functions to decode a message.
                  </strong>
                </p>
                <br />
                <p>
                  <em>This is awkward...</em> I had a challenge planned for
                  today, but I kept the computer open while I went to water my
                  plants and came back to chaos on the screen. Not to worry,
                  though! I've figured out what happened and we'll fix it today,
                  ready to get back to our main decoding functions tomorrow.
                </p>
                <br />
                <p>
                  It turns out that a cat snuck in the house and decided to do
                  some typing while I was away from my desk. Lucky break though,
                  somehow the last key the cat managed to type was a lowercase
                  'c', and it also somehow managed to be the only lowercase 'c'
                  the cat typed.{" "}
                </p>
                <br />
                <p>
                  If we{" "}
                  <strong>
                    remove everything up to and including that first 'c'
                  </strong>{" "}
                  we'll be at a great starting point! Go ahead and scrap all
                  that cat scratch from the string below.
                </p>
                <br />
                <pre className="overflow-x-auto bg-slate-800 text-yellow-300 text-sm py-5 px-3">
                  <code>
                    <span>
                      "af)|Cz&gt;:CGAHY1_2+(OHYYTM!2vka,&amp;yAlWJ3.r&amp;ZVs4F5&amp;bEa&lt;1r1_nlsR!eA-dOUmgwd2=CE7?ynnl+KQf8lW8u4/Nh1|D7SK2uYz-Y
                      $YD)q.VmLD-&amp;P(lL=:HDMA1!?_R#P,V3bKLqUp_t.X:_dM&lt;Mr9zQ~fKJOBDF&amp;Qjen=d
                      ZAR8ze5g-gj@aZ/I:M:!.IBXLq@vN&amp;8L7oH,
                      /0RFtH+.7%eXtM/mxV7*%0Hj.?FSm.Kh8=@jlUJ_S.ApQzye-xB7ZVA2AwEaxTa_snPX?&gt;D5th&amp;Ag/9)7%#uMN=J&lt;h!#prB=:CI;U_.T5*#rb)9q&lt;ht~W&lt;BOmQlmy.&lt;8EqIlR(Gh~~$zmW;Y$7dn-$bW1jf%PL),krpzE
                      LQwsG;EQ;l:Z;+6#.3)KDA+s#k#YMmUhm% 2KB)GqR
                      U@4B&gt;+A9Vh62@:&amp;SNKVas5%&amp;N6Oz!s/%7(Pd1xWy#Kv&gt;uqyX=VEyHbe-64|ex^&amp;
                      2W(gD=&gt;FT*?tMZO$(+B8uTj,DU2~QST(B|xls=9kzN|:4hXt~:R4|nir,6RN8fg~3!3!^!yWZ)bE@SI.zV5Z%V9Qf_^
                      4az$?wqtWrRu+1aS9&lt;%I=!xW.:ps
                      f).($Qz9s;8:uxVqJN9K$42NG(0=j)wZ&amp;U1oB?v^7WVP6QE6-?L;^aglPd5dHO(L2TT5+$NeK-P;js-UAiWCI7&gt;Yr&amp;8|md-X)U=%IpuY)9iymv~
                      _S^ ,&amp;0|(22&amp;(mIcux_4a196w^FN78kz2kX1k&amp;Psc53d
                      ctbl?Eek!kX7Ii.QR~M11&lt;T!,w^xHVn4^Q=HH4#)=AevEek!ux_4a196w^FN7Eek!8kz2kX1k&amp;Psc53d
                      ctbl?kX7Ii.QR~M11&lt;T!,w^xHVn4^Q=HH4#)=AEek!Eek!cvEek!MABf|bEek!dPLpPhh=&gt;%UH&lt;%/^H;8gSAkhmUCu:K?*jzEek!LYC/:E*RU=|s7jWDf8z7-zFqS&lt;Ntoav?m8&lt;Q(1ur3Dpd)(XjY1pE)but&gt;eG@QfEek!$Wx8NRZgmQ5t2
                      kJd,?_R@%muEJBTdQ0-%mHHW20i8wqMK~Co^w?34ag9idsTeXgfqy4IEek!z7Q?Q)nG~5@~ieY_B=6!
                      sVk~=Ts3T&gt;j/ZAS)AKX3zOocGL
                      icK#-x0Eek!yE+2*fz.4&amp;%&lt;&gt;:RHx/B+IFRG*AK1Hn*PQZpEek!v;ZUzWcJC%lym^:+;GcC!qt@nS5SQEek!ikESbYI#-A.Sv
                      .ksat s'worrEek!Eek!omot Eek!rof rebmeEek!merEek! Eek!ot
                      deeEek!n uoy tahw si enEek!o tsrif siht sedisEek!eb
                      gnirtsbus hcae ni retEek!carahc tsrifEek! eEek!Eek!hT .'V'
                      *esaEek!crewEek!ol* nEek!Eek!o pu Eek!gnirts Eek!siEek!ht
                      tilpEek!S"
                    </span>
                  </code>
                </pre>
                <br />
                <p>
                  Done it? Awesome. Next, it's just a simple matter of undoing
                  what happens when a preschooler dumps a bucket of LEGO blocks
                  on the keyboard. Kids, amiright? You'll want to{" "}
                  <strong>remove all the instances of the word 'Eek!'</strong>{" "}
                  in the remaining string please (case sensitive, of course).
                </p>
                <br />
                <p>
                  Oh, I also forgot that I accidentally{" "}
                  <strong>reversed the whole string</strong> too. Flip it back
                  around after you've dealt with the 'Eek!'s, if you will.
                </p>
                <br />
                <p>
                  It should be looking a lot better now. I left the{" "}
                  <strong>
                    instructions for what to do now at the start of the
                    remaining string
                  </strong>
                  . Do what it says and save the answer somewhere safe for
                  tomorrow's challenge - it's key info.{" "}
                </p>
                <br />
                <p>
                  Thanks for helping clean up this mess! 🧹 See you tomorrow!
                </p>
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
export default Challenge2;
