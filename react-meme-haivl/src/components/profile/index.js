import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import userAuth from "../../helpers/hooks/userAuth"
import userUserId from "../../helpers/hooks/useUserId"
import { asyncGetUserById, asyncUpdateProfile } from "../../store/users/actions";
import defaultAvata from './../assets/images/defaultavata.png';
import { UserProfileView } from "./userProfile.view";

const initStateObjFileAvata = {
  file: null,
  previewAvata: ''
}

export default function Profile() {
  userAuth();
  const dispatch = useDispatch();
  const userid = userUserId();
  const currrentUser = useSelector(state => state.Users.currrentUser);
  const [objFileAvata, setObjFileAvata] = useState(initStateObjFileAvata)
  const [userInfor, setUserInfor] = useState(null);

  useEffect(() => {
    setUserInfor(currrentUser)
  }, [currrentUser])

  useEffect(() => {
    dispatch(asyncGetUserById({ userid }))
      .then(res => {
        if (!res.ok) {
          alert(res.error)
        }
      })
  }, [userid]);


  const onChangeData = (key) => (e) => {
    setUserInfor({
      ...userInfor,
      [key]: e.target.value
    })
  }

  const handleChangeFile = (e) => {
    const listFile = e.target.files;
    if (listFile.length) {
      const file = listFile[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setObjFileAvata({
          file,
          previewAvata: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const finalAvata = useMemo(() => {
    if (!objFileAvata.file) {
      return userInfor?.profilepicture || defaultAvata
    }

    if (objFileAvata.file && objFileAvata.previewAvata) {
      return objFileAvata.previewAvata
    }
    return defaultAvata
  }, [objFileAvata, userInfor])

  const handleCickChangeAvata = () => {
    const inputFile = document.getElementById('fileAvata');
    if (inputFile && inputFile.click) {
      inputFile.click();
    }
  }

  const handleSubmitSaveInfo = (e) => {
    e.preventDefault();
    const dataInforUser = {
      avatar: objFileAvata.file,
      description: userInfor.description,
      gender: userInfor.gender,
      fullname: userInfor.fullname
    }

    dispatch(asyncUpdateProfile(dataInforUser))
      .then(res => {
        if (res.ok) {
          setObjFileAvata(initStateObjFileAvata)
        }
      })
  }

  const injectedProps = {
    handleCickChangeAvata,
    finalAvata,
    onChangeData,
    userInfor,
    handleChangeFile,
    handleSubmitSaveInfo
  }

  return (
    <UserProfileView {...injectedProps}></UserProfileView>
  )
}