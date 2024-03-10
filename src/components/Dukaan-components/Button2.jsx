export const Button2 = ({btnText}) => {
    return (
        <div className="pl-5 mt-4">
            <button className="bg-blue-600 rounded-3xl p-2">
                <h1 className="text-white pl-2 pr-2">
                {btnText}
                </h1>
            </button>
        </div>
    )
}