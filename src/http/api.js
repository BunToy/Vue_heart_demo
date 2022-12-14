import https, {fetchGet} from '../http/http.js'

export function getDapps(pageNum,pageSize) {
  var params = {
    "pageNum":pageNum,
    'pageSize':pageSize,
  }
  return https.fetchPost('/dapps/getDapps', params)
}

export function getInfo(pageNum,pageSize,equId) {
  var params = {
    "pageNumber":pageNum,
    'pageSize':pageSize,
    'equId': equId
  }
  return https.fetchGet('/std/info', params)
}

export function goLogin(equId) {
  var params = {
    "equId":equId
  }
  return https.fetchPost('/tb01-std/login', params)
}

export function register(email,nickname,address,signature) {
  var params = {
    "address":address,
    'signature':signature,
    'email': email,
    'nickname': nickname
  }
  return https.fetchPost('/others/register', params)
}

export function login(address,signature) {
  var params = {
    "address":address,
    'signature':signature,
  }
  return https.fetchPost('/others/login', params)
}

export function getDappDetails(id) {
  var params = {
    "id":id,
  }
  return https.fetchPost('/dapps/getDappDetails', params)
}

export function getGameType(pageNum,pageSize) {
  var params = {
    "pageNum":pageNum,
    'pageSize':pageSize,
  }
  return https.fetchPost('/others/getGameType', params)
}

export function getMyDapps(creator,pageNum,pageSize) {
  var params = {
    "creator":creator,
    "pageNum":pageNum,
    'pageSize':pageSize,
  }
  return https.fetchPost('/dapps/getMyDapps', params)
}

export function getMaterialsByUser(user,pageNum,pageSize,type) {
  var params = {
    "user":user,
    "pageNum":pageNum,
    'pageSize':pageSize,
    'materialType':type,
  }
  return https.fetchPost('/others/getMaterialsByUserType', params)
}

export function selectGans() {
  return https.fetchPost('/others/selectGans', "")
}

export function makeGansPicture(user,gansType,name) {
  var params = {
    "user":user,
    "gansType":gansType,
    'name':name,
  }
  return https.fetchPost('/others/makeGansPicture', params)
}

export function deletePicture(user,id) {
  var params = {
    "user":user,
    "id":id,
  }
  return https.fetchPost('/others/deletePicture', params)
}

export function saveDiceInfo(contractAddress,creator,diceDesc,diceFrontPicture,diceName,diceToken) {
  var params = {
    "diceDesc":diceDesc,
    "diceFrontPicture":diceFrontPicture,
    "diceName":diceName,
    "diceToken":diceToken,
    "creator":creator,
    //"contractAddress":contractAddress,
  }
  return https.fetchPost('/dapps/saveDiceInfo', params)
}


/////////////////////

//??????--??????
export function webLogin(user,password,saveLogin,email,code) {
  var params = {
    "username":user,
    "password":password,
    'saveLogin':saveLogin,
    'email':email,
    'code':code,
  }
  return https.fetchPost('/xboot/login', params)
}

//??????--?????????????????????
export function sendLoginCode(email) {
  var params = {
  }
  return https.fetchGet( `/xboot/email/sendCode/${email}` , params)
}

//??????--????????????????????????
export function getUserInfo() {
  var params = {
  }
  return https.fetchGet( `/xboot/user/info` , params)
}


//??????--?????????????????????
export function sendRegistCode(email) {
  var params = {
  }
  return https.fetchGet( `/xboot/email/sendRegistCode/${email}` , params)
}

//???????????????????????????
export function sendRestCode(email) {
  var params = {
  }
  return https.fetchGet( `/xboot/email/sendRestCode/${email}` , params)
}

//??????--??????
export function webRegist(user,password,email,code) {
  var params = {
    "username":user,
    "password":password,
    'email':email,
    'code':code,
  }
  return https.fetchPost('/xboot/user/regist', params)
}

//??????--banner??????
export function getBanner() {
  var params = {
  }
  return https.fetchGet( `/xboot/banner/getAll` , params)
}
export function getAdminBanner(pageSize,pageNumber,sort,sortOrder) {
  var params = {
    "pageSize":pageSize,
    "pageNumber":pageNumber,
    "sort":sort,
    "order":sortOrder,
  }
  return https.fetchGet( `/xboot/banner/getAllByPage` , params)
}
//??????--banner?????? ??????
export function updateBanner(ava,title,id) {
  const params = {
    "ava":ava,
    "title":title,
    "id":id,
  }
  return https.fetchPost( `/xboot/banner/update` , params)
}

//??????--banner?????? ??????
export function delBanner(ids) {
  const params={

  }
  return https.fetchDelete( `/xboot/banner/delAllByIds/${ids}`,params)
}

//??????--banner?????? ??????
export function addBanner(ava,title) {
  const params = {
    "ava":ava,
    "title":title,
  }
  return https.fetchPost( `/xboot/banner/add` , params)
}

//??????--??????????????????
export function getNews(pageSize,pageNumber,sort,sortOrder) {
  const params = {
    "pageSize":pageSize,
    "pageNumber":pageNumber,
    "sort":sort,
    "order":sortOrder,
  }
  return https.fetchGet( `/xboot/news/getAllByPage` , params)
}

export function getAdminNews(pageSize,pageNumber,sort,sortOrder) {
  const params = {
    "pageSize":pageSize,
    "pageNumber":pageNumber,
    "sort":sort,
    "order":sortOrder,
  }
  return https.fetchGet( `/xboot/news/user/getAllByPage` , params)
}

//??????--???????????? ??????
export function delNews(ids) {
  const params = {
  }
  return https.fetchDelete( `/xboot/news/delByIds/${ids}` , params)
}

//??????--news?????? ??????
export function updateNews(ava,title,content,id) {
  const params = {
    "ava":ava,
    "title":title,
    "content":content,
    "id":id,
  }
  return https.fetchPost( `/xboot/news/update` , params)
}




//??????--??????????????????
export function organPage(pageSize,pageNumber,sort,sortOrder,fullName,officeAddress) {
  const params = {
    "pageSize":pageSize,
    "pageNumber":pageNumber,
    "sort":sort,
    "order":sortOrder,
    "fullName":fullName,
    "officeAddress":officeAddress,
  }
  return https.fetchGet( `/xboot/organ/getAllByPage` , params)
}

// ??????id????????????
export function organiD(id) {
  return https.fetchGet( `/xboot/organ/get/${id}` )
}

// ????????????id??????????????????
export function stockEmployees(stockCode) {
  const params = {
    "stockCode":stockCode
  }
  return https.fetchGet( `/xboot/employees/getStockCode` , params)
}

// ????????????????????????
export function stockIssue(stockCode) {
  const params = {
    "stockCode":stockCode
  }
  return https.fetchGet( `/xboot/issue/getStockCode` , params)
}

// ??????????????????
export function stockAccet(stockCode) {
  const params = {
    "stockCode":stockCode
  }
  return https.fetchGet( `/xboot/accet/getStockCode` , params)
}

// ??????????????????
export function stockData(stockCode) {
  const params = {
    "stockCode":stockCode
  }
  return https.fetchGet( `/xboot/data/getStockCode` , params)
}

//?????????????????????
export function accetSumAll() {
  const params = {
  }
  return https.fetchGet( `/xboot/accet/getGroupByCount` , params)
}

//??????--??????????????????
export function getUser(params) {
  return https.fetchGet( `/xboot/user/getAllByPage` , params)
}

//????????????
export function postAddUser(username,email,type) {
  const params = {
    "username":username,
    "email":email,
    "type":type,
  }
  return https.fetchPost( `/xboot/user/admin/add` , params)
}

//????????????
export function gotPassword(email,newPass,oldPassil,code) {
  var params = {
    "email":email,
    "newPass":newPass,
    'oldPass':oldPassil,
    'code':code,
  }
  return https.fetchPost( `/xboot/user/gotPassword` , params)
}

//????????????
export function postEditPwd(email,newPass,oldPassil,code) {
  var params = {
    "email":email,
    "newPass":newPass,
    'oldPass':oldPassil,
    'code':code,
  }
  return https.fetchPost( `/xboot/user/modifyPass` , params)
}

//????????????
export function postResetPwd(ids) {
  const params = {
    "ids":ids,
  }
  return https.fetchPost( `/xboot/user/resetPass` , params)
}

//????????????
export function getQuit(params) {
  return https.fetchGet( `/xboot/user/quit` , params)
}

//??????????????????
export function postEditUser(params) {
  return https.fetchPost( `/xboot/user/editSelf` , params)
}

//???????????????????????????
export function postAdminEditUser(params) {
  return https.fetchPost( `/xboot/user/admin/edit` , params)
}

//????????????
export function delUser(ids) {
  const params={
  }
  return https.fetchDelete( `/xboot/user/delByIds/${ids}` , params)
}

//????????????
export function postEnableUser(userId) {
  const params = {
  }
  return https.fetchPost( `/xboot/user/admin/enable/${userId}` , params)
}

//????????????
export function postDisableUser(userId) {
  const params = {
  }
  return https.fetchPost( `/xboot/user/admin/disable/${userId}` , params)
}


//??????--??????????????????
export function getRoleList(params) {
  return https.fetchGet( `/xboot/role/getAllList` , params)
}

//????????????????????????
export function postSetDefault(params) {
  return https.fetchPost( `/xboot/role/setDefault` , params)
}

//??????
export function postRoleEdit(params) {
  return https.fetchPost( `/xboot/role/edit` , params)
}

//??????
export function postRoleSave(params) {
  return https.fetchPost( `/xboot/role/save` , params)
}

//????????????
export function delRole(ids) {
  const params={

  }
  return https.fetchDelete( `/xboot/role/delAllByIds/${ids}` , params)
}

//??????????????????
export function getHotOrgan(pageSize,pageNumber,type) {
  const params={
    "pageSize":pageSize,
    "pageNumber":pageNumber,
    "type":type,
  }
  return https.fetchGet( `/xboot/front/getHostOrgan` , params)
}

//??????????????????
export function getIndexAccet(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/accet/getByIds/${ids}` , params)
}

// ??????????????????
export function getIndexEmployees(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/employees/getByIds/${ids}` , params)
}

// ???????????????
export function getIndexIssue(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/issue/getByIds/${ids}` , params)
}

// ??????????????????
export function getIndexData(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/data/getByIds/${ids}` , params)
}

// ??????????????????
export function getNewsInfo(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/news/get/${ids}` , params)
}

// ????????????????????????
export function getUserOrgan(params) {
  return https.fetchGet( `/xboot/organ/getAllByPage` , params)
}

// ????????????????????????
export function getUserEmployees(params) {
  return https.fetchGet( `/xboot/employees/getAllByPage` , params)
}

// ?????????????????????????????????
export function getUserIssue(params) {
  return https.fetchGet( `/xboot/issue/getAllByPage` , params)
}

// ??????????????????????????????
export function getUserAccet(params) {
  return https.fetchGet( `/xboot/accet/getAllByPage` , params)
}

// ??????????????????????????????
export function getUserData(params) {
  return https.fetchGet( `/xboot/data/getAllByPage` , params)
}

//??????????????????
export function getNewsData(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/news/get/${ids}` , params)
}

//??????????????????
export function getGroupData() {
  const params={
  }
  return https.fetchGet( `/xboot/issue/getGroupData` , params)
}


//??????????????????
export function getFindByCity() {
  const params={
  }
  return https.fetchGet( `/xboot/organ/findByCity` , params)
}

//?????????????????????
export function getInvestType(stockCode) {
  const params = {
    "code":stockCode
  }
  return https.fetchGet( `/xboot/data/getType` , params)
}

//????????????????????????
export function getInvestArea(stockCode) {
  const params = {
    "code":stockCode
  }
  return https.fetchGet( `/xboot/data/getArea` , params)
}

