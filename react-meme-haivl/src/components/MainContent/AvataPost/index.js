
const defaultAvatars = [
    'assets/images/randomavata/pullDog.jpg',
    'assets/images/randomavata/avatar2.jpg',
    'assets/images/randomavata/avatar3.jpg',
    'assets/images/randomavata/avatar4.jpg'
  ]

export default function AvataPost({post}){
    const idavatauser = post.USERID;
    const idxDefaultAvatar = idavatauser % defaultAvatars.length; // 0 1 2 3
    const avata = post.profilepicture || defaultAvatars[idxDefaultAvatar];

    return(
        <>
         <img src={avata} alt={idavatauser} />
        </>
    )
}