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
    <section>
    <h2 className="text-center text-3xl text-cyan-400 ">Challenge #1</h2>
    <form action="#" className="flex w-screen justify-center align-middle bg-slate-400">
      <div className="flex justify-center w-full flex-wrap">
        <label htmlFor="strInput" className="text-gray-800 text-2xl pt-2 w-full text-center">Encrypted message</label>
        <input name="strInput"  id="strInput" className="border border-slate-600 w-3/4 h-10 mb-5 text-center" type="text" value={input} onChange={handleChange} />
      </div>
    </form>
    <p className="w-screen h-10 bg-green-700 text-white text-center py-2"><span className="font-bold text-gray-200 text-lg">Output: </span>{decode(input)}</p>
  </section>
  )
}
export default Challenge1