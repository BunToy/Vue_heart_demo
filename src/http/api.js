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

//网站--登录
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

//网站--登录发送验证码
export function sendLoginCode(email) {
  var params = {
  }
  return https.fetchGet( `/xboot/email/sendCode/${email}` , params)
}

//网站--获取当前用户信息
export function getUserInfo() {
  var params = {
  }
  return https.fetchGet( `/xboot/user/info` , params)
}


//网站--注册发送验证码
export function sendRegistCode(email) {
  var params = {
  }
  return https.fetchGet( `/xboot/email/sendRegistCode/${email}` , params)
}

//发送修改密码验证码
export function sendRestCode(email) {
  var params = {
  }
  return https.fetchGet( `/xboot/email/sendRestCode/${email}` , params)
}

//网站--注册
export function webRegist(user,password,email,code) {
  var params = {
    "username":user,
    "password":password,
    'email':email,
    'code':code,
  }
  return https.fetchPost('/xboot/user/regist', params)
}

//网站--banner列表
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
//网站--banner列表 更改
export function updateBanner(ava,title,id) {
  const params = {
    "ava":ava,
    "title":title,
    "id":id,
  }
  return https.fetchPost( `/xboot/banner/update` , params)
}

//网站--banner列表 删除
export function delBanner(ids) {
  const params={

  }
  return https.fetchDelete( `/xboot/banner/delAllByIds/${ids}`,params)
}

//网站--banner列表 添加
export function addBanner(ava,title) {
  const params = {
    "ava":ava,
    "title":title,
  }
  return https.fetchPost( `/xboot/banner/add` , params)
}

//网站--获取新闻列表
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

//网站--新闻列表 删除
export function delNews(ids) {
  const params = {
  }
  return https.fetchDelete( `/xboot/news/delByIds/${ids}` , params)
}

//网站--news列表 更改
export function updateNews(ava,title,content,id) {
  const params = {
    "ava":ava,
    "title":title,
    "content":content,
    "id":id,
  }
  return https.fetchPost( `/xboot/news/update` , params)
}




//网站--获取股份列表
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

// 通过id获取股票
export function organiD(id) {
  return https.fetchGet( `/xboot/organ/get/${id}` )
}

// 通过证券id获取人员分布
export function stockEmployees(stockCode) {
  const params = {
    "stockCode":stockCode
  }
  return https.fetchGet( `/xboot/employees/getStockCode` , params)
}

// 获取发行量等信息
export function stockIssue(stockCode) {
  const params = {
    "stockCode":stockCode
  }
  return https.fetchGet( `/xboot/issue/getStockCode` , params)
}

// 该股盈利情况
export function stockAccet(stockCode) {
  const params = {
    "stockCode":stockCode
  }
  return https.fetchGet( `/xboot/accet/getStockCode` , params)
}

// 获取风投信息
export function stockData(stockCode) {
  const params = {
    "stockCode":stockCode
  }
  return https.fetchGet( `/xboot/data/getStockCode` , params)
}

//科创股总计信息
export function accetSumAll() {
  const params = {
  }
  return https.fetchGet( `/xboot/accet/getGroupByCount` , params)
}

//网站--获取用户列表
export function getUser(params) {
  return https.fetchGet( `/xboot/user/getAllByPage` , params)
}

//添加用户
export function postAddUser(username,email,type) {
  const params = {
    "username":username,
    "email":email,
    "type":type,
  }
  return https.fetchPost( `/xboot/user/admin/add` , params)
}

//忘记密码
export function gotPassword(email,newPass,oldPassil,code) {
  var params = {
    "email":email,
    "newPass":newPass,
    'oldPass':oldPassil,
    'code':code,
  }
  return https.fetchPost( `/xboot/user/gotPassword` , params)
}

//修改密码
export function postEditPwd(email,newPass,oldPassil,code) {
  var params = {
    "email":email,
    "newPass":newPass,
    'oldPass':oldPassil,
    'code':code,
  }
  return https.fetchPost( `/xboot/user/modifyPass` , params)
}

//重置密码
export function postResetPwd(ids) {
  const params = {
    "ids":ids,
  }
  return https.fetchPost( `/xboot/user/resetPass` , params)
}

//退出登录
export function getQuit(params) {
  return https.fetchGet( `/xboot/user/quit` , params)
}

//用户修改信息
export function postEditUser(params) {
  return https.fetchPost( `/xboot/user/editSelf` , params)
}

//管理员修改用户信息
export function postAdminEditUser(params) {
  return https.fetchPost( `/xboot/user/admin/edit` , params)
}

//删除用户
export function delUser(ids) {
  const params={
  }
  return https.fetchDelete( `/xboot/user/delByIds/${ids}` , params)
}

//启用用户
export function postEnableUser(userId) {
  const params = {
  }
  return https.fetchPost( `/xboot/user/admin/enable/${userId}` , params)
}

//禁用用户
export function postDisableUser(userId) {
  const params = {
  }
  return https.fetchPost( `/xboot/user/admin/disable/${userId}` , params)
}


//网站--获取所有角色
export function getRoleList(params) {
  return https.fetchGet( `/xboot/role/getAllList` , params)
}

//设置取消默认角色
export function postSetDefault(params) {
  return https.fetchPost( `/xboot/role/setDefault` , params)
}

//修改
export function postRoleEdit(params) {
  return https.fetchPost( `/xboot/role/edit` , params)
}

//添加
export function postRoleSave(params) {
  return https.fetchPost( `/xboot/role/save` , params)
}

//删除角色
export function delRole(ids) {
  const params={

  }
  return https.fetchDelete( `/xboot/role/delAllByIds/${ids}` , params)
}

//首页排序信息
export function getHotOrgan(pageSize,pageNumber,type) {
  const params={
    "pageSize":pageSize,
    "pageNumber":pageNumber,
    "type":type,
  }
  return https.fetchGet( `/xboot/front/getHostOrgan` , params)
}

//首页盈利数据
export function getIndexAccet(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/accet/getByIds/${ids}` , params)
}

// 首页员工数量
export function getIndexEmployees(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/employees/getByIds/${ids}` , params)
}

// 首页发行量
export function getIndexIssue(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/issue/getByIds/${ids}` , params)
}

// 首页风投数据
export function getIndexData(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/data/getByIds/${ids}` , params)
}

// 获取消息详情
export function getNewsInfo(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/news/get/${ids}` , params)
}

// 后台获取股权信息
export function getUserOrgan(params) {
  return https.fetchGet( `/xboot/organ/getAllByPage` , params)
}

// 后台获取股权人员
export function getUserEmployees(params) {
  return https.fetchGet( `/xboot/employees/getAllByPage` , params)
}

// 后台获取股权发行量信息
export function getUserIssue(params) {
  return https.fetchGet( `/xboot/issue/getAllByPage` , params)
}

// 后台获取股权盈利信息
export function getUserAccet(params) {
  return https.fetchGet( `/xboot/accet/getAllByPage` , params)
}

// 后台获取股权风投信息
export function getUserData(params) {
  return https.fetchGet( `/xboot/data/getAllByPage` , params)
}

//查询咨询详情
export function getNewsData(ids) {
  const params={
  }
  return https.fetchGet( `/xboot/news/get/${ids}` , params)
}

//查询行业分布
export function getGroupData() {
  const params={
  }
  return https.fetchGet( `/xboot/issue/getGroupData` , params)
}


//查询城市分布
export function getFindByCity() {
  const params={
  }
  return https.fetchGet( `/xboot/organ/findByCity` , params)
}

//查询自然人分布
export function getInvestType(stockCode) {
  const params = {
    "code":stockCode
  }
  return https.fetchGet( `/xboot/data/getType` , params)
}

//查询投资区域分布
export function getInvestArea(stockCode) {
  const params = {
    "code":stockCode
  }
  return https.fetchGet( `/xboot/data/getArea` , params)
}

