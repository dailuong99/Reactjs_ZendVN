
const defaultAvatars = [
    'assets/images/randomavata/pullDog.jpg',
    'assets/images/randomavata/avatar2.jpg',
    'assets/images/randomavata/avatar3.jpg',
    'assets/images/randomavata/avatar4.jpg'
  ]

export default function AvataPost({listpost}){
    const idavatauser = listpost.USERID;
    const idxDefaultAvatar = idavatauser % defaultAvatars.length; // 0 1 2 3
    const avata = listpost.profilepicture || defaultAvatars[idxDefaultAvatar];

    return(
        <>
         <img src={avata} alt={idavatauser} />
        </>
    )
}