import React from 'react'

function Challenge3() {
  
  const [input, setInput] = React.useState<string>('AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters')
  const [keys, setKeys] = React.useState<string[]>(['A','_','K','E','Y','!'])
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const decode = (msg: string) => {
    return 
  }


  return (
    <section className="w-screen flex justify-center flex-nowrap align-middle flex-col">
      <h2 className="text-center text-3xl text-slate-700 my-5 w-full">Challenge #2: A slight detour on the road to Friday</h2>
      <form action="#" className="flex justify-center align-middle bg-slate-400 w-full">
        <div className="flex justify-center w-full flex-wrap">
          <label htmlFor="strInput" className="text-gray-800 text-2xl pt-2 w-full text-center">Encrypted message</label>
          <input name="strInput"  id="strInput" className="border border-slate-600 w-3/4 h-10 mb-5 text-center" type="text" value={input} onChange={handleChange} />
        </div>
      </form>
      <h2 className="text-center text-3xl text-slate-700 my-5 w-full">Output</h2>
      <p className="w-full h-10 bg-green-700 text-white text-center py-2">test</p>
    </section>
  )
}
export default Challenge3