import http from "@/utils/http"

export function getHistoryAPI () {
    return http({
        url: '/chat/history',
    })
}