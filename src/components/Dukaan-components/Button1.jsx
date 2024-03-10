export const Button1 = ({btnText}) => {
    return (
        <div className="pl-5 mt-4">
            <button className="bg-gray-300 rounded-3xl p-2">
                <h1 className="text-slate-500 pl-2 pr-2">
                {btnText}
                </h1>
            </button>
        </div>
    )
}