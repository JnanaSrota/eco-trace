import { useState } from "react"

function App(){
  const [fileName, setFileName]= useState("")
  const [previewUrl,setPreviewUrl]= useState("")
  return(
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
      <h1 className="font-bold text-5xl mb-4">EcoTrace</h1>
      <p className="text-slate-400 mb-8">Understand the climate impact of what you buy.</p>
      {/* <button className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition"
      onClick={() =>
        console.log("clicked")
      }>Upload Receipt</button> */}
      <label htmlFor="receipt-upload"
      className="bg-green-500 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition cursor-pointer">Upload Receipt</label>
      <input id="receipt-upload" 
      type="file"
      accept="image/*"
      className="hidden"
      onChange={(event)=>{
      const file=event.target.files?.[0]
      if(!file) return
      setFileName(file.name)
      const url= URL.createObjectURL(file)
      setPreviewUrl(url)
console.log(file)}}/>
      {
      fileName && (
         <p className="mt-4" text-slate-400>{fileName}</p>
    ) }
    {
      previewUrl && (
        <img src={previewUrl}
        alt="Receipt Preview"
        className="mt-6 max-w-sm rounded-xl"/>      )
    }
    </div>
  )
}

export default App
