import React from 'react';
import me from '../../assets/founder.webp'
const Users = () => {
    
    const arr = [1, 2, 3, 4]
    return (
        
        <section className='tableClass'>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Name</th>
                            <th>Photo</th>
                            <th>Role</th>
                            <th>Since </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            arr.map(item => (
                                <tr key={item}>
                                    <td>#asdklj</td>
                                    <td>Mezbah</td>
                                    <td>
                                        <img src={me} alt="" />
                                    </td>
                                    <td>Admin</td>
                                    <td>24-23-2020</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </section>
    );
};

export default Users;