import request from "@/utils/request"
export function getAlltest(){
    return request ({
        url:"exam/exam",
        method:"get"
    })
}