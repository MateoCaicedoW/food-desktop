import React from "react";

const TableLayout = ({ children }) => {
    return (
        <div className="bg-white w-full rounded-lg shadow overflow-y-auto">
            <table className="w-full rounded-lg">
                {children}
            </table>
        </div>
    )
}

const TableHeader = ({ children }) =>{

    return (
        <thead className="bg-black text-white">
            <tr>
                {children}
            </tr>
        </thead>
    )
}

const TableHeaderTH= ({ children}) => {
    return (
        <th className={`py-3 px-5 flex-shrink-0 text-start`}>
            {children}
        </th>
    )
}

const TableBody = ({ children }) => {
    return (
        <tbody className="divide-y">
            {children}
        </tbody>
    )
}


const TableRow = ({ children }) =>{
    return (
        <tr className="hover:bg-gray-200 duration-200 transition-all">
            {children}
        </tr>
    )
}


const TableCell = ({ children }) => {
    return (
        <td className="py-3 px-5">
            {children}
        </td>
    )
}

const EmptyState = (props) => {
    const className = props.className || ""
    const { children } = props
    return (
        <div className={`flex items-center justify-center w-full rounded-lg h-96 ${className}`}>
            {children}
        </div>
    )
}

const TableSkeleton = () => {
    return (
    <div role="status" className="p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse w-full md:p-6">
        <div className="flex items-center justify-between">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
            <div>
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>

    )
}

export {
    TableLayout,
    TableHeader,
    TableHeaderTH,
    TableBody,
    TableRow,
    TableCell,
    EmptyState,
    TableSkeleton
}