
export  function UserProfileView({
  handleCickChangeAvata,
  finalAvata,
  onChangeData,
  userInfor,
  handleChangeFile,
  handleSubmitSaveInfo
}) {
  return (
    <div className="ass1-login">
      <div className="ass1-login__content">
        <p>Profile</p>
        <div className="ass1-login__form">
          <div className="avatar" onClick={handleCickChangeAvata}>
            <img src={finalAvata} alt="" />
          </div>
          <form action="#">
            <input
              value={userInfor?.fullname || ""}
              onChange={onChangeData('fullname')}
              type="text" className="form-control" placeholder="Tên ..." required />
            <select
              value={userInfor?.gender || ""}
              onChange={onChangeData('gender')}
              className="form-control">
              <option value disabled>Giới tính</option>
              <option value={1}>Nam</option>
              <option value={0}>Nữ</option>
            </select>
            <input
              onChange={handleChangeFile}
              id='fileAvata'
              type="file" name="avatar" placeholder="Ảnh đại diện" className="form-control" />
            <textarea
              value={userInfor?.description || ""}
              onChange={onChangeData('description')}
              className="form-control" cols={30} rows={5} placeholder="Mô tả ngắn ..."  />
            <div className="ass1-login__send justify-content-center">
              <button type="button" 
              onClick={handleSubmitSaveInfo}
              className="ass1-btn">Cập nhật</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}