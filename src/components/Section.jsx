const Section = ({ children, title, subtitle }) => {
  return (
    <div className="m-auto my-3 border max-w-3xl px-5 py-3 bg-slate-50 rounded shadow">
      <h2 className="text-center mb-2 font-bold">{title} <span className="text-gray-500 font-semibold block text-md">({subtitle})</span></h2>
      <div className="my-5 flex flex-col">
        {children}
      </div>
    </div>
  )
}
export default Section