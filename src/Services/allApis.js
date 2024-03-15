import { BASE_URL } from "./baseUrl";
import { commonApi } from "./commonApi";

export const userRegisterApi =async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,data,'')
}

export const userLoginApi =async(data)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,data,'')
}

export const adminRegisterApi =async(data)=>{
    return await commonApi("POST",`${BASE_URL}/admin/register`,data,'')
}

export const adminLoginApi =async(data)=>{
    return await commonApi("POST",`${BASE_URL}/admin/login`,data,'')
}


export const addDocterApi = async(data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/admin/adddocter`,data,headers)
}

export const addAppoinemntsApi = async(data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/user/appoinments`,data,headers)
}

export const getDoctersRequestListApi = async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getdocterrequest`,'',headers)
}
export const getDoctersAcceptedNotificationListApi = async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getdocteracceptednotification`,'',headers)
}


export const getDoctersAcceptedApi = async(headers,search)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getdocteraccepted?search=${search}`,'',headers)
}


export const getAdminsListApi = async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getadminslist`,'',headers)
}

export const getUsersListApi = async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getuserslist`,'',headers)
}


export const getAppoinmentsListApi = async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getappoinments`,'',headers)
}


// ------------------------------------------------------------------------------
export const getappoinmentListUser = async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/user/getappoinmentlistuser`,'',headers)
}
// ---------------------------------------------------------------------------------
export const addReviewApi = async(data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/user/addreview`,data,headers)
}

export const getReviewListApi = async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getreviews`,"",headers)
}

export const appoinmentDeleteListApi=async(id,headers)=>{
    return await commonApi("DELETE",`${BASE_URL}/admin/deleteappoinment/${id}`,{},headers)
}

export const doctersRejectAcceptUpdateApi =async (data,headers,id)=>{
    return await commonApi("PUT",`${BASE_URL}/admin/updatedocter/${id}`,data,headers)
}

export const userUpdateApi =async (data,headers,id)=>{
    return await commonApi("PUT",`${BASE_URL}/user/updateprofile/${id}`,data,headers)
}

export const doctersDeleteListApi=async(id,headers)=>{
    return await commonApi("DELETE",`${BASE_URL}/admin/deletedocter/${id}`,{},headers)
}

export const deleteAdminListApi=async(id,headers)=>{
    return await commonApi("DELETE",`${BASE_URL}/admin/deleteadmin/${id}`,{},headers)
}

export const deleteUserListApi=async(id,headers)=>{
    return await commonApi("DELETE",`${BASE_URL}/admin/deleteuser/${id}`,{},headers)
}

export const deleteReviewListApi=async(id,headers)=>{
    return await commonApi("DELETE",`${BASE_URL}/admin/deletereview/${id}`,{},headers)
}


// -------------------------------------------------------------------------------------------

export const viewDepartmentListApi=async(headers)=>{
    return await commonApi("GET",`${BASE_URL}/admin/getcata`,"",headers)
}
export const addDepartmentApi=async(data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/admin/addcata`,data,headers)
}
export const pushDepartmentApi=async(id,data,headers)=>{
    return await commonApi("POST",`${BASE_URL}/admin/pushcata/${id}`,data,headers)
}
export const deleteDepartmentApi=async(id,headers)=>{
    return await commonApi("DELETE",`${BASE_URL}/admin/deletedept/${id}`,{},headers)
}
// -------------------------------------------------------------------------------------------