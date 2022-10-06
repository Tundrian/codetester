import React from 'react'

function Challenge1() {
  const [input, setInput] = React.useState<string>("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770.")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const decode = (msg: string) => {
    const matches: string[] = ['O', 'I', 'Z', 'E', 'h', 'S', 'G', 'L', 'B', 'q']
    return msg.split('').map(c => {
     if(matches.includes(c)){
      return matches.indexOf(c)
     }else if( c !== ' ' && Number.isInteger(+c) && +c < matches.length){
      return matches[+c]
     }else{
      return c
     }
    }).join('')
  }

  return (
    <section className="flex justify-center w-screen">
      <div className="block p-6 rounded-lg shadow-2xl bg-white w-4/5 mt-20 border border-slate-300">
      <h2 className="text-center text-3xl text-blue-600 mb-5">Challenge #1</h2>


      <div className="accordion mb-5" id="accordionExample">
        <div className="accordion-item bg-white border border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne">
            <button className="
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
            " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
              aria-controls="collapseOne">
              Description
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div className="accordion-body py-4 px-5">
            <p><strong>This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.</strong></p>
              <br/>
              <p>Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal. </p>
              <br/>
              <p>Below, find the mix-ups that have been made. Note: the confusion happened in <strong>both directions</strong> and was <strong>case-sensitive</strong>.</p>
              <br/>
              <pre>
                <code>
                  <span className="">'0'</span> &lt;-&gt; <span className="">'O'</span>     <span className="">'5'</span> &lt;-&gt; <span className="">'S'</span>
                  <br/>
                  <span className="">'1'</span> &lt;-&gt; <span className="">'I'</span>     <span className="">'6'</span> &lt;-&gt; <span className="">'G'</span>
                  <br/>
                  <span className="">'2'</span> &lt;-&gt; <span className="">'Z'</span>     <span className="">'7'</span> &lt;-&gt; <span className="">'L'</span>
                  <br/>
                  <span className="">'3'</span> &lt;-&gt; <span className="">'E'</span>     <span className="">'8'</span> &lt;-&gt; <span className="">'B'</span>
                  <br/>
                  <span className="">'4'</span> &lt;-&gt; <span className="">'h'</span>     <span className="">'9'</span> &lt;-&gt; <span className="">'q'</span>
                  <br/>
              </code></pre>
              <br/>
              <p>As an example, here is how a string looks before and after the characters are fixed:</p>
              <br/>
              <pre><code><span className="">"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770."</span> 
              <br/>
              <p className="flex flex-wrap">
              <span className="hljs-comment text-blue-700 font-bold">// implement fix function -&gt; </span>
              <span className="">"PRO-TIP #498: IT'S NICE TO SAY HELLO."</span>
              </p>
              <br/><br/>
              </code></pre><p><strong>Please create a function that will fix a given string of this mistake before incalculable damage can be done!</strong></p>
              <br/>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Encrypted message</label>
          <input name="strInput"  id="strInput"  type="textarea" className="form-control
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
            aria-describedby="emailHelp" value={input} onChange={handleChange} />
        </div>
        <div className="form-group mb-6">
          <label className="form-label inline-block mb-2 text-gray-700">Output</label>
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
            <p className="form-control block
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">{decode(input)}</p>
        </div>
        {/* <button type="submit" class="
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
  )
}
export default Challenge1