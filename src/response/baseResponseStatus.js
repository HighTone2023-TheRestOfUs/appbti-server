export default {
    SUCCESS:{isSuccess:true, code:200, message:'성공'},
    FAILURE:{isSuccess:false,code:400,message:'실패'},
    
    TOKEN_VERIFICATION_SUCCESS:{isSuccess:true,code:201, message:'JWT토큰 검증 성공'},
    TOKEN_EMPTY:{isSuccess:false, code:300,message:'JWT토큰 null'},
    TOKEN_FAILURE:{isSuccess:false, code:400,message:'JWT토큰 검증 실패'},
}