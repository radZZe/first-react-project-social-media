import React from 'react';
import styled from "styled-components";

const Users = (props) => {

    if(props.users.length === 0){
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
                followed: true,
                fullName: "Dmitriy",
                status: "Im a boss",
                country: "Belarus",
                city: 'Minsk'
            },
            {
                id: 2,
                photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
                followed: false,
                fullName: "Sasha",
                status: "Im a boss",
                country: "Russia",
                city: 'Moscow'
            },
            {
                id: 3,
                photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png',
                followed: true,
                fullName: "Andrew",
                status: "Im a boss",
                country: "Ukraine",
                city: 'Kiev'
            },
        ])
    }
    const PhotoUsers = styled.img`
      width: 60px;
      height: 60px;
    `
    return (
        props.users.map((u) => {
            return (
                <div key={u.id}>
                    <span>
                        <div>
                            <PhotoUsers src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.city}</div>
                            <div>{u.country}</div>
                        </span>

                    </span>
                </div>
            )
        }))
        ;
}

export default Users;