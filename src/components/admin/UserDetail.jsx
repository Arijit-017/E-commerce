const UserDetail = () => {
    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                {/* text  */}
                <h1 className="text-xl text-[#9a52ff] font-bold">All Users</h1>
            </div>

            {/* table  */}
            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border border-collapse sm:border-separate border-[#e3d2ff] text-[#8447ff]">
                    <tbody>
                        <tr>
                            <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-[#e3d2ff] text-slate-700 bg-slate-100 font-bold">
                                S.No.
                            </th>
                            <th scope="col" className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-[#e3d2ff] text-slate-700 bg-slate-100">
                                Location Name
                            </th>
                            <th scope="col" className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-[#e3d2ff] text-slate-700 bg-slate-100">
                                Action
                            </th>
                            <th scope="col" className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-[#e3d2ff] text-slate-700 bg-slate-100">
                                Action
                            </th>
                        </tr>
                        <tr className="text-[#9a52ff]">
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-[#e3d2ff] text-slate-500">
                                1.
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-[#e3d2ff] text-slate-500 first-letter:uppercase">
                                {'name'}
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-[#e3d2ff] text-green-500 cursor-pointer">
                                Edit
                            </td>
                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-[#e3d2ff] text-red-500 cursor-pointer">
                                Delete
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UserDetail;
