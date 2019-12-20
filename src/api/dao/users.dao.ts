import { IUser } from '../interfaces/users.interfaces';

let mockupUsers: IUser[] = [];

export function addUser(user: IUser) {
    mockupUsers.push(user);
    return user;
}

export function getUser(id: string = null) {
    if (!id) {
        return mockupUsers;
    }
    const user = mockupUsers.find(user => user.id === id);
    return user;
}

export function updateUser(id: string, updateData: any) {
    const userIndex = mockupUsers.findIndex(user => user.id === id);
    if (userIndex < 0) {
        return null;
    }
    const tmp = {
        firstName: updateData.firstName ? updateData.firstName : mockupUsers[userIndex].firstName,
        lastName: updateData.lastName ? updateData.lastName : mockupUsers[userIndex].lastName,
        tel: updateData.tel ? updateData.tel : mockupUsers[userIndex].tel,
    };
    const newData = {
        ...mockupUsers[userIndex],
        ...tmp
    };
    mockupUsers[userIndex] = newData;
    return mockupUsers[userIndex];
}

export function deleteUser(id: string) {
    const user = mockupUsers.find(user => user.id === id);
    if (!user) {
        return null;
    }
    const newUserList = mockupUsers.filter(user => user.id !== id);
    mockupUsers = newUserList;
    return newUserList;
}