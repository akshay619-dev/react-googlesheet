import React from 'react'

const ListResults = ({ results }) => {
    return (
        <table className="ui celled padded table">
            <thead>
                <tr><th className="ui center aligned header">Name</th>
                    <th className="ui center aligned header">Age</th>
                    <th className="ui center aligned header">Salary</th>
                    <th className="ui center aligned header">Hobby</th>
                </tr></thead>
            <tbody>

                {
                    results.slice(0).reverse().map((user, index) => (
                        <tr key={index}>
                            <td className="ui center aligned header">
                                {user.name}
                            </td>
                            <td className="ui center aligned header">
                                {user.age}
                            </td>
                            <td className="ui center aligned header">
                                {user.salary}
                            </td>
                            <td className="ui center aligned header">
                                {user.hobby}
                            </td>
                        </tr>
                    ))
                }



            </tbody>
        </table>
    )
}

export default ListResults
