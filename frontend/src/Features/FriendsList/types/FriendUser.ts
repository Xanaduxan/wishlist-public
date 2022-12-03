export default interface FriendUser {
    userId: number,
    friendId: number,
    createdAt: Date,
    updatedAt: Date,
    'Friend.id': number,
    'Friend.userId': number,
    'Friend.name': string,
    'Friend.createdAt': Date,
    'Friend.updatedAt': Date,
    'User.id': number,
    'User.password': string,
    'User.email': string,
    'User.name': string,
    'User.gender': string,
    'User.birthday': Date,
    'User.image': string,
    'User.createdAt': Date,
    'User.updatedAt': Date

}
